import { browser } from '@wdio/globals'


/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
export default class Page {
    /**
    * Opens a sub page of the page
    * @param path path of the sub page (e.g. /path/to/page.html)
    */
    

    open (path) {
        return browser.url(`https://automationteststore.com/index.php?rt=account/${path}`)
    }

    userName(){

        var properties = propertiesReader('../Utilities/util.properties');  
        return properties.get("UserName")
    }

    password(){

        var properties = propertiesReader('../Utilities/util.properties');  
        return properties.get("Password")
        
    }
}
