import PLUGIN_MANIFEST from '../fsx.plugin';
import _ from 'lodash';

class PluginInputFsx {
  constructor() {
    console.log(PLUGIN_MANIFEST);
  }
}

Hexi.registerPlugin(PluginInputFsx);
