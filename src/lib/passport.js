const passport = require('passport');
const localstrategy = require('passport-local').Strategy;
const pool = require('../database');
const helpers = require('../lib/helpers');

passport.use('local.signin', new localstrategy({
  usernameField:'usuario',
  passportField:'password',
  passReqToCallback: true
}, async(req,username,password,done)=>{
  const rows = await pool.query("SELECT `usuario_emp`.*, `empleado`.`nombres`, `empleado`.`apellidos` FROM `usuario_emp` LEFT JOIN `empleado` ON `usuario_emp`.`cod_emp` = `empleado`.`cod_emp` WHERE `usuario_emp`.`usuario` = ?",[username]);
  if(rows.length > 0){
    const user = rows[0];
    console.log(user)
    if(user.password === password){
      return done(null,user,req.flash('success',`Welcome ${user.nombres} ${user.apellidos}`));
    }else{
      return done(null,false,req.flash('failure','Incorrect password'));
    }
  }else{
    return done(null,false,req.flash('failure','Account doesnt exists'));
  }
}));

//* Allows calling user.<column> in partials
passport.serializeUser((user,done)=>{
  done(null,user.cod_usuario_emp)
})
//* Allows us to use empleados columns with user.<nombres>
passport.deserializeUser(async(id,done)=>{
  const rows = await pool.query("SELECT `usuario_emp`.*, `empleado`.`nombres`, `empleado`.`apellidos` FROM `usuario_emp` LEFT JOIN `empleado` ON `usuario_emp`.`cod_emp` = `empleado`.`cod_emp` WHERE `usuario_emp`.`cod_usuario_emp` = ?",[id]);
  
  done(null,rows[0]);
})
