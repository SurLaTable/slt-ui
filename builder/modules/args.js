import parseArgs from 'minimist';
export default parseArgs(process.argv.slice(2),{
  boolean:["dev"]
});
