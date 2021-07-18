global.db = require('./server/config/sequelize.config');
global.model = require('./server/models');
/**
 * This will create the tables in DB if not exists any
 */
require('./server/models/sync/sync.model').syncModels();