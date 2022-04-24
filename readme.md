# options
# step1: set the available options
let options = {
    root: element__reference,
    min: start__value,
    max: end__value,
    gap: gap__interval,
    speed: count__speed,
    prefix: prefix__string,
    postfix: postfix__string
};

# instantiate CounterUp
# step2: create counterup object and pass options to CounterUp(options)
let counterup = new CounterUp(options);

# run counterup object
counterup.run();
# end
