var app = new Vue({
    el: '#root',
    data: {
        currentContact: 0,
        userMessage: '',
        search: '',
        contacts: [
            {
            name: 'Michele',
            avatar: 'assets/img/avatar_1.jpg',
            visible: true,
            messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Hai portato a spasso il cane?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Ricordati di stendere i panni',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 16:15:22',
                        message: 'Tutto fatto!',
                        status: 'received'
                    }
                ],
            },
            {
            name: 'Fabio',
            avatar: 'assets/img/avatar_2.jpg',
            visible: true,
            messages: [
                    {
                        date: '20/03/2020 16:30:00',
                        message: 'Ciao come stai?',
                        status: 'sent'
                    },
                    {
                        date: '20/03/2020 16:30:55',
                        message: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received'
                    },
                    {
                        date: '20/03/2020 16:35:00',
                        message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                        status: 'sent'
                    }
                ],
            },
            {
            name: 'Samuele',
            avatar: 'assets/img/avatar_3.jpg',
            visible: true,
            messages: [
                    {
                        date: '28/03/2020 10:10:40',
                        message: 'La Marianna va in campagna',
                        status: 'received'
                    },
                    {
                        date: '28/03/2020 10:20:10',
                        message: 'Sicuro di non aver sbagliato chat?',
                        status: 'sent'
                    },
                    {
                        date: '28/03/2020 16:15:22',
                        message: 'Ah scusa!',
                        status: 'received'
                    }
                ],
            },
            {
            name: 'Alessandro B.',
            avatar: 'assets/img/avatar_4.jpg',
            visible: true,
            messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Lo sai che ha aperto una nuova pizzeria?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Si, ma preferirei andare al cinema',
                        status: 'received'
                    }
                ],
            },
            {
            name: 'Alessandro L.',
            avatar: 'assets/img/avatar_5.jpg',
            visible: true,
            messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Ricordati di chiamare la nonna',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Va bene, stasera la sento',
                        status: 'received'
                    }
                ],
            },
            {
            name: 'Claudia',
            avatar: 'assets/img/avatar_6.jpg',
            visible: true,
            messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Ciao Claudia, hai novit???',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Non ancora',
                        status: 'received'
                    },
                    {
                        date: '10/01/2020 15:51:00',
                        message: 'Nessuna nuova, buona nuova',
                        status: 'sent'
                    }
                ],
            },
            {
            name: 'Federico',
            avatar: 'assets/img/avatar_7.jpg',
            visible: true,
            messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Fai gli auguri a Martina che ?? il suo compleanno!',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Grazie per avermelo ricordato, le scrivo subito!',
                        status: 'received'
                    }
                ],
            },
            {
            name: 'Davide',
            avatar: 'assets/img/avatar_8.jpg',
            visible: true,
            messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Ciao, andiamo a mangiare la pizza stasera?',
                        status: 'received'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'No, l\'ho gi?? mangiata ieri, ordiniamo sushi!',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:51:00',
                        message: 'OK!!',
                        status: 'received'
                    }
                ],
            }
        ],
    },
    methods: {
        selectContact(index){
            this.currentContact = index;
        },
        

        getLastHourMessages(elem){
            let date = elem.messages[elem.messages.length - 1].date;
            date = date.split(' ');          
            return date[1];      
        },
        

        sendMessage(){
            const d = new Date();
            let time = d.toLocaleTimeString();
            let date = d.toLocaleDateString();
            console.log(date, time)
            let now = `${date} ${time}`
            console.log(now)
            this.contacts[this.currentContact].messages.push({
                date: now,
                message: this.userMessage,
                status: 'sent'
            });
            this.userMessage = '';   
            
            setTimeout(() => {
                this.contacts[this.currentContact].messages.push({
                    date: now,
                    message: 'ok',
                    status: 'recieved'
                });
            }, 1000);
        },

        searchContact: function() {
            this.contacts.forEach(elem => {
                if (elem.name.toLowerCase().includes(this.search.toLowerCase())) {
                    elem.visible = true;
                } else {
                    elem.visible = false;
                }
            });
        },
 
          
        deleteMsg(index){
            this.contacts[this.currentContact].messages.splice(index,1)
        },

    }
  })