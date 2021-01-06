import fs from 'fs';
import allGunslingerArtifacts from './allGunslingerArtifacts';

function writeFileAndSave(fileName: string, objStringified: string) {
  fs.writeFile(fileName, objStringified, err => {
    if (err) throw err;
    console.log('File saved');
  });
}

const dataInJson = JSON.stringify(allGunslingerArtifacts);
writeFileAndSave('allGunslingerArtifacts.json', dataInJson);
