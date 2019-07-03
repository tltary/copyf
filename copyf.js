function copyF(el) {

    const jsCopyArea = document.querySelector('.js-copy-button');

    jsCopyArea.addEventListener('click', function() {
        let copy = document.querySelector(el);
        let temp = document.createElement('textarea');
        let body = document.querySelector('body');

        body.append(temp);
        temp.innerHTML = copy.value;
        temp.select();
        document.execCommand('copy');
        temp.remove();
        
        alert(`you copied\n "${copy.value}"`);

        copy =  temp = body = null;

    });
}

copyF('.js-copy-area');