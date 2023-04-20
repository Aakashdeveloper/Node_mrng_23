let express = require('express');
let app = express();
let session= require('express-session');
let passport = require('passport');
let port = 9800;
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;

app.use(session({
    secret:'SUPERSECRET',
    resave:false,
    saveUninitialized:true
}))


app.use(passport.initialize());
app.use(passport.session());

app.get('/',(req,res) => {
    res.send('<a href="/auth/google">Login With Google</a>')
})

app.get('/profile',(req,res) => {
    res.send(userprofile)
})

passport.deserializeUser((user,done) => {
    done(null,{
        provider:user.provider,
        id: user.provider_id
    })
})

passport.serializeUser((user,cb)=>{
    cb(null,user)
})

passport.use(new GoogleStrategy({
    clientID: '',
    clientSecret: '',
    callbackURL: "http://localhost:9800/auth/google/callback"
  },
  function(accessToken, refreshToken, profile, done) {
    userprofile = profile;
    return done(null,userprofile)
  }
));


app.get('/auth/google',
  passport.authenticate('google', { scope: ['profile','email'] }));

app.get('/auth/google/callback', 
  passport.authenticate('google', { failureRedirect: '/' }),
  function(req, res) {
    res.redirect('/profile');
  });


app.listen(port,() => {
    console.log(`Listing to port ${port}`)
})