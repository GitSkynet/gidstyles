var ddbb = document.getElementById("ddbb_data1");
var ddbb = document.getElementById("ddbb_data2");
var ddbb = document.getElementById("ddbb_data3");
console.log("ddbb1", ddbb);
console.log("ddbb2", ddbb);
console.log("ddbb3", ddbb);


// Carga de eventos cuando carge el DOM

document.addEventListener('DOMContentLoaded', () => {
  mostrarDatos();
});


// // funciones
// function inicioApp() {
//   // deshabilitar el envio
//   btnEnviar.disabled = true;
//   btnEnviar.classList.add('cursor-not-allowed', 'opacity-50')
// }

var object = [
  {
    "Messages":[
       {
          "Type":4,
          "Message":"Activities listed successfully",
          "Code":405
       }
    ],
    "Content":[
       {
          "ActivityCategory":"BOXA",
          "ActivityCode":"114-OUTDOOR1-BOXA-2010",
          "ActivityTechnicianName":"LUIS RODRIGUEZ",
          "HoursBeforeBookable":96,
          "ActivityId":2010,
          "ActivityType":"O",
          "OutdoorInfo":{
             "Latitude":41.4140033000,
             "Longitude":2.1790414000,
             "Location":"JARDINS DE CAN MIRALLETES (Antoni Maria Claret, 310)"
          },
          "Duration":60,
          "HoursLeft":-1,
          "DateTime":"30-04-2021 10:00:00",
          "UniqueActivityCode":"114-OUTDOOR1-BOXA-2010-210430",
          "PriceInfo":{
             "NoClient":4.8,
             "Client":3.2
          },
          "LiveInfo":{
             "IFrame":""
          },
          "LongDescription":"\nCompleta activitat física on es combinen els gestos de boxa amb exercicis funcionals amb i sense material. No cal experiència prèvia, només l'esperit de superació de qui vol superar-se. Luis t'apropa a la teva millor versió!",
          "Capacity":16,
          "MinutesLeftBookable":0,
          "ClubCode":"114",
          "ActivityDesc":"BOXA OLIMPICA",
          "ActivityScheduleType":"R",
          "Bookings":4,
          "Level":1,
          "ClubDesc":"DIR WEB",
          "Bookable":true
       },
       {
          "ActivityCategory":"DANCE & GLUTEUS",
          "ActivityCode":"114-OUTDOOR1-DG-2644",
          "ActivityTechnicianName":"AINOHA GARCIA",
          "HoursBeforeBookable":96,
          "ActivityId":2644,
          "ActivityType":"O",
          "OutdoorInfo":{
             "Latitude":41.4308256000,
             "Longitude":2.1479802000,
             "Location":"JARDINS DE CAN BRASÓ (Juan de Mena, 10)"
          },
          "Duration":60,
          "HoursLeft":0,
          "DateTime":"30-04-2021 11:00:00",
          "UniqueActivityCode":"114-OUTDOOR1-DG-2644-210430",
          "PriceInfo":{
             "NoClient":4.8,
             "Client":3.2
          },
          "LiveInfo":{
             "IFrame":""
          },
          "LongDescription":"",
          "Capacity":18,
          "MinutesLeftBookable":0,
          "ClubCode":"114",
          "ActivityDesc":"SEVILLANAS",
          "ActivityScheduleType":"R",
          "Bookings":8,
          "Level":1,
          "ClubDesc":"DIR WEB",
          "Bookable":true
       },
       {
          "ActivityCategory":"BOOTCAMP",
          "ActivityCode":"114-OUTDOOR1-BOOTCAMP-1516",
          "ActivityTechnicianName":"KARLA MERIDA",
          "HoursBeforeBookable":120,
          "ActivityId":1516,
          "ActivityType":"O",
          "OutdoorInfo":{
             "Latitude":41.3832848000,
             "Longitude":2.1248139000,
             "Location":"JARDINS DE LA MATERNITAT"
          },
          "Duration":60,
          "HoursLeft":6,
          "DateTime":"30-04-2021 18:00:00",
          "UniqueActivityCode":"114-OUTDOOR1-BOOTCAMP-1516-210430",
          "PriceInfo":{
             "NoClient":4.8,
             "Client":3.2
          },
          "LiveInfo":{
             "IFrame":""
          },
          "LongDescription":"\nBoxa a l'aire lliure. Tècnica i preparació física, amb una sessió plena d'energia.",
          "Capacity":18,
          "MinutesLeftBookable":342,
          "ClubCode":"114",
          "ActivityDesc":"OUTDOOR BOXING",
          "ActivityScheduleType":"R",
          "Bookings":2,
          "Level":1,
          "ClubDesc":"DIR WEB",
          "Bookable":true
       },
       {
          "ActivityCategory":"YOGA",
          "ActivityCode":"114-OUTDOOR1-YOGA-3213",
          "ActivityTechnicianName":"DANIEL VIÑALS",
          "HoursBeforeBookable":96,
          "ActivityId":3213,
          "ActivityType":"O",
          "OutdoorInfo":{
             "Latitude":41.3945509000,
             "Longitude":2.1407144000,
             "Location":"TURO PARC (Av. de Pau Casals, 19)"
          },
          "Duration":60,
          "HoursLeft":6,
          "DateTime":"30-04-2021 18:30:00",
          "UniqueActivityCode":"114-OUTDOOR1-YOGA-3213-210430",
          "PriceInfo":{
             "NoClient":4.8,
             "Client":3.2
          },
          "LiveInfo":{
             "IFrame":""
          },
          "LongDescription":"",
          "Capacity":24,
          "MinutesLeftBookable":372,
          "ClubCode":"114",
          "ActivityDesc":"HATHA IOGA",
          "ActivityScheduleType":"R",
          "Bookings":6,
          "Level":1,
          "ClubDesc":"DIR WEB",
          "Bookable":true
       },
       {
          "ActivityCategory":"YOGA",
          "ActivityCode":"114-OUTDOOR1-YOGA-2663",
          "ActivityTechnicianName":"MANUEL RODRIGUEZ",
          "HoursBeforeBookable":96,
          "ActivityId":2663,
          "ActivityType":"O",
          "OutdoorInfo":{
             "Latitude":41.3945509000,
             "Longitude":2.1407144000,
             "Location":"TURO PARC (Av Pau Casals, 19)"
          },
          "Duration":60,
          "HoursLeft":47,
          "DateTime":"02-05-2021 11:00:00",
          "UniqueActivityCode":"114-OUTDOOR1-YOGA-2663-210502",
          "PriceInfo":{
             "NoClient":4.8,
             "Client":3.2
          },
          "LiveInfo":{
             "IFrame":""
          },
          "LongDescription":"",
          "Capacity":24,
          "MinutesLeftBookable":2802,
          "ClubCode":"114",
          "ActivityDesc":"HATHA IOGA",
          "ActivityScheduleType":"R",
          "Bookings":3,
          "Level":1,
          "ClubDesc":"DIR WEB",
          "Bookable":true
       },
       {
          "ActivityCategory":"RUN OUTDOOR",
          "ActivityCode":"114-LIVE2-RUN-3310",
          "ActivityTechnicianName":"JAN ORDOÑEZ",
          "HoursBeforeBookable":96,
          "ActivityId":3310,
          "ActivityType":"O",
          "OutdoorInfo":{
             "Latitude":41.3997179000,
             "Longitude":2.1539188000,
             "Location":"PLACETA DE SANT MIQUEL (Gracia)"
          },
          "Duration":60,
          "HoursLeft":68,
          "DateTime":"03-05-2021 08:30:00",
          "UniqueActivityCode":"114-LIVE2-RUN-3310-210503",
          "PriceInfo":{
             "NoClient":4.8,
             "Client":3.2
          },
          "LiveInfo":{
             "IFrame":"<iframe src=\"https:\/\/cdnapi.shooowit.net\/vdmplayer\/d3371178-037d-43a8-9b62-b352d196844f\" style=\"width: 100%; height: 560px; border: none; margin: 0px; padding: 0px;\" allowfullscreen><\/iframe>"
          },
          "LongDescription":"",
          "Capacity":24,
          "MinutesLeftBookable":3762,
          "ClubCode":"114",
          "ActivityDesc":"RUNNING",
          "ActivityScheduleType":"R",
          "Bookings":0,
          "Level":1,
          "ClubDesc":"DIR WEB",
          "Bookable":true
       },
       {
          "ActivityCategory":"CUIDA'T",
          "ActivityCode":"114-OUTDOOR1-CUIDAT-3320",
          "ActivityTechnicianName":"TONI GIMENEZ",
          "HoursBeforeBookable":96,
          "ActivityId":3320,
          "ActivityType":"O",
          "OutdoorInfo":{
             "Latitude":41.4098612000,
             "Longitude":2.1683707000,
             "Location":"JARDINS PRINCEPS DE GIRONA"
          },
          "Duration":60,
          "HoursLeft":72,
          "DateTime":"03-05-2021 12:30:00",
          "UniqueActivityCode":"114-OUTDOOR1-CUIDAT-3320-210503",
          "PriceInfo":{
             "NoClient":4.8,
             "Client":3.2
          },
          "LiveInfo":{
             "IFrame":""
          },
          "LongDescription":"",
          "Capacity":24,
          "MinutesLeftBookable":4332,
          "ClubCode":"114",
          "ActivityDesc":"TAI XI",
          "ActivityScheduleType":"R",
          "Bookings":11,
          "Level":1,
          "ClubDesc":"DIR WEB",
          "Bookable":true
       },
       {
          "ActivityCategory":"BOOTCAMP",
          "ActivityCode":"114-OUTDOOR1-BOOTCAMP-3258",
          "ActivityTechnicianName":"JORDI MARTI",
          "HoursBeforeBookable":96,
          "ActivityId":3258,
          "ActivityType":"O",
          "OutdoorInfo":{
             "Latitude":41.3945509000,
             "Longitude":2.1407144000,
             "Location":"TURÓ PARK (Av. de Pau Casals, 19)"
          },
          "Duration":60,
          "HoursLeft":74,
          "DateTime":"03-05-2021 14:30:00",
          "UniqueActivityCode":"114-OUTDOOR1-BOOTCAMP-3258-210503",
          "PriceInfo":{
             "NoClient":4.8,
             "Client":3.2
          },
          "LiveInfo":{
             "IFrame":""
          },
          "LongDescription":"",
          "Capacity":18,
          "MinutesLeftBookable":4452,
          "ClubCode":"114",
          "ActivityDesc":"HIIT BOXING",
          "ActivityScheduleType":"R",
          "Bookings":0,
          "Level":1,
          "ClubDesc":"DIR WEB",
          "Bookable":true
       },
       {
          "ActivityCategory":"YOGA",
          "ActivityCode":"114-OUTDOOR1-YOGA-3049",
          "ActivityTechnicianName":"VLADIMIR JANDOV",
         "HoursBeforeBookable":96,
          "ActivityId":3049,
          "ActivityType":"O",
          "OutdoorInfo":{
             "Latitude":41.4026060000,
             "Longitude":2.1731580000,
             "Location":"PLAÇA SAGRADA FAMILIA"
          },
          "Duration":60,
          "HoursLeft":75,
          "DateTime":"03-05-2021 15:15:00",
          "UniqueActivityCode":"114-OUTDOOR1-YOGA-3049-210503",
          "PriceInfo":{
             "NoClient":4.8,
             "Client":3.2
          },
          "LiveInfo":{
             "IFrame":""
          },
          "LongDescription":"",
          "Capacity":18,
          "MinutesLeftBookable":4497,
          "ClubCode":"114",
          "ActivityDesc":"HATHA IOGA",
          "ActivityScheduleType":"R",
          "Bookings":0,
          "Level":1,
          "ClubDesc":"DIR WEB",
          "Bookable":true
       },
       {
          "ActivityCategory":"BOOTCAMP",
          "ActivityCode":"114-OUTDOOR1-BOOTCAMP-2638",
          "ActivityTechnicianName":"KARLA MERIDA",
          "HoursBeforeBookable":96,
          "ActivityId":2638,
          "ActivityType":"O",
          "OutdoorInfo":{
             "Latitude":41.4262618000,
             "Longitude":2.1465976000,
             "Location":"PISTA URBANA DE ATLETISMO (Carrer de la Granja Vella, 10-12)"
          },
          "Duration":60,
          "HoursLeft":78,
          "DateTime":"03-05-2021 18:15:00",
          "UniqueActivityCode":"114-OUTDOOR1-BOOTCAMP-2638-210503",
          "PriceInfo":{
             "NoClient":4.8,
             "Client":3.2
          },
          "LiveInfo":{
             "IFrame":""
          },
          "LongDescription":"",
          "Capacity":18,
          "MinutesLeftBookable":4677,
          "ClubCode":"114",
          "ActivityDesc":"OUTDOOR BOXING",
          "ActivityScheduleType":"R",
          "Bookings":0,
          "Level":1,
          "ClubDesc":"DIR WEB",
          "Bookable":true
       }
    ],
    "HasErrors":false
 }
];

var data =  object[0].Content;

console.log("Data: ", data);

function mostrarDatos(){
  var response = data.map(function(element) {
    const option =  document.createElement('h2');
    option.value = element.ActivityCategory;
    option.innerText = element.ActivityCategory;
    document.querySelector('#ddbb_data1').appendChild(option);
  }); 
};

console.log("Response: ", mostrarDatos);