const drop = () => {
    const fileInputs = document.querySelectorAll('[name="upload"]');
    ['dragenter', 'dragleave', 'dragover', 'drop'].forEach(eventName => {
       fileInputs.forEach(input => {
          input.addEventListener(eventName, preventDefaults, false);
       });
    });

    function preventDefaults(e) {
        e.preventDefault();
        e.stopPropagation();
    }

    function highlight(item){
        item.closest('.file_upload').style.border = "2px solid purple";
        item.closest('.file_upload').style.background = "white";
    }

    function unHighlight(item){
        item.closest('.file_upload').style.border = "none";
        if(item.closest('.calc_form')) {
            item.closest('.file_upload').style.background = "white";
        } else{
            item.closest('.file_upload').style.background = "#ededed";
        }
    }

    ['dragenter', 'dragover'].forEach(eventName => {
        fileInputs.forEach(input => {
            input.addEventListener(eventName, () => highlight(input), false);
        });
    });

    ['dragleave', 'drop'].forEach(eventName => {
        fileInputs.forEach(input => {
            input.addEventListener(eventName, () => unHighlight(input), false);
        });
    });

    fileInputs.forEach(input => {
       input.addEventListener('drop', (e) => {
           input.files = e.dataTransfer.files;
           let dots;
           let arr = input.files[0].name.split('.');

           arr[0].length > 8 ? dots = "..." : dots = ".";
           const name = arr[0].substring(0,8) + dots + arr[1];
           input.previousElementSibling.textContent = name;
       });
    });
};

export default drop;