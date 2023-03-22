const fs = require('fs').promises;
const btoa = require('btoa');
const AdmZip = require('adm-zip');

const main = async () => {
    const [sourceName, destinationNameB64, destinationNameZIP, destinationNameB64_ZIP] = process.argv.slice(2);
    if (!sourceName) {
      console.log("Vous n'avez saisi aucun argument");
      return;
    }
    if (destinationNameB64 && !destinationNameZIP && !destinationNameB64_ZIP) {
      await encodeBase64(sourceName, destinationNameB64);
    } else if (destinationNameZIP && !destinationNameB64 && !destinationNameB64_ZIP) {
      await zipFile(sourceName, destinationNameZIP);
    } else if (destinationNameB64 && destinationNameZIP && !destinationNameB64_ZIP) {
      await encodeBase64(sourceName, destinationNameB64);
      await zipFile(sourceName, destinationNameZIP);
    } else if (destinationNameB64_ZIP && !destinationNameB64 && !destinationNameZIP) {
      await encodeZipFile(sourceName, destinationNameB64_ZIP);
    } else {
      console.log("Argument non reconnu");
    }
};

const encodeBase64 = async (sourceName, destinationName) => {
  try {
    const sourceFile = await fs.readFile(sourceName);
    const sourceFileEncoded = btoa(sourceFile);
    await fs.writeFile(destinationName, sourceFileEncoded);
    console.log(`Le fichier ${sourceName} a été encodé en base64 et sauvegardé sous le nom ${destinationName}`);
  } catch (err) {
    console.log(`Impossible d'encoder le fichier ${sourceName} en base64: ${err}`);
  }
};

const zipFile = async (sourceName, destinationName) => {
  try {
    const sourceFile = await fs.readFile(sourceName);
    const zip = new AdmZip();
    zip.addFile(sourceName, Buffer.alloc(sourceFile.length, sourceFile));
    zip.writeZip(destinationName);
    console.log(`Le fichier ${sourceName} a été zippé et sauvegardé sous le nom ${destinationName}`);
  } catch (err) {
    console.log(`Impossible de zipper le fichier ${sourceName}: ${err}`);
  }
};

const encodeZipFile = async (sourceName, destinationName) => {
    try {
        const sourceFile = await fs.readFile(sourceName);
        const zip = new AdmZip();
        zip.addFile(sourceName, Buffer.alloc(sourceFile.length, sourceFile));
        const sourceFileEncoded = btoa(zip.toBuffer());
        await fs.writeFile(destinationName, sourceFileEncoded);
        console.log(`Le fichier ${sourceName} a été encodé en base64 et sauvegardé sous le nom ${destinationName}`);
    } catch (err) {
        console.log(`Impossible d'encoder le fichier ${sourceName} en base64: ${err}`);
    }
};

main();