const deleteBillsHandler = async (event) => {
    event.preventDefault();

    const billToDelete = document.querySelector('#bill-name').value.trim();

    try {
        const response = await fetch('/api/bills/', {
            method: 'DELETE',
            body: JSON.stringify({ billToDelete }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace('/');
        }

    } catch (err) {
        console.log(err);
    }
}

document
    .querySelector('#kill-bill')
    .addEventListener('click', deleteBillsHandler);

///////

    const deleteDebtHandler = async (event) => {
        event.preventDefault();
    
        const debtToDelete = document.querySelector('#debt-amount').value.trim();
    
        try {
            const response = await fetch('/api/debt', {
                method: 'DELETE',
                body: JSON.stringify({ debtToDelete }),
                headers: { 'Content-Type': 'application/json' },
            });
    
            if (response.ok) {
                document.location.replace('/');
            }
    
        } catch (err) {
            console.log(err);
        }
    }
    
    document
        .querySelector('#kill-debt')
        .addEventListener('click', deleteDebtHandler);