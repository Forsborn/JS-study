let start = {
    setting: {
        num: [8, 7, 6, 5, 4, 3, 2, 1],
        lett: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']
    },
    go() {
        let table = this.generateTable();
        document.body.innerHTML = table;
        this.addNum();
        this.addLett();
    },
    generateTable() {
        let table = '';
        let goColor = 'white';
        for (let i = 0; i < this.setting.num.length; i++) {
            let num = '';
            if (goColor == 'white') {
                num = this.generateNum(goColor, this.setting.num[i]);
                goColor = 'black';
            } else {
                 num = this.generateNum(goColor, this.setting.num[i]);
                 goColor = 'white';
            }
            table += num;
        }
        return `<table><tbody>${table}</tbody></table>`;
    },
    generateNum(goColor, numPos) {
        let startColor = goColor;
        let num = "";
        for (let i = 0; i < this.setting.lett.length; i++) {
            let field = "";
            if(startColor === 'white') {
                field = this.generateField('white', numPos, this.setting.lett[i]);
                startColor = 'blackField';
            } else {
                field = this.generateField('black', numPos, this.setting.lett[i]);
                startColor = 'white';
            }
            num += field;
        }
        return `<tr>${num}</tr>`;
    },
    generateField(color, numPos, colChar) {
        return `<td data-numPos="${numPos}" data-colorChar="${colChar}" class="${color}"></td>`;
    },
    addNum() {
        let trAll = document.querySelectorAll('tr');
        for(let i = 0; i < trAll.length; i++) {
            let td = document.createElement('td');
            td.innerText = this.setting.num[i];
            trAll[i].insertAdjacentElement("afterbegin", td);
        }
    },
    addLett() {
        let tr = document.createElement('tr');
        tr.innerHTML += '<td></td>';
        for (let i = 0; i < this.setting.lett.length; i++) {
            tr.innerHTML += `<td>${this.setting.lett[i]}</td>`;
        }
        let tbody = document.querySelector('tbody');
        tbody.insertAdjacentElement("beforeend", tr);
    }, 
};

start.go();
