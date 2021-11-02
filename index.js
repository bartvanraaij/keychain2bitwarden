#!/usr/bin/env node

const { hideBin } = require('yargs/helpers');

const yargs = require('yargs/yargs')(hideBin(process.argv))
  // .option('verbose', {
  //   alias: 'v',
  //   type: 'boolean',
  //   description: 'Run with verbose logging'
  // })
  .command('convert [file]', 'Converts (reads and exports) a file', (yargs) => {
    return yargs
      .positional('file', {
        describe: 'file to convert',
        normalize: true,
      })
  }, async (argv) => {

    const csv = require('csvtojson');
    const items = (await csv().fromFile(argv.file)).map((item) => {
      return {
        type: 1,
        name: item.Title,
        login: {
          uris: [
            {
              "match": null,
              "uri": item.Url
            }
          ],
          username: item.Username,
          password: item.Password
        }
      }
    });

    const output = { items };
    process.stdout.write(JSON.stringify(output,null, 2))

    })
  .help()
  .demandCommand(1, 'You need at least one command before moving on')
  .argv;

