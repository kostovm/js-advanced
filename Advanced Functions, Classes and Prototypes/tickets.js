function tickets(arr, criterion) {

    let tickets = [];

    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination,
                this.price = price,
                this.status = status
        }
    };

    for (const ticket of arr) {
        const ticketInfo = ticket.split("|");
        const destination = ticketInfo[0];
        const price = Number(ticketInfo[1]);
        const status = ticketInfo[2];

        let newTicket = new Ticket(destination, price, status);
        tickets.push(newTicket);
    };

    tickets.sort((a, b) => {
        if (criterion === "price") {
            return a[criterion] - b[criterion];
        } else {
            return a[criterion].localeCompare(b[criterion]);
        };

    });

    return tickets;

}