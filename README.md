# LoadingScreen &#x1F34E;

```diff
+ Short Documentation
```

:rice: Requirement :
-  sweetalert2 (i am using 10.16.0 version)


:eyes: Usage :
- Put this file to your component directory folder. You can choose to make a new folder or not.
- import this component and place it after an AJAX call. use " .then() " and " .catch() ". (im using Axios)


:phone: Parameters :
- no need parameter, just call this function and magic happens :)

:paperclip: Example :
```js
onCallApi = async () => {
 let url = 'api/blablabla'
 let obj = this.state.data
 
 await Axios.post(url, obj)
 .then(LoadingHandling1()) //or use LoadingHandling2
 .catch(err => {console.log(err))
}
```

:camera: Preview :
- https://i.ibb.co/6ZYHTjr/501d0633-0752-4b76-9d7a-87d42ed52b46.jpg
