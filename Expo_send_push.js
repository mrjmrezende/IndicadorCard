const axios = require('axios');
axios
  .post('https://exp.host/--/api/v2/push/send',
    {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }
    },
    {
      "to": "ExponentPushToken[FPVEtCFCHgQg8c_K1W8_DV]",
      "title": "Cadastrou Usuario",
      "body": 'googleData.email'
    })
  .then(function (response) {
    if (response.data.success) {
      // console.log(response.data);
      console.log('-->>>' + 'googleData.email');
      // store returned user somehow

    }
    else {

    }
  })