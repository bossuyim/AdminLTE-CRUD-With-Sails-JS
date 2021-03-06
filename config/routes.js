/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes map URLs to views and controllers.
 *
 * If Sails receives a URL that doesn't match any of the routes below,
 * it will check for matching files (images, scripts, stylesheets, etc.)
 * in your assets directory.  e.g. `http://localhost:1337/images/foo.jpg`
 * might match an image file: `/assets/images/foo.jpg`
 *
 * Finally, if those don't match either, the default 404 handler is triggered.
 * See `api/responses/notFound.js` to adjust your app's 404 logic.
 *
 * Note: Sails doesn't ACTUALLY serve stuff from `assets`-- the default Gruntfile in Sails copies
 * flat files from `assets` to `.tmp/public`.  This allows you to do things like compile LESS or
 * CoffeeScript for the front-end.
 *
 * For more information on configuring custom routes, check out:
 * http://sailsjs.org/#!/documentation/concepts/Routes/RouteTargetSyntax.html
 */
module.exports.routes = {

  /***************************************************************************
  *                                                                          *
  * Make the view located at `views/homepage.ejs` (or `views/homepage.jade`, *
  * etc. depending on your default view engine) your home page.              *
  *                                                                          *
  * (Alternatively, remove this and add an `index.html` file in your         *
  * `assets` directory)                                                      *
  *                                                                          *
  ***************************************************************************/

  '/': {
    view: 'login',
    locals: {
        layout: false
    }
  },
  '/public/join': {
    controller: "App",
    action: "public"
  },
  'POST /login': {
    controller: "Auth",
    action: "login"
  },
  '/logout': {
    controller: "Auth",
    action: "logout"
  },
  '/dashboard': {
    locals: {
      title: 'Dashboard',
      page: 'dashboard'
    },
    controller: "Home",
    action: "index"
  },
  '/pegawai': {
    locals: {
      title: 'Pegawai',
      page: 'pegawai'
    },
    controller: "Pegawai",
    action: "index"
  },
  '/pegawai/get': {
    controller: "Pegawai",
    action: "get"
  },
  'POST /pegawai/add': {
    controller: "Pegawai",
    action: "add"
  },
  '/pegawai/show_edit/:pegawai_id': {
    controller: "Pegawai",
    action: "show_edit"
  },
  'POST /pegawai/update': {
    controller: "Pegawai",
    action: "update"
  },
  'POST /pegawai/delete': {
    controller: "Pegawai",
    action: "delete"
  },
  '/pegawai/export': {
    controller: "Pegawai",
    action: "export"
  },
  '/posisi': {
    locals: {
      title: 'Posisi',
      page: 'posisi'
    },
    controller: "Posisi",
    action: "index"
  },
  '/posisi/get': {
    controller: "Posisi",
    action: "get"
  },
  'POST /posisi/add': {
    controller: "Posisi",
    action: "add"
  },
  '/posisi/show_edit/:posisi_id': {
    controller: "Posisi",
    action: "show_edit"
  },
  'POST /posisi/update': {
    controller: "Posisi",
    action: "update"
  },
  'POST /posisi/delete': {
    controller: "Posisi",
    action: "delete"
  },
  '/posisi/detail/:posisi_id': {
    controller: "Posisi",
    action: "detail"
  },
  '/posisi/export': {
    controller: "Posisi",
    action: "export"
  },
  '/kota': {
    locals: {
      title: 'Kota',
      page: 'kota'
    },
    controller: "Kota",
    action: "index"
  },
  '/kota/get': {
    controller: "Kota",
    action: "get"
  },
  'POST /kota/add': {
    controller: "Kota",
    action: "add"
  },
  '/kota/show_edit/:kota_id': {
    controller: "Kota",
    action: "show_edit"
  },
  'POST /kota/update': {
    controller: "Kota",
    action: "update"
  },
  'POST /kota/delete': {
    controller: "Kota",
    action: "delete"
  },
  '/kota/detail/:kota_id': {
    controller: "Kota",
    action: "detail"
  },
  '/kota/export': {
    controller: "Kota",
    action: "export"
  },

  /***************************************************************************
  *                                                                          *
  * Custom routes here...                                                    *
  *                                                                          *
  * If a request to a URL doesn't match any of the custom routes above, it   *
  * is matched against Sails route blueprints. See `config/blueprints.js`    *
  * for configuration options and examples.                                  *
  *                                                                          *
  ***************************************************************************/

};
