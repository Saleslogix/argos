#Detail Layouts: onCreate
Every time a Detail View is `refresh()`ed (when it gets new data) it deletes the entire layout and re-constructs it with the new data. This is in contrast to Edit Views where on `refresh()` they merely empty out the inputs. When the layout is being constructed it goes row by row and when a row is added to the DOM it fires the rows `onCreate` function and passes all sorts of data.


##Exercise 1: OnCreate
This exercise is a follow up to the [Detail Layouts: Value](https://github.com/Sage/argos-template/wiki/Value) exercise where the static loading text was set as a placeholder, we will now add a `onCreate` function that gets new data and replaces the placeholder.

##Work it!
1\. In the `createLayout()` function and your `Address` row add the key `onCreate` with a value of `this.requestAddress`:

```javascript
{
    name: 'Address',
    property: 'Address/$key',
    label: this.addressText,
    value: this.loadingText,
    onCreate: this.requestAddress
}
```

2\. Add a new function named requestAddress and its parameters are: row, node, value and entry:

```javascript
requestAddress: function(row, node, value, entry) {
    // row refers to the row object (where we just added onCreate)
    // node is the corresponding HTML Node in the DOM for this row
    // value is set to loading... so not much of a concern
    // entry is the full SData entry response

},
```

3\. While out of scope for going into the details of making SData requests you can just follow along. If you want to know more about the functions used here please see the github repo [SDataJavascriptClientLib](https://github.com/Sage/SDataJavaScriptClientLib). Add the SData request:

```javascript
requestAddress: function(row, node, value, entry) {
   var request = this.createRequest();
   request.setResourceKind('addresses');
   request.setResourceSelector(entry['Address']['$key']);
   request.setQueryArg(Sage.SData.Client.SDataUri.QueryArgNames.Select, 'FullAddress');
   
   request.read({
      success: lang.hitch(this, this.onRequestAddressSuccess, row, node, entry),
      failure: this.onRequestAddressFailure,
      scope: this
   });
},
```

4\. To briefly cover what is going on, we are using the views `createRequest()` function which sets up a single entry request but it is using our views resourceKind, querySelect, etc so we need to change those to be for `Address`. Then it executes (reads) the request passing the callbacks and the scope of the callbacks. The `lang.hitch()` is used to "append" arguments to the onRequestAddressSuccess function.

5\. As we needed the dojo lang module, add that as a dependency and reference:

```javascript
define('Mobile/Template/Views/Account/Detail', [
    'dojo/_base/declare',
    'dojo/_base/lang',
    'dojo/string',
    'Sage/Platform/Mobile/Detail'
], function(
    declare,
    lang,
    string,
    Detail
) {
```

6\. Now define the onAddressRequestSuccess like so:

```javascript
onAddressRequestSuccess: function(row, node, entry, response) {
   var address = response['FullAddress'];
   query('span', node).text(address);
},
```

7\. In the above code we extracted the value and then used query on the HTML Node we got from onCreate. If you inspect the HTML of a row you will see that there are various parts and the text the user see's is within the only child span element. Since we are now using the dojo query module add that as a dependency and reference:

```javascript
define('Mobile/Template/Views/Account/Detail', [
    'dojo/_base/declare',
    'dojo/_base/lang',
    'dojo/query',
    'dojo/string',
    'Sage/Platform/Mobile/Detail'
], function(
    declare,
    lang,
    query,
    string,
    Detail
) {
```

8\. If you now save and load your application and navigate to a Detail entry you should see the text `loading...` until the request is fired and returned. Then it will change to the Full Address property of the Address Key provided by Address/$key.