import cron from 'node-cron'
import processar from './receive-message.js'

cron.schedule('*/5 * * * * *', () => { //second (optional), minute, hour, day of month, month, day of week
    console.log('Processando!')
    processar()
})
