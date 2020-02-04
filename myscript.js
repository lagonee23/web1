var Everything = {
    movli : ['겨울왕국', '겨울왕국2', '알라딘'],
    list : function() {
        var i=0;
        while(i<this.movli.length) {
            document.write('<li><a href="page_'+i+'.html">'+this.movli[i]+'</a></li>');
            i=i+1;
        }
    },
    backColorOnOff : function(self, color1, color2) {
        var target=document.querySelector('#article');
        if(self.value==='ON'){
            target.style.backgroundColor=color1;
            target.style.color=color2;
            self.value='OFF';
        }else{
            target.style.backgroundColor='white';
            target.style.color='black'
            self.value='ON';
        }
    },
    inputArticle : function(hash) {
        fetch(hash).then(function(response) {
            response.text().then(function(text) {
                document.querySelector('#real_article').innerHTML=text;
            })
        })
    }
}