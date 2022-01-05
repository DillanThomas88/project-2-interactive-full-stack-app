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
            name: req.body,
        },
    })
        .then((deletedBills) => {
            res.json(deletedBills);
        })
        .catch((err) => res.json(err));
});

router.delete('/debt', (req, res) => {
    Debt.destroy({
        where: {
            name: req.body,
        },
    })
        .then((deletedDebt) => {
            res.json(deletedDebt);
        })
        .catch((err) => res.json(err));
});


//////PUTS///////
router.put('/accounts', (req, res) => {
    Accounts.update({
        checking: req.body.checking,
        savings: req.body.savings,
    },
        {
            where: {
                user_id: req.body.user_id
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