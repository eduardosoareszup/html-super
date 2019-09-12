const Home = (username = 'usuário') => {
  secondaryTitle = 'Meu título secundário';
  
  return {
    head: {},
    body: {
      children: [
        {
          main: {
            props: {
              id: 'content',
              class: 'container'
            },
            children: [
              {
                div: {
                  props: { class: 'row' },
                  children: [
                    {
                      div: {
                        props: { class: 'col s6' },
                        children: [{ h1: `Olá ${username}! Seja bem-vindo` }]
                      }
                    },
                    {
                      div: {
                        props: { class: 'col s6' },
                        children: [{ h2: secondaryTitle }]
                      }
                    },
                  ]
                }
              }
            ]
          }
        }
      ]
    }
  }
}

module.exports = {Home};