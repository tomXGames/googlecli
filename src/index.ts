import {Command, flags} from '@oclif/command'
const open = require('open');

class Googlecli extends Command {
  static description = 'describe the command here'

  static flags = {
    // add --version flag to show CLI version
    version: flags.version({char: 'v'}),
    help: flags.help({char: 'h'}),
    // flag with a value (-n, --name=VALUE)
    name: flags.string({char: 'n', description: 'name to print'}),
    // flag with no value (-f, --force)
    force: flags.boolean({char: 'f'}),
  }

  static args = [{name: 'query'}]

  async run() {
    const {args, flags} = this.parse(Googlecli)

    if (args.query) {
      var query = args.query as string;
      query.replace(" ", "+")
      open('http://google.com/search?q=' + query);
    }
    else{
      this.log("Error: No query provided. Please provide a query.")
    }
  }
}

export = Googlecli
