# options
>> set the available options
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
>> create counterup object
>> counterup constructor takes in options as a object
let counterup = new CounterUp(options);

# run counterup object
>> run the counterup
counterup.run();
# end
