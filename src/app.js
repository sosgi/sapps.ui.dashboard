import TPL from './main.html!text';

class UI{

    show($dom){
        if(!this.$div){
            this.$div = document.createElement('div');
            this.$div.innerHTML = TPL.trim();
            $dom.appendChild(this.$div);
        }
        this.$div.classList.add('show');
    }
    hide(){
        this.$div.parentNode.removeChild(this.$div);
        this.$div = null;
    }
    remove(){
        if(this.$div){
            this.$div.parentNode.removeChild(this.$div);
            this.$div = null;
        }
    }
    reload(){
        console.log('refresh');
    }
}
export default class App{

    get name(){
        return 'dashboard';
    }
    start(ctx){
        this.ui = new UI();
    }
    stop(){
        this.ui.remove();
        this.ui = null;
    }
    show($dom){
        console.log('Show dashboard');
        this.ui.show($dom);
    }
    hide(){
        console.log('Hide dashboard');
        this.ui.hide();
    }
    reload(){
        console.log('Reload dashboard');
        this.ui.reload();
    }
}
