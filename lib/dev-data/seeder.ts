import dotenv from 'dotenv';
import Skills from '../models/Skills';
import Archetype from '../models/Archetype';
import mongooseSetup from '../config/mongooseSetup';
// import allArchetypes from './allArchetypes';
import allSkills from './allSkills';

dotenv.config();

mongooseSetup(process.env.DBURI!);

const importData = async () => {
  try {
    // await Archetype.deleteMany({});
    await Skills.deleteMany({});
    await Skills.insertMany(allSkills);

    console.log('Data imported!');
    process.exit();
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await Archetype.deleteMany({});
    await Skills.deleteMany({});

    console.log('Data destroyed!');
    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

if (process.argv[2] === '-d') destroyData();
else importData();
