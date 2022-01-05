const router = require('express').Router();
const { Bills, Debt, Accounts, Cards, User } = require('../../models');

/////POST////////
router.post('/bills', (req, res) => {
    Bills.create(req.body);
    res.redirect('/')

        .then((newBill) => {
            res.json(newBill);
        })
        .catch((err) => res.json(err));
});


////DELETES/////
router.delete('/bills', (req, res) => {
    Bills.destroy({
        where: {
            bill_id: req.body.id, //something like event.element...?///
        },
    })
        .then((deletedBills) => {
            res.json(deletedBills);
        })
        .catch((err) => res.json(err));
});

// router.delete('/debt', (req, res) => {
//     Debt.destroy({
//         where: {
//             name: req.body,
//         },
//     })
//         .then((deletedDebt) => {
//             res.json(deletedDebt);
//         })
//         .catch((err) => res.json(err));
// });


//////PUTS///////
router.put('/checking-account', (req, res) => {
    Accounts.update({
        amount: req.body.amount,
    },
        {
            where: {
                user_id: req.session.user_id,
                accounts_name: req.body.name
            }
        }).then((accountUpdate) => res.json(accountUpdate))

});

router.put('/savings-account', (req, res) => {
    Accounts.update({
        amount: req.body.amount,
    },
        {
            where: {
                user_id: req.session.user_id,
                accounts_name: req.body.name
            }
        }).then((accountUpdate) => res.json(accountUpdate))

});

router.put('/cards', (req, res) => {
    Cards.update({
        card: req.body.card,
    },
        {
            where: {
                user_id: req.body.user_id
            }
        }).then((cardUpdate) => res.json(cardUpdate))

});

router.put('/payday', (req, res) => {
    User.update({
        payday: req.body.payday,
    },
        {
            where: {
                user_id: req.body.user_id
            }
        }).then((paydayUpdate) => res.json(paydayUpdate))

});

router.put('/income', (req, res) => {
    User.update({
        income: req.body.income,
    },
        {
            where: {
                user_id: req.body.user_id
            }
        }).then((incomeUpdate) => res.json(incomeUpdate))

});

module.exports = router 