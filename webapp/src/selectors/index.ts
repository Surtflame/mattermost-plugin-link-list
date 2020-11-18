import {id as pluginId} from 'manifest';

const getPluginState = (state) => state['plugins-' + pluginId] || {};

export const getPluginSettings = (state) => getPluginState(state).pluginSettings;