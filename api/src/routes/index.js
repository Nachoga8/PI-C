const { Router } = require('express');
const axios = require('axios');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
// const { conn } = require('../db');
// const { Country, Activity } = conn.models;
const { Country, Activity } = require('../db')

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

//trae la informacion de la API

const getApiInfo = async () => { //trabajamos de manera asincronica porque no sabemos cuanto vaya a tardar la funcion en traer la infromacion de la api
	try{
	const { data } = await axios.get('https://restcountries.com/v3/all'); //creamos la constante con la que vamos hacer el llamado a la api
	const apiInfo = await data.map((c) => { //hacemos un map de la información por medio de un objeto para que me devuelva unicamente la informacion que necesito
		return {
			id: c.cca3,
			name: c.name.common,
			img: c.flags[0],
			continents: c.continents[0],
			capital: c.capital? c.capital[0] : 'Capital Not Found' , // pregunto si hay capital, si hay la traigo y si no, mando un mensaje de not found
			subregion: c.subregion ? c.subregion : 'SubRegion Not Found',  // de lo contrario no accedo
			area: c.area,
			population: c.population,
		};
	});
	const countryResult = await Country.bulkCreate(apiInfo); // utilice el metodo bulkcreate para que me cree la informacion de una manera mas rapida. 
	return countryResult; //retorne toda la infromacion creada
}catch(error){
	console.log(error); 
}
};

const getDb = async () => {
	//traigo la informacion ahora de la base de daros 
	return await Country.findAll({
		include: {
			model: Activity, //incluyo el modelo de actividad para poder crear la relacion.
			attributes: ['name', 'difficulty', 'duration', 'season'], //estos son los atributos de las actividades que quiero que me traiga
			through: { //a traves de //
				attributes: []
			},
		},
});
};


// const getAllCountries = async() => {
// 	const apiInfo = await getApiInfo()
// 	const dbInfo = await getDb() 
// 	const infoTotal = await apiInfo.concat(dbInfo);
// 	return infoTotal
// }



//traer las actividades de la base de datos
const getDbActivity = async () => {
	return await Activity.findAll({
		include: {
			model: Country,
			attribute: ['name', 'img', 'continents', 'capital'],
			through: {
				attributes: [],
			},
		},
	});
};


router.get('/activity', async (req, res) => {
	const  name  = req.query.name;
	const activities = await getDbActivity();
	if(name){
     let activityName = activities.filter((n) =>
		 n.name.toLowerCase().includes(name.toLowerCase())
	 );
	 activityName.length 
	 ? res.status(200).json(activities)
	 : res.status(404).send('no se encontro actividad')
	}
}
)

router.get('/countries', async (req, res) => {
	// /countries?name=argentina
	const { name } = req.query;
	// countries = await getApiInfo();
	let countries;
	const countryDB = await Country.count();
	countries =
		countryDB === 0
			? await getApiInfo() // asi que si la db esta vacia llamo a la api
			: await getDb(); // si no saco de la bd
	if (name) {
		// console.log('este es el name', name);
		const byName = countries.filter((n) =>
			n.name.toLowerCase().includes(name.toLowerCase())
		);
		byName.length
			? res.status(200).send(byName)
			: res.status(404).json({ error: 'no se encontro ningun pais' });
	} else {
		res.status(200).send(countries);
	}
});

router.get('/countries/:id', async (req, res) => {
	const id = req.params.id.toUpperCase();
	const allCountries = await getDb();
	if (id) {
		const idCountries = await allCountries.filter(i => i.id === id);
		idCountries.length
			? res.status(200).send(idCountries)
			: res.status(404).send('id no valido');
	}
});

router.post('/activity', async (req, res) => {
	let { name, difficulty, duration, season, countryId } = req.body;

	const createActivity = await Activity.create({
		name,
		difficulty,
		duration,
		season,
	});

	if (countryId) {

		await createActivity.addCountries(countryId); 
	} 

	return res.status(200).json({ mesage: 'exito', createActivity });
});

module.exports = router;
