var logLifecycle  = {
    mounted: function() {
        console.log('VM mounted DOM')        
    }
    , created: function () {
        console.log('VM created')
    }
    , updated: function () {
        console.log('VM updated')                
    }
    , destroyed: function () {
        console.log('VM destroyed')                
    }
}
