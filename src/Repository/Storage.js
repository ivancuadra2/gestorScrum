import firebase from '../config/firebase';
import { Component } from 'react';

const storage = firebase.storage;
    

class StorageRepo extends Component {
    
    constructor(props) {
        super(props);
          this.state = {

            data: {
            },

        }

    }
    
    getScrumGame(){
        var  ref = storage.ref('Scrum Game.apk');
        //var gsReference = storage.refFromURL('gs://bucket/images/stars.jpg')
        ref.getDownloadURL().then(function(url) {
            // `url` is the download URL for 'images/stars.jpg'
          
            // This can be downloaded directly:
            var xhr = new XMLHttpRequest();
            xhr.responseType = 'blob';
            xhr.onload = function(event) {
              var blob = xhr.response;
              const url = window.URL.createObjectURL(blob);
              const link = document.createElement('a');
              link.href = url;
              link.setAttribute('download', 'Scrum Game.apk'); //or any other extension
              document.body.appendChild(link);
              link.click();
            };
            xhr.open('GET', url);
            xhr.send();
             
          }).catch(function(error) {
              alert('error', error)
          });

    }
    
}
export default new StorageRepo();