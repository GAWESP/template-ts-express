import app from './app'

app.listen(app.get('port'),()=>{
    console.log(`Server prendido en ${app.get('port')}`)
})