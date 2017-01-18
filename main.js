
class solution {
    lastRemaining(n) {
	var vec = []
	for (var i = 1; i <= n; i++)
	    vec.push(i);
	var lastArr = new Array();
	var i = 0
	lastArr.push(n)
	while (lastArr[lastArr.length-1]-this.power(2,i) > 0) {
	    var last
	    if (i == 0) {
		last = lastArr[lastArr.length-1]%2 == 0?lastArr[lastArr.length-1]:lastArr[lastArr.length-1]-1
	    }
	    else {
		if (lastArr[lastArr.length-1]/this.power(2,i)%2 != 0)
		    last = lastArr[lastArr.length-1]-this.power(2,i)
		else {
		    if (i%2 != 0)
			last = lastArr[lastArr.length-1]-this.power(2,i)
		    else
			last = lastArr[lastArr.length-1]
		}
	    }
	    lastArr.push(last);
	    i++;
	}
	console.log(lastArr)
	return lastArr[lastArr.length-1]
    }

    power(base, n) {
	if (n == 0)
	    return 1
	else
	    return base*this.power(base,n-1)
	    
    }
}

var n = 13
var soln = new solution()
var last = soln.lastRemaining(n)
