import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

/**
 * Initialization data for the kestrel-syntax-ext extension.
 */
const plugin: JupyterFrontEndPlugin<void> = {
  id: 'kestrel-syntax-ext:plugin',
  description: 'Provides syntax highlighting & autocompletion for Kestrel',
  autoStart: true,
  activate: (app: JupyterFrontEnd) => {
    console.log('JupyterLab extension kestrel-syntax-ext is activated!');
  }
};

export default plugin;
