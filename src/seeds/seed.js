import dotenv from 'dotenv'
import mongoose from 'mongoose';
import DREAM_TYPE from '../enums/dreamType';
import Dream from "../models/dream"

dotenv.config()

const {DB_URL_LOCAL} = process.env

const seedDreams = [
	{
    "title": "sunt ea sint",
    "description": "Nulla est laboris consequat sit esse non quis ex amet. Reprehenderit Lorem pariatur occaecat ea sit duis. Cillum duis nulla nostrud ad voluptate amet ipsum amet aute labore sit officia cillum.",
    "date": "2022-05-25",
    "type": DREAM_TYPE.HAPPY
  },
  {
    "title": "consectetur magna velit",
    "description": "Excepteur nisi anim magna ex pariatur ea consequat aliqua consectetur sunt laboris velit. Ex sunt aute minim ullamco aute aute in. Adipisicing sunt voluptate occaecat ullamco eu cupidatat quis non occaecat.",
    "date": "2022-03-24",
    "type": DREAM_TYPE.HAPPY
  },
  {
    "title": "aliquip culpa in",
    "description": "Voluptate consectetur mollit eu ullamco sit elit. Id minim laboris qui mollit culpa dolor nisi aliqua esse excepteur quis aliqua Lorem quis. Nisi dolor culpa commodo ut occaecat minim occaecat nulla consequat elit sit occaecat culpa.",
    "date": "2022-03-04",
    "type": DREAM_TYPE.HAPPY
  },
  {
    "title": "ex enim sint",
    "description": "Voluptate labore dolore deserunt amet minim ipsum. Magna culpa do adipisicing pariatur. Veniam ad deserunt anim labore laboris id quis.",
    "date": "2022-06-04",
    "type": DREAM_TYPE.HAPPY
  },
  {
    "title": "enim velit consequat",
    "description": "Lorem sunt aliquip Lorem laboris. Occaecat enim pariatur est nostrud aute non laboris sint quis consequat incididunt nulla enim nisi. Quis aliqua in commodo sunt.",
    "date": "2022-04-03",
    "type": DREAM_TYPE.HAPPY
  },
	{
    "title": "ipsum in nisi",
    "description": "In aliquip magna fugiat non irure non labore Lorem ad duis dolor esse. Magna qui aliqua ad non ullamco do consequat. Officia pariatur irure anim proident amet magna labore in anim sint.",
    "date": "2022-02-17",
    "type": DREAM_TYPE.SAD
  },
  {
    "title": "Lorem reprehenderit eiusmod",
    "description": "Exercitation officia labore aliquip culpa quis ex irure velit commodo. Dolore nostrud eiusmod dolor proident ullamco cillum dolore aute tempor. Ex nostrud sint sit dolore ex incididunt voluptate ullamco eu aute culpa commodo veniam mollit.",
    "date": "2022-04-19",
    "type": DREAM_TYPE.SAD
  },
  {
    "title": "cupidatat ex Lorem",
    "description": "Nulla laboris reprehenderit ullamco proident ad mollit sint anim qui eu. Consectetur duis aute voluptate ut id occaecat sit id. Commodo consequat quis velit non ex duis aliquip.",
    "date": "2022-05-18",
    "type": DREAM_TYPE.SAD
  },
  {
    "title": "sit labore aliquip",
    "description": "Lorem dolore culpa labore aute adipisicing. Commodo exercitation ea non est magna ea. Reprehenderit dolor cupidatat pariatur sit deserunt nisi consectetur.",
    "date": "2022-04-26",
    "type": DREAM_TYPE.SAD
  },
  {
    "title": "est sint proident",
    "description": "Laboris reprehenderit esse commodo culpa quis eiusmod magna cupidatat occaecat elit reprehenderit non qui. Eu est ex ex in eiusmod mollit non. Mollit qui consequat in veniam id enim ea minim sint fugiat pariatur irure nisi dolor.",
    "date": "2022-05-13",
    "type": DREAM_TYPE.SAD
  },
	{
    "title": "sint eu enim",
    "description": "Nisi nostrud voluptate magna nostrud amet Lorem proident cupidatat est voluptate proident. Laborum sit deserunt elit velit irure laboris ad tempor ipsum sint. Sunt eu duis aute cillum deserunt.",
    "date": "2022-02-23",
    "type": DREAM_TYPE.SCARY
  },
  {
    "title": "laboris ut in",
    "description": "Ad duis et aliqua nisi ad nostrud excepteur pariatur ut. Consequat enim magna eu tempor ullamco eu consectetur esse ut cupidatat do exercitation ex exercitation. Ipsum sint eiusmod eu tempor consequat.",
    "date": "2022-04-16",
    "type": DREAM_TYPE.SCARY
  },
  {
    "title": "elit ut amet",
    "description": "Incididunt pariatur excepteur sit nulla proident. Dolor in labore id labore dolore proident aute laborum exercitation ut excepteur nulla. Incididunt est qui aute minim incididunt aute commodo laboris.",
    "date": "2022-03-13",
    "type": DREAM_TYPE.SCARY
  },
  {
    "title": "incididunt dolore commodo",
    "description": "Laborum nisi commodo aliqua dolore do sit aute irure ad non aliqua pariatur et. Deserunt cillum aute commodo incididunt in nulla officia in fugiat nisi adipisicing est exercitation. Aliqua nulla anim ad exercitation officia.",
    "date": "2022-03-30",
    "type": DREAM_TYPE.SCARY
  },
  {
    "title": "proident magna ullamco",
    "description": "Exercitation proident irure velit ullamco magna labore ullamco laborum culpa incididunt esse. Cupidatat amet ea dolor nisi id. Commodo deserunt ut non labore duis laboris.",
    "date": "2022-03-11",
    "type": DREAM_TYPE.SCARY
  },
  {
    "title": "ex ullamco dolor",
    "description": "Exercitation ea irure elit dolor duis magna dolore dolor. Laboris tempor incididunt reprehenderit duis nulla ipsum minim velit culpa in irure quis adipisicing. Labore officia eiusmod nisi pariatur.",
    "date": "2022-06-20",
    "type": DREAM_TYPE.SCARY
  },
  {
    "title": "reprehenderit officia incididunt",
    "description": "Labore voluptate est mollit aute fugiat. Anim dolor occaecat deserunt ut incididunt. Nulla ut nulla esse consectetur.",
    "date": "2022-05-07",
    "type": DREAM_TYPE.SCARY
  },
  {
    "title": "minim excepteur cillum",
    "description": "Deserunt proident laboris et ullamco nisi. Aliquip quis laborum laboris nisi et officia et reprehenderit. Excepteur nisi qui veniam cillum.",
    "date": "2022-03-27",
    "type": DREAM_TYPE.SCARY
  },
  {
    "title": "commodo culpa commodo",
    "description": "Dolore laboris incididunt dolore sunt exercitation aute cupidatat qui voluptate. Nostrud minim incididunt nostrud enim excepteur reprehenderit irure exercitation deserunt do et. Culpa voluptate mollit cupidatat nisi proident veniam ut excepteur minim.",
    "date": "2022-05-03",
    "type": DREAM_TYPE.SCARY
  },
  {
    "title": "quis occaecat pariatur",
    "description": "Esse labore ex officia occaecat qui sint exercitation consectetur minim deserunt culpa. Amet pariatur nisi adipisicing adipisicing nostrud ex tempor sit. Nisi excepteur ullamco excepteur consectetur.",
    "date": "2022-03-09",
    "type": DREAM_TYPE.SCARY
  },
	{
    "title": "exercitation eiusmod reprehenderit",
    "description": "Aute non duis voluptate aute Lorem duis elit aliqua fugiat. Reprehenderit nisi culpa incididunt ipsum ipsum nisi sunt. Anim esse sit pariatur mollit.",
    "date": "2022-03-12",
    "type": DREAM_TYPE.EXCITING
  },
  {
    "title": "et aliqua esse",
    "description": "Ullamco et velit Lorem ut quis aute nisi magna nisi Lorem sit aliqua do. Ipsum culpa consectetur ex mollit excepteur duis tempor. Proident anim aliqua ea officia quis culpa incididunt nulla tempor labore reprehenderit elit irure.",
    "date": "2022-03-05",
    "type": DREAM_TYPE.EXCITING
  },
  {
    "title": "ut magna minim",
    "description": "Ex cillum laborum voluptate nisi non reprehenderit commodo sunt est incididunt ut. Irure dolore culpa laborum eu exercitation commodo labore. Ad quis consectetur eiusmod velit deserunt nisi elit et deserunt eu proident enim.",
    "date": "2022-05-20",
    "type": DREAM_TYPE.EXCITING
  },
  {
    "title": "fugiat amet minim",
    "description": "Est sint est irure esse. Officia occaecat amet anim mollit ex deserunt elit. Sit laborum incididunt laboris Lorem do culpa enim cupidatat officia.",
    "date": "2022-03-28",
    "type": DREAM_TYPE.EXCITING
  },
  {
    "title": "non mollit dolore",
    "description": "Mollit aliquip ut reprehenderit do enim velit eiusmod esse irure eu duis cupidatat consequat pariatur. Fugiat deserunt voluptate sit adipisicing eu ad nisi occaecat. Nisi officia qui reprehenderit ad ad irure do incididunt.",
    "date": "2022-05-21",
    "type": DREAM_TYPE.EXCITING
  },
  {
    "title": "labore adipisicing nisi",
    "description": "Dolor elit proident veniam laboris. Deserunt dolore dolor aliquip Lorem. Enim et pariatur irure consequat dolor do veniam commodo Lorem.",
    "date": "2022-02-22",
    "type": DREAM_TYPE.EXCITING
  },
  {
    "title": "sit amet incididunt",
    "description": "Sunt nisi sit aliquip labore aliqua consequat aute velit eiusmod duis ad nostrud pariatur. Irure nisi nisi occaecat mollit magna sint aliquip sit nisi. Amet laborum ea ut ipsum.",
    "date": "2022-06-29",
    "type": DREAM_TYPE.EXCITING
  },
  {
    "title": "consequat commodo nostrud",
    "description": "Voluptate dolore commodo amet nisi aute sunt pariatur in anim tempor officia pariatur voluptate mollit. Cillum laborum elit ut aliquip consequat commodo. Ut dolore officia Lorem occaecat reprehenderit irure reprehenderit duis.",
    "date": "2022-05-27",
    "type": DREAM_TYPE.EXCITING
  }
]

mongoose
.connect(DB_URL_LOCAL)
.then(() => {
  const seedDB = async () => {
    console.log("seeding")
    await Dream.deleteMany({})
    await Dream.insertMany(seedDreams)
    console.log("seed complete")
    process.exit()
  }
  seedDB()
})
.catch(err => console.log(err))