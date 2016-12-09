
(function() {
'use strict';

function F2(fun)
{
  function wrapper(a) { return function(b) { return fun(a,b); }; }
  wrapper.arity = 2;
  wrapper.func = fun;
  return wrapper;
}

function F3(fun)
{
  function wrapper(a) {
    return function(b) { return function(c) { return fun(a, b, c); }; };
  }
  wrapper.arity = 3;
  wrapper.func = fun;
  return wrapper;
}

function F4(fun)
{
  function wrapper(a) { return function(b) { return function(c) {
    return function(d) { return fun(a, b, c, d); }; }; };
  }
  wrapper.arity = 4;
  wrapper.func = fun;
  return wrapper;
}

function F5(fun)
{
  function wrapper(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return fun(a, b, c, d, e); }; }; }; };
  }
  wrapper.arity = 5;
  wrapper.func = fun;
  return wrapper;
}

function F6(fun)
{
  function wrapper(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return fun(a, b, c, d, e, f); }; }; }; }; };
  }
  wrapper.arity = 6;
  wrapper.func = fun;
  return wrapper;
}

function F7(fun)
{
  function wrapper(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return function(g) { return fun(a, b, c, d, e, f, g); }; }; }; }; }; };
  }
  wrapper.arity = 7;
  wrapper.func = fun;
  return wrapper;
}

function F8(fun)
{
  function wrapper(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return function(g) { return function(h) {
    return fun(a, b, c, d, e, f, g, h); }; }; }; }; }; }; };
  }
  wrapper.arity = 8;
  wrapper.func = fun;
  return wrapper;
}

function F9(fun)
{
  function wrapper(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return function(g) { return function(h) { return function(i) {
    return fun(a, b, c, d, e, f, g, h, i); }; }; }; }; }; }; }; };
  }
  wrapper.arity = 9;
  wrapper.func = fun;
  return wrapper;
}

function A2(fun, a, b)
{
  return fun.arity === 2
    ? fun.func(a, b)
    : fun(a)(b);
}
function A3(fun, a, b, c)
{
  return fun.arity === 3
    ? fun.func(a, b, c)
    : fun(a)(b)(c);
}
function A4(fun, a, b, c, d)
{
  return fun.arity === 4
    ? fun.func(a, b, c, d)
    : fun(a)(b)(c)(d);
}
function A5(fun, a, b, c, d, e)
{
  return fun.arity === 5
    ? fun.func(a, b, c, d, e)
    : fun(a)(b)(c)(d)(e);
}
function A6(fun, a, b, c, d, e, f)
{
  return fun.arity === 6
    ? fun.func(a, b, c, d, e, f)
    : fun(a)(b)(c)(d)(e)(f);
}
function A7(fun, a, b, c, d, e, f, g)
{
  return fun.arity === 7
    ? fun.func(a, b, c, d, e, f, g)
    : fun(a)(b)(c)(d)(e)(f)(g);
}
function A8(fun, a, b, c, d, e, f, g, h)
{
  return fun.arity === 8
    ? fun.func(a, b, c, d, e, f, g, h)
    : fun(a)(b)(c)(d)(e)(f)(g)(h);
}
function A9(fun, a, b, c, d, e, f, g, h, i)
{
  return fun.arity === 9
    ? fun.func(a, b, c, d, e, f, g, h, i)
    : fun(a)(b)(c)(d)(e)(f)(g)(h)(i);
}

var _elm_lang$lazy$Native_Lazy = function() {

function memoize(thunk)
{
    var value;
    var isForced = false;
    return function(tuple0) {
        if (!isForced) {
            value = thunk(tuple0);
            isForced = true;
        }
        return value;
    };
}

return {
    memoize: memoize
};

}();

//import Native.Utils //

var _elm_lang$core$Native_Basics = function() {

function div(a, b)
{
	return (a / b) | 0;
}
function rem(a, b)
{
	return a % b;
}
function mod(a, b)
{
	if (b === 0)
	{
		throw new Error('Cannot perform mod 0. Division by zero error.');
	}
	var r = a % b;
	var m = a === 0 ? 0 : (b > 0 ? (a >= 0 ? r : r + b) : -mod(-a, -b));

	return m === b ? 0 : m;
}
function logBase(base, n)
{
	return Math.log(n) / Math.log(base);
}
function negate(n)
{
	return -n;
}
function abs(n)
{
	return n < 0 ? -n : n;
}

function min(a, b)
{
	return _elm_lang$core$Native_Utils.cmp(a, b) < 0 ? a : b;
}
function max(a, b)
{
	return _elm_lang$core$Native_Utils.cmp(a, b) > 0 ? a : b;
}
function clamp(lo, hi, n)
{
	return _elm_lang$core$Native_Utils.cmp(n, lo) < 0
		? lo
		: _elm_lang$core$Native_Utils.cmp(n, hi) > 0
			? hi
			: n;
}

var ord = ['LT', 'EQ', 'GT'];

function compare(x, y)
{
	return { ctor: ord[_elm_lang$core$Native_Utils.cmp(x, y) + 1] };
}

function xor(a, b)
{
	return a !== b;
}
function not(b)
{
	return !b;
}
function isInfinite(n)
{
	return n === Infinity || n === -Infinity;
}

function truncate(n)
{
	return n | 0;
}

function degrees(d)
{
	return d * Math.PI / 180;
}
function turns(t)
{
	return 2 * Math.PI * t;
}
function fromPolar(point)
{
	var r = point._0;
	var t = point._1;
	return _elm_lang$core$Native_Utils.Tuple2(r * Math.cos(t), r * Math.sin(t));
}
function toPolar(point)
{
	var x = point._0;
	var y = point._1;
	return _elm_lang$core$Native_Utils.Tuple2(Math.sqrt(x * x + y * y), Math.atan2(y, x));
}

return {
	div: F2(div),
	rem: F2(rem),
	mod: F2(mod),

	pi: Math.PI,
	e: Math.E,
	cos: Math.cos,
	sin: Math.sin,
	tan: Math.tan,
	acos: Math.acos,
	asin: Math.asin,
	atan: Math.atan,
	atan2: F2(Math.atan2),

	degrees: degrees,
	turns: turns,
	fromPolar: fromPolar,
	toPolar: toPolar,

	sqrt: Math.sqrt,
	logBase: F2(logBase),
	negate: negate,
	abs: abs,
	min: F2(min),
	max: F2(max),
	clamp: F3(clamp),
	compare: F2(compare),

	xor: F2(xor),
	not: not,

	truncate: truncate,
	ceiling: Math.ceil,
	floor: Math.floor,
	round: Math.round,
	toFloat: function(x) { return x; },
	isNaN: isNaN,
	isInfinite: isInfinite
};

}();
//import //

var _elm_lang$core$Native_Utils = function() {

// COMPARISONS

function eq(x, y)
{
	var stack = [];
	var isEqual = eqHelp(x, y, 0, stack);
	var pair;
	while (isEqual && (pair = stack.pop()))
	{
		isEqual = eqHelp(pair.x, pair.y, 0, stack);
	}
	return isEqual;
}


function eqHelp(x, y, depth, stack)
{
	if (depth > 100)
	{
		stack.push({ x: x, y: y });
		return true;
	}

	if (x === y)
	{
		return true;
	}

	if (typeof x !== 'object')
	{
		if (typeof x === 'function')
		{
			throw new Error(
				'Trying to use `(==)` on functions. There is no way to know if functions are "the same" in the Elm sense.'
				+ ' Read more about this at http://package.elm-lang.org/packages/elm-lang/core/latest/Basics#=='
				+ ' which describes why it is this way and what the better version will look like.'
			);
		}
		return false;
	}

	if (x === null || y === null)
	{
		return false
	}

	if (x instanceof Date)
	{
		return x.getTime() === y.getTime();
	}

	if (!('ctor' in x))
	{
		for (var key in x)
		{
			if (!eqHelp(x[key], y[key], depth + 1, stack))
			{
				return false;
			}
		}
		return true;
	}

	// convert Dicts and Sets to lists
	if (x.ctor === 'RBNode_elm_builtin' || x.ctor === 'RBEmpty_elm_builtin')
	{
		x = _elm_lang$core$Dict$toList(x);
		y = _elm_lang$core$Dict$toList(y);
	}
	if (x.ctor === 'Set_elm_builtin')
	{
		x = _elm_lang$core$Set$toList(x);
		y = _elm_lang$core$Set$toList(y);
	}

	// check if lists are equal without recursion
	if (x.ctor === '::')
	{
		var a = x;
		var b = y;
		while (a.ctor === '::' && b.ctor === '::')
		{
			if (!eqHelp(a._0, b._0, depth + 1, stack))
			{
				return false;
			}
			a = a._1;
			b = b._1;
		}
		return a.ctor === b.ctor;
	}

	// check if Arrays are equal
	if (x.ctor === '_Array')
	{
		var xs = _elm_lang$core$Native_Array.toJSArray(x);
		var ys = _elm_lang$core$Native_Array.toJSArray(y);
		if (xs.length !== ys.length)
		{
			return false;
		}
		for (var i = 0; i < xs.length; i++)
		{
			if (!eqHelp(xs[i], ys[i], depth + 1, stack))
			{
				return false;
			}
		}
		return true;
	}

	if (!eqHelp(x.ctor, y.ctor, depth + 1, stack))
	{
		return false;
	}

	for (var key in x)
	{
		if (!eqHelp(x[key], y[key], depth + 1, stack))
		{
			return false;
		}
	}
	return true;
}

// Code in Generate/JavaScript.hs, Basics.js, and List.js depends on
// the particular integer values assigned to LT, EQ, and GT.

var LT = -1, EQ = 0, GT = 1;

function cmp(x, y)
{
	if (typeof x !== 'object')
	{
		return x === y ? EQ : x < y ? LT : GT;
	}

	if (x instanceof String)
	{
		var a = x.valueOf();
		var b = y.valueOf();
		return a === b ? EQ : a < b ? LT : GT;
	}

	if (x.ctor === '::' || x.ctor === '[]')
	{
		while (x.ctor === '::' && y.ctor === '::')
		{
			var ord = cmp(x._0, y._0);
			if (ord !== EQ)
			{
				return ord;
			}
			x = x._1;
			y = y._1;
		}
		return x.ctor === y.ctor ? EQ : x.ctor === '[]' ? LT : GT;
	}

	if (x.ctor.slice(0, 6) === '_Tuple')
	{
		var ord;
		var n = x.ctor.slice(6) - 0;
		var err = 'cannot compare tuples with more than 6 elements.';
		if (n === 0) return EQ;
		if (n >= 1) { ord = cmp(x._0, y._0); if (ord !== EQ) return ord;
		if (n >= 2) { ord = cmp(x._1, y._1); if (ord !== EQ) return ord;
		if (n >= 3) { ord = cmp(x._2, y._2); if (ord !== EQ) return ord;
		if (n >= 4) { ord = cmp(x._3, y._3); if (ord !== EQ) return ord;
		if (n >= 5) { ord = cmp(x._4, y._4); if (ord !== EQ) return ord;
		if (n >= 6) { ord = cmp(x._5, y._5); if (ord !== EQ) return ord;
		if (n >= 7) throw new Error('Comparison error: ' + err); } } } } } }
		return EQ;
	}

	throw new Error(
		'Comparison error: comparison is only defined on ints, '
		+ 'floats, times, chars, strings, lists of comparable values, '
		+ 'and tuples of comparable values.'
	);
}


// COMMON VALUES

var Tuple0 = {
	ctor: '_Tuple0'
};

function Tuple2(x, y)
{
	return {
		ctor: '_Tuple2',
		_0: x,
		_1: y
	};
}

function chr(c)
{
	return new String(c);
}


// GUID

var count = 0;
function guid(_)
{
	return count++;
}


// RECORDS

function update(oldRecord, updatedFields)
{
	var newRecord = {};

	for (var key in oldRecord)
	{
		newRecord[key] = oldRecord[key];
	}

	for (var key in updatedFields)
	{
		newRecord[key] = updatedFields[key];
	}

	return newRecord;
}


//// LIST STUFF ////

var Nil = { ctor: '[]' };

function Cons(hd, tl)
{
	return {
		ctor: '::',
		_0: hd,
		_1: tl
	};
}

function append(xs, ys)
{
	// append Strings
	if (typeof xs === 'string')
	{
		return xs + ys;
	}

	// append Lists
	if (xs.ctor === '[]')
	{
		return ys;
	}
	var root = Cons(xs._0, Nil);
	var curr = root;
	xs = xs._1;
	while (xs.ctor !== '[]')
	{
		curr._1 = Cons(xs._0, Nil);
		xs = xs._1;
		curr = curr._1;
	}
	curr._1 = ys;
	return root;
}


// CRASHES

function crash(moduleName, region)
{
	return function(message) {
		throw new Error(
			'Ran into a `Debug.crash` in module `' + moduleName + '` ' + regionToString(region) + '\n'
			+ 'The message provided by the code author is:\n\n    '
			+ message
		);
	};
}

function crashCase(moduleName, region, value)
{
	return function(message) {
		throw new Error(
			'Ran into a `Debug.crash` in module `' + moduleName + '`\n\n'
			+ 'This was caused by the `case` expression ' + regionToString(region) + '.\n'
			+ 'One of the branches ended with a crash and the following value got through:\n\n    ' + toString(value) + '\n\n'
			+ 'The message provided by the code author is:\n\n    '
			+ message
		);
	};
}

function regionToString(region)
{
	if (region.start.line == region.end.line)
	{
		return 'on line ' + region.start.line;
	}
	return 'between lines ' + region.start.line + ' and ' + region.end.line;
}


// TO STRING

function toString(v)
{
	var type = typeof v;
	if (type === 'function')
	{
		var name = v.func ? v.func.name : v.name;
		return '<function' + (name === '' ? '' : ':') + name + '>';
	}

	if (type === 'boolean')
	{
		return v ? 'True' : 'False';
	}

	if (type === 'number')
	{
		return v + '';
	}

	if (v instanceof String)
	{
		return '\'' + addSlashes(v, true) + '\'';
	}

	if (type === 'string')
	{
		return '"' + addSlashes(v, false) + '"';
	}

	if (v === null)
	{
		return 'null';
	}

	if (type === 'object' && 'ctor' in v)
	{
		var ctorStarter = v.ctor.substring(0, 5);

		if (ctorStarter === '_Tupl')
		{
			var output = [];
			for (var k in v)
			{
				if (k === 'ctor') continue;
				output.push(toString(v[k]));
			}
			return '(' + output.join(',') + ')';
		}

		if (ctorStarter === '_Task')
		{
			return '<task>'
		}

		if (v.ctor === '_Array')
		{
			var list = _elm_lang$core$Array$toList(v);
			return 'Array.fromList ' + toString(list);
		}

		if (v.ctor === '<decoder>')
		{
			return '<decoder>';
		}

		if (v.ctor === '_Process')
		{
			return '<process:' + v.id + '>';
		}

		if (v.ctor === '::')
		{
			var output = '[' + toString(v._0);
			v = v._1;
			while (v.ctor === '::')
			{
				output += ',' + toString(v._0);
				v = v._1;
			}
			return output + ']';
		}

		if (v.ctor === '[]')
		{
			return '[]';
		}

		if (v.ctor === 'Set_elm_builtin')
		{
			return 'Set.fromList ' + toString(_elm_lang$core$Set$toList(v));
		}

		if (v.ctor === 'RBNode_elm_builtin' || v.ctor === 'RBEmpty_elm_builtin')
		{
			return 'Dict.fromList ' + toString(_elm_lang$core$Dict$toList(v));
		}

		var output = '';
		for (var i in v)
		{
			if (i === 'ctor') continue;
			var str = toString(v[i]);
			var c0 = str[0];
			var parenless = c0 === '{' || c0 === '(' || c0 === '<' || c0 === '"' || str.indexOf(' ') < 0;
			output += ' ' + (parenless ? str : '(' + str + ')');
		}
		return v.ctor + output;
	}

	if (type === 'object')
	{
		if (v instanceof Date)
		{
			return '<' + v.toString() + '>';
		}

		if (v.elm_web_socket)
		{
			return '<websocket>';
		}

		var output = [];
		for (var k in v)
		{
			output.push(k + ' = ' + toString(v[k]));
		}
		if (output.length === 0)
		{
			return '{}';
		}
		return '{ ' + output.join(', ') + ' }';
	}

	return '<internal structure>';
}

function addSlashes(str, isChar)
{
	var s = str.replace(/\\/g, '\\\\')
			  .replace(/\n/g, '\\n')
			  .replace(/\t/g, '\\t')
			  .replace(/\r/g, '\\r')
			  .replace(/\v/g, '\\v')
			  .replace(/\0/g, '\\0');
	if (isChar)
	{
		return s.replace(/\'/g, '\\\'');
	}
	else
	{
		return s.replace(/\"/g, '\\"');
	}
}


return {
	eq: eq,
	cmp: cmp,
	Tuple0: Tuple0,
	Tuple2: Tuple2,
	chr: chr,
	update: update,
	guid: guid,

	append: F2(append),

	crash: crash,
	crashCase: crashCase,

	toString: toString
};

}();
var _elm_lang$core$Basics$never = function (_p0) {
	never:
	while (true) {
		var _p1 = _p0;
		var _v1 = _p1._0;
		_p0 = _v1;
		continue never;
	}
};
var _elm_lang$core$Basics$uncurry = F2(
	function (f, _p2) {
		var _p3 = _p2;
		return A2(f, _p3._0, _p3._1);
	});
var _elm_lang$core$Basics$curry = F3(
	function (f, a, b) {
		return f(
			{ctor: '_Tuple2', _0: a, _1: b});
	});
var _elm_lang$core$Basics$flip = F3(
	function (f, b, a) {
		return A2(f, a, b);
	});
var _elm_lang$core$Basics$always = F2(
	function (a, _p4) {
		return a;
	});
var _elm_lang$core$Basics$identity = function (x) {
	return x;
};
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['<|'] = F2(
	function (f, x) {
		return f(x);
	});
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['|>'] = F2(
	function (x, f) {
		return f(x);
	});
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['>>'] = F3(
	function (f, g, x) {
		return g(
			f(x));
	});
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['<<'] = F3(
	function (g, f, x) {
		return g(
			f(x));
	});
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['++'] = _elm_lang$core$Native_Utils.append;
var _elm_lang$core$Basics$toString = _elm_lang$core$Native_Utils.toString;
var _elm_lang$core$Basics$isInfinite = _elm_lang$core$Native_Basics.isInfinite;
var _elm_lang$core$Basics$isNaN = _elm_lang$core$Native_Basics.isNaN;
var _elm_lang$core$Basics$toFloat = _elm_lang$core$Native_Basics.toFloat;
var _elm_lang$core$Basics$ceiling = _elm_lang$core$Native_Basics.ceiling;
var _elm_lang$core$Basics$floor = _elm_lang$core$Native_Basics.floor;
var _elm_lang$core$Basics$truncate = _elm_lang$core$Native_Basics.truncate;
var _elm_lang$core$Basics$round = _elm_lang$core$Native_Basics.round;
var _elm_lang$core$Basics$not = _elm_lang$core$Native_Basics.not;
var _elm_lang$core$Basics$xor = _elm_lang$core$Native_Basics.xor;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['||'] = _elm_lang$core$Native_Basics.or;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['&&'] = _elm_lang$core$Native_Basics.and;
var _elm_lang$core$Basics$max = _elm_lang$core$Native_Basics.max;
var _elm_lang$core$Basics$min = _elm_lang$core$Native_Basics.min;
var _elm_lang$core$Basics$compare = _elm_lang$core$Native_Basics.compare;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['>='] = _elm_lang$core$Native_Basics.ge;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['<='] = _elm_lang$core$Native_Basics.le;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['>'] = _elm_lang$core$Native_Basics.gt;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['<'] = _elm_lang$core$Native_Basics.lt;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['/='] = _elm_lang$core$Native_Basics.neq;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['=='] = _elm_lang$core$Native_Basics.eq;
var _elm_lang$core$Basics$e = _elm_lang$core$Native_Basics.e;
var _elm_lang$core$Basics$pi = _elm_lang$core$Native_Basics.pi;
var _elm_lang$core$Basics$clamp = _elm_lang$core$Native_Basics.clamp;
var _elm_lang$core$Basics$logBase = _elm_lang$core$Native_Basics.logBase;
var _elm_lang$core$Basics$abs = _elm_lang$core$Native_Basics.abs;
var _elm_lang$core$Basics$negate = _elm_lang$core$Native_Basics.negate;
var _elm_lang$core$Basics$sqrt = _elm_lang$core$Native_Basics.sqrt;
var _elm_lang$core$Basics$atan2 = _elm_lang$core$Native_Basics.atan2;
var _elm_lang$core$Basics$atan = _elm_lang$core$Native_Basics.atan;
var _elm_lang$core$Basics$asin = _elm_lang$core$Native_Basics.asin;
var _elm_lang$core$Basics$acos = _elm_lang$core$Native_Basics.acos;
var _elm_lang$core$Basics$tan = _elm_lang$core$Native_Basics.tan;
var _elm_lang$core$Basics$sin = _elm_lang$core$Native_Basics.sin;
var _elm_lang$core$Basics$cos = _elm_lang$core$Native_Basics.cos;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['^'] = _elm_lang$core$Native_Basics.exp;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['%'] = _elm_lang$core$Native_Basics.mod;
var _elm_lang$core$Basics$rem = _elm_lang$core$Native_Basics.rem;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['//'] = _elm_lang$core$Native_Basics.div;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['/'] = _elm_lang$core$Native_Basics.floatDiv;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['*'] = _elm_lang$core$Native_Basics.mul;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['-'] = _elm_lang$core$Native_Basics.sub;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['+'] = _elm_lang$core$Native_Basics.add;
var _elm_lang$core$Basics$toPolar = _elm_lang$core$Native_Basics.toPolar;
var _elm_lang$core$Basics$fromPolar = _elm_lang$core$Native_Basics.fromPolar;
var _elm_lang$core$Basics$turns = _elm_lang$core$Native_Basics.turns;
var _elm_lang$core$Basics$degrees = _elm_lang$core$Native_Basics.degrees;
var _elm_lang$core$Basics$radians = function (t) {
	return t;
};
var _elm_lang$core$Basics$GT = {ctor: 'GT'};
var _elm_lang$core$Basics$EQ = {ctor: 'EQ'};
var _elm_lang$core$Basics$LT = {ctor: 'LT'};
var _elm_lang$core$Basics$JustOneMore = function (a) {
	return {ctor: 'JustOneMore', _0: a};
};

//import Native.Utils //

var _elm_lang$core$Native_Debug = function() {

function log(tag, value)
{
	var msg = tag + ': ' + _elm_lang$core$Native_Utils.toString(value);
	var process = process || {};
	if (process.stdout)
	{
		process.stdout.write(msg);
	}
	else
	{
		console.log(msg);
	}
	return value;
}

function crash(message)
{
	throw new Error(message);
}

return {
	crash: crash,
	log: F2(log)
};

}();
var _elm_lang$core$Debug$crash = _elm_lang$core$Native_Debug.crash;
var _elm_lang$core$Debug$log = _elm_lang$core$Native_Debug.log;

var _elm_lang$core$Maybe$withDefault = F2(
	function ($default, maybe) {
		var _p0 = maybe;
		if (_p0.ctor === 'Just') {
			return _p0._0;
		} else {
			return $default;
		}
	});
var _elm_lang$core$Maybe$Nothing = {ctor: 'Nothing'};
var _elm_lang$core$Maybe$andThen = F2(
	function (callback, maybeValue) {
		var _p1 = maybeValue;
		if (_p1.ctor === 'Just') {
			return callback(_p1._0);
		} else {
			return _elm_lang$core$Maybe$Nothing;
		}
	});
var _elm_lang$core$Maybe$Just = function (a) {
	return {ctor: 'Just', _0: a};
};
var _elm_lang$core$Maybe$map = F2(
	function (f, maybe) {
		var _p2 = maybe;
		if (_p2.ctor === 'Just') {
			return _elm_lang$core$Maybe$Just(
				f(_p2._0));
		} else {
			return _elm_lang$core$Maybe$Nothing;
		}
	});
var _elm_lang$core$Maybe$map2 = F3(
	function (func, ma, mb) {
		var _p3 = {ctor: '_Tuple2', _0: ma, _1: mb};
		if (((_p3.ctor === '_Tuple2') && (_p3._0.ctor === 'Just')) && (_p3._1.ctor === 'Just')) {
			return _elm_lang$core$Maybe$Just(
				A2(func, _p3._0._0, _p3._1._0));
		} else {
			return _elm_lang$core$Maybe$Nothing;
		}
	});
var _elm_lang$core$Maybe$map3 = F4(
	function (func, ma, mb, mc) {
		var _p4 = {ctor: '_Tuple3', _0: ma, _1: mb, _2: mc};
		if ((((_p4.ctor === '_Tuple3') && (_p4._0.ctor === 'Just')) && (_p4._1.ctor === 'Just')) && (_p4._2.ctor === 'Just')) {
			return _elm_lang$core$Maybe$Just(
				A3(func, _p4._0._0, _p4._1._0, _p4._2._0));
		} else {
			return _elm_lang$core$Maybe$Nothing;
		}
	});
var _elm_lang$core$Maybe$map4 = F5(
	function (func, ma, mb, mc, md) {
		var _p5 = {ctor: '_Tuple4', _0: ma, _1: mb, _2: mc, _3: md};
		if (((((_p5.ctor === '_Tuple4') && (_p5._0.ctor === 'Just')) && (_p5._1.ctor === 'Just')) && (_p5._2.ctor === 'Just')) && (_p5._3.ctor === 'Just')) {
			return _elm_lang$core$Maybe$Just(
				A4(func, _p5._0._0, _p5._1._0, _p5._2._0, _p5._3._0));
		} else {
			return _elm_lang$core$Maybe$Nothing;
		}
	});
var _elm_lang$core$Maybe$map5 = F6(
	function (func, ma, mb, mc, md, me) {
		var _p6 = {ctor: '_Tuple5', _0: ma, _1: mb, _2: mc, _3: md, _4: me};
		if ((((((_p6.ctor === '_Tuple5') && (_p6._0.ctor === 'Just')) && (_p6._1.ctor === 'Just')) && (_p6._2.ctor === 'Just')) && (_p6._3.ctor === 'Just')) && (_p6._4.ctor === 'Just')) {
			return _elm_lang$core$Maybe$Just(
				A5(func, _p6._0._0, _p6._1._0, _p6._2._0, _p6._3._0, _p6._4._0));
		} else {
			return _elm_lang$core$Maybe$Nothing;
		}
	});

//import Native.Utils //

var _elm_lang$core$Native_List = function() {

var Nil = { ctor: '[]' };

function Cons(hd, tl)
{
	return { ctor: '::', _0: hd, _1: tl };
}

function fromArray(arr)
{
	var out = Nil;
	for (var i = arr.length; i--; )
	{
		out = Cons(arr[i], out);
	}
	return out;
}

function toArray(xs)
{
	var out = [];
	while (xs.ctor !== '[]')
	{
		out.push(xs._0);
		xs = xs._1;
	}
	return out;
}

function foldr(f, b, xs)
{
	var arr = toArray(xs);
	var acc = b;
	for (var i = arr.length; i--; )
	{
		acc = A2(f, arr[i], acc);
	}
	return acc;
}

function map2(f, xs, ys)
{
	var arr = [];
	while (xs.ctor !== '[]' && ys.ctor !== '[]')
	{
		arr.push(A2(f, xs._0, ys._0));
		xs = xs._1;
		ys = ys._1;
	}
	return fromArray(arr);
}

function map3(f, xs, ys, zs)
{
	var arr = [];
	while (xs.ctor !== '[]' && ys.ctor !== '[]' && zs.ctor !== '[]')
	{
		arr.push(A3(f, xs._0, ys._0, zs._0));
		xs = xs._1;
		ys = ys._1;
		zs = zs._1;
	}
	return fromArray(arr);
}

function map4(f, ws, xs, ys, zs)
{
	var arr = [];
	while (   ws.ctor !== '[]'
		   && xs.ctor !== '[]'
		   && ys.ctor !== '[]'
		   && zs.ctor !== '[]')
	{
		arr.push(A4(f, ws._0, xs._0, ys._0, zs._0));
		ws = ws._1;
		xs = xs._1;
		ys = ys._1;
		zs = zs._1;
	}
	return fromArray(arr);
}

function map5(f, vs, ws, xs, ys, zs)
{
	var arr = [];
	while (   vs.ctor !== '[]'
		   && ws.ctor !== '[]'
		   && xs.ctor !== '[]'
		   && ys.ctor !== '[]'
		   && zs.ctor !== '[]')
	{
		arr.push(A5(f, vs._0, ws._0, xs._0, ys._0, zs._0));
		vs = vs._1;
		ws = ws._1;
		xs = xs._1;
		ys = ys._1;
		zs = zs._1;
	}
	return fromArray(arr);
}

function sortBy(f, xs)
{
	return fromArray(toArray(xs).sort(function(a, b) {
		return _elm_lang$core$Native_Utils.cmp(f(a), f(b));
	}));
}

function sortWith(f, xs)
{
	return fromArray(toArray(xs).sort(function(a, b) {
		var ord = f(a)(b).ctor;
		return ord === 'EQ' ? 0 : ord === 'LT' ? -1 : 1;
	}));
}

return {
	Nil: Nil,
	Cons: Cons,
	cons: F2(Cons),
	toArray: toArray,
	fromArray: fromArray,

	foldr: F3(foldr),

	map2: F3(map2),
	map3: F4(map3),
	map4: F5(map4),
	map5: F6(map5),
	sortBy: F2(sortBy),
	sortWith: F2(sortWith)
};

}();
var _elm_lang$core$List$sortWith = _elm_lang$core$Native_List.sortWith;
var _elm_lang$core$List$sortBy = _elm_lang$core$Native_List.sortBy;
var _elm_lang$core$List$sort = function (xs) {
	return A2(_elm_lang$core$List$sortBy, _elm_lang$core$Basics$identity, xs);
};
var _elm_lang$core$List$drop = F2(
	function (n, list) {
		drop:
		while (true) {
			if (_elm_lang$core$Native_Utils.cmp(n, 0) < 1) {
				return list;
			} else {
				var _p0 = list;
				if (_p0.ctor === '[]') {
					return list;
				} else {
					var _v1 = n - 1,
						_v2 = _p0._1;
					n = _v1;
					list = _v2;
					continue drop;
				}
			}
		}
	});
var _elm_lang$core$List$map5 = _elm_lang$core$Native_List.map5;
var _elm_lang$core$List$map4 = _elm_lang$core$Native_List.map4;
var _elm_lang$core$List$map3 = _elm_lang$core$Native_List.map3;
var _elm_lang$core$List$map2 = _elm_lang$core$Native_List.map2;
var _elm_lang$core$List$any = F2(
	function (isOkay, list) {
		any:
		while (true) {
			var _p1 = list;
			if (_p1.ctor === '[]') {
				return false;
			} else {
				if (isOkay(_p1._0)) {
					return true;
				} else {
					var _v4 = isOkay,
						_v5 = _p1._1;
					isOkay = _v4;
					list = _v5;
					continue any;
				}
			}
		}
	});
var _elm_lang$core$List$all = F2(
	function (isOkay, list) {
		return !A2(
			_elm_lang$core$List$any,
			function (_p2) {
				return !isOkay(_p2);
			},
			list);
	});
var _elm_lang$core$List$foldr = _elm_lang$core$Native_List.foldr;
var _elm_lang$core$List$foldl = F3(
	function (func, acc, list) {
		foldl:
		while (true) {
			var _p3 = list;
			if (_p3.ctor === '[]') {
				return acc;
			} else {
				var _v7 = func,
					_v8 = A2(func, _p3._0, acc),
					_v9 = _p3._1;
				func = _v7;
				acc = _v8;
				list = _v9;
				continue foldl;
			}
		}
	});
var _elm_lang$core$List$length = function (xs) {
	return A3(
		_elm_lang$core$List$foldl,
		F2(
			function (_p4, i) {
				return i + 1;
			}),
		0,
		xs);
};
var _elm_lang$core$List$sum = function (numbers) {
	return A3(
		_elm_lang$core$List$foldl,
		F2(
			function (x, y) {
				return x + y;
			}),
		0,
		numbers);
};
var _elm_lang$core$List$product = function (numbers) {
	return A3(
		_elm_lang$core$List$foldl,
		F2(
			function (x, y) {
				return x * y;
			}),
		1,
		numbers);
};
var _elm_lang$core$List$maximum = function (list) {
	var _p5 = list;
	if (_p5.ctor === '::') {
		return _elm_lang$core$Maybe$Just(
			A3(_elm_lang$core$List$foldl, _elm_lang$core$Basics$max, _p5._0, _p5._1));
	} else {
		return _elm_lang$core$Maybe$Nothing;
	}
};
var _elm_lang$core$List$minimum = function (list) {
	var _p6 = list;
	if (_p6.ctor === '::') {
		return _elm_lang$core$Maybe$Just(
			A3(_elm_lang$core$List$foldl, _elm_lang$core$Basics$min, _p6._0, _p6._1));
	} else {
		return _elm_lang$core$Maybe$Nothing;
	}
};
var _elm_lang$core$List$member = F2(
	function (x, xs) {
		return A2(
			_elm_lang$core$List$any,
			function (a) {
				return _elm_lang$core$Native_Utils.eq(a, x);
			},
			xs);
	});
var _elm_lang$core$List$isEmpty = function (xs) {
	var _p7 = xs;
	if (_p7.ctor === '[]') {
		return true;
	} else {
		return false;
	}
};
var _elm_lang$core$List$tail = function (list) {
	var _p8 = list;
	if (_p8.ctor === '::') {
		return _elm_lang$core$Maybe$Just(_p8._1);
	} else {
		return _elm_lang$core$Maybe$Nothing;
	}
};
var _elm_lang$core$List$head = function (list) {
	var _p9 = list;
	if (_p9.ctor === '::') {
		return _elm_lang$core$Maybe$Just(_p9._0);
	} else {
		return _elm_lang$core$Maybe$Nothing;
	}
};
var _elm_lang$core$List_ops = _elm_lang$core$List_ops || {};
_elm_lang$core$List_ops['::'] = _elm_lang$core$Native_List.cons;
var _elm_lang$core$List$map = F2(
	function (f, xs) {
		return A3(
			_elm_lang$core$List$foldr,
			F2(
				function (x, acc) {
					return {
						ctor: '::',
						_0: f(x),
						_1: acc
					};
				}),
			{ctor: '[]'},
			xs);
	});
var _elm_lang$core$List$filter = F2(
	function (pred, xs) {
		var conditionalCons = F2(
			function (front, back) {
				return pred(front) ? {ctor: '::', _0: front, _1: back} : back;
			});
		return A3(
			_elm_lang$core$List$foldr,
			conditionalCons,
			{ctor: '[]'},
			xs);
	});
var _elm_lang$core$List$maybeCons = F3(
	function (f, mx, xs) {
		var _p10 = f(mx);
		if (_p10.ctor === 'Just') {
			return {ctor: '::', _0: _p10._0, _1: xs};
		} else {
			return xs;
		}
	});
var _elm_lang$core$List$filterMap = F2(
	function (f, xs) {
		return A3(
			_elm_lang$core$List$foldr,
			_elm_lang$core$List$maybeCons(f),
			{ctor: '[]'},
			xs);
	});
var _elm_lang$core$List$reverse = function (list) {
	return A3(
		_elm_lang$core$List$foldl,
		F2(
			function (x, y) {
				return {ctor: '::', _0: x, _1: y};
			}),
		{ctor: '[]'},
		list);
};
var _elm_lang$core$List$scanl = F3(
	function (f, b, xs) {
		var scan1 = F2(
			function (x, accAcc) {
				var _p11 = accAcc;
				if (_p11.ctor === '::') {
					return {
						ctor: '::',
						_0: A2(f, x, _p11._0),
						_1: accAcc
					};
				} else {
					return {ctor: '[]'};
				}
			});
		return _elm_lang$core$List$reverse(
			A3(
				_elm_lang$core$List$foldl,
				scan1,
				{
					ctor: '::',
					_0: b,
					_1: {ctor: '[]'}
				},
				xs));
	});
var _elm_lang$core$List$append = F2(
	function (xs, ys) {
		var _p12 = ys;
		if (_p12.ctor === '[]') {
			return xs;
		} else {
			return A3(
				_elm_lang$core$List$foldr,
				F2(
					function (x, y) {
						return {ctor: '::', _0: x, _1: y};
					}),
				ys,
				xs);
		}
	});
var _elm_lang$core$List$concat = function (lists) {
	return A3(
		_elm_lang$core$List$foldr,
		_elm_lang$core$List$append,
		{ctor: '[]'},
		lists);
};
var _elm_lang$core$List$concatMap = F2(
	function (f, list) {
		return _elm_lang$core$List$concat(
			A2(_elm_lang$core$List$map, f, list));
	});
var _elm_lang$core$List$partition = F2(
	function (pred, list) {
		var step = F2(
			function (x, _p13) {
				var _p14 = _p13;
				var _p16 = _p14._0;
				var _p15 = _p14._1;
				return pred(x) ? {
					ctor: '_Tuple2',
					_0: {ctor: '::', _0: x, _1: _p16},
					_1: _p15
				} : {
					ctor: '_Tuple2',
					_0: _p16,
					_1: {ctor: '::', _0: x, _1: _p15}
				};
			});
		return A3(
			_elm_lang$core$List$foldr,
			step,
			{
				ctor: '_Tuple2',
				_0: {ctor: '[]'},
				_1: {ctor: '[]'}
			},
			list);
	});
var _elm_lang$core$List$unzip = function (pairs) {
	var step = F2(
		function (_p18, _p17) {
			var _p19 = _p18;
			var _p20 = _p17;
			return {
				ctor: '_Tuple2',
				_0: {ctor: '::', _0: _p19._0, _1: _p20._0},
				_1: {ctor: '::', _0: _p19._1, _1: _p20._1}
			};
		});
	return A3(
		_elm_lang$core$List$foldr,
		step,
		{
			ctor: '_Tuple2',
			_0: {ctor: '[]'},
			_1: {ctor: '[]'}
		},
		pairs);
};
var _elm_lang$core$List$intersperse = F2(
	function (sep, xs) {
		var _p21 = xs;
		if (_p21.ctor === '[]') {
			return {ctor: '[]'};
		} else {
			var step = F2(
				function (x, rest) {
					return {
						ctor: '::',
						_0: sep,
						_1: {ctor: '::', _0: x, _1: rest}
					};
				});
			var spersed = A3(
				_elm_lang$core$List$foldr,
				step,
				{ctor: '[]'},
				_p21._1);
			return {ctor: '::', _0: _p21._0, _1: spersed};
		}
	});
var _elm_lang$core$List$takeReverse = F3(
	function (n, list, taken) {
		takeReverse:
		while (true) {
			if (_elm_lang$core$Native_Utils.cmp(n, 0) < 1) {
				return taken;
			} else {
				var _p22 = list;
				if (_p22.ctor === '[]') {
					return taken;
				} else {
					var _v23 = n - 1,
						_v24 = _p22._1,
						_v25 = {ctor: '::', _0: _p22._0, _1: taken};
					n = _v23;
					list = _v24;
					taken = _v25;
					continue takeReverse;
				}
			}
		}
	});
var _elm_lang$core$List$takeTailRec = F2(
	function (n, list) {
		return _elm_lang$core$List$reverse(
			A3(
				_elm_lang$core$List$takeReverse,
				n,
				list,
				{ctor: '[]'}));
	});
var _elm_lang$core$List$takeFast = F3(
	function (ctr, n, list) {
		if (_elm_lang$core$Native_Utils.cmp(n, 0) < 1) {
			return {ctor: '[]'};
		} else {
			var _p23 = {ctor: '_Tuple2', _0: n, _1: list};
			_v26_5:
			do {
				_v26_1:
				do {
					if (_p23.ctor === '_Tuple2') {
						if (_p23._1.ctor === '[]') {
							return list;
						} else {
							if (_p23._1._1.ctor === '::') {
								switch (_p23._0) {
									case 1:
										break _v26_1;
									case 2:
										return {
											ctor: '::',
											_0: _p23._1._0,
											_1: {
												ctor: '::',
												_0: _p23._1._1._0,
												_1: {ctor: '[]'}
											}
										};
									case 3:
										if (_p23._1._1._1.ctor === '::') {
											return {
												ctor: '::',
												_0: _p23._1._0,
												_1: {
													ctor: '::',
													_0: _p23._1._1._0,
													_1: {
														ctor: '::',
														_0: _p23._1._1._1._0,
														_1: {ctor: '[]'}
													}
												}
											};
										} else {
											break _v26_5;
										}
									default:
										if ((_p23._1._1._1.ctor === '::') && (_p23._1._1._1._1.ctor === '::')) {
											var _p28 = _p23._1._1._1._0;
											var _p27 = _p23._1._1._0;
											var _p26 = _p23._1._0;
											var _p25 = _p23._1._1._1._1._0;
											var _p24 = _p23._1._1._1._1._1;
											return (_elm_lang$core$Native_Utils.cmp(ctr, 1000) > 0) ? {
												ctor: '::',
												_0: _p26,
												_1: {
													ctor: '::',
													_0: _p27,
													_1: {
														ctor: '::',
														_0: _p28,
														_1: {
															ctor: '::',
															_0: _p25,
															_1: A2(_elm_lang$core$List$takeTailRec, n - 4, _p24)
														}
													}
												}
											} : {
												ctor: '::',
												_0: _p26,
												_1: {
													ctor: '::',
													_0: _p27,
													_1: {
														ctor: '::',
														_0: _p28,
														_1: {
															ctor: '::',
															_0: _p25,
															_1: A3(_elm_lang$core$List$takeFast, ctr + 1, n - 4, _p24)
														}
													}
												}
											};
										} else {
											break _v26_5;
										}
								}
							} else {
								if (_p23._0 === 1) {
									break _v26_1;
								} else {
									break _v26_5;
								}
							}
						}
					} else {
						break _v26_5;
					}
				} while(false);
				return {
					ctor: '::',
					_0: _p23._1._0,
					_1: {ctor: '[]'}
				};
			} while(false);
			return list;
		}
	});
var _elm_lang$core$List$take = F2(
	function (n, list) {
		return A3(_elm_lang$core$List$takeFast, 0, n, list);
	});
var _elm_lang$core$List$repeatHelp = F3(
	function (result, n, value) {
		repeatHelp:
		while (true) {
			if (_elm_lang$core$Native_Utils.cmp(n, 0) < 1) {
				return result;
			} else {
				var _v27 = {ctor: '::', _0: value, _1: result},
					_v28 = n - 1,
					_v29 = value;
				result = _v27;
				n = _v28;
				value = _v29;
				continue repeatHelp;
			}
		}
	});
var _elm_lang$core$List$repeat = F2(
	function (n, value) {
		return A3(
			_elm_lang$core$List$repeatHelp,
			{ctor: '[]'},
			n,
			value);
	});
var _elm_lang$core$List$rangeHelp = F3(
	function (lo, hi, list) {
		rangeHelp:
		while (true) {
			if (_elm_lang$core$Native_Utils.cmp(lo, hi) < 1) {
				var _v30 = lo,
					_v31 = hi - 1,
					_v32 = {ctor: '::', _0: hi, _1: list};
				lo = _v30;
				hi = _v31;
				list = _v32;
				continue rangeHelp;
			} else {
				return list;
			}
		}
	});
var _elm_lang$core$List$range = F2(
	function (lo, hi) {
		return A3(
			_elm_lang$core$List$rangeHelp,
			lo,
			hi,
			{ctor: '[]'});
	});
var _elm_lang$core$List$indexedMap = F2(
	function (f, xs) {
		return A3(
			_elm_lang$core$List$map2,
			f,
			A2(
				_elm_lang$core$List$range,
				0,
				_elm_lang$core$List$length(xs) - 1),
			xs);
	});

var _elm_lang$core$Result$toMaybe = function (result) {
	var _p0 = result;
	if (_p0.ctor === 'Ok') {
		return _elm_lang$core$Maybe$Just(_p0._0);
	} else {
		return _elm_lang$core$Maybe$Nothing;
	}
};
var _elm_lang$core$Result$withDefault = F2(
	function (def, result) {
		var _p1 = result;
		if (_p1.ctor === 'Ok') {
			return _p1._0;
		} else {
			return def;
		}
	});
var _elm_lang$core$Result$Err = function (a) {
	return {ctor: 'Err', _0: a};
};
var _elm_lang$core$Result$andThen = F2(
	function (callback, result) {
		var _p2 = result;
		if (_p2.ctor === 'Ok') {
			return callback(_p2._0);
		} else {
			return _elm_lang$core$Result$Err(_p2._0);
		}
	});
var _elm_lang$core$Result$Ok = function (a) {
	return {ctor: 'Ok', _0: a};
};
var _elm_lang$core$Result$map = F2(
	function (func, ra) {
		var _p3 = ra;
		if (_p3.ctor === 'Ok') {
			return _elm_lang$core$Result$Ok(
				func(_p3._0));
		} else {
			return _elm_lang$core$Result$Err(_p3._0);
		}
	});
var _elm_lang$core$Result$map2 = F3(
	function (func, ra, rb) {
		var _p4 = {ctor: '_Tuple2', _0: ra, _1: rb};
		if (_p4._0.ctor === 'Ok') {
			if (_p4._1.ctor === 'Ok') {
				return _elm_lang$core$Result$Ok(
					A2(func, _p4._0._0, _p4._1._0));
			} else {
				return _elm_lang$core$Result$Err(_p4._1._0);
			}
		} else {
			return _elm_lang$core$Result$Err(_p4._0._0);
		}
	});
var _elm_lang$core$Result$map3 = F4(
	function (func, ra, rb, rc) {
		var _p5 = {ctor: '_Tuple3', _0: ra, _1: rb, _2: rc};
		if (_p5._0.ctor === 'Ok') {
			if (_p5._1.ctor === 'Ok') {
				if (_p5._2.ctor === 'Ok') {
					return _elm_lang$core$Result$Ok(
						A3(func, _p5._0._0, _p5._1._0, _p5._2._0));
				} else {
					return _elm_lang$core$Result$Err(_p5._2._0);
				}
			} else {
				return _elm_lang$core$Result$Err(_p5._1._0);
			}
		} else {
			return _elm_lang$core$Result$Err(_p5._0._0);
		}
	});
var _elm_lang$core$Result$map4 = F5(
	function (func, ra, rb, rc, rd) {
		var _p6 = {ctor: '_Tuple4', _0: ra, _1: rb, _2: rc, _3: rd};
		if (_p6._0.ctor === 'Ok') {
			if (_p6._1.ctor === 'Ok') {
				if (_p6._2.ctor === 'Ok') {
					if (_p6._3.ctor === 'Ok') {
						return _elm_lang$core$Result$Ok(
							A4(func, _p6._0._0, _p6._1._0, _p6._2._0, _p6._3._0));
					} else {
						return _elm_lang$core$Result$Err(_p6._3._0);
					}
				} else {
					return _elm_lang$core$Result$Err(_p6._2._0);
				}
			} else {
				return _elm_lang$core$Result$Err(_p6._1._0);
			}
		} else {
			return _elm_lang$core$Result$Err(_p6._0._0);
		}
	});
var _elm_lang$core$Result$map5 = F6(
	function (func, ra, rb, rc, rd, re) {
		var _p7 = {ctor: '_Tuple5', _0: ra, _1: rb, _2: rc, _3: rd, _4: re};
		if (_p7._0.ctor === 'Ok') {
			if (_p7._1.ctor === 'Ok') {
				if (_p7._2.ctor === 'Ok') {
					if (_p7._3.ctor === 'Ok') {
						if (_p7._4.ctor === 'Ok') {
							return _elm_lang$core$Result$Ok(
								A5(func, _p7._0._0, _p7._1._0, _p7._2._0, _p7._3._0, _p7._4._0));
						} else {
							return _elm_lang$core$Result$Err(_p7._4._0);
						}
					} else {
						return _elm_lang$core$Result$Err(_p7._3._0);
					}
				} else {
					return _elm_lang$core$Result$Err(_p7._2._0);
				}
			} else {
				return _elm_lang$core$Result$Err(_p7._1._0);
			}
		} else {
			return _elm_lang$core$Result$Err(_p7._0._0);
		}
	});
var _elm_lang$core$Result$mapError = F2(
	function (f, result) {
		var _p8 = result;
		if (_p8.ctor === 'Ok') {
			return _elm_lang$core$Result$Ok(_p8._0);
		} else {
			return _elm_lang$core$Result$Err(
				f(_p8._0));
		}
	});
var _elm_lang$core$Result$fromMaybe = F2(
	function (err, maybe) {
		var _p9 = maybe;
		if (_p9.ctor === 'Just') {
			return _elm_lang$core$Result$Ok(_p9._0);
		} else {
			return _elm_lang$core$Result$Err(err);
		}
	});

//import Maybe, Native.List, Native.Utils, Result //

var _elm_lang$core$Native_String = function() {

function isEmpty(str)
{
	return str.length === 0;
}
function cons(chr, str)
{
	return chr + str;
}
function uncons(str)
{
	var hd = str[0];
	if (hd)
	{
		return _elm_lang$core$Maybe$Just(_elm_lang$core$Native_Utils.Tuple2(_elm_lang$core$Native_Utils.chr(hd), str.slice(1)));
	}
	return _elm_lang$core$Maybe$Nothing;
}
function append(a, b)
{
	return a + b;
}
function concat(strs)
{
	return _elm_lang$core$Native_List.toArray(strs).join('');
}
function length(str)
{
	return str.length;
}
function map(f, str)
{
	var out = str.split('');
	for (var i = out.length; i--; )
	{
		out[i] = f(_elm_lang$core$Native_Utils.chr(out[i]));
	}
	return out.join('');
}
function filter(pred, str)
{
	return str.split('').map(_elm_lang$core$Native_Utils.chr).filter(pred).join('');
}
function reverse(str)
{
	return str.split('').reverse().join('');
}
function foldl(f, b, str)
{
	var len = str.length;
	for (var i = 0; i < len; ++i)
	{
		b = A2(f, _elm_lang$core$Native_Utils.chr(str[i]), b);
	}
	return b;
}
function foldr(f, b, str)
{
	for (var i = str.length; i--; )
	{
		b = A2(f, _elm_lang$core$Native_Utils.chr(str[i]), b);
	}
	return b;
}
function split(sep, str)
{
	return _elm_lang$core$Native_List.fromArray(str.split(sep));
}
function join(sep, strs)
{
	return _elm_lang$core$Native_List.toArray(strs).join(sep);
}
function repeat(n, str)
{
	var result = '';
	while (n > 0)
	{
		if (n & 1)
		{
			result += str;
		}
		n >>= 1, str += str;
	}
	return result;
}
function slice(start, end, str)
{
	return str.slice(start, end);
}
function left(n, str)
{
	return n < 1 ? '' : str.slice(0, n);
}
function right(n, str)
{
	return n < 1 ? '' : str.slice(-n);
}
function dropLeft(n, str)
{
	return n < 1 ? str : str.slice(n);
}
function dropRight(n, str)
{
	return n < 1 ? str : str.slice(0, -n);
}
function pad(n, chr, str)
{
	var half = (n - str.length) / 2;
	return repeat(Math.ceil(half), chr) + str + repeat(half | 0, chr);
}
function padRight(n, chr, str)
{
	return str + repeat(n - str.length, chr);
}
function padLeft(n, chr, str)
{
	return repeat(n - str.length, chr) + str;
}

function trim(str)
{
	return str.trim();
}
function trimLeft(str)
{
	return str.replace(/^\s+/, '');
}
function trimRight(str)
{
	return str.replace(/\s+$/, '');
}

function words(str)
{
	return _elm_lang$core$Native_List.fromArray(str.trim().split(/\s+/g));
}
function lines(str)
{
	return _elm_lang$core$Native_List.fromArray(str.split(/\r\n|\r|\n/g));
}

function toUpper(str)
{
	return str.toUpperCase();
}
function toLower(str)
{
	return str.toLowerCase();
}

function any(pred, str)
{
	for (var i = str.length; i--; )
	{
		if (pred(_elm_lang$core$Native_Utils.chr(str[i])))
		{
			return true;
		}
	}
	return false;
}
function all(pred, str)
{
	for (var i = str.length; i--; )
	{
		if (!pred(_elm_lang$core$Native_Utils.chr(str[i])))
		{
			return false;
		}
	}
	return true;
}

function contains(sub, str)
{
	return str.indexOf(sub) > -1;
}
function startsWith(sub, str)
{
	return str.indexOf(sub) === 0;
}
function endsWith(sub, str)
{
	return str.length >= sub.length &&
		str.lastIndexOf(sub) === str.length - sub.length;
}
function indexes(sub, str)
{
	var subLen = sub.length;
	
	if (subLen < 1)
	{
		return _elm_lang$core$Native_List.Nil;
	}

	var i = 0;
	var is = [];

	while ((i = str.indexOf(sub, i)) > -1)
	{
		is.push(i);
		i = i + subLen;
	}	
	
	return _elm_lang$core$Native_List.fromArray(is);
}

function toInt(s)
{
	var len = s.length;
	if (len === 0)
	{
		return _elm_lang$core$Result$Err("could not convert string '" + s + "' to an Int" );
	}
	var start = 0;
	if (s[0] === '-')
	{
		if (len === 1)
		{
			return _elm_lang$core$Result$Err("could not convert string '" + s + "' to an Int" );
		}
		start = 1;
	}
	for (var i = start; i < len; ++i)
	{
		var c = s[i];
		if (c < '0' || '9' < c)
		{
			return _elm_lang$core$Result$Err("could not convert string '" + s + "' to an Int" );
		}
	}
	return _elm_lang$core$Result$Ok(parseInt(s, 10));
}

function toFloat(s)
{
	var len = s.length;
	if (len === 0)
	{
		return _elm_lang$core$Result$Err("could not convert string '" + s + "' to a Float" );
	}
	var start = 0;
	if (s[0] === '-')
	{
		if (len === 1)
		{
			return _elm_lang$core$Result$Err("could not convert string '" + s + "' to a Float" );
		}
		start = 1;
	}
	var dotCount = 0;
	for (var i = start; i < len; ++i)
	{
		var c = s[i];
		if ('0' <= c && c <= '9')
		{
			continue;
		}
		if (c === '.')
		{
			dotCount += 1;
			if (dotCount <= 1)
			{
				continue;
			}
		}
		return _elm_lang$core$Result$Err("could not convert string '" + s + "' to a Float" );
	}
	return _elm_lang$core$Result$Ok(parseFloat(s));
}

function toList(str)
{
	return _elm_lang$core$Native_List.fromArray(str.split('').map(_elm_lang$core$Native_Utils.chr));
}
function fromList(chars)
{
	return _elm_lang$core$Native_List.toArray(chars).join('');
}

return {
	isEmpty: isEmpty,
	cons: F2(cons),
	uncons: uncons,
	append: F2(append),
	concat: concat,
	length: length,
	map: F2(map),
	filter: F2(filter),
	reverse: reverse,
	foldl: F3(foldl),
	foldr: F3(foldr),

	split: F2(split),
	join: F2(join),
	repeat: F2(repeat),

	slice: F3(slice),
	left: F2(left),
	right: F2(right),
	dropLeft: F2(dropLeft),
	dropRight: F2(dropRight),

	pad: F3(pad),
	padLeft: F3(padLeft),
	padRight: F3(padRight),

	trim: trim,
	trimLeft: trimLeft,
	trimRight: trimRight,

	words: words,
	lines: lines,

	toUpper: toUpper,
	toLower: toLower,

	any: F2(any),
	all: F2(all),

	contains: F2(contains),
	startsWith: F2(startsWith),
	endsWith: F2(endsWith),
	indexes: F2(indexes),

	toInt: toInt,
	toFloat: toFloat,
	toList: toList,
	fromList: fromList
};

}();

//import Native.Utils //

var _elm_lang$core$Native_Char = function() {

return {
	fromCode: function(c) { return _elm_lang$core$Native_Utils.chr(String.fromCharCode(c)); },
	toCode: function(c) { return c.charCodeAt(0); },
	toUpper: function(c) { return _elm_lang$core$Native_Utils.chr(c.toUpperCase()); },
	toLower: function(c) { return _elm_lang$core$Native_Utils.chr(c.toLowerCase()); },
	toLocaleUpper: function(c) { return _elm_lang$core$Native_Utils.chr(c.toLocaleUpperCase()); },
	toLocaleLower: function(c) { return _elm_lang$core$Native_Utils.chr(c.toLocaleLowerCase()); }
};

}();
var _elm_lang$core$Char$fromCode = _elm_lang$core$Native_Char.fromCode;
var _elm_lang$core$Char$toCode = _elm_lang$core$Native_Char.toCode;
var _elm_lang$core$Char$toLocaleLower = _elm_lang$core$Native_Char.toLocaleLower;
var _elm_lang$core$Char$toLocaleUpper = _elm_lang$core$Native_Char.toLocaleUpper;
var _elm_lang$core$Char$toLower = _elm_lang$core$Native_Char.toLower;
var _elm_lang$core$Char$toUpper = _elm_lang$core$Native_Char.toUpper;
var _elm_lang$core$Char$isBetween = F3(
	function (low, high, $char) {
		var code = _elm_lang$core$Char$toCode($char);
		return (_elm_lang$core$Native_Utils.cmp(
			code,
			_elm_lang$core$Char$toCode(low)) > -1) && (_elm_lang$core$Native_Utils.cmp(
			code,
			_elm_lang$core$Char$toCode(high)) < 1);
	});
var _elm_lang$core$Char$isUpper = A2(
	_elm_lang$core$Char$isBetween,
	_elm_lang$core$Native_Utils.chr('A'),
	_elm_lang$core$Native_Utils.chr('Z'));
var _elm_lang$core$Char$isLower = A2(
	_elm_lang$core$Char$isBetween,
	_elm_lang$core$Native_Utils.chr('a'),
	_elm_lang$core$Native_Utils.chr('z'));
var _elm_lang$core$Char$isDigit = A2(
	_elm_lang$core$Char$isBetween,
	_elm_lang$core$Native_Utils.chr('0'),
	_elm_lang$core$Native_Utils.chr('9'));
var _elm_lang$core$Char$isOctDigit = A2(
	_elm_lang$core$Char$isBetween,
	_elm_lang$core$Native_Utils.chr('0'),
	_elm_lang$core$Native_Utils.chr('7'));
var _elm_lang$core$Char$isHexDigit = function ($char) {
	return _elm_lang$core$Char$isDigit($char) || (A3(
		_elm_lang$core$Char$isBetween,
		_elm_lang$core$Native_Utils.chr('a'),
		_elm_lang$core$Native_Utils.chr('f'),
		$char) || A3(
		_elm_lang$core$Char$isBetween,
		_elm_lang$core$Native_Utils.chr('A'),
		_elm_lang$core$Native_Utils.chr('F'),
		$char));
};

var _elm_lang$core$String$fromList = _elm_lang$core$Native_String.fromList;
var _elm_lang$core$String$toList = _elm_lang$core$Native_String.toList;
var _elm_lang$core$String$toFloat = _elm_lang$core$Native_String.toFloat;
var _elm_lang$core$String$toInt = _elm_lang$core$Native_String.toInt;
var _elm_lang$core$String$indices = _elm_lang$core$Native_String.indexes;
var _elm_lang$core$String$indexes = _elm_lang$core$Native_String.indexes;
var _elm_lang$core$String$endsWith = _elm_lang$core$Native_String.endsWith;
var _elm_lang$core$String$startsWith = _elm_lang$core$Native_String.startsWith;
var _elm_lang$core$String$contains = _elm_lang$core$Native_String.contains;
var _elm_lang$core$String$all = _elm_lang$core$Native_String.all;
var _elm_lang$core$String$any = _elm_lang$core$Native_String.any;
var _elm_lang$core$String$toLower = _elm_lang$core$Native_String.toLower;
var _elm_lang$core$String$toUpper = _elm_lang$core$Native_String.toUpper;
var _elm_lang$core$String$lines = _elm_lang$core$Native_String.lines;
var _elm_lang$core$String$words = _elm_lang$core$Native_String.words;
var _elm_lang$core$String$trimRight = _elm_lang$core$Native_String.trimRight;
var _elm_lang$core$String$trimLeft = _elm_lang$core$Native_String.trimLeft;
var _elm_lang$core$String$trim = _elm_lang$core$Native_String.trim;
var _elm_lang$core$String$padRight = _elm_lang$core$Native_String.padRight;
var _elm_lang$core$String$padLeft = _elm_lang$core$Native_String.padLeft;
var _elm_lang$core$String$pad = _elm_lang$core$Native_String.pad;
var _elm_lang$core$String$dropRight = _elm_lang$core$Native_String.dropRight;
var _elm_lang$core$String$dropLeft = _elm_lang$core$Native_String.dropLeft;
var _elm_lang$core$String$right = _elm_lang$core$Native_String.right;
var _elm_lang$core$String$left = _elm_lang$core$Native_String.left;
var _elm_lang$core$String$slice = _elm_lang$core$Native_String.slice;
var _elm_lang$core$String$repeat = _elm_lang$core$Native_String.repeat;
var _elm_lang$core$String$join = _elm_lang$core$Native_String.join;
var _elm_lang$core$String$split = _elm_lang$core$Native_String.split;
var _elm_lang$core$String$foldr = _elm_lang$core$Native_String.foldr;
var _elm_lang$core$String$foldl = _elm_lang$core$Native_String.foldl;
var _elm_lang$core$String$reverse = _elm_lang$core$Native_String.reverse;
var _elm_lang$core$String$filter = _elm_lang$core$Native_String.filter;
var _elm_lang$core$String$map = _elm_lang$core$Native_String.map;
var _elm_lang$core$String$length = _elm_lang$core$Native_String.length;
var _elm_lang$core$String$concat = _elm_lang$core$Native_String.concat;
var _elm_lang$core$String$append = _elm_lang$core$Native_String.append;
var _elm_lang$core$String$uncons = _elm_lang$core$Native_String.uncons;
var _elm_lang$core$String$cons = _elm_lang$core$Native_String.cons;
var _elm_lang$core$String$fromChar = function ($char) {
	return A2(_elm_lang$core$String$cons, $char, '');
};
var _elm_lang$core$String$isEmpty = _elm_lang$core$Native_String.isEmpty;

var _elm_lang$core$Tuple$mapSecond = F2(
	function (func, _p0) {
		var _p1 = _p0;
		return {
			ctor: '_Tuple2',
			_0: _p1._0,
			_1: func(_p1._1)
		};
	});
var _elm_lang$core$Tuple$mapFirst = F2(
	function (func, _p2) {
		var _p3 = _p2;
		return {
			ctor: '_Tuple2',
			_0: func(_p3._0),
			_1: _p3._1
		};
	});
var _elm_lang$core$Tuple$second = function (_p4) {
	var _p5 = _p4;
	return _p5._1;
};
var _elm_lang$core$Tuple$first = function (_p6) {
	var _p7 = _p6;
	return _p7._0;
};

//import //

var _elm_lang$core$Native_Platform = function() {


// PROGRAMS

function program(impl)
{
	return function(flagDecoder)
	{
		return function(object, moduleName)
		{
			object['worker'] = function worker(flags)
			{
				if (typeof flags !== 'undefined')
				{
					throw new Error(
						'The `' + moduleName + '` module does not need flags.\n'
						+ 'Call ' + moduleName + '.worker() with no arguments and you should be all set!'
					);
				}

				return initialize(
					impl.init,
					impl.update,
					impl.subscriptions,
					renderer
				);
			};
		};
	};
}

function programWithFlags(impl)
{
	return function(flagDecoder)
	{
		return function(object, moduleName)
		{
			object['worker'] = function worker(flags)
			{
				if (typeof flagDecoder === 'undefined')
				{
					throw new Error(
						'Are you trying to sneak a Never value into Elm? Trickster!\n'
						+ 'It looks like ' + moduleName + '.main is defined with `programWithFlags` but has type `Program Never`.\n'
						+ 'Use `program` instead if you do not want flags.'
					);
				}

				var result = A2(_elm_lang$core$Native_Json.run, flagDecoder, flags);
				if (result.ctor === 'Err')
				{
					throw new Error(
						moduleName + '.worker(...) was called with an unexpected argument.\n'
						+ 'I tried to convert it to an Elm value, but ran into this problem:\n\n'
						+ result._0
					);
				}

				return initialize(
					impl.init(result._0),
					impl.update,
					impl.subscriptions,
					renderer
				);
			};
		};
	};
}

function renderer(enqueue, _)
{
	return function(_) {};
}


// HTML TO PROGRAM

function htmlToProgram(vnode)
{
	var emptyBag = batch(_elm_lang$core$Native_List.Nil);
	var noChange = _elm_lang$core$Native_Utils.Tuple2(
		_elm_lang$core$Native_Utils.Tuple0,
		emptyBag
	);

	return _elm_lang$virtual_dom$VirtualDom$program({
		init: noChange,
		view: function(model) { return main; },
		update: F2(function(msg, model) { return noChange; }),
		subscriptions: function (model) { return emptyBag; }
	});
}


// INITIALIZE A PROGRAM

function initialize(init, update, subscriptions, renderer)
{
	// ambient state
	var managers = {};
	var updateView;

	// init and update state in main process
	var initApp = _elm_lang$core$Native_Scheduler.nativeBinding(function(callback) {
		var model = init._0;
		updateView = renderer(enqueue, model);
		var cmds = init._1;
		var subs = subscriptions(model);
		dispatchEffects(managers, cmds, subs);
		callback(_elm_lang$core$Native_Scheduler.succeed(model));
	});

	function onMessage(msg, model)
	{
		return _elm_lang$core$Native_Scheduler.nativeBinding(function(callback) {
			var results = A2(update, msg, model);
			model = results._0;
			updateView(model);
			var cmds = results._1;
			var subs = subscriptions(model);
			dispatchEffects(managers, cmds, subs);
			callback(_elm_lang$core$Native_Scheduler.succeed(model));
		});
	}

	var mainProcess = spawnLoop(initApp, onMessage);

	function enqueue(msg)
	{
		_elm_lang$core$Native_Scheduler.rawSend(mainProcess, msg);
	}

	var ports = setupEffects(managers, enqueue);

	return ports ? { ports: ports } : {};
}


// EFFECT MANAGERS

var effectManagers = {};

function setupEffects(managers, callback)
{
	var ports;

	// setup all necessary effect managers
	for (var key in effectManagers)
	{
		var manager = effectManagers[key];

		if (manager.isForeign)
		{
			ports = ports || {};
			ports[key] = manager.tag === 'cmd'
				? setupOutgoingPort(key)
				: setupIncomingPort(key, callback);
		}

		managers[key] = makeManager(manager, callback);
	}

	return ports;
}

function makeManager(info, callback)
{
	var router = {
		main: callback,
		self: undefined
	};

	var tag = info.tag;
	var onEffects = info.onEffects;
	var onSelfMsg = info.onSelfMsg;

	function onMessage(msg, state)
	{
		if (msg.ctor === 'self')
		{
			return A3(onSelfMsg, router, msg._0, state);
		}

		var fx = msg._0;
		switch (tag)
		{
			case 'cmd':
				return A3(onEffects, router, fx.cmds, state);

			case 'sub':
				return A3(onEffects, router, fx.subs, state);

			case 'fx':
				return A4(onEffects, router, fx.cmds, fx.subs, state);
		}
	}

	var process = spawnLoop(info.init, onMessage);
	router.self = process;
	return process;
}

function sendToApp(router, msg)
{
	return _elm_lang$core$Native_Scheduler.nativeBinding(function(callback)
	{
		router.main(msg);
		callback(_elm_lang$core$Native_Scheduler.succeed(_elm_lang$core$Native_Utils.Tuple0));
	});
}

function sendToSelf(router, msg)
{
	return A2(_elm_lang$core$Native_Scheduler.send, router.self, {
		ctor: 'self',
		_0: msg
	});
}


// HELPER for STATEFUL LOOPS

function spawnLoop(init, onMessage)
{
	var andThen = _elm_lang$core$Native_Scheduler.andThen;

	function loop(state)
	{
		var handleMsg = _elm_lang$core$Native_Scheduler.receive(function(msg) {
			return onMessage(msg, state);
		});
		return A2(andThen, loop, handleMsg);
	}

	var task = A2(andThen, loop, init);

	return _elm_lang$core$Native_Scheduler.rawSpawn(task);
}


// BAGS

function leaf(home)
{
	return function(value)
	{
		return {
			type: 'leaf',
			home: home,
			value: value
		};
	};
}

function batch(list)
{
	return {
		type: 'node',
		branches: list
	};
}

function map(tagger, bag)
{
	return {
		type: 'map',
		tagger: tagger,
		tree: bag
	}
}


// PIPE BAGS INTO EFFECT MANAGERS

function dispatchEffects(managers, cmdBag, subBag)
{
	var effectsDict = {};
	gatherEffects(true, cmdBag, effectsDict, null);
	gatherEffects(false, subBag, effectsDict, null);

	for (var home in managers)
	{
		var fx = home in effectsDict
			? effectsDict[home]
			: {
				cmds: _elm_lang$core$Native_List.Nil,
				subs: _elm_lang$core$Native_List.Nil
			};

		_elm_lang$core$Native_Scheduler.rawSend(managers[home], { ctor: 'fx', _0: fx });
	}
}

function gatherEffects(isCmd, bag, effectsDict, taggers)
{
	switch (bag.type)
	{
		case 'leaf':
			var home = bag.home;
			var effect = toEffect(isCmd, home, taggers, bag.value);
			effectsDict[home] = insert(isCmd, effect, effectsDict[home]);
			return;

		case 'node':
			var list = bag.branches;
			while (list.ctor !== '[]')
			{
				gatherEffects(isCmd, list._0, effectsDict, taggers);
				list = list._1;
			}
			return;

		case 'map':
			gatherEffects(isCmd, bag.tree, effectsDict, {
				tagger: bag.tagger,
				rest: taggers
			});
			return;
	}
}

function toEffect(isCmd, home, taggers, value)
{
	function applyTaggers(x)
	{
		var temp = taggers;
		while (temp)
		{
			x = temp.tagger(x);
			temp = temp.rest;
		}
		return x;
	}

	var map = isCmd
		? effectManagers[home].cmdMap
		: effectManagers[home].subMap;

	return A2(map, applyTaggers, value)
}

function insert(isCmd, newEffect, effects)
{
	effects = effects || {
		cmds: _elm_lang$core$Native_List.Nil,
		subs: _elm_lang$core$Native_List.Nil
	};
	if (isCmd)
	{
		effects.cmds = _elm_lang$core$Native_List.Cons(newEffect, effects.cmds);
		return effects;
	}
	effects.subs = _elm_lang$core$Native_List.Cons(newEffect, effects.subs);
	return effects;
}


// PORTS

function checkPortName(name)
{
	if (name in effectManagers)
	{
		throw new Error('There can only be one port named `' + name + '`, but your program has multiple.');
	}
}


// OUTGOING PORTS

function outgoingPort(name, converter)
{
	checkPortName(name);
	effectManagers[name] = {
		tag: 'cmd',
		cmdMap: outgoingPortMap,
		converter: converter,
		isForeign: true
	};
	return leaf(name);
}

var outgoingPortMap = F2(function cmdMap(tagger, value) {
	return value;
});

function setupOutgoingPort(name)
{
	var subs = [];
	var converter = effectManagers[name].converter;

	// CREATE MANAGER

	var init = _elm_lang$core$Native_Scheduler.succeed(null);

	function onEffects(router, cmdList, state)
	{
		while (cmdList.ctor !== '[]')
		{
			// grab a separate reference to subs in case unsubscribe is called
			var currentSubs = subs;
			var value = converter(cmdList._0);
			for (var i = 0; i < currentSubs.length; i++)
			{
				currentSubs[i](value);
			}
			cmdList = cmdList._1;
		}
		return init;
	}

	effectManagers[name].init = init;
	effectManagers[name].onEffects = F3(onEffects);

	// PUBLIC API

	function subscribe(callback)
	{
		subs.push(callback);
	}

	function unsubscribe(callback)
	{
		// copy subs into a new array in case unsubscribe is called within a
		// subscribed callback
		subs = subs.slice();
		var index = subs.indexOf(callback);
		if (index >= 0)
		{
			subs.splice(index, 1);
		}
	}

	return {
		subscribe: subscribe,
		unsubscribe: unsubscribe
	};
}


// INCOMING PORTS

function incomingPort(name, converter)
{
	checkPortName(name);
	effectManagers[name] = {
		tag: 'sub',
		subMap: incomingPortMap,
		converter: converter,
		isForeign: true
	};
	return leaf(name);
}

var incomingPortMap = F2(function subMap(tagger, finalTagger)
{
	return function(value)
	{
		return tagger(finalTagger(value));
	};
});

function setupIncomingPort(name, callback)
{
	var sentBeforeInit = [];
	var subs = _elm_lang$core$Native_List.Nil;
	var converter = effectManagers[name].converter;
	var currentOnEffects = preInitOnEffects;
	var currentSend = preInitSend;

	// CREATE MANAGER

	var init = _elm_lang$core$Native_Scheduler.succeed(null);

	function preInitOnEffects(router, subList, state)
	{
		var postInitResult = postInitOnEffects(router, subList, state);

		for(var i = 0; i < sentBeforeInit.length; i++)
		{
			postInitSend(sentBeforeInit[i]);
		}

		sentBeforeInit = null; // to release objects held in queue
		currentSend = postInitSend;
		currentOnEffects = postInitOnEffects;
		return postInitResult;
	}

	function postInitOnEffects(router, subList, state)
	{
		subs = subList;
		return init;
	}

	function onEffects(router, subList, state)
	{
		return currentOnEffects(router, subList, state);
	}

	effectManagers[name].init = init;
	effectManagers[name].onEffects = F3(onEffects);

	// PUBLIC API

	function preInitSend(value)
	{
		sentBeforeInit.push(value);
	}

	function postInitSend(incomingValue)
	{
		var result = A2(_elm_lang$core$Json_Decode$decodeValue, converter, incomingValue);
		if (result.ctor === 'Err')
		{
			throw new Error('Trying to send an unexpected type of value through port `' + name + '`:\n' + result._0);
		}

		var value = result._0;
		var temp = subs;
		while (temp.ctor !== '[]')
		{
			callback(temp._0(value));
			temp = temp._1;
		}
	}

	function send(incomingValue)
	{
		currentSend(incomingValue);
	}

	return { send: send };
}

return {
	// routers
	sendToApp: F2(sendToApp),
	sendToSelf: F2(sendToSelf),

	// global setup
	effectManagers: effectManagers,
	outgoingPort: outgoingPort,
	incomingPort: incomingPort,

	htmlToProgram: htmlToProgram,
	program: program,
	programWithFlags: programWithFlags,
	initialize: initialize,

	// effect bags
	leaf: leaf,
	batch: batch,
	map: F2(map)
};

}();

//import Native.Utils //

var _elm_lang$core$Native_Scheduler = function() {

var MAX_STEPS = 10000;


// TASKS

function succeed(value)
{
	return {
		ctor: '_Task_succeed',
		value: value
	};
}

function fail(error)
{
	return {
		ctor: '_Task_fail',
		value: error
	};
}

function nativeBinding(callback)
{
	return {
		ctor: '_Task_nativeBinding',
		callback: callback,
		cancel: null
	};
}

function andThen(callback, task)
{
	return {
		ctor: '_Task_andThen',
		callback: callback,
		task: task
	};
}

function onError(callback, task)
{
	return {
		ctor: '_Task_onError',
		callback: callback,
		task: task
	};
}

function receive(callback)
{
	return {
		ctor: '_Task_receive',
		callback: callback
	};
}


// PROCESSES

function rawSpawn(task)
{
	var process = {
		ctor: '_Process',
		id: _elm_lang$core$Native_Utils.guid(),
		root: task,
		stack: null,
		mailbox: []
	};

	enqueue(process);

	return process;
}

function spawn(task)
{
	return nativeBinding(function(callback) {
		var process = rawSpawn(task);
		callback(succeed(process));
	});
}

function rawSend(process, msg)
{
	process.mailbox.push(msg);
	enqueue(process);
}

function send(process, msg)
{
	return nativeBinding(function(callback) {
		rawSend(process, msg);
		callback(succeed(_elm_lang$core$Native_Utils.Tuple0));
	});
}

function kill(process)
{
	return nativeBinding(function(callback) {
		var root = process.root;
		if (root.ctor === '_Task_nativeBinding' && root.cancel)
		{
			root.cancel();
		}

		process.root = null;

		callback(succeed(_elm_lang$core$Native_Utils.Tuple0));
	});
}

function sleep(time)
{
	return nativeBinding(function(callback) {
		var id = setTimeout(function() {
			callback(succeed(_elm_lang$core$Native_Utils.Tuple0));
		}, time);

		return function() { clearTimeout(id); };
	});
}


// STEP PROCESSES

function step(numSteps, process)
{
	while (numSteps < MAX_STEPS)
	{
		var ctor = process.root.ctor;

		if (ctor === '_Task_succeed')
		{
			while (process.stack && process.stack.ctor === '_Task_onError')
			{
				process.stack = process.stack.rest;
			}
			if (process.stack === null)
			{
				break;
			}
			process.root = process.stack.callback(process.root.value);
			process.stack = process.stack.rest;
			++numSteps;
			continue;
		}

		if (ctor === '_Task_fail')
		{
			while (process.stack && process.stack.ctor === '_Task_andThen')
			{
				process.stack = process.stack.rest;
			}
			if (process.stack === null)
			{
				break;
			}
			process.root = process.stack.callback(process.root.value);
			process.stack = process.stack.rest;
			++numSteps;
			continue;
		}

		if (ctor === '_Task_andThen')
		{
			process.stack = {
				ctor: '_Task_andThen',
				callback: process.root.callback,
				rest: process.stack
			};
			process.root = process.root.task;
			++numSteps;
			continue;
		}

		if (ctor === '_Task_onError')
		{
			process.stack = {
				ctor: '_Task_onError',
				callback: process.root.callback,
				rest: process.stack
			};
			process.root = process.root.task;
			++numSteps;
			continue;
		}

		if (ctor === '_Task_nativeBinding')
		{
			process.root.cancel = process.root.callback(function(newRoot) {
				process.root = newRoot;
				enqueue(process);
			});

			break;
		}

		if (ctor === '_Task_receive')
		{
			var mailbox = process.mailbox;
			if (mailbox.length === 0)
			{
				break;
			}

			process.root = process.root.callback(mailbox.shift());
			++numSteps;
			continue;
		}

		throw new Error(ctor);
	}

	if (numSteps < MAX_STEPS)
	{
		return numSteps + 1;
	}
	enqueue(process);

	return numSteps;
}


// WORK QUEUE

var working = false;
var workQueue = [];

function enqueue(process)
{
	workQueue.push(process);

	if (!working)
	{
		setTimeout(work, 0);
		working = true;
	}
}

function work()
{
	var numSteps = 0;
	var process;
	while (numSteps < MAX_STEPS && (process = workQueue.shift()))
	{
		if (process.root)
		{
			numSteps = step(numSteps, process);
		}
	}
	if (!process)
	{
		working = false;
		return;
	}
	setTimeout(work, 0);
}


return {
	succeed: succeed,
	fail: fail,
	nativeBinding: nativeBinding,
	andThen: F2(andThen),
	onError: F2(onError),
	receive: receive,

	spawn: spawn,
	kill: kill,
	sleep: sleep,
	send: F2(send),

	rawSpawn: rawSpawn,
	rawSend: rawSend
};

}();
var _elm_lang$core$Platform_Cmd$batch = _elm_lang$core$Native_Platform.batch;
var _elm_lang$core$Platform_Cmd$none = _elm_lang$core$Platform_Cmd$batch(
	{ctor: '[]'});
var _elm_lang$core$Platform_Cmd_ops = _elm_lang$core$Platform_Cmd_ops || {};
_elm_lang$core$Platform_Cmd_ops['!'] = F2(
	function (model, commands) {
		return {
			ctor: '_Tuple2',
			_0: model,
			_1: _elm_lang$core$Platform_Cmd$batch(commands)
		};
	});
var _elm_lang$core$Platform_Cmd$map = _elm_lang$core$Native_Platform.map;
var _elm_lang$core$Platform_Cmd$Cmd = {ctor: 'Cmd'};

var _elm_lang$core$Platform_Sub$batch = _elm_lang$core$Native_Platform.batch;
var _elm_lang$core$Platform_Sub$none = _elm_lang$core$Platform_Sub$batch(
	{ctor: '[]'});
var _elm_lang$core$Platform_Sub$map = _elm_lang$core$Native_Platform.map;
var _elm_lang$core$Platform_Sub$Sub = {ctor: 'Sub'};

var _elm_lang$core$Platform$hack = _elm_lang$core$Native_Scheduler.succeed;
var _elm_lang$core$Platform$sendToSelf = _elm_lang$core$Native_Platform.sendToSelf;
var _elm_lang$core$Platform$sendToApp = _elm_lang$core$Native_Platform.sendToApp;
var _elm_lang$core$Platform$programWithFlags = _elm_lang$core$Native_Platform.programWithFlags;
var _elm_lang$core$Platform$program = _elm_lang$core$Native_Platform.program;
var _elm_lang$core$Platform$Program = {ctor: 'Program'};
var _elm_lang$core$Platform$Task = {ctor: 'Task'};
var _elm_lang$core$Platform$ProcessId = {ctor: 'ProcessId'};
var _elm_lang$core$Platform$Router = {ctor: 'Router'};

var _elm_lang$lazy$Lazy$force = function (_p0) {
	var _p1 = _p0;
	return _p1._0(
		{ctor: '_Tuple0'});
};
var _elm_lang$lazy$Lazy$Lazy = function (a) {
	return {ctor: 'Lazy', _0: a};
};
var _elm_lang$lazy$Lazy$lazy = function (thunk) {
	return _elm_lang$lazy$Lazy$Lazy(
		_elm_lang$lazy$Native_Lazy.memoize(thunk));
};
var _elm_lang$lazy$Lazy$map = F2(
	function (f, a) {
		return _elm_lang$lazy$Lazy$lazy(
			function (_p2) {
				var _p3 = _p2;
				return f(
					_elm_lang$lazy$Lazy$force(a));
			});
	});
var _elm_lang$lazy$Lazy$map2 = F3(
	function (f, a, b) {
		return _elm_lang$lazy$Lazy$lazy(
			function (_p4) {
				var _p5 = _p4;
				return A2(
					f,
					_elm_lang$lazy$Lazy$force(a),
					_elm_lang$lazy$Lazy$force(b));
			});
	});
var _elm_lang$lazy$Lazy$map3 = F4(
	function (f, a, b, c) {
		return _elm_lang$lazy$Lazy$lazy(
			function (_p6) {
				var _p7 = _p6;
				return A3(
					f,
					_elm_lang$lazy$Lazy$force(a),
					_elm_lang$lazy$Lazy$force(b),
					_elm_lang$lazy$Lazy$force(c));
			});
	});
var _elm_lang$lazy$Lazy$map4 = F5(
	function (f, a, b, c, d) {
		return _elm_lang$lazy$Lazy$lazy(
			function (_p8) {
				var _p9 = _p8;
				return A4(
					f,
					_elm_lang$lazy$Lazy$force(a),
					_elm_lang$lazy$Lazy$force(b),
					_elm_lang$lazy$Lazy$force(c),
					_elm_lang$lazy$Lazy$force(d));
			});
	});
var _elm_lang$lazy$Lazy$map5 = F6(
	function (f, a, b, c, d, e) {
		return _elm_lang$lazy$Lazy$lazy(
			function (_p10) {
				var _p11 = _p10;
				return A5(
					f,
					_elm_lang$lazy$Lazy$force(a),
					_elm_lang$lazy$Lazy$force(b),
					_elm_lang$lazy$Lazy$force(c),
					_elm_lang$lazy$Lazy$force(d),
					_elm_lang$lazy$Lazy$force(e));
			});
	});
var _elm_lang$lazy$Lazy$apply = F2(
	function (f, x) {
		return _elm_lang$lazy$Lazy$lazy(
			function (_p12) {
				var _p13 = _p12;
				return A2(
					_elm_lang$lazy$Lazy$force,
					f,
					_elm_lang$lazy$Lazy$force(x));
			});
	});
var _elm_lang$lazy$Lazy$andThen = F2(
	function (callback, a) {
		return _elm_lang$lazy$Lazy$lazy(
			function (_p14) {
				var _p15 = _p14;
				return _elm_lang$lazy$Lazy$force(
					callback(
						_elm_lang$lazy$Lazy$force(a)));
			});
	});

//import Maybe, Native.List //

var _elm_lang$core$Native_Regex = function() {

function escape(str)
{
	return str.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
}
function caseInsensitive(re)
{
	return new RegExp(re.source, 'gi');
}
function regex(raw)
{
	return new RegExp(raw, 'g');
}

function contains(re, string)
{
	return string.match(re) !== null;
}

function find(n, re, str)
{
	n = n.ctor === 'All' ? Infinity : n._0;
	var out = [];
	var number = 0;
	var string = str;
	var lastIndex = re.lastIndex;
	var prevLastIndex = -1;
	var result;
	while (number++ < n && (result = re.exec(string)))
	{
		if (prevLastIndex === re.lastIndex) break;
		var i = result.length - 1;
		var subs = new Array(i);
		while (i > 0)
		{
			var submatch = result[i];
			subs[--i] = submatch === undefined
				? _elm_lang$core$Maybe$Nothing
				: _elm_lang$core$Maybe$Just(submatch);
		}
		out.push({
			match: result[0],
			submatches: _elm_lang$core$Native_List.fromArray(subs),
			index: result.index,
			number: number
		});
		prevLastIndex = re.lastIndex;
	}
	re.lastIndex = lastIndex;
	return _elm_lang$core$Native_List.fromArray(out);
}

function replace(n, re, replacer, string)
{
	n = n.ctor === 'All' ? Infinity : n._0;
	var count = 0;
	function jsReplacer(match)
	{
		if (count++ >= n)
		{
			return match;
		}
		var i = arguments.length - 3;
		var submatches = new Array(i);
		while (i > 0)
		{
			var submatch = arguments[i];
			submatches[--i] = submatch === undefined
				? _elm_lang$core$Maybe$Nothing
				: _elm_lang$core$Maybe$Just(submatch);
		}
		return replacer({
			match: match,
			submatches: _elm_lang$core$Native_List.fromArray(submatches),
			index: arguments[arguments.length - 2],
			number: count
		});
	}
	return string.replace(re, jsReplacer);
}

function split(n, re, str)
{
	n = n.ctor === 'All' ? Infinity : n._0;
	if (n === Infinity)
	{
		return _elm_lang$core$Native_List.fromArray(str.split(re));
	}
	var string = str;
	var result;
	var out = [];
	var start = re.lastIndex;
	var restoreLastIndex = re.lastIndex;
	while (n--)
	{
		if (!(result = re.exec(string))) break;
		out.push(string.slice(start, result.index));
		start = re.lastIndex;
	}
	out.push(string.slice(start));
	re.lastIndex = restoreLastIndex;
	return _elm_lang$core$Native_List.fromArray(out);
}

return {
	regex: regex,
	caseInsensitive: caseInsensitive,
	escape: escape,

	contains: F2(contains),
	find: F3(find),
	replace: F4(replace),
	split: F3(split)
};

}();

var _elm_lang$core$Regex$split = _elm_lang$core$Native_Regex.split;
var _elm_lang$core$Regex$replace = _elm_lang$core$Native_Regex.replace;
var _elm_lang$core$Regex$find = _elm_lang$core$Native_Regex.find;
var _elm_lang$core$Regex$contains = _elm_lang$core$Native_Regex.contains;
var _elm_lang$core$Regex$caseInsensitive = _elm_lang$core$Native_Regex.caseInsensitive;
var _elm_lang$core$Regex$regex = _elm_lang$core$Native_Regex.regex;
var _elm_lang$core$Regex$escape = _elm_lang$core$Native_Regex.escape;
var _elm_lang$core$Regex$Match = F4(
	function (a, b, c, d) {
		return {match: a, submatches: b, index: c, number: d};
	});
var _elm_lang$core$Regex$Regex = {ctor: 'Regex'};
var _elm_lang$core$Regex$AtMost = function (a) {
	return {ctor: 'AtMost', _0: a};
};
var _elm_lang$core$Regex$All = {ctor: 'All'};

var _Bogdanp$elm_combine$Combine$app = function (p) {
	var _p0 = p;
	if (_p0.ctor === 'Parser') {
		return _p0._0;
	} else {
		return _elm_lang$lazy$Lazy$force(_p0._0);
	}
};
var _Bogdanp$elm_combine$Combine$InputStream = F3(
	function (a, b, c) {
		return {data: a, input: b, position: c};
	});
var _Bogdanp$elm_combine$Combine$initStream = function (s) {
	return A3(_Bogdanp$elm_combine$Combine$InputStream, s, s, 0);
};
var _Bogdanp$elm_combine$Combine$runParser = F3(
	function (p, st, s) {
		var _p1 = A3(
			_Bogdanp$elm_combine$Combine$app,
			p,
			st,
			_Bogdanp$elm_combine$Combine$initStream(s));
		if (_p1._2.ctor === 'Ok') {
			return _elm_lang$core$Result$Ok(
				{ctor: '_Tuple3', _0: _p1._0, _1: _p1._1, _2: _p1._2._0});
		} else {
			return _elm_lang$core$Result$Err(
				{ctor: '_Tuple3', _0: _p1._0, _1: _p1._1, _2: _p1._2._0});
		}
	});
var _Bogdanp$elm_combine$Combine$parse = function (p) {
	return A2(
		_Bogdanp$elm_combine$Combine$runParser,
		p,
		{ctor: '_Tuple0'});
};
var _Bogdanp$elm_combine$Combine$ParseLocation = F3(
	function (a, b, c) {
		return {source: a, line: b, column: c};
	});
var _Bogdanp$elm_combine$Combine$currentLocation = function (stream) {
	var find = F3(
		function (position, currentLine, lines) {
			find:
			while (true) {
				var _p2 = lines;
				if (_p2.ctor === '[]') {
					return A3(_Bogdanp$elm_combine$Combine$ParseLocation, '', 1, position);
				} else {
					if (_p2._1.ctor === '[]') {
						return A3(_Bogdanp$elm_combine$Combine$ParseLocation, _p2._0, currentLine + 1, position);
					} else {
						var _p3 = _p2._0;
						var length = _elm_lang$core$String$length(_p3);
						if (_elm_lang$core$Native_Utils.cmp(position, length) > -1) {
							var _v3 = (position - length) - 1,
								_v4 = currentLine + 1,
								_v5 = _p2._1;
							position = _v3;
							currentLine = _v4;
							lines = _v5;
							continue find;
						} else {
							if (_elm_lang$core$Native_Utils.eq(currentLine, 0)) {
								return A3(_Bogdanp$elm_combine$Combine$ParseLocation, _p3, 1, position);
							} else {
								return A3(_Bogdanp$elm_combine$Combine$ParseLocation, _p3, currentLine, position - 1);
							}
						}
					}
				}
			}
		});
	var lines = A2(_elm_lang$core$String$split, '\n', stream.data);
	return A3(find, stream.position, 0, lines);
};
var _Bogdanp$elm_combine$Combine$currentSourceLine = function (_p4) {
	return function (_) {
		return _.source;
	}(
		_Bogdanp$elm_combine$Combine$currentLocation(_p4));
};
var _Bogdanp$elm_combine$Combine$currentLine = function (_p5) {
	return function (_) {
		return _.line;
	}(
		_Bogdanp$elm_combine$Combine$currentLocation(_p5));
};
var _Bogdanp$elm_combine$Combine$currentColumn = function (_p6) {
	return function (_) {
		return _.column;
	}(
		_Bogdanp$elm_combine$Combine$currentLocation(_p6));
};
var _Bogdanp$elm_combine$Combine$RecursiveParser = function (a) {
	return {ctor: 'RecursiveParser', _0: a};
};
var _Bogdanp$elm_combine$Combine$lazy = function (t) {
	return _Bogdanp$elm_combine$Combine$RecursiveParser(
		_elm_lang$lazy$Lazy$lazy(
			function (_p7) {
				var _p8 = _p7;
				return _Bogdanp$elm_combine$Combine$app(
					t(
						{ctor: '_Tuple0'}));
			}));
};
var _Bogdanp$elm_combine$Combine$Parser = function (a) {
	return {ctor: 'Parser', _0: a};
};
var _Bogdanp$elm_combine$Combine$primitive = _Bogdanp$elm_combine$Combine$Parser;
var _Bogdanp$elm_combine$Combine$bimap = F3(
	function (fok, ferr, p) {
		return _Bogdanp$elm_combine$Combine$Parser(
			F2(
				function (state, stream) {
					var _p9 = A3(_Bogdanp$elm_combine$Combine$app, p, state, stream);
					if (_p9._2.ctor === 'Ok') {
						return {
							ctor: '_Tuple3',
							_0: _p9._0,
							_1: _p9._1,
							_2: _elm_lang$core$Result$Ok(
								fok(_p9._2._0))
						};
					} else {
						return {
							ctor: '_Tuple3',
							_0: _p9._0,
							_1: _p9._1,
							_2: _elm_lang$core$Result$Err(
								ferr(_p9._2._0))
						};
					}
				}));
	});
var _Bogdanp$elm_combine$Combine$map = F2(
	function (f, p) {
		return A3(_Bogdanp$elm_combine$Combine$bimap, f, _elm_lang$core$Basics$identity, p);
	});
var _Bogdanp$elm_combine$Combine_ops = _Bogdanp$elm_combine$Combine_ops || {};
_Bogdanp$elm_combine$Combine_ops['<$>'] = _Bogdanp$elm_combine$Combine$map;
var _Bogdanp$elm_combine$Combine_ops = _Bogdanp$elm_combine$Combine_ops || {};
_Bogdanp$elm_combine$Combine_ops['<$'] = function (res) {
	return _Bogdanp$elm_combine$Combine$map(
		_elm_lang$core$Basics$always(res));
};
var _Bogdanp$elm_combine$Combine$skip = function (p) {
	return A2(
		_Bogdanp$elm_combine$Combine_ops['<$'],
		{ctor: '_Tuple0'},
		p);
};
var _Bogdanp$elm_combine$Combine_ops = _Bogdanp$elm_combine$Combine_ops || {};
_Bogdanp$elm_combine$Combine_ops['$>'] = _elm_lang$core$Basics$flip(
	F2(
		function (x, y) {
			return A2(_Bogdanp$elm_combine$Combine_ops['<$'], x, y);
		}));
var _Bogdanp$elm_combine$Combine$mapError = _Bogdanp$elm_combine$Combine$bimap(_elm_lang$core$Basics$identity);
var _Bogdanp$elm_combine$Combine_ops = _Bogdanp$elm_combine$Combine_ops || {};
_Bogdanp$elm_combine$Combine_ops['<?>'] = F2(
	function (p, m) {
		return A2(
			_Bogdanp$elm_combine$Combine$mapError,
			_elm_lang$core$Basics$always(
				{
					ctor: '::',
					_0: m,
					_1: {ctor: '[]'}
				}),
			p);
	});
var _Bogdanp$elm_combine$Combine$withState = function (f) {
	return _Bogdanp$elm_combine$Combine$Parser(
		F2(
			function (state, stream) {
				return A3(
					_Bogdanp$elm_combine$Combine$app,
					f(state),
					state,
					stream);
			}));
};
var _Bogdanp$elm_combine$Combine$withLocation = function (f) {
	return _Bogdanp$elm_combine$Combine$Parser(
		F2(
			function (state, stream) {
				return A3(
					_Bogdanp$elm_combine$Combine$app,
					f(
						_Bogdanp$elm_combine$Combine$currentLocation(stream)),
					state,
					stream);
			}));
};
var _Bogdanp$elm_combine$Combine$withLine = function (f) {
	return _Bogdanp$elm_combine$Combine$Parser(
		F2(
			function (state, stream) {
				return A3(
					_Bogdanp$elm_combine$Combine$app,
					f(
						_Bogdanp$elm_combine$Combine$currentLine(stream)),
					state,
					stream);
			}));
};
var _Bogdanp$elm_combine$Combine$withColumn = function (f) {
	return _Bogdanp$elm_combine$Combine$Parser(
		F2(
			function (state, stream) {
				return A3(
					_Bogdanp$elm_combine$Combine$app,
					f(
						_Bogdanp$elm_combine$Combine$currentColumn(stream)),
					state,
					stream);
			}));
};
var _Bogdanp$elm_combine$Combine$andThen = F2(
	function (f, p) {
		return _Bogdanp$elm_combine$Combine$Parser(
			F2(
				function (state, stream) {
					var _p10 = A3(_Bogdanp$elm_combine$Combine$app, p, state, stream);
					if (_p10._2.ctor === 'Ok') {
						return A3(
							_Bogdanp$elm_combine$Combine$app,
							f(_p10._2._0),
							_p10._0,
							_p10._1);
					} else {
						return {
							ctor: '_Tuple3',
							_0: _p10._0,
							_1: _p10._1,
							_2: _elm_lang$core$Result$Err(_p10._2._0)
						};
					}
				}));
	});
var _Bogdanp$elm_combine$Combine_ops = _Bogdanp$elm_combine$Combine_ops || {};
_Bogdanp$elm_combine$Combine_ops['>>='] = _elm_lang$core$Basics$flip(_Bogdanp$elm_combine$Combine$andThen);
var _Bogdanp$elm_combine$Combine$andMap = F2(
	function (rp, lp) {
		return A2(
			_Bogdanp$elm_combine$Combine_ops['>>='],
			lp,
			A2(_elm_lang$core$Basics$flip, _Bogdanp$elm_combine$Combine$map, rp));
	});
var _Bogdanp$elm_combine$Combine_ops = _Bogdanp$elm_combine$Combine_ops || {};
_Bogdanp$elm_combine$Combine_ops['<*>'] = _elm_lang$core$Basics$flip(_Bogdanp$elm_combine$Combine$andMap);
var _Bogdanp$elm_combine$Combine_ops = _Bogdanp$elm_combine$Combine_ops || {};
_Bogdanp$elm_combine$Combine_ops['<*'] = F2(
	function (lp, rp) {
		return A2(
			_Bogdanp$elm_combine$Combine$andMap,
			rp,
			A2(_Bogdanp$elm_combine$Combine$map, _elm_lang$core$Basics$always, lp));
	});
var _Bogdanp$elm_combine$Combine_ops = _Bogdanp$elm_combine$Combine_ops || {};
_Bogdanp$elm_combine$Combine_ops['*>'] = F2(
	function (lp, rp) {
		return A2(
			_Bogdanp$elm_combine$Combine$andMap,
			rp,
			A2(
				_Bogdanp$elm_combine$Combine$map,
				_elm_lang$core$Basics$flip(_elm_lang$core$Basics$always),
				lp));
	});
var _Bogdanp$elm_combine$Combine$between = F3(
	function (lp, rp, p) {
		return A2(
			_Bogdanp$elm_combine$Combine_ops['<*'],
			A2(_Bogdanp$elm_combine$Combine_ops['*>'], lp, p),
			rp);
	});
var _Bogdanp$elm_combine$Combine$sequence = function (ps) {
	var accumulate = F4(
		function (acc, ps, state, stream) {
			accumulate:
			while (true) {
				var _p11 = ps;
				if (_p11.ctor === '[]') {
					return {
						ctor: '_Tuple3',
						_0: state,
						_1: stream,
						_2: _elm_lang$core$Result$Ok(
							_elm_lang$core$List$reverse(acc))
					};
				} else {
					var _p12 = A3(_Bogdanp$elm_combine$Combine$app, _p11._0, state, stream);
					if (_p12._2.ctor === 'Ok') {
						var _v11 = {ctor: '::', _0: _p12._2._0, _1: acc},
							_v12 = _p11._1,
							_v13 = _p12._0,
							_v14 = _p12._1;
						acc = _v11;
						ps = _v12;
						state = _v13;
						stream = _v14;
						continue accumulate;
					} else {
						return {
							ctor: '_Tuple3',
							_0: _p12._0,
							_1: _p12._1,
							_2: _elm_lang$core$Result$Err(_p12._2._0)
						};
					}
				}
			}
		});
	return _Bogdanp$elm_combine$Combine$Parser(
		F2(
			function (state, stream) {
				return A4(
					accumulate,
					{ctor: '[]'},
					ps,
					state,
					stream);
			}));
};
var _Bogdanp$elm_combine$Combine$fail = function (m) {
	return _Bogdanp$elm_combine$Combine$Parser(
		F2(
			function (state, stream) {
				return {
					ctor: '_Tuple3',
					_0: state,
					_1: stream,
					_2: _elm_lang$core$Result$Err(
						{
							ctor: '::',
							_0: m,
							_1: {ctor: '[]'}
						})
				};
			}));
};
var _Bogdanp$elm_combine$Combine$emptyErr = _Bogdanp$elm_combine$Combine$Parser(
	F2(
		function (state, stream) {
			return {
				ctor: '_Tuple3',
				_0: state,
				_1: stream,
				_2: _elm_lang$core$Result$Err(
					{ctor: '[]'})
			};
		}));
var _Bogdanp$elm_combine$Combine$succeed = function (res) {
	return _Bogdanp$elm_combine$Combine$Parser(
		F2(
			function (state, stream) {
				return {
					ctor: '_Tuple3',
					_0: state,
					_1: stream,
					_2: _elm_lang$core$Result$Ok(res)
				};
			}));
};
var _Bogdanp$elm_combine$Combine$putState = function (state) {
	return _Bogdanp$elm_combine$Combine$Parser(
		F2(
			function (_p13, stream) {
				return A3(
					_Bogdanp$elm_combine$Combine$app,
					_Bogdanp$elm_combine$Combine$succeed(
						{ctor: '_Tuple0'}),
					state,
					stream);
			}));
};
var _Bogdanp$elm_combine$Combine$modifyState = function (f) {
	return _Bogdanp$elm_combine$Combine$Parser(
		F2(
			function (state, stream) {
				return A3(
					_Bogdanp$elm_combine$Combine$app,
					_Bogdanp$elm_combine$Combine$succeed(
						{ctor: '_Tuple0'}),
					f(state),
					stream);
			}));
};
var _Bogdanp$elm_combine$Combine$count = F2(
	function (n, p) {
		var accumulate = F2(
			function (x, acc) {
				return (_elm_lang$core$Native_Utils.cmp(x, 0) < 1) ? _Bogdanp$elm_combine$Combine$succeed(
					_elm_lang$core$List$reverse(acc)) : A2(
					_Bogdanp$elm_combine$Combine$andThen,
					function (res) {
						return A2(
							accumulate,
							x - 1,
							{ctor: '::', _0: res, _1: acc});
					},
					p);
			});
		return A2(
			accumulate,
			n,
			{ctor: '[]'});
	});
var _Bogdanp$elm_combine$Combine$string = function (s) {
	return _Bogdanp$elm_combine$Combine$Parser(
		F2(
			function (state, stream) {
				if (A2(_elm_lang$core$String$startsWith, s, stream.input)) {
					var len = _elm_lang$core$String$length(s);
					var rem = A2(_elm_lang$core$String$dropLeft, len, stream.input);
					var pos = stream.position + len;
					return {
						ctor: '_Tuple3',
						_0: state,
						_1: _elm_lang$core$Native_Utils.update(
							stream,
							{input: rem, position: pos}),
						_2: _elm_lang$core$Result$Ok(s)
					};
				} else {
					return {
						ctor: '_Tuple3',
						_0: state,
						_1: stream,
						_2: _elm_lang$core$Result$Err(
							{
								ctor: '::',
								_0: A2(
									_elm_lang$core$Basics_ops['++'],
									'expected ',
									_elm_lang$core$Basics$toString(s)),
								_1: {ctor: '[]'}
							})
					};
				}
			}));
};
var _Bogdanp$elm_combine$Combine$parens = A2(
	_Bogdanp$elm_combine$Combine$between,
	_Bogdanp$elm_combine$Combine$string('('),
	_Bogdanp$elm_combine$Combine$string(')'));
var _Bogdanp$elm_combine$Combine$braces = A2(
	_Bogdanp$elm_combine$Combine$between,
	_Bogdanp$elm_combine$Combine$string('{'),
	_Bogdanp$elm_combine$Combine$string('}'));
var _Bogdanp$elm_combine$Combine$brackets = A2(
	_Bogdanp$elm_combine$Combine$between,
	_Bogdanp$elm_combine$Combine$string('['),
	_Bogdanp$elm_combine$Combine$string(']'));
var _Bogdanp$elm_combine$Combine$regex = function (pat) {
	var pattern = A2(_elm_lang$core$String$startsWith, '^', pat) ? pat : A2(_elm_lang$core$Basics_ops['++'], '^', pat);
	return _Bogdanp$elm_combine$Combine$Parser(
		F2(
			function (state, stream) {
				var _p14 = A3(
					_elm_lang$core$Regex$find,
					_elm_lang$core$Regex$AtMost(1),
					_elm_lang$core$Regex$regex(pattern),
					stream.input);
				if ((_p14.ctor === '::') && (_p14._1.ctor === '[]')) {
					var _p15 = _p14._0;
					var len = _elm_lang$core$String$length(_p15.match);
					var rem = A2(_elm_lang$core$String$dropLeft, len, stream.input);
					var pos = stream.position + len;
					return {
						ctor: '_Tuple3',
						_0: state,
						_1: _elm_lang$core$Native_Utils.update(
							stream,
							{input: rem, position: pos}),
						_2: _elm_lang$core$Result$Ok(_p15.match)
					};
				} else {
					return {
						ctor: '_Tuple3',
						_0: state,
						_1: stream,
						_2: _elm_lang$core$Result$Err(
							{
								ctor: '::',
								_0: A2(
									_elm_lang$core$Basics_ops['++'],
									'expected input matching Regexp /',
									A2(_elm_lang$core$Basics_ops['++'], pattern, '/')),
								_1: {ctor: '[]'}
							})
					};
				}
			}));
};
var _Bogdanp$elm_combine$Combine$whitespace = A2(
	_Bogdanp$elm_combine$Combine_ops['<?>'],
	_Bogdanp$elm_combine$Combine$regex('[ \t\r\n]*'),
	'whitespace');
var _Bogdanp$elm_combine$Combine$while = function (pred) {
	var accumulate = F3(
		function (acc, state, stream) {
			accumulate:
			while (true) {
				var _p16 = _elm_lang$core$String$uncons(stream.input);
				if (_p16.ctor === 'Just') {
					var _p17 = _p16._0._0;
					if (pred(_p17)) {
						var pos = stream.position + 1;
						var c = A2(_elm_lang$core$String$cons, _p17, '');
						var _v17 = A2(_elm_lang$core$Basics_ops['++'], acc, c),
							_v18 = state,
							_v19 = _elm_lang$core$Native_Utils.update(
							stream,
							{input: _p16._0._1, position: pos});
						acc = _v17;
						state = _v18;
						stream = _v19;
						continue accumulate;
					} else {
						return {ctor: '_Tuple3', _0: state, _1: stream, _2: acc};
					}
				} else {
					return {ctor: '_Tuple3', _0: state, _1: stream, _2: acc};
				}
			}
		});
	return _Bogdanp$elm_combine$Combine$Parser(
		F2(
			function (state, stream) {
				var _p18 = A3(accumulate, '', state, stream);
				var rstate = _p18._0;
				var rstream = _p18._1;
				var res = _p18._2;
				return {
					ctor: '_Tuple3',
					_0: rstate,
					_1: rstream,
					_2: _elm_lang$core$Result$Ok(res)
				};
			}));
};
var _Bogdanp$elm_combine$Combine$end = _Bogdanp$elm_combine$Combine$Parser(
	F2(
		function (state, stream) {
			return _elm_lang$core$Native_Utils.eq(stream.input, '') ? {
				ctor: '_Tuple3',
				_0: state,
				_1: stream,
				_2: _elm_lang$core$Result$Ok(
					{ctor: '_Tuple0'})
			} : {
				ctor: '_Tuple3',
				_0: state,
				_1: stream,
				_2: _elm_lang$core$Result$Err(
					{
						ctor: '::',
						_0: 'expected end of input',
						_1: {ctor: '[]'}
					})
			};
		}));
var _Bogdanp$elm_combine$Combine$lookAhead = function (p) {
	return _Bogdanp$elm_combine$Combine$Parser(
		F2(
			function (state, stream) {
				var _p19 = A3(_Bogdanp$elm_combine$Combine$app, p, state, stream);
				if ((_p19.ctor === '_Tuple3') && (_p19._2.ctor === 'Ok')) {
					return {
						ctor: '_Tuple3',
						_0: _p19._0,
						_1: stream,
						_2: _elm_lang$core$Result$Ok(_p19._2._0)
					};
				} else {
					return _p19;
				}
			}));
};
var _Bogdanp$elm_combine$Combine$or = F2(
	function (lp, rp) {
		return _Bogdanp$elm_combine$Combine$Parser(
			F2(
				function (state, stream) {
					var _p20 = A3(_Bogdanp$elm_combine$Combine$app, lp, state, stream);
					if (_p20._2.ctor === 'Ok') {
						return _p20;
					} else {
						var _p21 = A3(_Bogdanp$elm_combine$Combine$app, rp, state, stream);
						if (_p21._2.ctor === 'Ok') {
							return _p21;
						} else {
							return {
								ctor: '_Tuple3',
								_0: state,
								_1: stream,
								_2: _elm_lang$core$Result$Err(
									A2(_elm_lang$core$Basics_ops['++'], _p20._2._0, _p21._2._0))
							};
						}
					}
				}));
	});
var _Bogdanp$elm_combine$Combine$choice = function (xs) {
	return A3(_elm_lang$core$List$foldr, _Bogdanp$elm_combine$Combine$or, _Bogdanp$elm_combine$Combine$emptyErr, xs);
};
var _Bogdanp$elm_combine$Combine_ops = _Bogdanp$elm_combine$Combine_ops || {};
_Bogdanp$elm_combine$Combine_ops['<|>'] = _Bogdanp$elm_combine$Combine$or;
var _Bogdanp$elm_combine$Combine$optional = F2(
	function (res, p) {
		return A2(
			_Bogdanp$elm_combine$Combine_ops['<|>'],
			p,
			_Bogdanp$elm_combine$Combine$succeed(res));
	});
var _Bogdanp$elm_combine$Combine$chainl = F2(
	function (op, p) {
		var accumulate = function (x) {
			return A2(
				_Bogdanp$elm_combine$Combine_ops['<|>'],
				A2(
					_Bogdanp$elm_combine$Combine$andThen,
					function (f) {
						return A2(
							_Bogdanp$elm_combine$Combine$andThen,
							function (y) {
								return accumulate(
									A2(f, x, y));
							},
							p);
					},
					op),
				_Bogdanp$elm_combine$Combine$succeed(x));
		};
		return A2(_Bogdanp$elm_combine$Combine$andThen, accumulate, p);
	});
var _Bogdanp$elm_combine$Combine$chainr = F2(
	function (op, p) {
		var accumulate = function (x) {
			return A2(
				_Bogdanp$elm_combine$Combine_ops['<|>'],
				A2(
					_Bogdanp$elm_combine$Combine$andThen,
					function (f) {
						return A2(
							_Bogdanp$elm_combine$Combine$andThen,
							function (y) {
								return _Bogdanp$elm_combine$Combine$succeed(
									A2(f, x, y));
							},
							A2(_Bogdanp$elm_combine$Combine$andThen, accumulate, p));
					},
					op),
				_Bogdanp$elm_combine$Combine$succeed(x));
		};
		return A2(_Bogdanp$elm_combine$Combine$andThen, accumulate, p);
	});
var _Bogdanp$elm_combine$Combine$maybe = function (p) {
	return _Bogdanp$elm_combine$Combine$Parser(
		F2(
			function (state, stream) {
				var _p22 = A3(_Bogdanp$elm_combine$Combine$app, p, state, stream);
				if ((_p22.ctor === '_Tuple3') && (_p22._2.ctor === 'Ok')) {
					return {
						ctor: '_Tuple3',
						_0: _p22._0,
						_1: _p22._1,
						_2: _elm_lang$core$Result$Ok(
							_elm_lang$core$Maybe$Just(_p22._2._0))
					};
				} else {
					return {
						ctor: '_Tuple3',
						_0: state,
						_1: stream,
						_2: _elm_lang$core$Result$Ok(_elm_lang$core$Maybe$Nothing)
					};
				}
			}));
};
var _Bogdanp$elm_combine$Combine$many = function (p) {
	var accumulate = F3(
		function (acc, state, stream) {
			accumulate:
			while (true) {
				var _p23 = A3(_Bogdanp$elm_combine$Combine$app, p, state, stream);
				if ((_p23.ctor === '_Tuple3') && (_p23._2.ctor === 'Ok')) {
					var _p25 = _p23._1;
					var _p24 = _p23._0;
					if (_elm_lang$core$Native_Utils.eq(stream, _p25)) {
						return {
							ctor: '_Tuple3',
							_0: _p24,
							_1: _p25,
							_2: _elm_lang$core$List$reverse(acc)
						};
					} else {
						var _v25 = {ctor: '::', _0: _p23._2._0, _1: acc},
							_v26 = _p24,
							_v27 = _p25;
						acc = _v25;
						state = _v26;
						stream = _v27;
						continue accumulate;
					}
				} else {
					return {
						ctor: '_Tuple3',
						_0: state,
						_1: stream,
						_2: _elm_lang$core$List$reverse(acc)
					};
				}
			}
		});
	return _Bogdanp$elm_combine$Combine$Parser(
		F2(
			function (state, stream) {
				var _p26 = A3(
					accumulate,
					{ctor: '[]'},
					state,
					stream);
				var rstate = _p26._0;
				var rstream = _p26._1;
				var res = _p26._2;
				return {
					ctor: '_Tuple3',
					_0: rstate,
					_1: rstream,
					_2: _elm_lang$core$Result$Ok(res)
				};
			}));
};
var _Bogdanp$elm_combine$Combine$many1 = function (p) {
	return A2(
		_Bogdanp$elm_combine$Combine_ops['<*>'],
		A2(
			_Bogdanp$elm_combine$Combine_ops['<$>'],
			F2(
				function (x, y) {
					return {ctor: '::', _0: x, _1: y};
				}),
			p),
		_Bogdanp$elm_combine$Combine$many(p));
};
var _Bogdanp$elm_combine$Combine$skipMany1 = function (p) {
	return A2(
		_Bogdanp$elm_combine$Combine_ops['<$'],
		{ctor: '_Tuple0'},
		_Bogdanp$elm_combine$Combine$many1(
			_Bogdanp$elm_combine$Combine$skip(p)));
};
var _Bogdanp$elm_combine$Combine$sepBy1 = F2(
	function (sep, p) {
		return A2(
			_Bogdanp$elm_combine$Combine_ops['<*>'],
			A2(
				_Bogdanp$elm_combine$Combine_ops['<$>'],
				F2(
					function (x, y) {
						return {ctor: '::', _0: x, _1: y};
					}),
				p),
			_Bogdanp$elm_combine$Combine$many(
				A2(_Bogdanp$elm_combine$Combine_ops['*>'], sep, p)));
	});
var _Bogdanp$elm_combine$Combine$sepBy = F2(
	function (sep, p) {
		return A2(
			_Bogdanp$elm_combine$Combine_ops['<|>'],
			A2(_Bogdanp$elm_combine$Combine$sepBy1, sep, p),
			_Bogdanp$elm_combine$Combine$succeed(
				{ctor: '[]'}));
	});
var _Bogdanp$elm_combine$Combine$sepEndBy1 = F2(
	function (sep, p) {
		return A2(
			_Bogdanp$elm_combine$Combine_ops['<*'],
			A2(_Bogdanp$elm_combine$Combine$sepBy1, sep, p),
			_Bogdanp$elm_combine$Combine$maybe(sep));
	});
var _Bogdanp$elm_combine$Combine$sepEndBy = F2(
	function (sep, p) {
		return A2(
			_Bogdanp$elm_combine$Combine_ops['<|>'],
			A2(_Bogdanp$elm_combine$Combine$sepEndBy1, sep, p),
			_Bogdanp$elm_combine$Combine$succeed(
				{ctor: '[]'}));
	});
var _Bogdanp$elm_combine$Combine$skipMany = function (p) {
	return A2(
		_Bogdanp$elm_combine$Combine_ops['<$'],
		{ctor: '_Tuple0'},
		_Bogdanp$elm_combine$Combine$many(
			_Bogdanp$elm_combine$Combine$skip(p)));
};
var _Bogdanp$elm_combine$Combine$manyTill = F2(
	function (p, end) {
		var accumulate = F3(
			function (acc, state, stream) {
				accumulate:
				while (true) {
					var _p27 = A3(_Bogdanp$elm_combine$Combine$app, end, state, stream);
					if (_p27._2.ctor === 'Ok') {
						return {
							ctor: '_Tuple3',
							_0: _p27._0,
							_1: _p27._1,
							_2: _elm_lang$core$Result$Ok(
								_elm_lang$core$List$reverse(acc))
						};
					} else {
						var _p28 = A3(_Bogdanp$elm_combine$Combine$app, p, state, stream);
						if ((_p28.ctor === '_Tuple3') && (_p28._2.ctor === 'Ok')) {
							var _v30 = {ctor: '::', _0: _p28._2._0, _1: acc},
								_v31 = _p28._0,
								_v32 = _p28._1;
							acc = _v30;
							state = _v31;
							stream = _v32;
							continue accumulate;
						} else {
							return {
								ctor: '_Tuple3',
								_0: _p27._0,
								_1: _p27._1,
								_2: _elm_lang$core$Result$Err(_p27._2._0)
							};
						}
					}
				}
			});
		return _Bogdanp$elm_combine$Combine$Parser(
			accumulate(
				{ctor: '[]'}));
	});

var _Bogdanp$elm_combine$Combine_Char$crlf = A2(
	_Bogdanp$elm_combine$Combine_ops['<$'],
	_elm_lang$core$Native_Utils.chr('\n'),
	A2(
		_Bogdanp$elm_combine$Combine_ops['<?>'],
		_Bogdanp$elm_combine$Combine$regex('\r\n'),
		'expected crlf'));
var _Bogdanp$elm_combine$Combine_Char$satisfy = function (pred) {
	return _Bogdanp$elm_combine$Combine$primitive(
		F2(
			function (state, stream) {
				var message = 'could not satisfy predicate';
				var _p0 = _elm_lang$core$String$uncons(stream.input);
				if (_p0.ctor === 'Just') {
					var _p1 = _p0._0._0;
					return pred(_p1) ? {
						ctor: '_Tuple3',
						_0: state,
						_1: _elm_lang$core$Native_Utils.update(
							stream,
							{input: _p0._0._1, position: stream.position + 1}),
						_2: _elm_lang$core$Result$Ok(_p1)
					} : {
						ctor: '_Tuple3',
						_0: state,
						_1: stream,
						_2: _elm_lang$core$Result$Err(
							{
								ctor: '::',
								_0: message,
								_1: {ctor: '[]'}
							})
					};
				} else {
					return {
						ctor: '_Tuple3',
						_0: state,
						_1: stream,
						_2: _elm_lang$core$Result$Err(
							{
								ctor: '::',
								_0: message,
								_1: {ctor: '[]'}
							})
					};
				}
			}));
};
var _Bogdanp$elm_combine$Combine_Char$char = function (c) {
	return A2(
		_Bogdanp$elm_combine$Combine_ops['<?>'],
		_Bogdanp$elm_combine$Combine_Char$satisfy(
			F2(
				function (x, y) {
					return _elm_lang$core$Native_Utils.eq(x, y);
				})(c)),
		A2(
			_elm_lang$core$Basics_ops['++'],
			'expected ',
			_elm_lang$core$Basics$toString(c)));
};
var _Bogdanp$elm_combine$Combine_Char$anyChar = A2(
	_Bogdanp$elm_combine$Combine_ops['<?>'],
	_Bogdanp$elm_combine$Combine_Char$satisfy(
		_elm_lang$core$Basics$always(true)),
	'expected any character');
var _Bogdanp$elm_combine$Combine_Char$oneOf = function (cs) {
	return A2(
		_Bogdanp$elm_combine$Combine_ops['<?>'],
		_Bogdanp$elm_combine$Combine_Char$satisfy(
			A2(_elm_lang$core$Basics$flip, _elm_lang$core$List$member, cs)),
		A2(
			_elm_lang$core$Basics_ops['++'],
			'expected one of ',
			_elm_lang$core$Basics$toString(cs)));
};
var _Bogdanp$elm_combine$Combine_Char$noneOf = function (cs) {
	return A2(
		_Bogdanp$elm_combine$Combine_ops['<?>'],
		_Bogdanp$elm_combine$Combine_Char$satisfy(
			function (_p2) {
				return !A3(_elm_lang$core$Basics$flip, _elm_lang$core$List$member, cs, _p2);
			}),
		A2(
			_elm_lang$core$Basics_ops['++'],
			'expected none of ',
			_elm_lang$core$Basics$toString(cs)));
};
var _Bogdanp$elm_combine$Combine_Char$space = A2(
	_Bogdanp$elm_combine$Combine_ops['<?>'],
	_Bogdanp$elm_combine$Combine_Char$satisfy(
		F2(
			function (x, y) {
				return _elm_lang$core$Native_Utils.eq(x, y);
			})(
			_elm_lang$core$Native_Utils.chr(' '))),
	'expected space');
var _Bogdanp$elm_combine$Combine_Char$tab = A2(
	_Bogdanp$elm_combine$Combine_ops['<?>'],
	_Bogdanp$elm_combine$Combine_Char$satisfy(
		F2(
			function (x, y) {
				return _elm_lang$core$Native_Utils.eq(x, y);
			})(
			_elm_lang$core$Native_Utils.chr('\t'))),
	'expected tab');
var _Bogdanp$elm_combine$Combine_Char$newline = A2(
	_Bogdanp$elm_combine$Combine_ops['<?>'],
	_Bogdanp$elm_combine$Combine_Char$satisfy(
		F2(
			function (x, y) {
				return _elm_lang$core$Native_Utils.eq(x, y);
			})(
			_elm_lang$core$Native_Utils.chr('\n'))),
	'expected newline');
var _Bogdanp$elm_combine$Combine_Char$eol = A2(_Bogdanp$elm_combine$Combine_ops['<|>'], _Bogdanp$elm_combine$Combine_Char$newline, _Bogdanp$elm_combine$Combine_Char$crlf);
var _Bogdanp$elm_combine$Combine_Char$lower = A2(
	_Bogdanp$elm_combine$Combine_ops['<?>'],
	_Bogdanp$elm_combine$Combine_Char$satisfy(_elm_lang$core$Char$isLower),
	'expected a lowercase character');
var _Bogdanp$elm_combine$Combine_Char$upper = A2(
	_Bogdanp$elm_combine$Combine_ops['<?>'],
	_Bogdanp$elm_combine$Combine_Char$satisfy(_elm_lang$core$Char$isUpper),
	'expected an uppercase character');
var _Bogdanp$elm_combine$Combine_Char$digit = A2(
	_Bogdanp$elm_combine$Combine_ops['<?>'],
	_Bogdanp$elm_combine$Combine_Char$satisfy(_elm_lang$core$Char$isDigit),
	'expected a digit');
var _Bogdanp$elm_combine$Combine_Char$octDigit = A2(
	_Bogdanp$elm_combine$Combine_ops['<?>'],
	_Bogdanp$elm_combine$Combine_Char$satisfy(_elm_lang$core$Char$isOctDigit),
	'expected an octal digit');
var _Bogdanp$elm_combine$Combine_Char$hexDigit = A2(
	_Bogdanp$elm_combine$Combine_ops['<?>'],
	_Bogdanp$elm_combine$Combine_Char$satisfy(_elm_lang$core$Char$isHexDigit),
	'expected a hexadecimal digit');

var _Bogdanp$elm_combine$Combine_Num$digit = function () {
	var toDigit = function (c) {
		return _elm_lang$core$Char$toCode(c) - _elm_lang$core$Char$toCode(
			_elm_lang$core$Native_Utils.chr('0'));
	};
	return A2(
		_Bogdanp$elm_combine$Combine_ops['<$>'],
		toDigit,
		A2(_Bogdanp$elm_combine$Combine_ops['<?>'], _Bogdanp$elm_combine$Combine_Char$digit, 'expected a digit'));
}();
var _Bogdanp$elm_combine$Combine_Num$sign = A2(
	_Bogdanp$elm_combine$Combine$optional,
	1,
	_Bogdanp$elm_combine$Combine$choice(
		{
			ctor: '::',
			_0: A2(
				_Bogdanp$elm_combine$Combine_ops['<$'],
				1,
				_Bogdanp$elm_combine$Combine$string('+')),
			_1: {
				ctor: '::',
				_0: A2(
					_Bogdanp$elm_combine$Combine_ops['<$'],
					-1,
					_Bogdanp$elm_combine$Combine$string('-')),
				_1: {ctor: '[]'}
			}
		}));
var _Bogdanp$elm_combine$Combine_Num$unwrap = F2(
	function (f, s) {
		var _p0 = f(s);
		if (_p0.ctor === 'Ok') {
			return _p0._0;
		} else {
			return _elm_lang$core$Native_Utils.crashCase(
				'Combine.Num',
				{
					start: {line: 23, column: 3},
					end: {line: 28, column: 79}
				},
				_p0)(
				A2(
					_elm_lang$core$Basics_ops['++'],
					'impossible state in Combine.Num.unwrap: ',
					_elm_lang$core$Basics$toString(_p0._0)));
		}
	});
var _Bogdanp$elm_combine$Combine_Num$toInt = _Bogdanp$elm_combine$Combine_Num$unwrap(_elm_lang$core$String$toInt);
var _Bogdanp$elm_combine$Combine_Num$int = A2(
	_Bogdanp$elm_combine$Combine_ops['<*>'],
	A2(
		_Bogdanp$elm_combine$Combine_ops['<$>'],
		F2(
			function (x, y) {
				return x * y;
			}),
		_Bogdanp$elm_combine$Combine_Num$sign),
	A2(
		_Bogdanp$elm_combine$Combine_ops['<?>'],
		A2(
			_Bogdanp$elm_combine$Combine_ops['<$>'],
			_Bogdanp$elm_combine$Combine_Num$toInt,
			_Bogdanp$elm_combine$Combine$regex('(0|[1-9][0-9]*)')),
		'expected an integer'));
var _Bogdanp$elm_combine$Combine_Num$toFloat = _Bogdanp$elm_combine$Combine_Num$unwrap(_elm_lang$core$String$toFloat);
var _Bogdanp$elm_combine$Combine_Num$float = A2(
	_Bogdanp$elm_combine$Combine_ops['<*>'],
	A2(
		_Bogdanp$elm_combine$Combine_ops['<$>'],
		function (_p2) {
			return F2(
				function (x, y) {
					return x * y;
				})(
				_elm_lang$core$Basics$toFloat(_p2));
		},
		_Bogdanp$elm_combine$Combine_Num$sign),
	A2(
		_Bogdanp$elm_combine$Combine_ops['<?>'],
		A2(
			_Bogdanp$elm_combine$Combine_ops['<$>'],
			_Bogdanp$elm_combine$Combine_Num$toFloat,
			_Bogdanp$elm_combine$Combine$regex('(0|[1-9][0-9]*)(\\.[0-9]+)')),
		'expected a float'));

var _elm_lang$core$Dict$foldr = F3(
	function (f, acc, t) {
		foldr:
		while (true) {
			var _p0 = t;
			if (_p0.ctor === 'RBEmpty_elm_builtin') {
				return acc;
			} else {
				var _v1 = f,
					_v2 = A3(
					f,
					_p0._1,
					_p0._2,
					A3(_elm_lang$core$Dict$foldr, f, acc, _p0._4)),
					_v3 = _p0._3;
				f = _v1;
				acc = _v2;
				t = _v3;
				continue foldr;
			}
		}
	});
var _elm_lang$core$Dict$keys = function (dict) {
	return A3(
		_elm_lang$core$Dict$foldr,
		F3(
			function (key, value, keyList) {
				return {ctor: '::', _0: key, _1: keyList};
			}),
		{ctor: '[]'},
		dict);
};
var _elm_lang$core$Dict$values = function (dict) {
	return A3(
		_elm_lang$core$Dict$foldr,
		F3(
			function (key, value, valueList) {
				return {ctor: '::', _0: value, _1: valueList};
			}),
		{ctor: '[]'},
		dict);
};
var _elm_lang$core$Dict$toList = function (dict) {
	return A3(
		_elm_lang$core$Dict$foldr,
		F3(
			function (key, value, list) {
				return {
					ctor: '::',
					_0: {ctor: '_Tuple2', _0: key, _1: value},
					_1: list
				};
			}),
		{ctor: '[]'},
		dict);
};
var _elm_lang$core$Dict$foldl = F3(
	function (f, acc, dict) {
		foldl:
		while (true) {
			var _p1 = dict;
			if (_p1.ctor === 'RBEmpty_elm_builtin') {
				return acc;
			} else {
				var _v5 = f,
					_v6 = A3(
					f,
					_p1._1,
					_p1._2,
					A3(_elm_lang$core$Dict$foldl, f, acc, _p1._3)),
					_v7 = _p1._4;
				f = _v5;
				acc = _v6;
				dict = _v7;
				continue foldl;
			}
		}
	});
var _elm_lang$core$Dict$merge = F6(
	function (leftStep, bothStep, rightStep, leftDict, rightDict, initialResult) {
		var stepState = F3(
			function (rKey, rValue, _p2) {
				stepState:
				while (true) {
					var _p3 = _p2;
					var _p9 = _p3._1;
					var _p8 = _p3._0;
					var _p4 = _p8;
					if (_p4.ctor === '[]') {
						return {
							ctor: '_Tuple2',
							_0: _p8,
							_1: A3(rightStep, rKey, rValue, _p9)
						};
					} else {
						var _p7 = _p4._1;
						var _p6 = _p4._0._1;
						var _p5 = _p4._0._0;
						if (_elm_lang$core$Native_Utils.cmp(_p5, rKey) < 0) {
							var _v10 = rKey,
								_v11 = rValue,
								_v12 = {
								ctor: '_Tuple2',
								_0: _p7,
								_1: A3(leftStep, _p5, _p6, _p9)
							};
							rKey = _v10;
							rValue = _v11;
							_p2 = _v12;
							continue stepState;
						} else {
							if (_elm_lang$core$Native_Utils.cmp(_p5, rKey) > 0) {
								return {
									ctor: '_Tuple2',
									_0: _p8,
									_1: A3(rightStep, rKey, rValue, _p9)
								};
							} else {
								return {
									ctor: '_Tuple2',
									_0: _p7,
									_1: A4(bothStep, _p5, _p6, rValue, _p9)
								};
							}
						}
					}
				}
			});
		var _p10 = A3(
			_elm_lang$core$Dict$foldl,
			stepState,
			{
				ctor: '_Tuple2',
				_0: _elm_lang$core$Dict$toList(leftDict),
				_1: initialResult
			},
			rightDict);
		var leftovers = _p10._0;
		var intermediateResult = _p10._1;
		return A3(
			_elm_lang$core$List$foldl,
			F2(
				function (_p11, result) {
					var _p12 = _p11;
					return A3(leftStep, _p12._0, _p12._1, result);
				}),
			intermediateResult,
			leftovers);
	});
var _elm_lang$core$Dict$reportRemBug = F4(
	function (msg, c, lgot, rgot) {
		return _elm_lang$core$Native_Debug.crash(
			_elm_lang$core$String$concat(
				{
					ctor: '::',
					_0: 'Internal red-black tree invariant violated, expected ',
					_1: {
						ctor: '::',
						_0: msg,
						_1: {
							ctor: '::',
							_0: ' and got ',
							_1: {
								ctor: '::',
								_0: _elm_lang$core$Basics$toString(c),
								_1: {
									ctor: '::',
									_0: '/',
									_1: {
										ctor: '::',
										_0: lgot,
										_1: {
											ctor: '::',
											_0: '/',
											_1: {
												ctor: '::',
												_0: rgot,
												_1: {
													ctor: '::',
													_0: '\nPlease report this bug to <https://github.com/elm-lang/core/issues>',
													_1: {ctor: '[]'}
												}
											}
										}
									}
								}
							}
						}
					}
				}));
	});
var _elm_lang$core$Dict$isBBlack = function (dict) {
	var _p13 = dict;
	_v14_2:
	do {
		if (_p13.ctor === 'RBNode_elm_builtin') {
			if (_p13._0.ctor === 'BBlack') {
				return true;
			} else {
				break _v14_2;
			}
		} else {
			if (_p13._0.ctor === 'LBBlack') {
				return true;
			} else {
				break _v14_2;
			}
		}
	} while(false);
	return false;
};
var _elm_lang$core$Dict$sizeHelp = F2(
	function (n, dict) {
		sizeHelp:
		while (true) {
			var _p14 = dict;
			if (_p14.ctor === 'RBEmpty_elm_builtin') {
				return n;
			} else {
				var _v16 = A2(_elm_lang$core$Dict$sizeHelp, n + 1, _p14._4),
					_v17 = _p14._3;
				n = _v16;
				dict = _v17;
				continue sizeHelp;
			}
		}
	});
var _elm_lang$core$Dict$size = function (dict) {
	return A2(_elm_lang$core$Dict$sizeHelp, 0, dict);
};
var _elm_lang$core$Dict$get = F2(
	function (targetKey, dict) {
		get:
		while (true) {
			var _p15 = dict;
			if (_p15.ctor === 'RBEmpty_elm_builtin') {
				return _elm_lang$core$Maybe$Nothing;
			} else {
				var _p16 = A2(_elm_lang$core$Basics$compare, targetKey, _p15._1);
				switch (_p16.ctor) {
					case 'LT':
						var _v20 = targetKey,
							_v21 = _p15._3;
						targetKey = _v20;
						dict = _v21;
						continue get;
					case 'EQ':
						return _elm_lang$core$Maybe$Just(_p15._2);
					default:
						var _v22 = targetKey,
							_v23 = _p15._4;
						targetKey = _v22;
						dict = _v23;
						continue get;
				}
			}
		}
	});
var _elm_lang$core$Dict$member = F2(
	function (key, dict) {
		var _p17 = A2(_elm_lang$core$Dict$get, key, dict);
		if (_p17.ctor === 'Just') {
			return true;
		} else {
			return false;
		}
	});
var _elm_lang$core$Dict$maxWithDefault = F3(
	function (k, v, r) {
		maxWithDefault:
		while (true) {
			var _p18 = r;
			if (_p18.ctor === 'RBEmpty_elm_builtin') {
				return {ctor: '_Tuple2', _0: k, _1: v};
			} else {
				var _v26 = _p18._1,
					_v27 = _p18._2,
					_v28 = _p18._4;
				k = _v26;
				v = _v27;
				r = _v28;
				continue maxWithDefault;
			}
		}
	});
var _elm_lang$core$Dict$NBlack = {ctor: 'NBlack'};
var _elm_lang$core$Dict$BBlack = {ctor: 'BBlack'};
var _elm_lang$core$Dict$Black = {ctor: 'Black'};
var _elm_lang$core$Dict$blackish = function (t) {
	var _p19 = t;
	if (_p19.ctor === 'RBNode_elm_builtin') {
		var _p20 = _p19._0;
		return _elm_lang$core$Native_Utils.eq(_p20, _elm_lang$core$Dict$Black) || _elm_lang$core$Native_Utils.eq(_p20, _elm_lang$core$Dict$BBlack);
	} else {
		return true;
	}
};
var _elm_lang$core$Dict$Red = {ctor: 'Red'};
var _elm_lang$core$Dict$moreBlack = function (color) {
	var _p21 = color;
	switch (_p21.ctor) {
		case 'Black':
			return _elm_lang$core$Dict$BBlack;
		case 'Red':
			return _elm_lang$core$Dict$Black;
		case 'NBlack':
			return _elm_lang$core$Dict$Red;
		default:
			return _elm_lang$core$Native_Debug.crash('Can\'t make a double black node more black!');
	}
};
var _elm_lang$core$Dict$lessBlack = function (color) {
	var _p22 = color;
	switch (_p22.ctor) {
		case 'BBlack':
			return _elm_lang$core$Dict$Black;
		case 'Black':
			return _elm_lang$core$Dict$Red;
		case 'Red':
			return _elm_lang$core$Dict$NBlack;
		default:
			return _elm_lang$core$Native_Debug.crash('Can\'t make a negative black node less black!');
	}
};
var _elm_lang$core$Dict$LBBlack = {ctor: 'LBBlack'};
var _elm_lang$core$Dict$LBlack = {ctor: 'LBlack'};
var _elm_lang$core$Dict$RBEmpty_elm_builtin = function (a) {
	return {ctor: 'RBEmpty_elm_builtin', _0: a};
};
var _elm_lang$core$Dict$empty = _elm_lang$core$Dict$RBEmpty_elm_builtin(_elm_lang$core$Dict$LBlack);
var _elm_lang$core$Dict$isEmpty = function (dict) {
	return _elm_lang$core$Native_Utils.eq(dict, _elm_lang$core$Dict$empty);
};
var _elm_lang$core$Dict$RBNode_elm_builtin = F5(
	function (a, b, c, d, e) {
		return {ctor: 'RBNode_elm_builtin', _0: a, _1: b, _2: c, _3: d, _4: e};
	});
var _elm_lang$core$Dict$ensureBlackRoot = function (dict) {
	var _p23 = dict;
	if ((_p23.ctor === 'RBNode_elm_builtin') && (_p23._0.ctor === 'Red')) {
		return A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Black, _p23._1, _p23._2, _p23._3, _p23._4);
	} else {
		return dict;
	}
};
var _elm_lang$core$Dict$lessBlackTree = function (dict) {
	var _p24 = dict;
	if (_p24.ctor === 'RBNode_elm_builtin') {
		return A5(
			_elm_lang$core$Dict$RBNode_elm_builtin,
			_elm_lang$core$Dict$lessBlack(_p24._0),
			_p24._1,
			_p24._2,
			_p24._3,
			_p24._4);
	} else {
		return _elm_lang$core$Dict$RBEmpty_elm_builtin(_elm_lang$core$Dict$LBlack);
	}
};
var _elm_lang$core$Dict$balancedTree = function (col) {
	return function (xk) {
		return function (xv) {
			return function (yk) {
				return function (yv) {
					return function (zk) {
						return function (zv) {
							return function (a) {
								return function (b) {
									return function (c) {
										return function (d) {
											return A5(
												_elm_lang$core$Dict$RBNode_elm_builtin,
												_elm_lang$core$Dict$lessBlack(col),
												yk,
												yv,
												A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Black, xk, xv, a, b),
												A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Black, zk, zv, c, d));
										};
									};
								};
							};
						};
					};
				};
			};
		};
	};
};
var _elm_lang$core$Dict$blacken = function (t) {
	var _p25 = t;
	if (_p25.ctor === 'RBEmpty_elm_builtin') {
		return _elm_lang$core$Dict$RBEmpty_elm_builtin(_elm_lang$core$Dict$LBlack);
	} else {
		return A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Black, _p25._1, _p25._2, _p25._3, _p25._4);
	}
};
var _elm_lang$core$Dict$redden = function (t) {
	var _p26 = t;
	if (_p26.ctor === 'RBEmpty_elm_builtin') {
		return _elm_lang$core$Native_Debug.crash('can\'t make a Leaf red');
	} else {
		return A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Red, _p26._1, _p26._2, _p26._3, _p26._4);
	}
};
var _elm_lang$core$Dict$balanceHelp = function (tree) {
	var _p27 = tree;
	_v36_6:
	do {
		_v36_5:
		do {
			_v36_4:
			do {
				_v36_3:
				do {
					_v36_2:
					do {
						_v36_1:
						do {
							_v36_0:
							do {
								if (_p27.ctor === 'RBNode_elm_builtin') {
									if (_p27._3.ctor === 'RBNode_elm_builtin') {
										if (_p27._4.ctor === 'RBNode_elm_builtin') {
											switch (_p27._3._0.ctor) {
												case 'Red':
													switch (_p27._4._0.ctor) {
														case 'Red':
															if ((_p27._3._3.ctor === 'RBNode_elm_builtin') && (_p27._3._3._0.ctor === 'Red')) {
																break _v36_0;
															} else {
																if ((_p27._3._4.ctor === 'RBNode_elm_builtin') && (_p27._3._4._0.ctor === 'Red')) {
																	break _v36_1;
																} else {
																	if ((_p27._4._3.ctor === 'RBNode_elm_builtin') && (_p27._4._3._0.ctor === 'Red')) {
																		break _v36_2;
																	} else {
																		if ((_p27._4._4.ctor === 'RBNode_elm_builtin') && (_p27._4._4._0.ctor === 'Red')) {
																			break _v36_3;
																		} else {
																			break _v36_6;
																		}
																	}
																}
															}
														case 'NBlack':
															if ((_p27._3._3.ctor === 'RBNode_elm_builtin') && (_p27._3._3._0.ctor === 'Red')) {
																break _v36_0;
															} else {
																if ((_p27._3._4.ctor === 'RBNode_elm_builtin') && (_p27._3._4._0.ctor === 'Red')) {
																	break _v36_1;
																} else {
																	if (((((_p27._0.ctor === 'BBlack') && (_p27._4._3.ctor === 'RBNode_elm_builtin')) && (_p27._4._3._0.ctor === 'Black')) && (_p27._4._4.ctor === 'RBNode_elm_builtin')) && (_p27._4._4._0.ctor === 'Black')) {
																		break _v36_4;
																	} else {
																		break _v36_6;
																	}
																}
															}
														default:
															if ((_p27._3._3.ctor === 'RBNode_elm_builtin') && (_p27._3._3._0.ctor === 'Red')) {
																break _v36_0;
															} else {
																if ((_p27._3._4.ctor === 'RBNode_elm_builtin') && (_p27._3._4._0.ctor === 'Red')) {
																	break _v36_1;
																} else {
																	break _v36_6;
																}
															}
													}
												case 'NBlack':
													switch (_p27._4._0.ctor) {
														case 'Red':
															if ((_p27._4._3.ctor === 'RBNode_elm_builtin') && (_p27._4._3._0.ctor === 'Red')) {
																break _v36_2;
															} else {
																if ((_p27._4._4.ctor === 'RBNode_elm_builtin') && (_p27._4._4._0.ctor === 'Red')) {
																	break _v36_3;
																} else {
																	if (((((_p27._0.ctor === 'BBlack') && (_p27._3._3.ctor === 'RBNode_elm_builtin')) && (_p27._3._3._0.ctor === 'Black')) && (_p27._3._4.ctor === 'RBNode_elm_builtin')) && (_p27._3._4._0.ctor === 'Black')) {
																		break _v36_5;
																	} else {
																		break _v36_6;
																	}
																}
															}
														case 'NBlack':
															if (_p27._0.ctor === 'BBlack') {
																if ((((_p27._4._3.ctor === 'RBNode_elm_builtin') && (_p27._4._3._0.ctor === 'Black')) && (_p27._4._4.ctor === 'RBNode_elm_builtin')) && (_p27._4._4._0.ctor === 'Black')) {
																	break _v36_4;
																} else {
																	if ((((_p27._3._3.ctor === 'RBNode_elm_builtin') && (_p27._3._3._0.ctor === 'Black')) && (_p27._3._4.ctor === 'RBNode_elm_builtin')) && (_p27._3._4._0.ctor === 'Black')) {
																		break _v36_5;
																	} else {
																		break _v36_6;
																	}
																}
															} else {
																break _v36_6;
															}
														default:
															if (((((_p27._0.ctor === 'BBlack') && (_p27._3._3.ctor === 'RBNode_elm_builtin')) && (_p27._3._3._0.ctor === 'Black')) && (_p27._3._4.ctor === 'RBNode_elm_builtin')) && (_p27._3._4._0.ctor === 'Black')) {
																break _v36_5;
															} else {
																break _v36_6;
															}
													}
												default:
													switch (_p27._4._0.ctor) {
														case 'Red':
															if ((_p27._4._3.ctor === 'RBNode_elm_builtin') && (_p27._4._3._0.ctor === 'Red')) {
																break _v36_2;
															} else {
																if ((_p27._4._4.ctor === 'RBNode_elm_builtin') && (_p27._4._4._0.ctor === 'Red')) {
																	break _v36_3;
																} else {
																	break _v36_6;
																}
															}
														case 'NBlack':
															if (((((_p27._0.ctor === 'BBlack') && (_p27._4._3.ctor === 'RBNode_elm_builtin')) && (_p27._4._3._0.ctor === 'Black')) && (_p27._4._4.ctor === 'RBNode_elm_builtin')) && (_p27._4._4._0.ctor === 'Black')) {
																break _v36_4;
															} else {
																break _v36_6;
															}
														default:
															break _v36_6;
													}
											}
										} else {
											switch (_p27._3._0.ctor) {
												case 'Red':
													if ((_p27._3._3.ctor === 'RBNode_elm_builtin') && (_p27._3._3._0.ctor === 'Red')) {
														break _v36_0;
													} else {
														if ((_p27._3._4.ctor === 'RBNode_elm_builtin') && (_p27._3._4._0.ctor === 'Red')) {
															break _v36_1;
														} else {
															break _v36_6;
														}
													}
												case 'NBlack':
													if (((((_p27._0.ctor === 'BBlack') && (_p27._3._3.ctor === 'RBNode_elm_builtin')) && (_p27._3._3._0.ctor === 'Black')) && (_p27._3._4.ctor === 'RBNode_elm_builtin')) && (_p27._3._4._0.ctor === 'Black')) {
														break _v36_5;
													} else {
														break _v36_6;
													}
												default:
													break _v36_6;
											}
										}
									} else {
										if (_p27._4.ctor === 'RBNode_elm_builtin') {
											switch (_p27._4._0.ctor) {
												case 'Red':
													if ((_p27._4._3.ctor === 'RBNode_elm_builtin') && (_p27._4._3._0.ctor === 'Red')) {
														break _v36_2;
													} else {
														if ((_p27._4._4.ctor === 'RBNode_elm_builtin') && (_p27._4._4._0.ctor === 'Red')) {
															break _v36_3;
														} else {
															break _v36_6;
														}
													}
												case 'NBlack':
													if (((((_p27._0.ctor === 'BBlack') && (_p27._4._3.ctor === 'RBNode_elm_builtin')) && (_p27._4._3._0.ctor === 'Black')) && (_p27._4._4.ctor === 'RBNode_elm_builtin')) && (_p27._4._4._0.ctor === 'Black')) {
														break _v36_4;
													} else {
														break _v36_6;
													}
												default:
													break _v36_6;
											}
										} else {
											break _v36_6;
										}
									}
								} else {
									break _v36_6;
								}
							} while(false);
							return _elm_lang$core$Dict$balancedTree(_p27._0)(_p27._3._3._1)(_p27._3._3._2)(_p27._3._1)(_p27._3._2)(_p27._1)(_p27._2)(_p27._3._3._3)(_p27._3._3._4)(_p27._3._4)(_p27._4);
						} while(false);
						return _elm_lang$core$Dict$balancedTree(_p27._0)(_p27._3._1)(_p27._3._2)(_p27._3._4._1)(_p27._3._4._2)(_p27._1)(_p27._2)(_p27._3._3)(_p27._3._4._3)(_p27._3._4._4)(_p27._4);
					} while(false);
					return _elm_lang$core$Dict$balancedTree(_p27._0)(_p27._1)(_p27._2)(_p27._4._3._1)(_p27._4._3._2)(_p27._4._1)(_p27._4._2)(_p27._3)(_p27._4._3._3)(_p27._4._3._4)(_p27._4._4);
				} while(false);
				return _elm_lang$core$Dict$balancedTree(_p27._0)(_p27._1)(_p27._2)(_p27._4._1)(_p27._4._2)(_p27._4._4._1)(_p27._4._4._2)(_p27._3)(_p27._4._3)(_p27._4._4._3)(_p27._4._4._4);
			} while(false);
			return A5(
				_elm_lang$core$Dict$RBNode_elm_builtin,
				_elm_lang$core$Dict$Black,
				_p27._4._3._1,
				_p27._4._3._2,
				A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Black, _p27._1, _p27._2, _p27._3, _p27._4._3._3),
				A5(
					_elm_lang$core$Dict$balance,
					_elm_lang$core$Dict$Black,
					_p27._4._1,
					_p27._4._2,
					_p27._4._3._4,
					_elm_lang$core$Dict$redden(_p27._4._4)));
		} while(false);
		return A5(
			_elm_lang$core$Dict$RBNode_elm_builtin,
			_elm_lang$core$Dict$Black,
			_p27._3._4._1,
			_p27._3._4._2,
			A5(
				_elm_lang$core$Dict$balance,
				_elm_lang$core$Dict$Black,
				_p27._3._1,
				_p27._3._2,
				_elm_lang$core$Dict$redden(_p27._3._3),
				_p27._3._4._3),
			A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Black, _p27._1, _p27._2, _p27._3._4._4, _p27._4));
	} while(false);
	return tree;
};
var _elm_lang$core$Dict$balance = F5(
	function (c, k, v, l, r) {
		var tree = A5(_elm_lang$core$Dict$RBNode_elm_builtin, c, k, v, l, r);
		return _elm_lang$core$Dict$blackish(tree) ? _elm_lang$core$Dict$balanceHelp(tree) : tree;
	});
var _elm_lang$core$Dict$bubble = F5(
	function (c, k, v, l, r) {
		return (_elm_lang$core$Dict$isBBlack(l) || _elm_lang$core$Dict$isBBlack(r)) ? A5(
			_elm_lang$core$Dict$balance,
			_elm_lang$core$Dict$moreBlack(c),
			k,
			v,
			_elm_lang$core$Dict$lessBlackTree(l),
			_elm_lang$core$Dict$lessBlackTree(r)) : A5(_elm_lang$core$Dict$RBNode_elm_builtin, c, k, v, l, r);
	});
var _elm_lang$core$Dict$removeMax = F5(
	function (c, k, v, l, r) {
		var _p28 = r;
		if (_p28.ctor === 'RBEmpty_elm_builtin') {
			return A3(_elm_lang$core$Dict$rem, c, l, r);
		} else {
			return A5(
				_elm_lang$core$Dict$bubble,
				c,
				k,
				v,
				l,
				A5(_elm_lang$core$Dict$removeMax, _p28._0, _p28._1, _p28._2, _p28._3, _p28._4));
		}
	});
var _elm_lang$core$Dict$rem = F3(
	function (color, left, right) {
		var _p29 = {ctor: '_Tuple2', _0: left, _1: right};
		if (_p29._0.ctor === 'RBEmpty_elm_builtin') {
			if (_p29._1.ctor === 'RBEmpty_elm_builtin') {
				var _p30 = color;
				switch (_p30.ctor) {
					case 'Red':
						return _elm_lang$core$Dict$RBEmpty_elm_builtin(_elm_lang$core$Dict$LBlack);
					case 'Black':
						return _elm_lang$core$Dict$RBEmpty_elm_builtin(_elm_lang$core$Dict$LBBlack);
					default:
						return _elm_lang$core$Native_Debug.crash('cannot have bblack or nblack nodes at this point');
				}
			} else {
				var _p33 = _p29._1._0;
				var _p32 = _p29._0._0;
				var _p31 = {ctor: '_Tuple3', _0: color, _1: _p32, _2: _p33};
				if ((((_p31.ctor === '_Tuple3') && (_p31._0.ctor === 'Black')) && (_p31._1.ctor === 'LBlack')) && (_p31._2.ctor === 'Red')) {
					return A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Black, _p29._1._1, _p29._1._2, _p29._1._3, _p29._1._4);
				} else {
					return A4(
						_elm_lang$core$Dict$reportRemBug,
						'Black/LBlack/Red',
						color,
						_elm_lang$core$Basics$toString(_p32),
						_elm_lang$core$Basics$toString(_p33));
				}
			}
		} else {
			if (_p29._1.ctor === 'RBEmpty_elm_builtin') {
				var _p36 = _p29._1._0;
				var _p35 = _p29._0._0;
				var _p34 = {ctor: '_Tuple3', _0: color, _1: _p35, _2: _p36};
				if ((((_p34.ctor === '_Tuple3') && (_p34._0.ctor === 'Black')) && (_p34._1.ctor === 'Red')) && (_p34._2.ctor === 'LBlack')) {
					return A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Black, _p29._0._1, _p29._0._2, _p29._0._3, _p29._0._4);
				} else {
					return A4(
						_elm_lang$core$Dict$reportRemBug,
						'Black/Red/LBlack',
						color,
						_elm_lang$core$Basics$toString(_p35),
						_elm_lang$core$Basics$toString(_p36));
				}
			} else {
				var _p40 = _p29._0._2;
				var _p39 = _p29._0._4;
				var _p38 = _p29._0._1;
				var newLeft = A5(_elm_lang$core$Dict$removeMax, _p29._0._0, _p38, _p40, _p29._0._3, _p39);
				var _p37 = A3(_elm_lang$core$Dict$maxWithDefault, _p38, _p40, _p39);
				var k = _p37._0;
				var v = _p37._1;
				return A5(_elm_lang$core$Dict$bubble, color, k, v, newLeft, right);
			}
		}
	});
var _elm_lang$core$Dict$map = F2(
	function (f, dict) {
		var _p41 = dict;
		if (_p41.ctor === 'RBEmpty_elm_builtin') {
			return _elm_lang$core$Dict$RBEmpty_elm_builtin(_elm_lang$core$Dict$LBlack);
		} else {
			var _p42 = _p41._1;
			return A5(
				_elm_lang$core$Dict$RBNode_elm_builtin,
				_p41._0,
				_p42,
				A2(f, _p42, _p41._2),
				A2(_elm_lang$core$Dict$map, f, _p41._3),
				A2(_elm_lang$core$Dict$map, f, _p41._4));
		}
	});
var _elm_lang$core$Dict$Same = {ctor: 'Same'};
var _elm_lang$core$Dict$Remove = {ctor: 'Remove'};
var _elm_lang$core$Dict$Insert = {ctor: 'Insert'};
var _elm_lang$core$Dict$update = F3(
	function (k, alter, dict) {
		var up = function (dict) {
			var _p43 = dict;
			if (_p43.ctor === 'RBEmpty_elm_builtin') {
				var _p44 = alter(_elm_lang$core$Maybe$Nothing);
				if (_p44.ctor === 'Nothing') {
					return {ctor: '_Tuple2', _0: _elm_lang$core$Dict$Same, _1: _elm_lang$core$Dict$empty};
				} else {
					return {
						ctor: '_Tuple2',
						_0: _elm_lang$core$Dict$Insert,
						_1: A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Red, k, _p44._0, _elm_lang$core$Dict$empty, _elm_lang$core$Dict$empty)
					};
				}
			} else {
				var _p55 = _p43._2;
				var _p54 = _p43._4;
				var _p53 = _p43._3;
				var _p52 = _p43._1;
				var _p51 = _p43._0;
				var _p45 = A2(_elm_lang$core$Basics$compare, k, _p52);
				switch (_p45.ctor) {
					case 'EQ':
						var _p46 = alter(
							_elm_lang$core$Maybe$Just(_p55));
						if (_p46.ctor === 'Nothing') {
							return {
								ctor: '_Tuple2',
								_0: _elm_lang$core$Dict$Remove,
								_1: A3(_elm_lang$core$Dict$rem, _p51, _p53, _p54)
							};
						} else {
							return {
								ctor: '_Tuple2',
								_0: _elm_lang$core$Dict$Same,
								_1: A5(_elm_lang$core$Dict$RBNode_elm_builtin, _p51, _p52, _p46._0, _p53, _p54)
							};
						}
					case 'LT':
						var _p47 = up(_p53);
						var flag = _p47._0;
						var newLeft = _p47._1;
						var _p48 = flag;
						switch (_p48.ctor) {
							case 'Same':
								return {
									ctor: '_Tuple2',
									_0: _elm_lang$core$Dict$Same,
									_1: A5(_elm_lang$core$Dict$RBNode_elm_builtin, _p51, _p52, _p55, newLeft, _p54)
								};
							case 'Insert':
								return {
									ctor: '_Tuple2',
									_0: _elm_lang$core$Dict$Insert,
									_1: A5(_elm_lang$core$Dict$balance, _p51, _p52, _p55, newLeft, _p54)
								};
							default:
								return {
									ctor: '_Tuple2',
									_0: _elm_lang$core$Dict$Remove,
									_1: A5(_elm_lang$core$Dict$bubble, _p51, _p52, _p55, newLeft, _p54)
								};
						}
					default:
						var _p49 = up(_p54);
						var flag = _p49._0;
						var newRight = _p49._1;
						var _p50 = flag;
						switch (_p50.ctor) {
							case 'Same':
								return {
									ctor: '_Tuple2',
									_0: _elm_lang$core$Dict$Same,
									_1: A5(_elm_lang$core$Dict$RBNode_elm_builtin, _p51, _p52, _p55, _p53, newRight)
								};
							case 'Insert':
								return {
									ctor: '_Tuple2',
									_0: _elm_lang$core$Dict$Insert,
									_1: A5(_elm_lang$core$Dict$balance, _p51, _p52, _p55, _p53, newRight)
								};
							default:
								return {
									ctor: '_Tuple2',
									_0: _elm_lang$core$Dict$Remove,
									_1: A5(_elm_lang$core$Dict$bubble, _p51, _p52, _p55, _p53, newRight)
								};
						}
				}
			}
		};
		var _p56 = up(dict);
		var flag = _p56._0;
		var updatedDict = _p56._1;
		var _p57 = flag;
		switch (_p57.ctor) {
			case 'Same':
				return updatedDict;
			case 'Insert':
				return _elm_lang$core$Dict$ensureBlackRoot(updatedDict);
			default:
				return _elm_lang$core$Dict$blacken(updatedDict);
		}
	});
var _elm_lang$core$Dict$insert = F3(
	function (key, value, dict) {
		return A3(
			_elm_lang$core$Dict$update,
			key,
			_elm_lang$core$Basics$always(
				_elm_lang$core$Maybe$Just(value)),
			dict);
	});
var _elm_lang$core$Dict$singleton = F2(
	function (key, value) {
		return A3(_elm_lang$core$Dict$insert, key, value, _elm_lang$core$Dict$empty);
	});
var _elm_lang$core$Dict$union = F2(
	function (t1, t2) {
		return A3(_elm_lang$core$Dict$foldl, _elm_lang$core$Dict$insert, t2, t1);
	});
var _elm_lang$core$Dict$filter = F2(
	function (predicate, dictionary) {
		var add = F3(
			function (key, value, dict) {
				return A2(predicate, key, value) ? A3(_elm_lang$core$Dict$insert, key, value, dict) : dict;
			});
		return A3(_elm_lang$core$Dict$foldl, add, _elm_lang$core$Dict$empty, dictionary);
	});
var _elm_lang$core$Dict$intersect = F2(
	function (t1, t2) {
		return A2(
			_elm_lang$core$Dict$filter,
			F2(
				function (k, _p58) {
					return A2(_elm_lang$core$Dict$member, k, t2);
				}),
			t1);
	});
var _elm_lang$core$Dict$partition = F2(
	function (predicate, dict) {
		var add = F3(
			function (key, value, _p59) {
				var _p60 = _p59;
				var _p62 = _p60._1;
				var _p61 = _p60._0;
				return A2(predicate, key, value) ? {
					ctor: '_Tuple2',
					_0: A3(_elm_lang$core$Dict$insert, key, value, _p61),
					_1: _p62
				} : {
					ctor: '_Tuple2',
					_0: _p61,
					_1: A3(_elm_lang$core$Dict$insert, key, value, _p62)
				};
			});
		return A3(
			_elm_lang$core$Dict$foldl,
			add,
			{ctor: '_Tuple2', _0: _elm_lang$core$Dict$empty, _1: _elm_lang$core$Dict$empty},
			dict);
	});
var _elm_lang$core$Dict$fromList = function (assocs) {
	return A3(
		_elm_lang$core$List$foldl,
		F2(
			function (_p63, dict) {
				var _p64 = _p63;
				return A3(_elm_lang$core$Dict$insert, _p64._0, _p64._1, dict);
			}),
		_elm_lang$core$Dict$empty,
		assocs);
};
var _elm_lang$core$Dict$remove = F2(
	function (key, dict) {
		return A3(
			_elm_lang$core$Dict$update,
			key,
			_elm_lang$core$Basics$always(_elm_lang$core$Maybe$Nothing),
			dict);
	});
var _elm_lang$core$Dict$diff = F2(
	function (t1, t2) {
		return A3(
			_elm_lang$core$Dict$foldl,
			F3(
				function (k, v, t) {
					return A2(_elm_lang$core$Dict$remove, k, t);
				}),
			t1,
			t2);
	});

var _elm_lang$core$Set$foldr = F3(
	function (f, b, _p0) {
		var _p1 = _p0;
		return A3(
			_elm_lang$core$Dict$foldr,
			F3(
				function (k, _p2, b) {
					return A2(f, k, b);
				}),
			b,
			_p1._0);
	});
var _elm_lang$core$Set$foldl = F3(
	function (f, b, _p3) {
		var _p4 = _p3;
		return A3(
			_elm_lang$core$Dict$foldl,
			F3(
				function (k, _p5, b) {
					return A2(f, k, b);
				}),
			b,
			_p4._0);
	});
var _elm_lang$core$Set$toList = function (_p6) {
	var _p7 = _p6;
	return _elm_lang$core$Dict$keys(_p7._0);
};
var _elm_lang$core$Set$size = function (_p8) {
	var _p9 = _p8;
	return _elm_lang$core$Dict$size(_p9._0);
};
var _elm_lang$core$Set$member = F2(
	function (k, _p10) {
		var _p11 = _p10;
		return A2(_elm_lang$core$Dict$member, k, _p11._0);
	});
var _elm_lang$core$Set$isEmpty = function (_p12) {
	var _p13 = _p12;
	return _elm_lang$core$Dict$isEmpty(_p13._0);
};
var _elm_lang$core$Set$Set_elm_builtin = function (a) {
	return {ctor: 'Set_elm_builtin', _0: a};
};
var _elm_lang$core$Set$empty = _elm_lang$core$Set$Set_elm_builtin(_elm_lang$core$Dict$empty);
var _elm_lang$core$Set$singleton = function (k) {
	return _elm_lang$core$Set$Set_elm_builtin(
		A2(
			_elm_lang$core$Dict$singleton,
			k,
			{ctor: '_Tuple0'}));
};
var _elm_lang$core$Set$insert = F2(
	function (k, _p14) {
		var _p15 = _p14;
		return _elm_lang$core$Set$Set_elm_builtin(
			A3(
				_elm_lang$core$Dict$insert,
				k,
				{ctor: '_Tuple0'},
				_p15._0));
	});
var _elm_lang$core$Set$fromList = function (xs) {
	return A3(_elm_lang$core$List$foldl, _elm_lang$core$Set$insert, _elm_lang$core$Set$empty, xs);
};
var _elm_lang$core$Set$map = F2(
	function (f, s) {
		return _elm_lang$core$Set$fromList(
			A2(
				_elm_lang$core$List$map,
				f,
				_elm_lang$core$Set$toList(s)));
	});
var _elm_lang$core$Set$remove = F2(
	function (k, _p16) {
		var _p17 = _p16;
		return _elm_lang$core$Set$Set_elm_builtin(
			A2(_elm_lang$core$Dict$remove, k, _p17._0));
	});
var _elm_lang$core$Set$union = F2(
	function (_p19, _p18) {
		var _p20 = _p19;
		var _p21 = _p18;
		return _elm_lang$core$Set$Set_elm_builtin(
			A2(_elm_lang$core$Dict$union, _p20._0, _p21._0));
	});
var _elm_lang$core$Set$intersect = F2(
	function (_p23, _p22) {
		var _p24 = _p23;
		var _p25 = _p22;
		return _elm_lang$core$Set$Set_elm_builtin(
			A2(_elm_lang$core$Dict$intersect, _p24._0, _p25._0));
	});
var _elm_lang$core$Set$diff = F2(
	function (_p27, _p26) {
		var _p28 = _p27;
		var _p29 = _p26;
		return _elm_lang$core$Set$Set_elm_builtin(
			A2(_elm_lang$core$Dict$diff, _p28._0, _p29._0));
	});
var _elm_lang$core$Set$filter = F2(
	function (p, _p30) {
		var _p31 = _p30;
		return _elm_lang$core$Set$Set_elm_builtin(
			A2(
				_elm_lang$core$Dict$filter,
				F2(
					function (k, _p32) {
						return p(k);
					}),
				_p31._0));
	});
var _elm_lang$core$Set$partition = F2(
	function (p, _p33) {
		var _p34 = _p33;
		var _p35 = A2(
			_elm_lang$core$Dict$partition,
			F2(
				function (k, _p36) {
					return p(k);
				}),
			_p34._0);
		var p1 = _p35._0;
		var p2 = _p35._1;
		return {
			ctor: '_Tuple2',
			_0: _elm_lang$core$Set$Set_elm_builtin(p1),
			_1: _elm_lang$core$Set$Set_elm_builtin(p2)
		};
	});

var _elm_community$list_extra$List_Extra$greedyGroupsOfWithStep = F3(
	function (size, step, xs) {
		var okayXs = _elm_lang$core$Native_Utils.cmp(
			_elm_lang$core$List$length(xs),
			0) > 0;
		var okayArgs = (_elm_lang$core$Native_Utils.cmp(size, 0) > 0) && (_elm_lang$core$Native_Utils.cmp(step, 0) > 0);
		var xs_ = A2(_elm_lang$core$List$drop, step, xs);
		var group = A2(_elm_lang$core$List$take, size, xs);
		return (okayArgs && okayXs) ? {
			ctor: '::',
			_0: group,
			_1: A3(_elm_community$list_extra$List_Extra$greedyGroupsOfWithStep, size, step, xs_)
		} : {ctor: '[]'};
	});
var _elm_community$list_extra$List_Extra$greedyGroupsOf = F2(
	function (size, xs) {
		return A3(_elm_community$list_extra$List_Extra$greedyGroupsOfWithStep, size, size, xs);
	});
var _elm_community$list_extra$List_Extra$groupsOfWithStep = F3(
	function (size, step, xs) {
		var okayArgs = (_elm_lang$core$Native_Utils.cmp(size, 0) > 0) && (_elm_lang$core$Native_Utils.cmp(step, 0) > 0);
		var xs_ = A2(_elm_lang$core$List$drop, step, xs);
		var group = A2(_elm_lang$core$List$take, size, xs);
		var okayLength = _elm_lang$core$Native_Utils.eq(
			size,
			_elm_lang$core$List$length(group));
		return (okayArgs && okayLength) ? {
			ctor: '::',
			_0: group,
			_1: A3(_elm_community$list_extra$List_Extra$groupsOfWithStep, size, step, xs_)
		} : {ctor: '[]'};
	});
var _elm_community$list_extra$List_Extra$groupsOf = F2(
	function (size, xs) {
		return A3(_elm_community$list_extra$List_Extra$groupsOfWithStep, size, size, xs);
	});
var _elm_community$list_extra$List_Extra$zip5 = _elm_lang$core$List$map5(
	F5(
		function (v0, v1, v2, v3, v4) {
			return {ctor: '_Tuple5', _0: v0, _1: v1, _2: v2, _3: v3, _4: v4};
		}));
var _elm_community$list_extra$List_Extra$zip4 = _elm_lang$core$List$map4(
	F4(
		function (v0, v1, v2, v3) {
			return {ctor: '_Tuple4', _0: v0, _1: v1, _2: v2, _3: v3};
		}));
var _elm_community$list_extra$List_Extra$zip3 = _elm_lang$core$List$map3(
	F3(
		function (v0, v1, v2) {
			return {ctor: '_Tuple3', _0: v0, _1: v1, _2: v2};
		}));
var _elm_community$list_extra$List_Extra$zip = _elm_lang$core$List$map2(
	F2(
		function (v0, v1) {
			return {ctor: '_Tuple2', _0: v0, _1: v1};
		}));
var _elm_community$list_extra$List_Extra$isPrefixOf = function (prefix) {
	return function (_p0) {
		return A2(
			_elm_lang$core$List$all,
			_elm_lang$core$Basics$identity,
			A3(
				_elm_lang$core$List$map2,
				F2(
					function (x, y) {
						return _elm_lang$core$Native_Utils.eq(x, y);
					}),
				prefix,
				_p0));
	};
};
var _elm_community$list_extra$List_Extra$isSuffixOf = F2(
	function (suffix, xs) {
		return A2(
			_elm_community$list_extra$List_Extra$isPrefixOf,
			_elm_lang$core$List$reverse(suffix),
			_elm_lang$core$List$reverse(xs));
	});
var _elm_community$list_extra$List_Extra$selectSplit = function (xs) {
	var _p1 = xs;
	if (_p1.ctor === '[]') {
		return {ctor: '[]'};
	} else {
		var _p5 = _p1._1;
		var _p4 = _p1._0;
		return {
			ctor: '::',
			_0: {
				ctor: '_Tuple3',
				_0: {ctor: '[]'},
				_1: _p4,
				_2: _p5
			},
			_1: A2(
				_elm_lang$core$List$map,
				function (_p2) {
					var _p3 = _p2;
					return {
						ctor: '_Tuple3',
						_0: {ctor: '::', _0: _p4, _1: _p3._0},
						_1: _p3._1,
						_2: _p3._2
					};
				},
				_elm_community$list_extra$List_Extra$selectSplit(_p5))
		};
	}
};
var _elm_community$list_extra$List_Extra$select = function (xs) {
	var _p6 = xs;
	if (_p6.ctor === '[]') {
		return {ctor: '[]'};
	} else {
		var _p10 = _p6._1;
		var _p9 = _p6._0;
		return {
			ctor: '::',
			_0: {ctor: '_Tuple2', _0: _p9, _1: _p10},
			_1: A2(
				_elm_lang$core$List$map,
				function (_p7) {
					var _p8 = _p7;
					return {
						ctor: '_Tuple2',
						_0: _p8._0,
						_1: {ctor: '::', _0: _p9, _1: _p8._1}
					};
				},
				_elm_community$list_extra$List_Extra$select(_p10))
		};
	}
};
var _elm_community$list_extra$List_Extra$tailsHelp = F2(
	function (e, list) {
		var _p11 = list;
		if (_p11.ctor === '::') {
			var _p12 = _p11._0;
			return {
				ctor: '::',
				_0: {ctor: '::', _0: e, _1: _p12},
				_1: {ctor: '::', _0: _p12, _1: _p11._1}
			};
		} else {
			return {ctor: '[]'};
		}
	});
var _elm_community$list_extra$List_Extra$tails = A2(
	_elm_lang$core$List$foldr,
	_elm_community$list_extra$List_Extra$tailsHelp,
	{
		ctor: '::',
		_0: {ctor: '[]'},
		_1: {ctor: '[]'}
	});
var _elm_community$list_extra$List_Extra$isInfixOf = F2(
	function (infix, xs) {
		return A2(
			_elm_lang$core$List$any,
			_elm_community$list_extra$List_Extra$isPrefixOf(infix),
			_elm_community$list_extra$List_Extra$tails(xs));
	});
var _elm_community$list_extra$List_Extra$inits = A2(
	_elm_lang$core$List$foldr,
	F2(
		function (e, acc) {
			return {
				ctor: '::',
				_0: {ctor: '[]'},
				_1: A2(
					_elm_lang$core$List$map,
					F2(
						function (x, y) {
							return {ctor: '::', _0: x, _1: y};
						})(e),
					acc)
			};
		}),
	{
		ctor: '::',
		_0: {ctor: '[]'},
		_1: {ctor: '[]'}
	});
var _elm_community$list_extra$List_Extra$groupWhileTransitively = F2(
	function (cmp, xs_) {
		var _p13 = xs_;
		if (_p13.ctor === '[]') {
			return {ctor: '[]'};
		} else {
			if (_p13._1.ctor === '[]') {
				return {
					ctor: '::',
					_0: {
						ctor: '::',
						_0: _p13._0,
						_1: {ctor: '[]'}
					},
					_1: {ctor: '[]'}
				};
			} else {
				var _p15 = _p13._0;
				var _p14 = A2(_elm_community$list_extra$List_Extra$groupWhileTransitively, cmp, _p13._1);
				if (_p14.ctor === '::') {
					return A2(cmp, _p15, _p13._1._0) ? {
						ctor: '::',
						_0: {ctor: '::', _0: _p15, _1: _p14._0},
						_1: _p14._1
					} : {
						ctor: '::',
						_0: {
							ctor: '::',
							_0: _p15,
							_1: {ctor: '[]'}
						},
						_1: _p14
					};
				} else {
					return {ctor: '[]'};
				}
			}
		}
	});
var _elm_community$list_extra$List_Extra$stripPrefix = F2(
	function (prefix, xs) {
		var step = F2(
			function (e, m) {
				var _p16 = m;
				if (_p16.ctor === 'Nothing') {
					return _elm_lang$core$Maybe$Nothing;
				} else {
					if (_p16._0.ctor === '[]') {
						return _elm_lang$core$Maybe$Nothing;
					} else {
						return _elm_lang$core$Native_Utils.eq(e, _p16._0._0) ? _elm_lang$core$Maybe$Just(_p16._0._1) : _elm_lang$core$Maybe$Nothing;
					}
				}
			});
		return A3(
			_elm_lang$core$List$foldl,
			step,
			_elm_lang$core$Maybe$Just(xs),
			prefix);
	});
var _elm_community$list_extra$List_Extra$dropWhileRight = function (p) {
	return A2(
		_elm_lang$core$List$foldr,
		F2(
			function (x, xs) {
				return (p(x) && _elm_lang$core$List$isEmpty(xs)) ? {ctor: '[]'} : {ctor: '::', _0: x, _1: xs};
			}),
		{ctor: '[]'});
};
var _elm_community$list_extra$List_Extra$takeWhileRight = function (p) {
	var step = F2(
		function (x, _p17) {
			var _p18 = _p17;
			var _p19 = _p18._0;
			return (p(x) && _p18._1) ? {
				ctor: '_Tuple2',
				_0: {ctor: '::', _0: x, _1: _p19},
				_1: true
			} : {ctor: '_Tuple2', _0: _p19, _1: false};
		});
	return function (_p20) {
		return _elm_lang$core$Tuple$first(
			A3(
				_elm_lang$core$List$foldr,
				step,
				{
					ctor: '_Tuple2',
					_0: {ctor: '[]'},
					_1: true
				},
				_p20));
	};
};
var _elm_community$list_extra$List_Extra$splitAt = F2(
	function (n, xs) {
		return {
			ctor: '_Tuple2',
			_0: A2(_elm_lang$core$List$take, n, xs),
			_1: A2(_elm_lang$core$List$drop, n, xs)
		};
	});
var _elm_community$list_extra$List_Extra$groupsOfVarying_ = F3(
	function (listOflengths, list, accu) {
		groupsOfVarying_:
		while (true) {
			var _p21 = {ctor: '_Tuple2', _0: listOflengths, _1: list};
			if (((_p21.ctor === '_Tuple2') && (_p21._0.ctor === '::')) && (_p21._1.ctor === '::')) {
				var _p22 = A2(_elm_community$list_extra$List_Extra$splitAt, _p21._0._0, list);
				var head = _p22._0;
				var tail = _p22._1;
				var _v10 = _p21._0._1,
					_v11 = tail,
					_v12 = {ctor: '::', _0: head, _1: accu};
				listOflengths = _v10;
				list = _v11;
				accu = _v12;
				continue groupsOfVarying_;
			} else {
				return _elm_lang$core$List$reverse(accu);
			}
		}
	});
var _elm_community$list_extra$List_Extra$groupsOfVarying = F2(
	function (listOflengths, list) {
		return A3(
			_elm_community$list_extra$List_Extra$groupsOfVarying_,
			listOflengths,
			list,
			{ctor: '[]'});
	});
var _elm_community$list_extra$List_Extra$unfoldr = F2(
	function (f, seed) {
		var _p23 = f(seed);
		if (_p23.ctor === 'Nothing') {
			return {ctor: '[]'};
		} else {
			return {
				ctor: '::',
				_0: _p23._0._0,
				_1: A2(_elm_community$list_extra$List_Extra$unfoldr, f, _p23._0._1)
			};
		}
	});
var _elm_community$list_extra$List_Extra$scanr1 = F2(
	function (f, xs_) {
		var _p24 = xs_;
		if (_p24.ctor === '[]') {
			return {ctor: '[]'};
		} else {
			if (_p24._1.ctor === '[]') {
				return {
					ctor: '::',
					_0: _p24._0,
					_1: {ctor: '[]'}
				};
			} else {
				var _p25 = A2(_elm_community$list_extra$List_Extra$scanr1, f, _p24._1);
				if (_p25.ctor === '::') {
					return {
						ctor: '::',
						_0: A2(f, _p24._0, _p25._0),
						_1: _p25
					};
				} else {
					return {ctor: '[]'};
				}
			}
		}
	});
var _elm_community$list_extra$List_Extra$scanr = F3(
	function (f, acc, xs_) {
		var _p26 = xs_;
		if (_p26.ctor === '[]') {
			return {
				ctor: '::',
				_0: acc,
				_1: {ctor: '[]'}
			};
		} else {
			var _p27 = A3(_elm_community$list_extra$List_Extra$scanr, f, acc, _p26._1);
			if (_p27.ctor === '::') {
				return {
					ctor: '::',
					_0: A2(f, _p26._0, _p27._0),
					_1: _p27
				};
			} else {
				return {ctor: '[]'};
			}
		}
	});
var _elm_community$list_extra$List_Extra$scanl1 = F2(
	function (f, xs_) {
		var _p28 = xs_;
		if (_p28.ctor === '[]') {
			return {ctor: '[]'};
		} else {
			return A3(_elm_lang$core$List$scanl, f, _p28._0, _p28._1);
		}
	});
var _elm_community$list_extra$List_Extra$indexedFoldr = F3(
	function (func, acc, list) {
		var step = F2(
			function (x, _p29) {
				var _p30 = _p29;
				var _p31 = _p30._0;
				return {
					ctor: '_Tuple2',
					_0: _p31 - 1,
					_1: A3(func, _p31, x, _p30._1)
				};
			});
		return _elm_lang$core$Tuple$second(
			A3(
				_elm_lang$core$List$foldr,
				step,
				{
					ctor: '_Tuple2',
					_0: _elm_lang$core$List$length(list) - 1,
					_1: acc
				},
				list));
	});
var _elm_community$list_extra$List_Extra$indexedFoldl = F3(
	function (func, acc, list) {
		var step = F2(
			function (x, _p32) {
				var _p33 = _p32;
				var _p34 = _p33._0;
				return {
					ctor: '_Tuple2',
					_0: _p34 + 1,
					_1: A3(func, _p34, x, _p33._1)
				};
			});
		return _elm_lang$core$Tuple$second(
			A3(
				_elm_lang$core$List$foldl,
				step,
				{ctor: '_Tuple2', _0: 0, _1: acc},
				list));
	});
var _elm_community$list_extra$List_Extra$foldr1 = F2(
	function (f, xs) {
		var mf = F2(
			function (x, m) {
				return _elm_lang$core$Maybe$Just(
					function () {
						var _p35 = m;
						if (_p35.ctor === 'Nothing') {
							return x;
						} else {
							return A2(f, x, _p35._0);
						}
					}());
			});
		return A3(_elm_lang$core$List$foldr, mf, _elm_lang$core$Maybe$Nothing, xs);
	});
var _elm_community$list_extra$List_Extra$foldl1 = F2(
	function (f, xs) {
		var mf = F2(
			function (x, m) {
				return _elm_lang$core$Maybe$Just(
					function () {
						var _p36 = m;
						if (_p36.ctor === 'Nothing') {
							return x;
						} else {
							return A2(f, _p36._0, x);
						}
					}());
			});
		return A3(_elm_lang$core$List$foldl, mf, _elm_lang$core$Maybe$Nothing, xs);
	});
var _elm_community$list_extra$List_Extra$interweaveHelp = F3(
	function (l1, l2, acc) {
		interweaveHelp:
		while (true) {
			var _p37 = {ctor: '_Tuple2', _0: l1, _1: l2};
			_v23_1:
			do {
				if (_p37._0.ctor === '::') {
					if (_p37._1.ctor === '::') {
						var _v24 = _p37._0._1,
							_v25 = _p37._1._1,
							_v26 = A2(
							_elm_lang$core$Basics_ops['++'],
							acc,
							{
								ctor: '::',
								_0: _p37._0._0,
								_1: {
									ctor: '::',
									_0: _p37._1._0,
									_1: {ctor: '[]'}
								}
							});
						l1 = _v24;
						l2 = _v25;
						acc = _v26;
						continue interweaveHelp;
					} else {
						break _v23_1;
					}
				} else {
					if (_p37._1.ctor === '[]') {
						break _v23_1;
					} else {
						return A2(_elm_lang$core$Basics_ops['++'], acc, _p37._1);
					}
				}
			} while(false);
			return A2(_elm_lang$core$Basics_ops['++'], acc, _p37._0);
		}
	});
var _elm_community$list_extra$List_Extra$interweave = F2(
	function (l1, l2) {
		return A3(
			_elm_community$list_extra$List_Extra$interweaveHelp,
			l1,
			l2,
			{ctor: '[]'});
	});
var _elm_community$list_extra$List_Extra$permutations = function (xs_) {
	var _p38 = xs_;
	if (_p38.ctor === '[]') {
		return {
			ctor: '::',
			_0: {ctor: '[]'},
			_1: {ctor: '[]'}
		};
	} else {
		var f = function (_p39) {
			var _p40 = _p39;
			return A2(
				_elm_lang$core$List$map,
				F2(
					function (x, y) {
						return {ctor: '::', _0: x, _1: y};
					})(_p40._0),
				_elm_community$list_extra$List_Extra$permutations(_p40._1));
		};
		return A2(
			_elm_lang$core$List$concatMap,
			f,
			_elm_community$list_extra$List_Extra$select(_p38));
	}
};
var _elm_community$list_extra$List_Extra$isPermutationOf = F2(
	function (permut, xs) {
		return A2(
			_elm_lang$core$List$member,
			permut,
			_elm_community$list_extra$List_Extra$permutations(xs));
	});
var _elm_community$list_extra$List_Extra$subsequencesNonEmpty = function (xs) {
	var _p41 = xs;
	if (_p41.ctor === '[]') {
		return {ctor: '[]'};
	} else {
		var _p42 = _p41._0;
		var f = F2(
			function (ys, r) {
				return {
					ctor: '::',
					_0: ys,
					_1: {
						ctor: '::',
						_0: {ctor: '::', _0: _p42, _1: ys},
						_1: r
					}
				};
			});
		return {
			ctor: '::',
			_0: {
				ctor: '::',
				_0: _p42,
				_1: {ctor: '[]'}
			},
			_1: A3(
				_elm_lang$core$List$foldr,
				f,
				{ctor: '[]'},
				_elm_community$list_extra$List_Extra$subsequencesNonEmpty(_p41._1))
		};
	}
};
var _elm_community$list_extra$List_Extra$subsequences = function (xs) {
	return {
		ctor: '::',
		_0: {ctor: '[]'},
		_1: _elm_community$list_extra$List_Extra$subsequencesNonEmpty(xs)
	};
};
var _elm_community$list_extra$List_Extra$isSubsequenceOf = F2(
	function (subseq, xs) {
		return A2(
			_elm_lang$core$List$member,
			subseq,
			_elm_community$list_extra$List_Extra$subsequences(xs));
	});
var _elm_community$list_extra$List_Extra$transpose = function (ll) {
	transpose:
	while (true) {
		var _p43 = ll;
		if (_p43.ctor === '[]') {
			return {ctor: '[]'};
		} else {
			if (_p43._0.ctor === '[]') {
				var _v31 = _p43._1;
				ll = _v31;
				continue transpose;
			} else {
				var _p44 = _p43._1;
				var tails = A2(_elm_lang$core$List$filterMap, _elm_lang$core$List$tail, _p44);
				var heads = A2(_elm_lang$core$List$filterMap, _elm_lang$core$List$head, _p44);
				return {
					ctor: '::',
					_0: {ctor: '::', _0: _p43._0._0, _1: heads},
					_1: _elm_community$list_extra$List_Extra$transpose(
						{ctor: '::', _0: _p43._0._1, _1: tails})
				};
			}
		}
	}
};
var _elm_community$list_extra$List_Extra$intercalate = function (xs) {
	return function (_p45) {
		return _elm_lang$core$List$concat(
			A2(_elm_lang$core$List$intersperse, xs, _p45));
	};
};
var _elm_community$list_extra$List_Extra$filterNot = F2(
	function (pred, list) {
		return A2(
			_elm_lang$core$List$filter,
			function (_p46) {
				return !pred(_p46);
			},
			list);
	});
var _elm_community$list_extra$List_Extra$removeAt = F2(
	function (index, l) {
		if (_elm_lang$core$Native_Utils.cmp(index, 0) < 0) {
			return l;
		} else {
			var tail = _elm_lang$core$List$tail(
				A2(_elm_lang$core$List$drop, index, l));
			var head = A2(_elm_lang$core$List$take, index, l);
			var _p47 = tail;
			if (_p47.ctor === 'Nothing') {
				return l;
			} else {
				return A2(_elm_lang$core$List$append, head, _p47._0);
			}
		}
	});
var _elm_community$list_extra$List_Extra$singleton = function (x) {
	return {
		ctor: '::',
		_0: x,
		_1: {ctor: '[]'}
	};
};
var _elm_community$list_extra$List_Extra$stableSortWith = F2(
	function (pred, list) {
		var predWithIndex = F2(
			function (_p49, _p48) {
				var _p50 = _p49;
				var _p51 = _p48;
				var result = A2(pred, _p50._0, _p51._0);
				var _p52 = result;
				if (_p52.ctor === 'EQ') {
					return A2(_elm_lang$core$Basics$compare, _p50._1, _p51._1);
				} else {
					return result;
				}
			});
		var listWithIndex = A2(
			_elm_lang$core$List$indexedMap,
			F2(
				function (i, a) {
					return {ctor: '_Tuple2', _0: a, _1: i};
				}),
			list);
		return A2(
			_elm_lang$core$List$map,
			_elm_lang$core$Tuple$first,
			A2(_elm_lang$core$List$sortWith, predWithIndex, listWithIndex));
	});
var _elm_community$list_extra$List_Extra$setAt = F3(
	function (index, value, l) {
		if (_elm_lang$core$Native_Utils.cmp(index, 0) < 0) {
			return _elm_lang$core$Maybe$Nothing;
		} else {
			var tail = _elm_lang$core$List$tail(
				A2(_elm_lang$core$List$drop, index, l));
			var head = A2(_elm_lang$core$List$take, index, l);
			var _p53 = tail;
			if (_p53.ctor === 'Nothing') {
				return _elm_lang$core$Maybe$Nothing;
			} else {
				return _elm_lang$core$Maybe$Just(
					A2(
						_elm_lang$core$List$append,
						head,
						{ctor: '::', _0: value, _1: _p53._0}));
			}
		}
	});
var _elm_community$list_extra$List_Extra$remove = F2(
	function (x, xs) {
		var _p54 = xs;
		if (_p54.ctor === '[]') {
			return {ctor: '[]'};
		} else {
			var _p56 = _p54._1;
			var _p55 = _p54._0;
			return _elm_lang$core$Native_Utils.eq(x, _p55) ? _p56 : {
				ctor: '::',
				_0: _p55,
				_1: A2(_elm_community$list_extra$List_Extra$remove, x, _p56)
			};
		}
	});
var _elm_community$list_extra$List_Extra$updateIfIndex = F3(
	function (predicate, update, list) {
		return A2(
			_elm_lang$core$List$indexedMap,
			F2(
				function (i, x) {
					return predicate(i) ? update(x) : x;
				}),
			list);
	});
var _elm_community$list_extra$List_Extra$updateAt = F3(
	function (index, update, list) {
		return ((_elm_lang$core$Native_Utils.cmp(index, 0) < 0) || (_elm_lang$core$Native_Utils.cmp(
			index,
			_elm_lang$core$List$length(list)) > -1)) ? _elm_lang$core$Maybe$Nothing : _elm_lang$core$Maybe$Just(
			A3(
				_elm_community$list_extra$List_Extra$updateIfIndex,
				F2(
					function (x, y) {
						return _elm_lang$core$Native_Utils.eq(x, y);
					})(index),
				update,
				list));
	});
var _elm_community$list_extra$List_Extra$updateIf = F3(
	function (predicate, update, list) {
		return A2(
			_elm_lang$core$List$map,
			function (item) {
				return predicate(item) ? update(item) : item;
			},
			list);
	});
var _elm_community$list_extra$List_Extra$replaceIf = F3(
	function (predicate, replacement, list) {
		return A3(
			_elm_community$list_extra$List_Extra$updateIf,
			predicate,
			_elm_lang$core$Basics$always(replacement),
			list);
	});
var _elm_community$list_extra$List_Extra$findIndices = function (p) {
	return function (_p57) {
		return A2(
			_elm_lang$core$List$map,
			_elm_lang$core$Tuple$first,
			A2(
				_elm_lang$core$List$filter,
				function (_p58) {
					var _p59 = _p58;
					return p(_p59._1);
				},
				A2(
					_elm_lang$core$List$indexedMap,
					F2(
						function (v0, v1) {
							return {ctor: '_Tuple2', _0: v0, _1: v1};
						}),
					_p57)));
	};
};
var _elm_community$list_extra$List_Extra$findIndex = function (p) {
	return function (_p60) {
		return _elm_lang$core$List$head(
			A2(_elm_community$list_extra$List_Extra$findIndices, p, _p60));
	};
};
var _elm_community$list_extra$List_Extra$elemIndices = function (x) {
	return _elm_community$list_extra$List_Extra$findIndices(
		F2(
			function (x, y) {
				return _elm_lang$core$Native_Utils.eq(x, y);
			})(x));
};
var _elm_community$list_extra$List_Extra$elemIndex = function (x) {
	return _elm_community$list_extra$List_Extra$findIndex(
		F2(
			function (x, y) {
				return _elm_lang$core$Native_Utils.eq(x, y);
			})(x));
};
var _elm_community$list_extra$List_Extra$find = F2(
	function (predicate, list) {
		find:
		while (true) {
			var _p61 = list;
			if (_p61.ctor === '[]') {
				return _elm_lang$core$Maybe$Nothing;
			} else {
				var _p62 = _p61._0;
				if (predicate(_p62)) {
					return _elm_lang$core$Maybe$Just(_p62);
				} else {
					var _v40 = predicate,
						_v41 = _p61._1;
					predicate = _v40;
					list = _v41;
					continue find;
				}
			}
		}
	});
var _elm_community$list_extra$List_Extra$notMember = function (x) {
	return function (_p63) {
		return !A2(_elm_lang$core$List$member, x, _p63);
	};
};
var _elm_community$list_extra$List_Extra$andThen = _elm_lang$core$List$concatMap;
var _elm_community$list_extra$List_Extra$lift2 = F3(
	function (f, la, lb) {
		return A2(
			_elm_community$list_extra$List_Extra$andThen,
			function (a) {
				return A2(
					_elm_community$list_extra$List_Extra$andThen,
					function (b) {
						return {
							ctor: '::',
							_0: A2(f, a, b),
							_1: {ctor: '[]'}
						};
					},
					lb);
			},
			la);
	});
var _elm_community$list_extra$List_Extra$lift3 = F4(
	function (f, la, lb, lc) {
		return A2(
			_elm_community$list_extra$List_Extra$andThen,
			function (a) {
				return A2(
					_elm_community$list_extra$List_Extra$andThen,
					function (b) {
						return A2(
							_elm_community$list_extra$List_Extra$andThen,
							function (c) {
								return {
									ctor: '::',
									_0: A3(f, a, b, c),
									_1: {ctor: '[]'}
								};
							},
							lc);
					},
					lb);
			},
			la);
	});
var _elm_community$list_extra$List_Extra$lift4 = F5(
	function (f, la, lb, lc, ld) {
		return A2(
			_elm_community$list_extra$List_Extra$andThen,
			function (a) {
				return A2(
					_elm_community$list_extra$List_Extra$andThen,
					function (b) {
						return A2(
							_elm_community$list_extra$List_Extra$andThen,
							function (c) {
								return A2(
									_elm_community$list_extra$List_Extra$andThen,
									function (d) {
										return {
											ctor: '::',
											_0: A4(f, a, b, c, d),
											_1: {ctor: '[]'}
										};
									},
									ld);
							},
							lc);
					},
					lb);
			},
			la);
	});
var _elm_community$list_extra$List_Extra$andMap = F2(
	function (fl, l) {
		return A3(
			_elm_lang$core$List$map2,
			F2(
				function (x, y) {
					return x(y);
				}),
			fl,
			l);
	});
var _elm_community$list_extra$List_Extra$uniqueHelp = F3(
	function (f, existing, remaining) {
		uniqueHelp:
		while (true) {
			var _p64 = remaining;
			if (_p64.ctor === '[]') {
				return {ctor: '[]'};
			} else {
				var _p66 = _p64._1;
				var _p65 = _p64._0;
				var computedFirst = f(_p65);
				if (A2(_elm_lang$core$Set$member, computedFirst, existing)) {
					var _v43 = f,
						_v44 = existing,
						_v45 = _p66;
					f = _v43;
					existing = _v44;
					remaining = _v45;
					continue uniqueHelp;
				} else {
					return {
						ctor: '::',
						_0: _p65,
						_1: A3(
							_elm_community$list_extra$List_Extra$uniqueHelp,
							f,
							A2(_elm_lang$core$Set$insert, computedFirst, existing),
							_p66)
					};
				}
			}
		}
	});
var _elm_community$list_extra$List_Extra$uniqueBy = F2(
	function (f, list) {
		return A3(_elm_community$list_extra$List_Extra$uniqueHelp, f, _elm_lang$core$Set$empty, list);
	});
var _elm_community$list_extra$List_Extra$allDifferentBy = F2(
	function (f, list) {
		return _elm_lang$core$Native_Utils.eq(
			_elm_lang$core$List$length(list),
			_elm_lang$core$List$length(
				A2(_elm_community$list_extra$List_Extra$uniqueBy, f, list)));
	});
var _elm_community$list_extra$List_Extra$unique = function (list) {
	return A3(_elm_community$list_extra$List_Extra$uniqueHelp, _elm_lang$core$Basics$identity, _elm_lang$core$Set$empty, list);
};
var _elm_community$list_extra$List_Extra$allDifferent = function (list) {
	return _elm_lang$core$Native_Utils.eq(
		_elm_lang$core$List$length(list),
		_elm_lang$core$List$length(
			_elm_community$list_extra$List_Extra$unique(list)));
};
var _elm_community$list_extra$List_Extra$dropWhile = F2(
	function (predicate, list) {
		dropWhile:
		while (true) {
			var _p67 = list;
			if (_p67.ctor === '[]') {
				return {ctor: '[]'};
			} else {
				if (predicate(_p67._0)) {
					var _v47 = predicate,
						_v48 = _p67._1;
					predicate = _v47;
					list = _v48;
					continue dropWhile;
				} else {
					return list;
				}
			}
		}
	});
var _elm_community$list_extra$List_Extra$takeWhile = F2(
	function (predicate, list) {
		var _p68 = list;
		if (_p68.ctor === '[]') {
			return {ctor: '[]'};
		} else {
			var _p69 = _p68._0;
			return predicate(_p69) ? {
				ctor: '::',
				_0: _p69,
				_1: A2(_elm_community$list_extra$List_Extra$takeWhile, predicate, _p68._1)
			} : {ctor: '[]'};
		}
	});
var _elm_community$list_extra$List_Extra$span = F2(
	function (p, xs) {
		return {
			ctor: '_Tuple2',
			_0: A2(_elm_community$list_extra$List_Extra$takeWhile, p, xs),
			_1: A2(_elm_community$list_extra$List_Extra$dropWhile, p, xs)
		};
	});
var _elm_community$list_extra$List_Extra$break = function (p) {
	return _elm_community$list_extra$List_Extra$span(
		function (_p70) {
			return !p(_p70);
		});
};
var _elm_community$list_extra$List_Extra$groupWhile = F2(
	function (eq, xs_) {
		var _p71 = xs_;
		if (_p71.ctor === '[]') {
			return {ctor: '[]'};
		} else {
			var _p73 = _p71._0;
			var _p72 = A2(
				_elm_community$list_extra$List_Extra$span,
				eq(_p73),
				_p71._1);
			var ys = _p72._0;
			var zs = _p72._1;
			return {
				ctor: '::',
				_0: {ctor: '::', _0: _p73, _1: ys},
				_1: A2(_elm_community$list_extra$List_Extra$groupWhile, eq, zs)
			};
		}
	});
var _elm_community$list_extra$List_Extra$group = _elm_community$list_extra$List_Extra$groupWhile(
	F2(
		function (x, y) {
			return _elm_lang$core$Native_Utils.eq(x, y);
		}));
var _elm_community$list_extra$List_Extra$minimumBy = F2(
	function (f, ls) {
		var minBy = F2(
			function (x, _p74) {
				var _p75 = _p74;
				var _p76 = _p75._1;
				var fx = f(x);
				return (_elm_lang$core$Native_Utils.cmp(fx, _p76) < 0) ? {ctor: '_Tuple2', _0: x, _1: fx} : {ctor: '_Tuple2', _0: _p75._0, _1: _p76};
			});
		var _p77 = ls;
		if (_p77.ctor === '::') {
			if (_p77._1.ctor === '[]') {
				return _elm_lang$core$Maybe$Just(_p77._0);
			} else {
				var _p78 = _p77._0;
				return _elm_lang$core$Maybe$Just(
					_elm_lang$core$Tuple$first(
						A3(
							_elm_lang$core$List$foldl,
							minBy,
							{
								ctor: '_Tuple2',
								_0: _p78,
								_1: f(_p78)
							},
							_p77._1)));
			}
		} else {
			return _elm_lang$core$Maybe$Nothing;
		}
	});
var _elm_community$list_extra$List_Extra$maximumBy = F2(
	function (f, ls) {
		var maxBy = F2(
			function (x, _p79) {
				var _p80 = _p79;
				var _p81 = _p80._1;
				var fx = f(x);
				return (_elm_lang$core$Native_Utils.cmp(fx, _p81) > 0) ? {ctor: '_Tuple2', _0: x, _1: fx} : {ctor: '_Tuple2', _0: _p80._0, _1: _p81};
			});
		var _p82 = ls;
		if (_p82.ctor === '::') {
			if (_p82._1.ctor === '[]') {
				return _elm_lang$core$Maybe$Just(_p82._0);
			} else {
				var _p83 = _p82._0;
				return _elm_lang$core$Maybe$Just(
					_elm_lang$core$Tuple$first(
						A3(
							_elm_lang$core$List$foldl,
							maxBy,
							{
								ctor: '_Tuple2',
								_0: _p83,
								_1: f(_p83)
							},
							_p82._1)));
			}
		} else {
			return _elm_lang$core$Maybe$Nothing;
		}
	});
var _elm_community$list_extra$List_Extra$uncons = function (xs) {
	var _p84 = xs;
	if (_p84.ctor === '[]') {
		return _elm_lang$core$Maybe$Nothing;
	} else {
		return _elm_lang$core$Maybe$Just(
			{ctor: '_Tuple2', _0: _p84._0, _1: _p84._1});
	}
};
var _elm_community$list_extra$List_Extra$swapAt = F3(
	function (index1, index2, l) {
		swapAt:
		while (true) {
			if (_elm_lang$core$Native_Utils.eq(index1, index2)) {
				return _elm_lang$core$Maybe$Just(l);
			} else {
				if (_elm_lang$core$Native_Utils.cmp(index1, index2) > 0) {
					var _v56 = index2,
						_v57 = index1,
						_v58 = l;
					index1 = _v56;
					index2 = _v57;
					l = _v58;
					continue swapAt;
				} else {
					if (_elm_lang$core$Native_Utils.cmp(index1, 0) < 0) {
						return _elm_lang$core$Maybe$Nothing;
					} else {
						var _p85 = A2(_elm_community$list_extra$List_Extra$splitAt, index1, l);
						var part1 = _p85._0;
						var tail1 = _p85._1;
						var _p86 = A2(_elm_community$list_extra$List_Extra$splitAt, index2 - index1, tail1);
						var head2 = _p86._0;
						var tail2 = _p86._1;
						return A3(
							_elm_lang$core$Maybe$map2,
							F2(
								function (_p88, _p87) {
									var _p89 = _p88;
									var _p90 = _p87;
									return _elm_lang$core$List$concat(
										{
											ctor: '::',
											_0: part1,
											_1: {
												ctor: '::',
												_0: {ctor: '::', _0: _p90._0, _1: _p89._1},
												_1: {
													ctor: '::',
													_0: {ctor: '::', _0: _p89._0, _1: _p90._1},
													_1: {ctor: '[]'}
												}
											}
										});
								}),
							_elm_community$list_extra$List_Extra$uncons(head2),
							_elm_community$list_extra$List_Extra$uncons(tail2));
					}
				}
			}
		}
	});
var _elm_community$list_extra$List_Extra$iterate = F2(
	function (f, x) {
		var _p91 = f(x);
		if (_p91.ctor === 'Just') {
			return {
				ctor: '::',
				_0: x,
				_1: A2(_elm_community$list_extra$List_Extra$iterate, f, _p91._0)
			};
		} else {
			return {
				ctor: '::',
				_0: x,
				_1: {ctor: '[]'}
			};
		}
	});
var _elm_community$list_extra$List_Extra$getAt = F2(
	function (idx, xs) {
		return (_elm_lang$core$Native_Utils.cmp(idx, 0) < 0) ? _elm_lang$core$Maybe$Nothing : _elm_lang$core$List$head(
			A2(_elm_lang$core$List$drop, idx, xs));
	});
var _elm_community$list_extra$List_Extra_ops = _elm_community$list_extra$List_Extra_ops || {};
_elm_community$list_extra$List_Extra_ops['!!'] = _elm_lang$core$Basics$flip(_elm_community$list_extra$List_Extra$getAt);
var _elm_community$list_extra$List_Extra$init = function () {
	var maybe = F2(
		function (d, f) {
			return function (_p92) {
				return A2(
					_elm_lang$core$Maybe$withDefault,
					d,
					A2(_elm_lang$core$Maybe$map, f, _p92));
			};
		});
	return A2(
		_elm_lang$core$List$foldr,
		function (x) {
			return function (_p93) {
				return _elm_lang$core$Maybe$Just(
					A3(
						maybe,
						{ctor: '[]'},
						F2(
							function (x, y) {
								return {ctor: '::', _0: x, _1: y};
							})(x),
						_p93));
			};
		},
		_elm_lang$core$Maybe$Nothing);
}();
var _elm_community$list_extra$List_Extra$last = _elm_community$list_extra$List_Extra$foldl1(
	_elm_lang$core$Basics$flip(_elm_lang$core$Basics$always));

//import Native.List //

var _elm_lang$core$Native_Array = function() {

// A RRB-Tree has two distinct data types.
// Leaf -> "height"  is always 0
//         "table"   is an array of elements
// Node -> "height"  is always greater than 0
//         "table"   is an array of child nodes
//         "lengths" is an array of accumulated lengths of the child nodes

// M is the maximal table size. 32 seems fast. E is the allowed increase
// of search steps when concatting to find an index. Lower values will
// decrease balancing, but will increase search steps.
var M = 32;
var E = 2;

// An empty array.
var empty = {
	ctor: '_Array',
	height: 0,
	table: []
};


function get(i, array)
{
	if (i < 0 || i >= length(array))
	{
		throw new Error(
			'Index ' + i + ' is out of range. Check the length of ' +
			'your array first or use getMaybe or getWithDefault.');
	}
	return unsafeGet(i, array);
}


function unsafeGet(i, array)
{
	for (var x = array.height; x > 0; x--)
	{
		var slot = i >> (x * 5);
		while (array.lengths[slot] <= i)
		{
			slot++;
		}
		if (slot > 0)
		{
			i -= array.lengths[slot - 1];
		}
		array = array.table[slot];
	}
	return array.table[i];
}


// Sets the value at the index i. Only the nodes leading to i will get
// copied and updated.
function set(i, item, array)
{
	if (i < 0 || length(array) <= i)
	{
		return array;
	}
	return unsafeSet(i, item, array);
}


function unsafeSet(i, item, array)
{
	array = nodeCopy(array);

	if (array.height === 0)
	{
		array.table[i] = item;
	}
	else
	{
		var slot = getSlot(i, array);
		if (slot > 0)
		{
			i -= array.lengths[slot - 1];
		}
		array.table[slot] = unsafeSet(i, item, array.table[slot]);
	}
	return array;
}


function initialize(len, f)
{
	if (len <= 0)
	{
		return empty;
	}
	var h = Math.floor( Math.log(len) / Math.log(M) );
	return initialize_(f, h, 0, len);
}

function initialize_(f, h, from, to)
{
	if (h === 0)
	{
		var table = new Array((to - from) % (M + 1));
		for (var i = 0; i < table.length; i++)
		{
		  table[i] = f(from + i);
		}
		return {
			ctor: '_Array',
			height: 0,
			table: table
		};
	}

	var step = Math.pow(M, h);
	var table = new Array(Math.ceil((to - from) / step));
	var lengths = new Array(table.length);
	for (var i = 0; i < table.length; i++)
	{
		table[i] = initialize_(f, h - 1, from + (i * step), Math.min(from + ((i + 1) * step), to));
		lengths[i] = length(table[i]) + (i > 0 ? lengths[i-1] : 0);
	}
	return {
		ctor: '_Array',
		height: h,
		table: table,
		lengths: lengths
	};
}

function fromList(list)
{
	if (list.ctor === '[]')
	{
		return empty;
	}

	// Allocate M sized blocks (table) and write list elements to it.
	var table = new Array(M);
	var nodes = [];
	var i = 0;

	while (list.ctor !== '[]')
	{
		table[i] = list._0;
		list = list._1;
		i++;

		// table is full, so we can push a leaf containing it into the
		// next node.
		if (i === M)
		{
			var leaf = {
				ctor: '_Array',
				height: 0,
				table: table
			};
			fromListPush(leaf, nodes);
			table = new Array(M);
			i = 0;
		}
	}

	// Maybe there is something left on the table.
	if (i > 0)
	{
		var leaf = {
			ctor: '_Array',
			height: 0,
			table: table.splice(0, i)
		};
		fromListPush(leaf, nodes);
	}

	// Go through all of the nodes and eventually push them into higher nodes.
	for (var h = 0; h < nodes.length - 1; h++)
	{
		if (nodes[h].table.length > 0)
		{
			fromListPush(nodes[h], nodes);
		}
	}

	var head = nodes[nodes.length - 1];
	if (head.height > 0 && head.table.length === 1)
	{
		return head.table[0];
	}
	else
	{
		return head;
	}
}

// Push a node into a higher node as a child.
function fromListPush(toPush, nodes)
{
	var h = toPush.height;

	// Maybe the node on this height does not exist.
	if (nodes.length === h)
	{
		var node = {
			ctor: '_Array',
			height: h + 1,
			table: [],
			lengths: []
		};
		nodes.push(node);
	}

	nodes[h].table.push(toPush);
	var len = length(toPush);
	if (nodes[h].lengths.length > 0)
	{
		len += nodes[h].lengths[nodes[h].lengths.length - 1];
	}
	nodes[h].lengths.push(len);

	if (nodes[h].table.length === M)
	{
		fromListPush(nodes[h], nodes);
		nodes[h] = {
			ctor: '_Array',
			height: h + 1,
			table: [],
			lengths: []
		};
	}
}

// Pushes an item via push_ to the bottom right of a tree.
function push(item, a)
{
	var pushed = push_(item, a);
	if (pushed !== null)
	{
		return pushed;
	}

	var newTree = create(item, a.height);
	return siblise(a, newTree);
}

// Recursively tries to push an item to the bottom-right most
// tree possible. If there is no space left for the item,
// null will be returned.
function push_(item, a)
{
	// Handle resursion stop at leaf level.
	if (a.height === 0)
	{
		if (a.table.length < M)
		{
			var newA = {
				ctor: '_Array',
				height: 0,
				table: a.table.slice()
			};
			newA.table.push(item);
			return newA;
		}
		else
		{
		  return null;
		}
	}

	// Recursively push
	var pushed = push_(item, botRight(a));

	// There was space in the bottom right tree, so the slot will
	// be updated.
	if (pushed !== null)
	{
		var newA = nodeCopy(a);
		newA.table[newA.table.length - 1] = pushed;
		newA.lengths[newA.lengths.length - 1]++;
		return newA;
	}

	// When there was no space left, check if there is space left
	// for a new slot with a tree which contains only the item
	// at the bottom.
	if (a.table.length < M)
	{
		var newSlot = create(item, a.height - 1);
		var newA = nodeCopy(a);
		newA.table.push(newSlot);
		newA.lengths.push(newA.lengths[newA.lengths.length - 1] + length(newSlot));
		return newA;
	}
	else
	{
		return null;
	}
}

// Converts an array into a list of elements.
function toList(a)
{
	return toList_(_elm_lang$core$Native_List.Nil, a);
}

function toList_(list, a)
{
	for (var i = a.table.length - 1; i >= 0; i--)
	{
		list =
			a.height === 0
				? _elm_lang$core$Native_List.Cons(a.table[i], list)
				: toList_(list, a.table[i]);
	}
	return list;
}

// Maps a function over the elements of an array.
function map(f, a)
{
	var newA = {
		ctor: '_Array',
		height: a.height,
		table: new Array(a.table.length)
	};
	if (a.height > 0)
	{
		newA.lengths = a.lengths;
	}
	for (var i = 0; i < a.table.length; i++)
	{
		newA.table[i] =
			a.height === 0
				? f(a.table[i])
				: map(f, a.table[i]);
	}
	return newA;
}

// Maps a function over the elements with their index as first argument.
function indexedMap(f, a)
{
	return indexedMap_(f, a, 0);
}

function indexedMap_(f, a, from)
{
	var newA = {
		ctor: '_Array',
		height: a.height,
		table: new Array(a.table.length)
	};
	if (a.height > 0)
	{
		newA.lengths = a.lengths;
	}
	for (var i = 0; i < a.table.length; i++)
	{
		newA.table[i] =
			a.height === 0
				? A2(f, from + i, a.table[i])
				: indexedMap_(f, a.table[i], i == 0 ? from : from + a.lengths[i - 1]);
	}
	return newA;
}

function foldl(f, b, a)
{
	if (a.height === 0)
	{
		for (var i = 0; i < a.table.length; i++)
		{
			b = A2(f, a.table[i], b);
		}
	}
	else
	{
		for (var i = 0; i < a.table.length; i++)
		{
			b = foldl(f, b, a.table[i]);
		}
	}
	return b;
}

function foldr(f, b, a)
{
	if (a.height === 0)
	{
		for (var i = a.table.length; i--; )
		{
			b = A2(f, a.table[i], b);
		}
	}
	else
	{
		for (var i = a.table.length; i--; )
		{
			b = foldr(f, b, a.table[i]);
		}
	}
	return b;
}

// TODO: currently, it slices the right, then the left. This can be
// optimized.
function slice(from, to, a)
{
	if (from < 0)
	{
		from += length(a);
	}
	if (to < 0)
	{
		to += length(a);
	}
	return sliceLeft(from, sliceRight(to, a));
}

function sliceRight(to, a)
{
	if (to === length(a))
	{
		return a;
	}

	// Handle leaf level.
	if (a.height === 0)
	{
		var newA = { ctor:'_Array', height:0 };
		newA.table = a.table.slice(0, to);
		return newA;
	}

	// Slice the right recursively.
	var right = getSlot(to, a);
	var sliced = sliceRight(to - (right > 0 ? a.lengths[right - 1] : 0), a.table[right]);

	// Maybe the a node is not even needed, as sliced contains the whole slice.
	if (right === 0)
	{
		return sliced;
	}

	// Create new node.
	var newA = {
		ctor: '_Array',
		height: a.height,
		table: a.table.slice(0, right),
		lengths: a.lengths.slice(0, right)
	};
	if (sliced.table.length > 0)
	{
		newA.table[right] = sliced;
		newA.lengths[right] = length(sliced) + (right > 0 ? newA.lengths[right - 1] : 0);
	}
	return newA;
}

function sliceLeft(from, a)
{
	if (from === 0)
	{
		return a;
	}

	// Handle leaf level.
	if (a.height === 0)
	{
		var newA = { ctor:'_Array', height:0 };
		newA.table = a.table.slice(from, a.table.length + 1);
		return newA;
	}

	// Slice the left recursively.
	var left = getSlot(from, a);
	var sliced = sliceLeft(from - (left > 0 ? a.lengths[left - 1] : 0), a.table[left]);

	// Maybe the a node is not even needed, as sliced contains the whole slice.
	if (left === a.table.length - 1)
	{
		return sliced;
	}

	// Create new node.
	var newA = {
		ctor: '_Array',
		height: a.height,
		table: a.table.slice(left, a.table.length + 1),
		lengths: new Array(a.table.length - left)
	};
	newA.table[0] = sliced;
	var len = 0;
	for (var i = 0; i < newA.table.length; i++)
	{
		len += length(newA.table[i]);
		newA.lengths[i] = len;
	}

	return newA;
}

// Appends two trees.
function append(a,b)
{
	if (a.table.length === 0)
	{
		return b;
	}
	if (b.table.length === 0)
	{
		return a;
	}

	var c = append_(a, b);

	// Check if both nodes can be crunshed together.
	if (c[0].table.length + c[1].table.length <= M)
	{
		if (c[0].table.length === 0)
		{
			return c[1];
		}
		if (c[1].table.length === 0)
		{
			return c[0];
		}

		// Adjust .table and .lengths
		c[0].table = c[0].table.concat(c[1].table);
		if (c[0].height > 0)
		{
			var len = length(c[0]);
			for (var i = 0; i < c[1].lengths.length; i++)
			{
				c[1].lengths[i] += len;
			}
			c[0].lengths = c[0].lengths.concat(c[1].lengths);
		}

		return c[0];
	}

	if (c[0].height > 0)
	{
		var toRemove = calcToRemove(a, b);
		if (toRemove > E)
		{
			c = shuffle(c[0], c[1], toRemove);
		}
	}

	return siblise(c[0], c[1]);
}

// Returns an array of two nodes; right and left. One node _may_ be empty.
function append_(a, b)
{
	if (a.height === 0 && b.height === 0)
	{
		return [a, b];
	}

	if (a.height !== 1 || b.height !== 1)
	{
		if (a.height === b.height)
		{
			a = nodeCopy(a);
			b = nodeCopy(b);
			var appended = append_(botRight(a), botLeft(b));

			insertRight(a, appended[1]);
			insertLeft(b, appended[0]);
		}
		else if (a.height > b.height)
		{
			a = nodeCopy(a);
			var appended = append_(botRight(a), b);

			insertRight(a, appended[0]);
			b = parentise(appended[1], appended[1].height + 1);
		}
		else
		{
			b = nodeCopy(b);
			var appended = append_(a, botLeft(b));

			var left = appended[0].table.length === 0 ? 0 : 1;
			var right = left === 0 ? 1 : 0;
			insertLeft(b, appended[left]);
			a = parentise(appended[right], appended[right].height + 1);
		}
	}

	// Check if balancing is needed and return based on that.
	if (a.table.length === 0 || b.table.length === 0)
	{
		return [a, b];
	}

	var toRemove = calcToRemove(a, b);
	if (toRemove <= E)
	{
		return [a, b];
	}
	return shuffle(a, b, toRemove);
}

// Helperfunctions for append_. Replaces a child node at the side of the parent.
function insertRight(parent, node)
{
	var index = parent.table.length - 1;
	parent.table[index] = node;
	parent.lengths[index] = length(node);
	parent.lengths[index] += index > 0 ? parent.lengths[index - 1] : 0;
}

function insertLeft(parent, node)
{
	if (node.table.length > 0)
	{
		parent.table[0] = node;
		parent.lengths[0] = length(node);

		var len = length(parent.table[0]);
		for (var i = 1; i < parent.lengths.length; i++)
		{
			len += length(parent.table[i]);
			parent.lengths[i] = len;
		}
	}
	else
	{
		parent.table.shift();
		for (var i = 1; i < parent.lengths.length; i++)
		{
			parent.lengths[i] = parent.lengths[i] - parent.lengths[0];
		}
		parent.lengths.shift();
	}
}

// Returns the extra search steps for E. Refer to the paper.
function calcToRemove(a, b)
{
	var subLengths = 0;
	for (var i = 0; i < a.table.length; i++)
	{
		subLengths += a.table[i].table.length;
	}
	for (var i = 0; i < b.table.length; i++)
	{
		subLengths += b.table[i].table.length;
	}

	var toRemove = a.table.length + b.table.length;
	return toRemove - (Math.floor((subLengths - 1) / M) + 1);
}

// get2, set2 and saveSlot are helpers for accessing elements over two arrays.
function get2(a, b, index)
{
	return index < a.length
		? a[index]
		: b[index - a.length];
}

function set2(a, b, index, value)
{
	if (index < a.length)
	{
		a[index] = value;
	}
	else
	{
		b[index - a.length] = value;
	}
}

function saveSlot(a, b, index, slot)
{
	set2(a.table, b.table, index, slot);

	var l = (index === 0 || index === a.lengths.length)
		? 0
		: get2(a.lengths, a.lengths, index - 1);

	set2(a.lengths, b.lengths, index, l + length(slot));
}

// Creates a node or leaf with a given length at their arrays for perfomance.
// Is only used by shuffle.
function createNode(h, length)
{
	if (length < 0)
	{
		length = 0;
	}
	var a = {
		ctor: '_Array',
		height: h,
		table: new Array(length)
	};
	if (h > 0)
	{
		a.lengths = new Array(length);
	}
	return a;
}

// Returns an array of two balanced nodes.
function shuffle(a, b, toRemove)
{
	var newA = createNode(a.height, Math.min(M, a.table.length + b.table.length - toRemove));
	var newB = createNode(a.height, newA.table.length - (a.table.length + b.table.length - toRemove));

	// Skip the slots with size M. More precise: copy the slot references
	// to the new node
	var read = 0;
	while (get2(a.table, b.table, read).table.length % M === 0)
	{
		set2(newA.table, newB.table, read, get2(a.table, b.table, read));
		set2(newA.lengths, newB.lengths, read, get2(a.lengths, b.lengths, read));
		read++;
	}

	// Pulling items from left to right, caching in a slot before writing
	// it into the new nodes.
	var write = read;
	var slot = new createNode(a.height - 1, 0);
	var from = 0;

	// If the current slot is still containing data, then there will be at
	// least one more write, so we do not break this loop yet.
	while (read - write - (slot.table.length > 0 ? 1 : 0) < toRemove)
	{
		// Find out the max possible items for copying.
		var source = get2(a.table, b.table, read);
		var to = Math.min(M - slot.table.length, source.table.length);

		// Copy and adjust size table.
		slot.table = slot.table.concat(source.table.slice(from, to));
		if (slot.height > 0)
		{
			var len = slot.lengths.length;
			for (var i = len; i < len + to - from; i++)
			{
				slot.lengths[i] = length(slot.table[i]);
				slot.lengths[i] += (i > 0 ? slot.lengths[i - 1] : 0);
			}
		}

		from += to;

		// Only proceed to next slots[i] if the current one was
		// fully copied.
		if (source.table.length <= to)
		{
			read++; from = 0;
		}

		// Only create a new slot if the current one is filled up.
		if (slot.table.length === M)
		{
			saveSlot(newA, newB, write, slot);
			slot = createNode(a.height - 1, 0);
			write++;
		}
	}

	// Cleanup after the loop. Copy the last slot into the new nodes.
	if (slot.table.length > 0)
	{
		saveSlot(newA, newB, write, slot);
		write++;
	}

	// Shift the untouched slots to the left
	while (read < a.table.length + b.table.length )
	{
		saveSlot(newA, newB, write, get2(a.table, b.table, read));
		read++;
		write++;
	}

	return [newA, newB];
}

// Navigation functions
function botRight(a)
{
	return a.table[a.table.length - 1];
}
function botLeft(a)
{
	return a.table[0];
}

// Copies a node for updating. Note that you should not use this if
// only updating only one of "table" or "lengths" for performance reasons.
function nodeCopy(a)
{
	var newA = {
		ctor: '_Array',
		height: a.height,
		table: a.table.slice()
	};
	if (a.height > 0)
	{
		newA.lengths = a.lengths.slice();
	}
	return newA;
}

// Returns how many items are in the tree.
function length(array)
{
	if (array.height === 0)
	{
		return array.table.length;
	}
	else
	{
		return array.lengths[array.lengths.length - 1];
	}
}

// Calculates in which slot of "table" the item probably is, then
// find the exact slot via forward searching in  "lengths". Returns the index.
function getSlot(i, a)
{
	var slot = i >> (5 * a.height);
	while (a.lengths[slot] <= i)
	{
		slot++;
	}
	return slot;
}

// Recursively creates a tree with a given height containing
// only the given item.
function create(item, h)
{
	if (h === 0)
	{
		return {
			ctor: '_Array',
			height: 0,
			table: [item]
		};
	}
	return {
		ctor: '_Array',
		height: h,
		table: [create(item, h - 1)],
		lengths: [1]
	};
}

// Recursively creates a tree that contains the given tree.
function parentise(tree, h)
{
	if (h === tree.height)
	{
		return tree;
	}

	return {
		ctor: '_Array',
		height: h,
		table: [parentise(tree, h - 1)],
		lengths: [length(tree)]
	};
}

// Emphasizes blood brotherhood beneath two trees.
function siblise(a, b)
{
	return {
		ctor: '_Array',
		height: a.height + 1,
		table: [a, b],
		lengths: [length(a), length(a) + length(b)]
	};
}

function toJSArray(a)
{
	var jsArray = new Array(length(a));
	toJSArray_(jsArray, 0, a);
	return jsArray;
}

function toJSArray_(jsArray, i, a)
{
	for (var t = 0; t < a.table.length; t++)
	{
		if (a.height === 0)
		{
			jsArray[i + t] = a.table[t];
		}
		else
		{
			var inc = t === 0 ? 0 : a.lengths[t - 1];
			toJSArray_(jsArray, i + inc, a.table[t]);
		}
	}
}

function fromJSArray(jsArray)
{
	if (jsArray.length === 0)
	{
		return empty;
	}
	var h = Math.floor(Math.log(jsArray.length) / Math.log(M));
	return fromJSArray_(jsArray, h, 0, jsArray.length);
}

function fromJSArray_(jsArray, h, from, to)
{
	if (h === 0)
	{
		return {
			ctor: '_Array',
			height: 0,
			table: jsArray.slice(from, to)
		};
	}

	var step = Math.pow(M, h);
	var table = new Array(Math.ceil((to - from) / step));
	var lengths = new Array(table.length);
	for (var i = 0; i < table.length; i++)
	{
		table[i] = fromJSArray_(jsArray, h - 1, from + (i * step), Math.min(from + ((i + 1) * step), to));
		lengths[i] = length(table[i]) + (i > 0 ? lengths[i - 1] : 0);
	}
	return {
		ctor: '_Array',
		height: h,
		table: table,
		lengths: lengths
	};
}

return {
	empty: empty,
	fromList: fromList,
	toList: toList,
	initialize: F2(initialize),
	append: F2(append),
	push: F2(push),
	slice: F3(slice),
	get: F2(get),
	set: F3(set),
	map: F2(map),
	indexedMap: F2(indexedMap),
	foldl: F3(foldl),
	foldr: F3(foldr),
	length: length,

	toJSArray: toJSArray,
	fromJSArray: fromJSArray
};

}();
var _elm_lang$core$Array$append = _elm_lang$core$Native_Array.append;
var _elm_lang$core$Array$length = _elm_lang$core$Native_Array.length;
var _elm_lang$core$Array$isEmpty = function (array) {
	return _elm_lang$core$Native_Utils.eq(
		_elm_lang$core$Array$length(array),
		0);
};
var _elm_lang$core$Array$slice = _elm_lang$core$Native_Array.slice;
var _elm_lang$core$Array$set = _elm_lang$core$Native_Array.set;
var _elm_lang$core$Array$get = F2(
	function (i, array) {
		return ((_elm_lang$core$Native_Utils.cmp(0, i) < 1) && (_elm_lang$core$Native_Utils.cmp(
			i,
			_elm_lang$core$Native_Array.length(array)) < 0)) ? _elm_lang$core$Maybe$Just(
			A2(_elm_lang$core$Native_Array.get, i, array)) : _elm_lang$core$Maybe$Nothing;
	});
var _elm_lang$core$Array$push = _elm_lang$core$Native_Array.push;
var _elm_lang$core$Array$empty = _elm_lang$core$Native_Array.empty;
var _elm_lang$core$Array$filter = F2(
	function (isOkay, arr) {
		var update = F2(
			function (x, xs) {
				return isOkay(x) ? A2(_elm_lang$core$Native_Array.push, x, xs) : xs;
			});
		return A3(_elm_lang$core$Native_Array.foldl, update, _elm_lang$core$Native_Array.empty, arr);
	});
var _elm_lang$core$Array$foldr = _elm_lang$core$Native_Array.foldr;
var _elm_lang$core$Array$foldl = _elm_lang$core$Native_Array.foldl;
var _elm_lang$core$Array$indexedMap = _elm_lang$core$Native_Array.indexedMap;
var _elm_lang$core$Array$map = _elm_lang$core$Native_Array.map;
var _elm_lang$core$Array$toIndexedList = function (array) {
	return A3(
		_elm_lang$core$List$map2,
		F2(
			function (v0, v1) {
				return {ctor: '_Tuple2', _0: v0, _1: v1};
			}),
		A2(
			_elm_lang$core$List$range,
			0,
			_elm_lang$core$Native_Array.length(array) - 1),
		_elm_lang$core$Native_Array.toList(array));
};
var _elm_lang$core$Array$toList = _elm_lang$core$Native_Array.toList;
var _elm_lang$core$Array$fromList = _elm_lang$core$Native_Array.fromList;
var _elm_lang$core$Array$initialize = _elm_lang$core$Native_Array.initialize;
var _elm_lang$core$Array$repeat = F2(
	function (n, e) {
		return A2(
			_elm_lang$core$Array$initialize,
			n,
			_elm_lang$core$Basics$always(e));
	});
var _elm_lang$core$Array$Array = {ctor: 'Array'};

var _elm_community$maybe_extra$Maybe_Extra$filter = F2(
	function (f, m) {
		var _p0 = A2(_elm_lang$core$Maybe$map, f, m);
		if ((_p0.ctor === 'Just') && (_p0._0 === true)) {
			return m;
		} else {
			return _elm_lang$core$Maybe$Nothing;
		}
	});
var _elm_community$maybe_extra$Maybe_Extra$traverseArray = function (f) {
	var step = F2(
		function (e, acc) {
			var _p1 = f(e);
			if (_p1.ctor === 'Nothing') {
				return _elm_lang$core$Maybe$Nothing;
			} else {
				return A2(
					_elm_lang$core$Maybe$map,
					_elm_lang$core$Array$push(_p1._0),
					acc);
			}
		});
	return A2(
		_elm_lang$core$Array$foldl,
		step,
		_elm_lang$core$Maybe$Just(_elm_lang$core$Array$empty));
};
var _elm_community$maybe_extra$Maybe_Extra$combineArray = _elm_community$maybe_extra$Maybe_Extra$traverseArray(_elm_lang$core$Basics$identity);
var _elm_community$maybe_extra$Maybe_Extra$traverse = function (f) {
	var step = F2(
		function (e, acc) {
			var _p2 = f(e);
			if (_p2.ctor === 'Nothing') {
				return _elm_lang$core$Maybe$Nothing;
			} else {
				return A2(
					_elm_lang$core$Maybe$map,
					F2(
						function (x, y) {
							return {ctor: '::', _0: x, _1: y};
						})(_p2._0),
					acc);
			}
		});
	return A2(
		_elm_lang$core$List$foldr,
		step,
		_elm_lang$core$Maybe$Just(
			{ctor: '[]'}));
};
var _elm_community$maybe_extra$Maybe_Extra$combine = _elm_community$maybe_extra$Maybe_Extra$traverse(_elm_lang$core$Basics$identity);
var _elm_community$maybe_extra$Maybe_Extra$maybeToArray = function (m) {
	var _p3 = m;
	if (_p3.ctor === 'Nothing') {
		return _elm_lang$core$Array$empty;
	} else {
		return A2(_elm_lang$core$Array$repeat, 1, _p3._0);
	}
};
var _elm_community$maybe_extra$Maybe_Extra$maybeToList = function (m) {
	var _p4 = m;
	if (_p4.ctor === 'Nothing') {
		return {ctor: '[]'};
	} else {
		return {
			ctor: '::',
			_0: _p4._0,
			_1: {ctor: '[]'}
		};
	}
};
var _elm_community$maybe_extra$Maybe_Extra$orElse = F2(
	function (ma, mb) {
		var _p5 = mb;
		if (_p5.ctor === 'Nothing') {
			return ma;
		} else {
			return mb;
		}
	});
var _elm_community$maybe_extra$Maybe_Extra$orElseLazy = F2(
	function (fma, mb) {
		var _p6 = mb;
		if (_p6.ctor === 'Nothing') {
			return fma(
				{ctor: '_Tuple0'});
		} else {
			return mb;
		}
	});
var _elm_community$maybe_extra$Maybe_Extra$orLazy = F2(
	function (ma, fmb) {
		var _p7 = ma;
		if (_p7.ctor === 'Nothing') {
			return fmb(
				{ctor: '_Tuple0'});
		} else {
			return ma;
		}
	});
var _elm_community$maybe_extra$Maybe_Extra$or = F2(
	function (ma, mb) {
		var _p8 = ma;
		if (_p8.ctor === 'Nothing') {
			return mb;
		} else {
			return ma;
		}
	});
var _elm_community$maybe_extra$Maybe_Extra$prev = _elm_lang$core$Maybe$map2(_elm_lang$core$Basics$always);
var _elm_community$maybe_extra$Maybe_Extra$next = _elm_lang$core$Maybe$map2(
	_elm_lang$core$Basics$flip(_elm_lang$core$Basics$always));
var _elm_community$maybe_extra$Maybe_Extra$andMap = _elm_lang$core$Maybe$map2(
	F2(
		function (x, y) {
			return y(x);
		}));
var _elm_community$maybe_extra$Maybe_Extra$unpack = F3(
	function (d, f, m) {
		var _p9 = m;
		if (_p9.ctor === 'Nothing') {
			return d(
				{ctor: '_Tuple0'});
		} else {
			return f(_p9._0);
		}
	});
var _elm_community$maybe_extra$Maybe_Extra$unwrap = F3(
	function (d, f, m) {
		var _p10 = m;
		if (_p10.ctor === 'Nothing') {
			return d;
		} else {
			return f(_p10._0);
		}
	});
var _elm_community$maybe_extra$Maybe_Extra$isJust = function (m) {
	var _p11 = m;
	if (_p11.ctor === 'Nothing') {
		return false;
	} else {
		return true;
	}
};
var _elm_community$maybe_extra$Maybe_Extra$isNothing = function (m) {
	var _p12 = m;
	if (_p12.ctor === 'Nothing') {
		return true;
	} else {
		return false;
	}
};
var _elm_community$maybe_extra$Maybe_Extra$join = function (mx) {
	var _p13 = mx;
	if (_p13.ctor === 'Just') {
		return _p13._0;
	} else {
		return _elm_lang$core$Maybe$Nothing;
	}
};
var _elm_community$maybe_extra$Maybe_Extra_ops = _elm_community$maybe_extra$Maybe_Extra_ops || {};
_elm_community$maybe_extra$Maybe_Extra_ops['?'] = F2(
	function (mx, x) {
		return A2(_elm_lang$core$Maybe$withDefault, x, mx);
	});

var _elm_community$ratio$Ratio$toFloat = function (_p0) {
	var _p1 = _p0;
	return _elm_lang$core$Basics$toFloat(_p1._0) / _elm_lang$core$Basics$toFloat(_p1._1);
};
var _elm_community$ratio$Ratio$compare = F2(
	function (a, b) {
		return A2(
			_elm_lang$core$Basics$compare,
			_elm_community$ratio$Ratio$toFloat(a),
			_elm_community$ratio$Ratio$toFloat(b));
	});
var _elm_community$ratio$Ratio$round = function (_p2) {
	return _elm_lang$core$Basics$round(
		_elm_community$ratio$Ratio$toFloat(_p2));
};
var _elm_community$ratio$Ratio$floor = function (_p3) {
	return _elm_lang$core$Basics$floor(
		_elm_community$ratio$Ratio$toFloat(_p3));
};
var _elm_community$ratio$Ratio$ceiling = function (_p4) {
	return _elm_lang$core$Basics$ceiling(
		_elm_community$ratio$Ratio$toFloat(_p4));
};
var _elm_community$ratio$Ratio$truncate = function (_p5) {
	return _elm_lang$core$Basics$truncate(
		_elm_community$ratio$Ratio$toFloat(_p5));
};
var _elm_community$ratio$Ratio$split = function (_p6) {
	var _p7 = _p6;
	return {ctor: '_Tuple2', _0: _p7._0, _1: _p7._1};
};
var _elm_community$ratio$Ratio$denominator = function (_p8) {
	var _p9 = _p8;
	return _p9._1;
};
var _elm_community$ratio$Ratio$isInfinite = function (r) {
	return _elm_lang$core$Native_Utils.eq(
		0,
		_elm_community$ratio$Ratio$denominator(r));
};
var _elm_community$ratio$Ratio$numerator = function (_p10) {
	var _p11 = _p10;
	return _p11._0;
};
var _elm_community$ratio$Ratio$isZero = function (r) {
	return _elm_lang$core$Native_Utils.eq(
		0,
		_elm_community$ratio$Ratio$numerator(r));
};
var _elm_community$ratio$Ratio$rel = F3(
	function (relop, a, b) {
		return A2(
			relop,
			_elm_community$ratio$Ratio$numerator(a) * _elm_community$ratio$Ratio$denominator(b),
			_elm_community$ratio$Ratio$numerator(b) * _elm_community$ratio$Ratio$denominator(a));
	});
var _elm_community$ratio$Ratio$eq = F2(
	function (a, b) {
		return A3(
			_elm_community$ratio$Ratio$rel,
			F2(
				function (x, y) {
					return _elm_lang$core$Native_Utils.eq(x, y);
				}),
			a,
			b);
	});
var _elm_community$ratio$Ratio$ne = F2(
	function (a, b) {
		return A3(
			_elm_community$ratio$Ratio$rel,
			F2(
				function (x, y) {
					return !_elm_lang$core$Native_Utils.eq(x, y);
				}),
			a,
			b);
	});
var _elm_community$ratio$Ratio$gt = F2(
	function (a, b) {
		return A3(
			_elm_community$ratio$Ratio$rel,
			F2(
				function (x, y) {
					return _elm_lang$core$Native_Utils.cmp(x, y) > 0;
				}),
			a,
			b);
	});
var _elm_community$ratio$Ratio$max = F2(
	function (a, b) {
		return A2(_elm_community$ratio$Ratio$gt, a, b) ? a : b;
	});
var _elm_community$ratio$Ratio$lt = F2(
	function (a, b) {
		return A3(
			_elm_community$ratio$Ratio$rel,
			F2(
				function (x, y) {
					return _elm_lang$core$Native_Utils.cmp(x, y) < 0;
				}),
			a,
			b);
	});
var _elm_community$ratio$Ratio$min = F2(
	function (a, b) {
		return A2(_elm_community$ratio$Ratio$lt, a, b) ? a : b;
	});
var _elm_community$ratio$Ratio$ge = F2(
	function (a, b) {
		return A3(
			_elm_community$ratio$Ratio$rel,
			F2(
				function (x, y) {
					return _elm_lang$core$Native_Utils.cmp(x, y) > -1;
				}),
			a,
			b);
	});
var _elm_community$ratio$Ratio$le = F2(
	function (a, b) {
		return A3(
			_elm_community$ratio$Ratio$rel,
			F2(
				function (x, y) {
					return _elm_lang$core$Native_Utils.cmp(x, y) < 1;
				}),
			a,
			b);
	});
var _elm_community$ratio$Ratio$gcd = F2(
	function (a, b) {
		gcd:
		while (true) {
			if (_elm_lang$core$Native_Utils.eq(b, 0)) {
				return a;
			} else {
				var _v4 = b,
					_v5 = A2(_elm_lang$core$Basics_ops['%'], a, b);
				a = _v4;
				b = _v5;
				continue gcd;
			}
		}
	});
var _elm_community$ratio$Ratio$Rational = F2(
	function (a, b) {
		return {ctor: 'Rational', _0: a, _1: b};
	});
var _elm_community$ratio$Ratio$normalize = function (_p12) {
	var _p13 = _p12;
	var _p15 = _p13._1;
	var _p14 = _p13._0;
	var k = A2(_elm_community$ratio$Ratio$gcd, _p14, _p15) * ((_elm_lang$core$Native_Utils.cmp(_p15, 0) < 0) ? -1 : 1);
	return A2(_elm_community$ratio$Ratio$Rational, (_p14 / k) | 0, (_p15 / k) | 0);
};
var _elm_community$ratio$Ratio$addsub = F3(
	function (f, _p17, _p16) {
		var _p18 = _p17;
		var _p21 = _p18._1;
		var _p19 = _p16;
		var _p20 = _p19._1;
		return _elm_community$ratio$Ratio$normalize(
			A2(
				_elm_community$ratio$Ratio$Rational,
				A2(f, _p18._0 * _p20, _p21 * _p19._0),
				_p21 * _p20));
	});
var _elm_community$ratio$Ratio$add = _elm_community$ratio$Ratio$addsub(
	F2(
		function (x, y) {
			return x + y;
		}));
var _elm_community$ratio$Ratio$subtract = _elm_community$ratio$Ratio$addsub(
	F2(
		function (x, y) {
			return x - y;
		}));
var _elm_community$ratio$Ratio$multiply = F2(
	function (_p23, _p22) {
		var _p24 = _p23;
		var _p25 = _p22;
		return _elm_community$ratio$Ratio$normalize(
			A2(_elm_community$ratio$Ratio$Rational, _p24._0 * _p25._0, _p24._1 * _p25._1));
	});
var _elm_community$ratio$Ratio$multiplyByInt = F2(
	function (_p26, i) {
		var _p27 = _p26;
		return _elm_community$ratio$Ratio$normalize(
			A2(_elm_community$ratio$Ratio$Rational, _p27._0 * i, _p27._1));
	});
var _elm_community$ratio$Ratio$divide = F2(
	function (r, _p28) {
		var _p29 = _p28;
		return A2(
			_elm_community$ratio$Ratio$multiply,
			r,
			A2(_elm_community$ratio$Ratio$Rational, _p29._1, _p29._0));
	});
var _elm_community$ratio$Ratio$negate = function (_p30) {
	var _p31 = _p30;
	return A2(_elm_community$ratio$Ratio$Rational, 0 - _p31._0, _p31._1);
};
var _elm_community$ratio$Ratio$invert = function (_p32) {
	var _p33 = _p32;
	return _elm_community$ratio$Ratio$normalize(
		A2(_elm_community$ratio$Ratio$Rational, _p33._1, _p33._0));
};
var _elm_community$ratio$Ratio$over = F2(
	function (x, y) {
		return (_elm_lang$core$Native_Utils.cmp(y, 0) < 0) ? _elm_community$ratio$Ratio$normalize(
			A2(_elm_community$ratio$Ratio$Rational, 0 - x, 0 - y)) : _elm_community$ratio$Ratio$normalize(
			A2(_elm_community$ratio$Ratio$Rational, x, y));
	});
var _elm_community$ratio$Ratio$fromInt = function (x) {
	return A2(_elm_community$ratio$Ratio$over, x, 1);
};
var _elm_community$ratio$Ratio$divideByInt = F2(
	function (r, i) {
		return _elm_community$ratio$Ratio$normalize(
			A2(
				_elm_community$ratio$Ratio$divide,
				r,
				_elm_community$ratio$Ratio$fromInt(i)));
	});
var _elm_community$ratio$Ratio$divideIntBy = F2(
	function (i, r) {
		return _elm_community$ratio$Ratio$normalize(
			A2(
				_elm_community$ratio$Ratio$divide,
				_elm_community$ratio$Ratio$fromInt(i),
				r));
	});

var _elm_lang$core$Task$onError = _elm_lang$core$Native_Scheduler.onError;
var _elm_lang$core$Task$andThen = _elm_lang$core$Native_Scheduler.andThen;
var _elm_lang$core$Task$spawnCmd = F2(
	function (router, _p0) {
		var _p1 = _p0;
		return _elm_lang$core$Native_Scheduler.spawn(
			A2(
				_elm_lang$core$Task$andThen,
				_elm_lang$core$Platform$sendToApp(router),
				_p1._0));
	});
var _elm_lang$core$Task$fail = _elm_lang$core$Native_Scheduler.fail;
var _elm_lang$core$Task$mapError = F2(
	function (convert, task) {
		return A2(
			_elm_lang$core$Task$onError,
			function (_p2) {
				return _elm_lang$core$Task$fail(
					convert(_p2));
			},
			task);
	});
var _elm_lang$core$Task$succeed = _elm_lang$core$Native_Scheduler.succeed;
var _elm_lang$core$Task$map = F2(
	function (func, taskA) {
		return A2(
			_elm_lang$core$Task$andThen,
			function (a) {
				return _elm_lang$core$Task$succeed(
					func(a));
			},
			taskA);
	});
var _elm_lang$core$Task$map2 = F3(
	function (func, taskA, taskB) {
		return A2(
			_elm_lang$core$Task$andThen,
			function (a) {
				return A2(
					_elm_lang$core$Task$andThen,
					function (b) {
						return _elm_lang$core$Task$succeed(
							A2(func, a, b));
					},
					taskB);
			},
			taskA);
	});
var _elm_lang$core$Task$map3 = F4(
	function (func, taskA, taskB, taskC) {
		return A2(
			_elm_lang$core$Task$andThen,
			function (a) {
				return A2(
					_elm_lang$core$Task$andThen,
					function (b) {
						return A2(
							_elm_lang$core$Task$andThen,
							function (c) {
								return _elm_lang$core$Task$succeed(
									A3(func, a, b, c));
							},
							taskC);
					},
					taskB);
			},
			taskA);
	});
var _elm_lang$core$Task$map4 = F5(
	function (func, taskA, taskB, taskC, taskD) {
		return A2(
			_elm_lang$core$Task$andThen,
			function (a) {
				return A2(
					_elm_lang$core$Task$andThen,
					function (b) {
						return A2(
							_elm_lang$core$Task$andThen,
							function (c) {
								return A2(
									_elm_lang$core$Task$andThen,
									function (d) {
										return _elm_lang$core$Task$succeed(
											A4(func, a, b, c, d));
									},
									taskD);
							},
							taskC);
					},
					taskB);
			},
			taskA);
	});
var _elm_lang$core$Task$map5 = F6(
	function (func, taskA, taskB, taskC, taskD, taskE) {
		return A2(
			_elm_lang$core$Task$andThen,
			function (a) {
				return A2(
					_elm_lang$core$Task$andThen,
					function (b) {
						return A2(
							_elm_lang$core$Task$andThen,
							function (c) {
								return A2(
									_elm_lang$core$Task$andThen,
									function (d) {
										return A2(
											_elm_lang$core$Task$andThen,
											function (e) {
												return _elm_lang$core$Task$succeed(
													A5(func, a, b, c, d, e));
											},
											taskE);
									},
									taskD);
							},
							taskC);
					},
					taskB);
			},
			taskA);
	});
var _elm_lang$core$Task$sequence = function (tasks) {
	var _p3 = tasks;
	if (_p3.ctor === '[]') {
		return _elm_lang$core$Task$succeed(
			{ctor: '[]'});
	} else {
		return A3(
			_elm_lang$core$Task$map2,
			F2(
				function (x, y) {
					return {ctor: '::', _0: x, _1: y};
				}),
			_p3._0,
			_elm_lang$core$Task$sequence(_p3._1));
	}
};
var _elm_lang$core$Task$onEffects = F3(
	function (router, commands, state) {
		return A2(
			_elm_lang$core$Task$map,
			function (_p4) {
				return {ctor: '_Tuple0'};
			},
			_elm_lang$core$Task$sequence(
				A2(
					_elm_lang$core$List$map,
					_elm_lang$core$Task$spawnCmd(router),
					commands)));
	});
var _elm_lang$core$Task$init = _elm_lang$core$Task$succeed(
	{ctor: '_Tuple0'});
var _elm_lang$core$Task$onSelfMsg = F3(
	function (_p7, _p6, _p5) {
		return _elm_lang$core$Task$succeed(
			{ctor: '_Tuple0'});
	});
var _elm_lang$core$Task$command = _elm_lang$core$Native_Platform.leaf('Task');
var _elm_lang$core$Task$Perform = function (a) {
	return {ctor: 'Perform', _0: a};
};
var _elm_lang$core$Task$perform = F2(
	function (toMessage, task) {
		return _elm_lang$core$Task$command(
			_elm_lang$core$Task$Perform(
				A2(_elm_lang$core$Task$map, toMessage, task)));
	});
var _elm_lang$core$Task$attempt = F2(
	function (resultToMessage, task) {
		return _elm_lang$core$Task$command(
			_elm_lang$core$Task$Perform(
				A2(
					_elm_lang$core$Task$onError,
					function (_p8) {
						return _elm_lang$core$Task$succeed(
							resultToMessage(
								_elm_lang$core$Result$Err(_p8)));
					},
					A2(
						_elm_lang$core$Task$andThen,
						function (_p9) {
							return _elm_lang$core$Task$succeed(
								resultToMessage(
									_elm_lang$core$Result$Ok(_p9)));
						},
						task))));
	});
var _elm_lang$core$Task$cmdMap = F2(
	function (tagger, _p10) {
		var _p11 = _p10;
		return _elm_lang$core$Task$Perform(
			A2(_elm_lang$core$Task$map, tagger, _p11._0));
	});
_elm_lang$core$Native_Platform.effectManagers['Task'] = {pkg: 'elm-lang/core', init: _elm_lang$core$Task$init, onEffects: _elm_lang$core$Task$onEffects, onSelfMsg: _elm_lang$core$Task$onSelfMsg, tag: 'cmd', cmdMap: _elm_lang$core$Task$cmdMap};

//import Native.Scheduler //

var _elm_lang$core$Native_Time = function() {

var now = _elm_lang$core$Native_Scheduler.nativeBinding(function(callback)
{
	callback(_elm_lang$core$Native_Scheduler.succeed(Date.now()));
});

function setInterval_(interval, task)
{
	return _elm_lang$core$Native_Scheduler.nativeBinding(function(callback)
	{
		var id = setInterval(function() {
			_elm_lang$core$Native_Scheduler.rawSpawn(task);
		}, interval);

		return function() { clearInterval(id); };
	});
}

return {
	now: now,
	setInterval_: F2(setInterval_)
};

}();
var _elm_lang$core$Time$setInterval = _elm_lang$core$Native_Time.setInterval_;
var _elm_lang$core$Time$spawnHelp = F3(
	function (router, intervals, processes) {
		var _p0 = intervals;
		if (_p0.ctor === '[]') {
			return _elm_lang$core$Task$succeed(processes);
		} else {
			var _p1 = _p0._0;
			var spawnRest = function (id) {
				return A3(
					_elm_lang$core$Time$spawnHelp,
					router,
					_p0._1,
					A3(_elm_lang$core$Dict$insert, _p1, id, processes));
			};
			var spawnTimer = _elm_lang$core$Native_Scheduler.spawn(
				A2(
					_elm_lang$core$Time$setInterval,
					_p1,
					A2(_elm_lang$core$Platform$sendToSelf, router, _p1)));
			return A2(_elm_lang$core$Task$andThen, spawnRest, spawnTimer);
		}
	});
var _elm_lang$core$Time$addMySub = F2(
	function (_p2, state) {
		var _p3 = _p2;
		var _p6 = _p3._1;
		var _p5 = _p3._0;
		var _p4 = A2(_elm_lang$core$Dict$get, _p5, state);
		if (_p4.ctor === 'Nothing') {
			return A3(
				_elm_lang$core$Dict$insert,
				_p5,
				{
					ctor: '::',
					_0: _p6,
					_1: {ctor: '[]'}
				},
				state);
		} else {
			return A3(
				_elm_lang$core$Dict$insert,
				_p5,
				{ctor: '::', _0: _p6, _1: _p4._0},
				state);
		}
	});
var _elm_lang$core$Time$inMilliseconds = function (t) {
	return t;
};
var _elm_lang$core$Time$millisecond = 1;
var _elm_lang$core$Time$second = 1000 * _elm_lang$core$Time$millisecond;
var _elm_lang$core$Time$minute = 60 * _elm_lang$core$Time$second;
var _elm_lang$core$Time$hour = 60 * _elm_lang$core$Time$minute;
var _elm_lang$core$Time$inHours = function (t) {
	return t / _elm_lang$core$Time$hour;
};
var _elm_lang$core$Time$inMinutes = function (t) {
	return t / _elm_lang$core$Time$minute;
};
var _elm_lang$core$Time$inSeconds = function (t) {
	return t / _elm_lang$core$Time$second;
};
var _elm_lang$core$Time$now = _elm_lang$core$Native_Time.now;
var _elm_lang$core$Time$onSelfMsg = F3(
	function (router, interval, state) {
		var _p7 = A2(_elm_lang$core$Dict$get, interval, state.taggers);
		if (_p7.ctor === 'Nothing') {
			return _elm_lang$core$Task$succeed(state);
		} else {
			var tellTaggers = function (time) {
				return _elm_lang$core$Task$sequence(
					A2(
						_elm_lang$core$List$map,
						function (tagger) {
							return A2(
								_elm_lang$core$Platform$sendToApp,
								router,
								tagger(time));
						},
						_p7._0));
			};
			return A2(
				_elm_lang$core$Task$andThen,
				function (_p8) {
					return _elm_lang$core$Task$succeed(state);
				},
				A2(_elm_lang$core$Task$andThen, tellTaggers, _elm_lang$core$Time$now));
		}
	});
var _elm_lang$core$Time$subscription = _elm_lang$core$Native_Platform.leaf('Time');
var _elm_lang$core$Time$State = F2(
	function (a, b) {
		return {taggers: a, processes: b};
	});
var _elm_lang$core$Time$init = _elm_lang$core$Task$succeed(
	A2(_elm_lang$core$Time$State, _elm_lang$core$Dict$empty, _elm_lang$core$Dict$empty));
var _elm_lang$core$Time$onEffects = F3(
	function (router, subs, _p9) {
		var _p10 = _p9;
		var rightStep = F3(
			function (_p12, id, _p11) {
				var _p13 = _p11;
				return {
					ctor: '_Tuple3',
					_0: _p13._0,
					_1: _p13._1,
					_2: A2(
						_elm_lang$core$Task$andThen,
						function (_p14) {
							return _p13._2;
						},
						_elm_lang$core$Native_Scheduler.kill(id))
				};
			});
		var bothStep = F4(
			function (interval, taggers, id, _p15) {
				var _p16 = _p15;
				return {
					ctor: '_Tuple3',
					_0: _p16._0,
					_1: A3(_elm_lang$core$Dict$insert, interval, id, _p16._1),
					_2: _p16._2
				};
			});
		var leftStep = F3(
			function (interval, taggers, _p17) {
				var _p18 = _p17;
				return {
					ctor: '_Tuple3',
					_0: {ctor: '::', _0: interval, _1: _p18._0},
					_1: _p18._1,
					_2: _p18._2
				};
			});
		var newTaggers = A3(_elm_lang$core$List$foldl, _elm_lang$core$Time$addMySub, _elm_lang$core$Dict$empty, subs);
		var _p19 = A6(
			_elm_lang$core$Dict$merge,
			leftStep,
			bothStep,
			rightStep,
			newTaggers,
			_p10.processes,
			{
				ctor: '_Tuple3',
				_0: {ctor: '[]'},
				_1: _elm_lang$core$Dict$empty,
				_2: _elm_lang$core$Task$succeed(
					{ctor: '_Tuple0'})
			});
		var spawnList = _p19._0;
		var existingDict = _p19._1;
		var killTask = _p19._2;
		return A2(
			_elm_lang$core$Task$andThen,
			function (newProcesses) {
				return _elm_lang$core$Task$succeed(
					A2(_elm_lang$core$Time$State, newTaggers, newProcesses));
			},
			A2(
				_elm_lang$core$Task$andThen,
				function (_p20) {
					return A3(_elm_lang$core$Time$spawnHelp, router, spawnList, existingDict);
				},
				killTask));
	});
var _elm_lang$core$Time$Every = F2(
	function (a, b) {
		return {ctor: 'Every', _0: a, _1: b};
	});
var _elm_lang$core$Time$every = F2(
	function (interval, tagger) {
		return _elm_lang$core$Time$subscription(
			A2(_elm_lang$core$Time$Every, interval, tagger));
	});
var _elm_lang$core$Time$subMap = F2(
	function (f, _p21) {
		var _p22 = _p21;
		return A2(
			_elm_lang$core$Time$Every,
			_p22._0,
			function (_p23) {
				return f(
					_p22._1(_p23));
			});
	});
_elm_lang$core$Native_Platform.effectManagers['Time'] = {pkg: 'elm-lang/core', init: _elm_lang$core$Time$init, onEffects: _elm_lang$core$Time$onEffects, onSelfMsg: _elm_lang$core$Time$onSelfMsg, tag: 'sub', subMap: _elm_lang$core$Time$subMap};

//import Maybe, Native.Array, Native.List, Native.Utils, Result //

var _elm_lang$core$Native_Json = function() {


// CORE DECODERS

function succeed(msg)
{
	return {
		ctor: '<decoder>',
		tag: 'succeed',
		msg: msg
	};
}

function fail(msg)
{
	return {
		ctor: '<decoder>',
		tag: 'fail',
		msg: msg
	};
}

function decodePrimitive(tag)
{
	return {
		ctor: '<decoder>',
		tag: tag
	};
}

function decodeContainer(tag, decoder)
{
	return {
		ctor: '<decoder>',
		tag: tag,
		decoder: decoder
	};
}

function decodeNull(value)
{
	return {
		ctor: '<decoder>',
		tag: 'null',
		value: value
	};
}

function decodeField(field, decoder)
{
	return {
		ctor: '<decoder>',
		tag: 'field',
		field: field,
		decoder: decoder
	};
}

function decodeIndex(index, decoder)
{
	return {
		ctor: '<decoder>',
		tag: 'index',
		index: index,
		decoder: decoder
	};
}

function decodeKeyValuePairs(decoder)
{
	return {
		ctor: '<decoder>',
		tag: 'key-value',
		decoder: decoder
	};
}

function mapMany(f, decoders)
{
	return {
		ctor: '<decoder>',
		tag: 'map-many',
		func: f,
		decoders: decoders
	};
}

function andThen(callback, decoder)
{
	return {
		ctor: '<decoder>',
		tag: 'andThen',
		decoder: decoder,
		callback: callback
	};
}

function oneOf(decoders)
{
	return {
		ctor: '<decoder>',
		tag: 'oneOf',
		decoders: decoders
	};
}


// DECODING OBJECTS

function map1(f, d1)
{
	return mapMany(f, [d1]);
}

function map2(f, d1, d2)
{
	return mapMany(f, [d1, d2]);
}

function map3(f, d1, d2, d3)
{
	return mapMany(f, [d1, d2, d3]);
}

function map4(f, d1, d2, d3, d4)
{
	return mapMany(f, [d1, d2, d3, d4]);
}

function map5(f, d1, d2, d3, d4, d5)
{
	return mapMany(f, [d1, d2, d3, d4, d5]);
}

function map6(f, d1, d2, d3, d4, d5, d6)
{
	return mapMany(f, [d1, d2, d3, d4, d5, d6]);
}

function map7(f, d1, d2, d3, d4, d5, d6, d7)
{
	return mapMany(f, [d1, d2, d3, d4, d5, d6, d7]);
}

function map8(f, d1, d2, d3, d4, d5, d6, d7, d8)
{
	return mapMany(f, [d1, d2, d3, d4, d5, d6, d7, d8]);
}


// DECODE HELPERS

function ok(value)
{
	return { tag: 'ok', value: value };
}

function badPrimitive(type, value)
{
	return { tag: 'primitive', type: type, value: value };
}

function badIndex(index, nestedProblems)
{
	return { tag: 'index', index: index, rest: nestedProblems };
}

function badField(field, nestedProblems)
{
	return { tag: 'field', field: field, rest: nestedProblems };
}

function badIndex(index, nestedProblems)
{
	return { tag: 'index', index: index, rest: nestedProblems };
}

function badOneOf(problems)
{
	return { tag: 'oneOf', problems: problems };
}

function bad(msg)
{
	return { tag: 'fail', msg: msg };
}

function badToString(problem)
{
	var context = '_';
	while (problem)
	{
		switch (problem.tag)
		{
			case 'primitive':
				return 'Expecting ' + problem.type
					+ (context === '_' ? '' : ' at ' + context)
					+ ' but instead got: ' + jsToString(problem.value);

			case 'index':
				context += '[' + problem.index + ']';
				problem = problem.rest;
				break;

			case 'field':
				context += '.' + problem.field;
				problem = problem.rest;
				break;

			case 'index':
				context += '[' + problem.index + ']';
				problem = problem.rest;
				break;

			case 'oneOf':
				var problems = problem.problems;
				for (var i = 0; i < problems.length; i++)
				{
					problems[i] = badToString(problems[i]);
				}
				return 'I ran into the following problems'
					+ (context === '_' ? '' : ' at ' + context)
					+ ':\n\n' + problems.join('\n');

			case 'fail':
				return 'I ran into a `fail` decoder'
					+ (context === '_' ? '' : ' at ' + context)
					+ ': ' + problem.msg;
		}
	}
}

function jsToString(value)
{
	return value === undefined
		? 'undefined'
		: JSON.stringify(value);
}


// DECODE

function runOnString(decoder, string)
{
	var json;
	try
	{
		json = JSON.parse(string);
	}
	catch (e)
	{
		return _elm_lang$core$Result$Err('Given an invalid JSON: ' + e.message);
	}
	return run(decoder, json);
}

function run(decoder, value)
{
	var result = runHelp(decoder, value);
	return (result.tag === 'ok')
		? _elm_lang$core$Result$Ok(result.value)
		: _elm_lang$core$Result$Err(badToString(result));
}

function runHelp(decoder, value)
{
	switch (decoder.tag)
	{
		case 'bool':
			return (typeof value === 'boolean')
				? ok(value)
				: badPrimitive('a Bool', value);

		case 'int':
			if (typeof value !== 'number') {
				return badPrimitive('an Int', value);
			}

			if (-2147483647 < value && value < 2147483647 && (value | 0) === value) {
				return ok(value);
			}

			if (isFinite(value) && !(value % 1)) {
				return ok(value);
			}

			return badPrimitive('an Int', value);

		case 'float':
			return (typeof value === 'number')
				? ok(value)
				: badPrimitive('a Float', value);

		case 'string':
			return (typeof value === 'string')
				? ok(value)
				: (value instanceof String)
					? ok(value + '')
					: badPrimitive('a String', value);

		case 'null':
			return (value === null)
				? ok(decoder.value)
				: badPrimitive('null', value);

		case 'value':
			return ok(value);

		case 'list':
			if (!(value instanceof Array))
			{
				return badPrimitive('a List', value);
			}

			var list = _elm_lang$core$Native_List.Nil;
			for (var i = value.length; i--; )
			{
				var result = runHelp(decoder.decoder, value[i]);
				if (result.tag !== 'ok')
				{
					return badIndex(i, result)
				}
				list = _elm_lang$core$Native_List.Cons(result.value, list);
			}
			return ok(list);

		case 'array':
			if (!(value instanceof Array))
			{
				return badPrimitive('an Array', value);
			}

			var len = value.length;
			var array = new Array(len);
			for (var i = len; i--; )
			{
				var result = runHelp(decoder.decoder, value[i]);
				if (result.tag !== 'ok')
				{
					return badIndex(i, result);
				}
				array[i] = result.value;
			}
			return ok(_elm_lang$core$Native_Array.fromJSArray(array));

		case 'maybe':
			var result = runHelp(decoder.decoder, value);
			return (result.tag === 'ok')
				? ok(_elm_lang$core$Maybe$Just(result.value))
				: ok(_elm_lang$core$Maybe$Nothing);

		case 'field':
			var field = decoder.field;
			if (typeof value !== 'object' || value === null || !(field in value))
			{
				return badPrimitive('an object with a field named `' + field + '`', value);
			}

			var result = runHelp(decoder.decoder, value[field]);
			return (result.tag === 'ok') ? result : badField(field, result);

		case 'index':
			var index = decoder.index;
			if (!(value instanceof Array))
			{
				return badPrimitive('an array', value);
			}
			if (index >= value.length)
			{
				return badPrimitive('a longer array. Need index ' + index + ' but there are only ' + value.length + ' entries', value);
			}

			var result = runHelp(decoder.decoder, value[index]);
			return (result.tag === 'ok') ? result : badIndex(index, result);

		case 'key-value':
			if (typeof value !== 'object' || value === null || value instanceof Array)
			{
				return badPrimitive('an object', value);
			}

			var keyValuePairs = _elm_lang$core$Native_List.Nil;
			for (var key in value)
			{
				var result = runHelp(decoder.decoder, value[key]);
				if (result.tag !== 'ok')
				{
					return badField(key, result);
				}
				var pair = _elm_lang$core$Native_Utils.Tuple2(key, result.value);
				keyValuePairs = _elm_lang$core$Native_List.Cons(pair, keyValuePairs);
			}
			return ok(keyValuePairs);

		case 'map-many':
			var answer = decoder.func;
			var decoders = decoder.decoders;
			for (var i = 0; i < decoders.length; i++)
			{
				var result = runHelp(decoders[i], value);
				if (result.tag !== 'ok')
				{
					return result;
				}
				answer = answer(result.value);
			}
			return ok(answer);

		case 'andThen':
			var result = runHelp(decoder.decoder, value);
			return (result.tag !== 'ok')
				? result
				: runHelp(decoder.callback(result.value), value);

		case 'oneOf':
			var errors = [];
			var temp = decoder.decoders;
			while (temp.ctor !== '[]')
			{
				var result = runHelp(temp._0, value);

				if (result.tag === 'ok')
				{
					return result;
				}

				errors.push(result);

				temp = temp._1;
			}
			return badOneOf(errors);

		case 'fail':
			return bad(decoder.msg);

		case 'succeed':
			return ok(decoder.msg);
	}
}


// EQUALITY

function equality(a, b)
{
	if (a === b)
	{
		return true;
	}

	if (a.tag !== b.tag)
	{
		return false;
	}

	switch (a.tag)
	{
		case 'succeed':
		case 'fail':
			return a.msg === b.msg;

		case 'bool':
		case 'int':
		case 'float':
		case 'string':
		case 'value':
			return true;

		case 'null':
			return a.value === b.value;

		case 'list':
		case 'array':
		case 'maybe':
		case 'key-value':
			return equality(a.decoder, b.decoder);

		case 'field':
			return a.field === b.field && equality(a.decoder, b.decoder);

		case 'index':
			return a.index === b.index && equality(a.decoder, b.decoder);

		case 'map-many':
			if (a.func !== b.func)
			{
				return false;
			}
			return listEquality(a.decoders, b.decoders);

		case 'andThen':
			return a.callback === b.callback && equality(a.decoder, b.decoder);

		case 'oneOf':
			return listEquality(a.decoders, b.decoders);
	}
}

function listEquality(aDecoders, bDecoders)
{
	var len = aDecoders.length;
	if (len !== bDecoders.length)
	{
		return false;
	}
	for (var i = 0; i < len; i++)
	{
		if (!equality(aDecoders[i], bDecoders[i]))
		{
			return false;
		}
	}
	return true;
}


// ENCODE

function encode(indentLevel, value)
{
	return JSON.stringify(value, null, indentLevel);
}

function identity(value)
{
	return value;
}

function encodeObject(keyValuePairs)
{
	var obj = {};
	while (keyValuePairs.ctor !== '[]')
	{
		var pair = keyValuePairs._0;
		obj[pair._0] = pair._1;
		keyValuePairs = keyValuePairs._1;
	}
	return obj;
}

return {
	encode: F2(encode),
	runOnString: F2(runOnString),
	run: F2(run),

	decodeNull: decodeNull,
	decodePrimitive: decodePrimitive,
	decodeContainer: F2(decodeContainer),

	decodeField: F2(decodeField),
	decodeIndex: F2(decodeIndex),

	map1: F2(map1),
	map2: F3(map2),
	map3: F4(map3),
	map4: F5(map4),
	map5: F6(map5),
	map6: F7(map6),
	map7: F8(map7),
	map8: F9(map8),
	decodeKeyValuePairs: decodeKeyValuePairs,

	andThen: F2(andThen),
	fail: fail,
	succeed: succeed,
	oneOf: oneOf,

	identity: identity,
	encodeNull: null,
	encodeArray: _elm_lang$core$Native_Array.toJSArray,
	encodeList: _elm_lang$core$Native_List.toArray,
	encodeObject: encodeObject,

	equality: equality
};

}();

var _elm_lang$core$Json_Encode$list = _elm_lang$core$Native_Json.encodeList;
var _elm_lang$core$Json_Encode$array = _elm_lang$core$Native_Json.encodeArray;
var _elm_lang$core$Json_Encode$object = _elm_lang$core$Native_Json.encodeObject;
var _elm_lang$core$Json_Encode$null = _elm_lang$core$Native_Json.encodeNull;
var _elm_lang$core$Json_Encode$bool = _elm_lang$core$Native_Json.identity;
var _elm_lang$core$Json_Encode$float = _elm_lang$core$Native_Json.identity;
var _elm_lang$core$Json_Encode$int = _elm_lang$core$Native_Json.identity;
var _elm_lang$core$Json_Encode$string = _elm_lang$core$Native_Json.identity;
var _elm_lang$core$Json_Encode$encode = _elm_lang$core$Native_Json.encode;
var _elm_lang$core$Json_Encode$Value = {ctor: 'Value'};

var _elm_lang$core$Json_Decode$null = _elm_lang$core$Native_Json.decodeNull;
var _elm_lang$core$Json_Decode$value = _elm_lang$core$Native_Json.decodePrimitive('value');
var _elm_lang$core$Json_Decode$andThen = _elm_lang$core$Native_Json.andThen;
var _elm_lang$core$Json_Decode$fail = _elm_lang$core$Native_Json.fail;
var _elm_lang$core$Json_Decode$succeed = _elm_lang$core$Native_Json.succeed;
var _elm_lang$core$Json_Decode$lazy = function (thunk) {
	return A2(
		_elm_lang$core$Json_Decode$andThen,
		thunk,
		_elm_lang$core$Json_Decode$succeed(
			{ctor: '_Tuple0'}));
};
var _elm_lang$core$Json_Decode$decodeValue = _elm_lang$core$Native_Json.run;
var _elm_lang$core$Json_Decode$decodeString = _elm_lang$core$Native_Json.runOnString;
var _elm_lang$core$Json_Decode$map8 = _elm_lang$core$Native_Json.map8;
var _elm_lang$core$Json_Decode$map7 = _elm_lang$core$Native_Json.map7;
var _elm_lang$core$Json_Decode$map6 = _elm_lang$core$Native_Json.map6;
var _elm_lang$core$Json_Decode$map5 = _elm_lang$core$Native_Json.map5;
var _elm_lang$core$Json_Decode$map4 = _elm_lang$core$Native_Json.map4;
var _elm_lang$core$Json_Decode$map3 = _elm_lang$core$Native_Json.map3;
var _elm_lang$core$Json_Decode$map2 = _elm_lang$core$Native_Json.map2;
var _elm_lang$core$Json_Decode$map = _elm_lang$core$Native_Json.map1;
var _elm_lang$core$Json_Decode$oneOf = _elm_lang$core$Native_Json.oneOf;
var _elm_lang$core$Json_Decode$maybe = function (decoder) {
	return A2(_elm_lang$core$Native_Json.decodeContainer, 'maybe', decoder);
};
var _elm_lang$core$Json_Decode$index = _elm_lang$core$Native_Json.decodeIndex;
var _elm_lang$core$Json_Decode$field = _elm_lang$core$Native_Json.decodeField;
var _elm_lang$core$Json_Decode$at = F2(
	function (fields, decoder) {
		return A3(_elm_lang$core$List$foldr, _elm_lang$core$Json_Decode$field, decoder, fields);
	});
var _elm_lang$core$Json_Decode$keyValuePairs = _elm_lang$core$Native_Json.decodeKeyValuePairs;
var _elm_lang$core$Json_Decode$dict = function (decoder) {
	return A2(
		_elm_lang$core$Json_Decode$map,
		_elm_lang$core$Dict$fromList,
		_elm_lang$core$Json_Decode$keyValuePairs(decoder));
};
var _elm_lang$core$Json_Decode$array = function (decoder) {
	return A2(_elm_lang$core$Native_Json.decodeContainer, 'array', decoder);
};
var _elm_lang$core$Json_Decode$list = function (decoder) {
	return A2(_elm_lang$core$Native_Json.decodeContainer, 'list', decoder);
};
var _elm_lang$core$Json_Decode$nullable = function (decoder) {
	return _elm_lang$core$Json_Decode$oneOf(
		{
			ctor: '::',
			_0: _elm_lang$core$Json_Decode$null(_elm_lang$core$Maybe$Nothing),
			_1: {
				ctor: '::',
				_0: A2(_elm_lang$core$Json_Decode$map, _elm_lang$core$Maybe$Just, decoder),
				_1: {ctor: '[]'}
			}
		});
};
var _elm_lang$core$Json_Decode$float = _elm_lang$core$Native_Json.decodePrimitive('float');
var _elm_lang$core$Json_Decode$int = _elm_lang$core$Native_Json.decodePrimitive('int');
var _elm_lang$core$Json_Decode$bool = _elm_lang$core$Native_Json.decodePrimitive('bool');
var _elm_lang$core$Json_Decode$string = _elm_lang$core$Native_Json.decodePrimitive('string');
var _elm_lang$core$Json_Decode$Decoder = {ctor: 'Decoder'};

var _elm_lang$core$Process$kill = _elm_lang$core$Native_Scheduler.kill;
var _elm_lang$core$Process$sleep = _elm_lang$core$Native_Scheduler.sleep;
var _elm_lang$core$Process$spawn = _elm_lang$core$Native_Scheduler.spawn;

var _elm_lang$virtual_dom$VirtualDom_Debug$wrap;
var _elm_lang$virtual_dom$VirtualDom_Debug$wrapWithFlags;

var _elm_lang$virtual_dom$Native_VirtualDom = function() {

var STYLE_KEY = 'STYLE';
var EVENT_KEY = 'EVENT';
var ATTR_KEY = 'ATTR';
var ATTR_NS_KEY = 'ATTR_NS';

var localDoc = typeof document !== 'undefined' ? document : {};


////////////  VIRTUAL DOM NODES  ////////////


function text(string)
{
	return {
		type: 'text',
		text: string
	};
}


function node(tag)
{
	return F2(function(factList, kidList) {
		return nodeHelp(tag, factList, kidList);
	});
}


function nodeHelp(tag, factList, kidList)
{
	var organized = organizeFacts(factList);
	var namespace = organized.namespace;
	var facts = organized.facts;

	var children = [];
	var descendantsCount = 0;
	while (kidList.ctor !== '[]')
	{
		var kid = kidList._0;
		descendantsCount += (kid.descendantsCount || 0);
		children.push(kid);
		kidList = kidList._1;
	}
	descendantsCount += children.length;

	return {
		type: 'node',
		tag: tag,
		facts: facts,
		children: children,
		namespace: namespace,
		descendantsCount: descendantsCount
	};
}


function keyedNode(tag, factList, kidList)
{
	var organized = organizeFacts(factList);
	var namespace = organized.namespace;
	var facts = organized.facts;

	var children = [];
	var descendantsCount = 0;
	while (kidList.ctor !== '[]')
	{
		var kid = kidList._0;
		descendantsCount += (kid._1.descendantsCount || 0);
		children.push(kid);
		kidList = kidList._1;
	}
	descendantsCount += children.length;

	return {
		type: 'keyed-node',
		tag: tag,
		facts: facts,
		children: children,
		namespace: namespace,
		descendantsCount: descendantsCount
	};
}


function custom(factList, model, impl)
{
	var facts = organizeFacts(factList).facts;

	return {
		type: 'custom',
		facts: facts,
		model: model,
		impl: impl
	};
}


function map(tagger, node)
{
	return {
		type: 'tagger',
		tagger: tagger,
		node: node,
		descendantsCount: 1 + (node.descendantsCount || 0)
	};
}


function thunk(func, args, thunk)
{
	return {
		type: 'thunk',
		func: func,
		args: args,
		thunk: thunk,
		node: undefined
	};
}

function lazy(fn, a)
{
	return thunk(fn, [a], function() {
		return fn(a);
	});
}

function lazy2(fn, a, b)
{
	return thunk(fn, [a,b], function() {
		return A2(fn, a, b);
	});
}

function lazy3(fn, a, b, c)
{
	return thunk(fn, [a,b,c], function() {
		return A3(fn, a, b, c);
	});
}



// FACTS


function organizeFacts(factList)
{
	var namespace, facts = {};

	while (factList.ctor !== '[]')
	{
		var entry = factList._0;
		var key = entry.key;

		if (key === ATTR_KEY || key === ATTR_NS_KEY || key === EVENT_KEY)
		{
			var subFacts = facts[key] || {};
			subFacts[entry.realKey] = entry.value;
			facts[key] = subFacts;
		}
		else if (key === STYLE_KEY)
		{
			var styles = facts[key] || {};
			var styleList = entry.value;
			while (styleList.ctor !== '[]')
			{
				var style = styleList._0;
				styles[style._0] = style._1;
				styleList = styleList._1;
			}
			facts[key] = styles;
		}
		else if (key === 'namespace')
		{
			namespace = entry.value;
		}
		else if (key === 'className')
		{
			var classes = facts[key];
			facts[key] = typeof classes === 'undefined'
				? entry.value
				: classes + ' ' + entry.value;
		}
 		else
		{
			facts[key] = entry.value;
		}
		factList = factList._1;
	}

	return {
		facts: facts,
		namespace: namespace
	};
}



////////////  PROPERTIES AND ATTRIBUTES  ////////////


function style(value)
{
	return {
		key: STYLE_KEY,
		value: value
	};
}


function property(key, value)
{
	return {
		key: key,
		value: value
	};
}


function attribute(key, value)
{
	return {
		key: ATTR_KEY,
		realKey: key,
		value: value
	};
}


function attributeNS(namespace, key, value)
{
	return {
		key: ATTR_NS_KEY,
		realKey: key,
		value: {
			value: value,
			namespace: namespace
		}
	};
}


function on(name, options, decoder)
{
	return {
		key: EVENT_KEY,
		realKey: name,
		value: {
			options: options,
			decoder: decoder
		}
	};
}


function equalEvents(a, b)
{
	if (!a.options === b.options)
	{
		if (a.stopPropagation !== b.stopPropagation || a.preventDefault !== b.preventDefault)
		{
			return false;
		}
	}
	return _elm_lang$core$Native_Json.equality(a.decoder, b.decoder);
}


function mapProperty(func, property)
{
	if (property.key !== EVENT_KEY)
	{
		return property;
	}
	return on(
		property.realKey,
		property.value.options,
		A2(_elm_lang$core$Json_Decode$map, func, property.value.decoder)
	);
}


////////////  RENDER  ////////////


function render(vNode, eventNode)
{
	switch (vNode.type)
	{
		case 'thunk':
			if (!vNode.node)
			{
				vNode.node = vNode.thunk();
			}
			return render(vNode.node, eventNode);

		case 'tagger':
			var subNode = vNode.node;
			var tagger = vNode.tagger;

			while (subNode.type === 'tagger')
			{
				typeof tagger !== 'object'
					? tagger = [tagger, subNode.tagger]
					: tagger.push(subNode.tagger);

				subNode = subNode.node;
			}

			var subEventRoot = { tagger: tagger, parent: eventNode };
			var domNode = render(subNode, subEventRoot);
			domNode.elm_event_node_ref = subEventRoot;
			return domNode;

		case 'text':
			return localDoc.createTextNode(vNode.text);

		case 'node':
			var domNode = vNode.namespace
				? localDoc.createElementNS(vNode.namespace, vNode.tag)
				: localDoc.createElement(vNode.tag);

			applyFacts(domNode, eventNode, vNode.facts);

			var children = vNode.children;

			for (var i = 0; i < children.length; i++)
			{
				domNode.appendChild(render(children[i], eventNode));
			}

			return domNode;

		case 'keyed-node':
			var domNode = vNode.namespace
				? localDoc.createElementNS(vNode.namespace, vNode.tag)
				: localDoc.createElement(vNode.tag);

			applyFacts(domNode, eventNode, vNode.facts);

			var children = vNode.children;

			for (var i = 0; i < children.length; i++)
			{
				domNode.appendChild(render(children[i]._1, eventNode));
			}

			return domNode;

		case 'custom':
			var domNode = vNode.impl.render(vNode.model);
			applyFacts(domNode, eventNode, vNode.facts);
			return domNode;
	}
}



////////////  APPLY FACTS  ////////////


function applyFacts(domNode, eventNode, facts)
{
	for (var key in facts)
	{
		var value = facts[key];

		switch (key)
		{
			case STYLE_KEY:
				applyStyles(domNode, value);
				break;

			case EVENT_KEY:
				applyEvents(domNode, eventNode, value);
				break;

			case ATTR_KEY:
				applyAttrs(domNode, value);
				break;

			case ATTR_NS_KEY:
				applyAttrsNS(domNode, value);
				break;

			case 'value':
				if (domNode[key] !== value)
				{
					domNode[key] = value;
				}
				break;

			default:
				domNode[key] = value;
				break;
		}
	}
}

function applyStyles(domNode, styles)
{
	var domNodeStyle = domNode.style;

	for (var key in styles)
	{
		domNodeStyle[key] = styles[key];
	}
}

function applyEvents(domNode, eventNode, events)
{
	var allHandlers = domNode.elm_handlers || {};

	for (var key in events)
	{
		var handler = allHandlers[key];
		var value = events[key];

		if (typeof value === 'undefined')
		{
			domNode.removeEventListener(key, handler);
			allHandlers[key] = undefined;
		}
		else if (typeof handler === 'undefined')
		{
			var handler = makeEventHandler(eventNode, value);
			domNode.addEventListener(key, handler);
			allHandlers[key] = handler;
		}
		else
		{
			handler.info = value;
		}
	}

	domNode.elm_handlers = allHandlers;
}

function makeEventHandler(eventNode, info)
{
	function eventHandler(event)
	{
		var info = eventHandler.info;

		var value = A2(_elm_lang$core$Native_Json.run, info.decoder, event);

		if (value.ctor === 'Ok')
		{
			var options = info.options;
			if (options.stopPropagation)
			{
				event.stopPropagation();
			}
			if (options.preventDefault)
			{
				event.preventDefault();
			}

			var message = value._0;

			var currentEventNode = eventNode;
			while (currentEventNode)
			{
				var tagger = currentEventNode.tagger;
				if (typeof tagger === 'function')
				{
					message = tagger(message);
				}
				else
				{
					for (var i = tagger.length; i--; )
					{
						message = tagger[i](message);
					}
				}
				currentEventNode = currentEventNode.parent;
			}
		}
	};

	eventHandler.info = info;

	return eventHandler;
}

function applyAttrs(domNode, attrs)
{
	for (var key in attrs)
	{
		var value = attrs[key];
		if (typeof value === 'undefined')
		{
			domNode.removeAttribute(key);
		}
		else
		{
			domNode.setAttribute(key, value);
		}
	}
}

function applyAttrsNS(domNode, nsAttrs)
{
	for (var key in nsAttrs)
	{
		var pair = nsAttrs[key];
		var namespace = pair.namespace;
		var value = pair.value;

		if (typeof value === 'undefined')
		{
			domNode.removeAttributeNS(namespace, key);
		}
		else
		{
			domNode.setAttributeNS(namespace, key, value);
		}
	}
}



////////////  DIFF  ////////////


function diff(a, b)
{
	var patches = [];
	diffHelp(a, b, patches, 0);
	return patches;
}


function makePatch(type, index, data)
{
	return {
		index: index,
		type: type,
		data: data,
		domNode: undefined,
		eventNode: undefined
	};
}


function diffHelp(a, b, patches, index)
{
	if (a === b)
	{
		return;
	}

	var aType = a.type;
	var bType = b.type;

	// Bail if you run into different types of nodes. Implies that the
	// structure has changed significantly and it's not worth a diff.
	if (aType !== bType)
	{
		patches.push(makePatch('p-redraw', index, b));
		return;
	}

	// Now we know that both nodes are the same type.
	switch (bType)
	{
		case 'thunk':
			var aArgs = a.args;
			var bArgs = b.args;
			var i = aArgs.length;
			var same = a.func === b.func && i === bArgs.length;
			while (same && i--)
			{
				same = aArgs[i] === bArgs[i];
			}
			if (same)
			{
				b.node = a.node;
				return;
			}
			b.node = b.thunk();
			var subPatches = [];
			diffHelp(a.node, b.node, subPatches, 0);
			if (subPatches.length > 0)
			{
				patches.push(makePatch('p-thunk', index, subPatches));
			}
			return;

		case 'tagger':
			// gather nested taggers
			var aTaggers = a.tagger;
			var bTaggers = b.tagger;
			var nesting = false;

			var aSubNode = a.node;
			while (aSubNode.type === 'tagger')
			{
				nesting = true;

				typeof aTaggers !== 'object'
					? aTaggers = [aTaggers, aSubNode.tagger]
					: aTaggers.push(aSubNode.tagger);

				aSubNode = aSubNode.node;
			}

			var bSubNode = b.node;
			while (bSubNode.type === 'tagger')
			{
				nesting = true;

				typeof bTaggers !== 'object'
					? bTaggers = [bTaggers, bSubNode.tagger]
					: bTaggers.push(bSubNode.tagger);

				bSubNode = bSubNode.node;
			}

			// Just bail if different numbers of taggers. This implies the
			// structure of the virtual DOM has changed.
			if (nesting && aTaggers.length !== bTaggers.length)
			{
				patches.push(makePatch('p-redraw', index, b));
				return;
			}

			// check if taggers are "the same"
			if (nesting ? !pairwiseRefEqual(aTaggers, bTaggers) : aTaggers !== bTaggers)
			{
				patches.push(makePatch('p-tagger', index, bTaggers));
			}

			// diff everything below the taggers
			diffHelp(aSubNode, bSubNode, patches, index + 1);
			return;

		case 'text':
			if (a.text !== b.text)
			{
				patches.push(makePatch('p-text', index, b.text));
				return;
			}

			return;

		case 'node':
			// Bail if obvious indicators have changed. Implies more serious
			// structural changes such that it's not worth it to diff.
			if (a.tag !== b.tag || a.namespace !== b.namespace)
			{
				patches.push(makePatch('p-redraw', index, b));
				return;
			}

			var factsDiff = diffFacts(a.facts, b.facts);

			if (typeof factsDiff !== 'undefined')
			{
				patches.push(makePatch('p-facts', index, factsDiff));
			}

			diffChildren(a, b, patches, index);
			return;

		case 'keyed-node':
			// Bail if obvious indicators have changed. Implies more serious
			// structural changes such that it's not worth it to diff.
			if (a.tag !== b.tag || a.namespace !== b.namespace)
			{
				patches.push(makePatch('p-redraw', index, b));
				return;
			}

			var factsDiff = diffFacts(a.facts, b.facts);

			if (typeof factsDiff !== 'undefined')
			{
				patches.push(makePatch('p-facts', index, factsDiff));
			}

			diffKeyedChildren(a, b, patches, index);
			return;

		case 'custom':
			if (a.impl !== b.impl)
			{
				patches.push(makePatch('p-redraw', index, b));
				return;
			}

			var factsDiff = diffFacts(a.facts, b.facts);
			if (typeof factsDiff !== 'undefined')
			{
				patches.push(makePatch('p-facts', index, factsDiff));
			}

			var patch = b.impl.diff(a,b);
			if (patch)
			{
				patches.push(makePatch('p-custom', index, patch));
				return;
			}

			return;
	}
}


// assumes the incoming arrays are the same length
function pairwiseRefEqual(as, bs)
{
	for (var i = 0; i < as.length; i++)
	{
		if (as[i] !== bs[i])
		{
			return false;
		}
	}

	return true;
}


// TODO Instead of creating a new diff object, it's possible to just test if
// there *is* a diff. During the actual patch, do the diff again and make the
// modifications directly. This way, there's no new allocations. Worth it?
function diffFacts(a, b, category)
{
	var diff;

	// look for changes and removals
	for (var aKey in a)
	{
		if (aKey === STYLE_KEY || aKey === EVENT_KEY || aKey === ATTR_KEY || aKey === ATTR_NS_KEY)
		{
			var subDiff = diffFacts(a[aKey], b[aKey] || {}, aKey);
			if (subDiff)
			{
				diff = diff || {};
				diff[aKey] = subDiff;
			}
			continue;
		}

		// remove if not in the new facts
		if (!(aKey in b))
		{
			diff = diff || {};
			diff[aKey] =
				(typeof category === 'undefined')
					? (typeof a[aKey] === 'string' ? '' : null)
					:
				(category === STYLE_KEY)
					? ''
					:
				(category === EVENT_KEY || category === ATTR_KEY)
					? undefined
					:
				{ namespace: a[aKey].namespace, value: undefined };

			continue;
		}

		var aValue = a[aKey];
		var bValue = b[aKey];

		// reference equal, so don't worry about it
		if (aValue === bValue && aKey !== 'value'
			|| category === EVENT_KEY && equalEvents(aValue, bValue))
		{
			continue;
		}

		diff = diff || {};
		diff[aKey] = bValue;
	}

	// add new stuff
	for (var bKey in b)
	{
		if (!(bKey in a))
		{
			diff = diff || {};
			diff[bKey] = b[bKey];
		}
	}

	return diff;
}


function diffChildren(aParent, bParent, patches, rootIndex)
{
	var aChildren = aParent.children;
	var bChildren = bParent.children;

	var aLen = aChildren.length;
	var bLen = bChildren.length;

	// FIGURE OUT IF THERE ARE INSERTS OR REMOVALS

	if (aLen > bLen)
	{
		patches.push(makePatch('p-remove-last', rootIndex, aLen - bLen));
	}
	else if (aLen < bLen)
	{
		patches.push(makePatch('p-append', rootIndex, bChildren.slice(aLen)));
	}

	// PAIRWISE DIFF EVERYTHING ELSE

	var index = rootIndex;
	var minLen = aLen < bLen ? aLen : bLen;
	for (var i = 0; i < minLen; i++)
	{
		index++;
		var aChild = aChildren[i];
		diffHelp(aChild, bChildren[i], patches, index);
		index += aChild.descendantsCount || 0;
	}
}



////////////  KEYED DIFF  ////////////


function diffKeyedChildren(aParent, bParent, patches, rootIndex)
{
	var localPatches = [];

	var changes = {}; // Dict String Entry
	var inserts = []; // Array { index : Int, entry : Entry }
	// type Entry = { tag : String, vnode : VNode, index : Int, data : _ }

	var aChildren = aParent.children;
	var bChildren = bParent.children;
	var aLen = aChildren.length;
	var bLen = bChildren.length;
	var aIndex = 0;
	var bIndex = 0;

	var index = rootIndex;

	while (aIndex < aLen && bIndex < bLen)
	{
		var a = aChildren[aIndex];
		var b = bChildren[bIndex];

		var aKey = a._0;
		var bKey = b._0;
		var aNode = a._1;
		var bNode = b._1;

		// check if keys match

		if (aKey === bKey)
		{
			index++;
			diffHelp(aNode, bNode, localPatches, index);
			index += aNode.descendantsCount || 0;

			aIndex++;
			bIndex++;
			continue;
		}

		// look ahead 1 to detect insertions and removals.

		var aLookAhead = aIndex + 1 < aLen;
		var bLookAhead = bIndex + 1 < bLen;

		if (aLookAhead)
		{
			var aNext = aChildren[aIndex + 1];
			var aNextKey = aNext._0;
			var aNextNode = aNext._1;
			var oldMatch = bKey === aNextKey;
		}

		if (bLookAhead)
		{
			var bNext = bChildren[bIndex + 1];
			var bNextKey = bNext._0;
			var bNextNode = bNext._1;
			var newMatch = aKey === bNextKey;
		}


		// swap a and b
		if (aLookAhead && bLookAhead && newMatch && oldMatch)
		{
			index++;
			diffHelp(aNode, bNextNode, localPatches, index);
			insertNode(changes, localPatches, aKey, bNode, bIndex, inserts);
			index += aNode.descendantsCount || 0;

			index++;
			removeNode(changes, localPatches, aKey, aNextNode, index);
			index += aNextNode.descendantsCount || 0;

			aIndex += 2;
			bIndex += 2;
			continue;
		}

		// insert b
		if (bLookAhead && newMatch)
		{
			index++;
			insertNode(changes, localPatches, bKey, bNode, bIndex, inserts);
			diffHelp(aNode, bNextNode, localPatches, index);
			index += aNode.descendantsCount || 0;

			aIndex += 1;
			bIndex += 2;
			continue;
		}

		// remove a
		if (aLookAhead && oldMatch)
		{
			index++;
			removeNode(changes, localPatches, aKey, aNode, index);
			index += aNode.descendantsCount || 0;

			index++;
			diffHelp(aNextNode, bNode, localPatches, index);
			index += aNextNode.descendantsCount || 0;

			aIndex += 2;
			bIndex += 1;
			continue;
		}

		// remove a, insert b
		if (aLookAhead && bLookAhead && aNextKey === bNextKey)
		{
			index++;
			removeNode(changes, localPatches, aKey, aNode, index);
			insertNode(changes, localPatches, bKey, bNode, bIndex, inserts);
			index += aNode.descendantsCount || 0;

			index++;
			diffHelp(aNextNode, bNextNode, localPatches, index);
			index += aNextNode.descendantsCount || 0;

			aIndex += 2;
			bIndex += 2;
			continue;
		}

		break;
	}

	// eat up any remaining nodes with removeNode and insertNode

	while (aIndex < aLen)
	{
		index++;
		var a = aChildren[aIndex];
		var aNode = a._1;
		removeNode(changes, localPatches, a._0, aNode, index);
		index += aNode.descendantsCount || 0;
		aIndex++;
	}

	var endInserts;
	while (bIndex < bLen)
	{
		endInserts = endInserts || [];
		var b = bChildren[bIndex];
		insertNode(changes, localPatches, b._0, b._1, undefined, endInserts);
		bIndex++;
	}

	if (localPatches.length > 0 || inserts.length > 0 || typeof endInserts !== 'undefined')
	{
		patches.push(makePatch('p-reorder', rootIndex, {
			patches: localPatches,
			inserts: inserts,
			endInserts: endInserts
		}));
	}
}



////////////  CHANGES FROM KEYED DIFF  ////////////


var POSTFIX = '_elmW6BL';


function insertNode(changes, localPatches, key, vnode, bIndex, inserts)
{
	var entry = changes[key];

	// never seen this key before
	if (typeof entry === 'undefined')
	{
		entry = {
			tag: 'insert',
			vnode: vnode,
			index: bIndex,
			data: undefined
		};

		inserts.push({ index: bIndex, entry: entry });
		changes[key] = entry;

		return;
	}

	// this key was removed earlier, a match!
	if (entry.tag === 'remove')
	{
		inserts.push({ index: bIndex, entry: entry });

		entry.tag = 'move';
		var subPatches = [];
		diffHelp(entry.vnode, vnode, subPatches, entry.index);
		entry.index = bIndex;
		entry.data.data = {
			patches: subPatches,
			entry: entry
		};

		return;
	}

	// this key has already been inserted or moved, a duplicate!
	insertNode(changes, localPatches, key + POSTFIX, vnode, bIndex, inserts);
}


function removeNode(changes, localPatches, key, vnode, index)
{
	var entry = changes[key];

	// never seen this key before
	if (typeof entry === 'undefined')
	{
		var patch = makePatch('p-remove', index, undefined);
		localPatches.push(patch);

		changes[key] = {
			tag: 'remove',
			vnode: vnode,
			index: index,
			data: patch
		};

		return;
	}

	// this key was inserted earlier, a match!
	if (entry.tag === 'insert')
	{
		entry.tag = 'move';
		var subPatches = [];
		diffHelp(vnode, entry.vnode, subPatches, index);

		var patch = makePatch('p-remove', index, {
			patches: subPatches,
			entry: entry
		});
		localPatches.push(patch);

		return;
	}

	// this key has already been removed or moved, a duplicate!
	removeNode(changes, localPatches, key + POSTFIX, vnode, index);
}



////////////  ADD DOM NODES  ////////////
//
// Each DOM node has an "index" assigned in order of traversal. It is important
// to minimize our crawl over the actual DOM, so these indexes (along with the
// descendantsCount of virtual nodes) let us skip touching entire subtrees of
// the DOM if we know there are no patches there.


function addDomNodes(domNode, vNode, patches, eventNode)
{
	addDomNodesHelp(domNode, vNode, patches, 0, 0, vNode.descendantsCount, eventNode);
}


// assumes `patches` is non-empty and indexes increase monotonically.
function addDomNodesHelp(domNode, vNode, patches, i, low, high, eventNode)
{
	var patch = patches[i];
	var index = patch.index;

	while (index === low)
	{
		var patchType = patch.type;

		if (patchType === 'p-thunk')
		{
			addDomNodes(domNode, vNode.node, patch.data, eventNode);
		}
		else if (patchType === 'p-reorder')
		{
			patch.domNode = domNode;
			patch.eventNode = eventNode;

			var subPatches = patch.data.patches;
			if (subPatches.length > 0)
			{
				addDomNodesHelp(domNode, vNode, subPatches, 0, low, high, eventNode);
			}
		}
		else if (patchType === 'p-remove')
		{
			patch.domNode = domNode;
			patch.eventNode = eventNode;

			var data = patch.data;
			if (typeof data !== 'undefined')
			{
				data.entry.data = domNode;
				var subPatches = data.patches;
				if (subPatches.length > 0)
				{
					addDomNodesHelp(domNode, vNode, subPatches, 0, low, high, eventNode);
				}
			}
		}
		else
		{
			patch.domNode = domNode;
			patch.eventNode = eventNode;
		}

		i++;

		if (!(patch = patches[i]) || (index = patch.index) > high)
		{
			return i;
		}
	}

	switch (vNode.type)
	{
		case 'tagger':
			var subNode = vNode.node;

			while (subNode.type === "tagger")
			{
				subNode = subNode.node;
			}

			return addDomNodesHelp(domNode, subNode, patches, i, low + 1, high, domNode.elm_event_node_ref);

		case 'node':
			var vChildren = vNode.children;
			var childNodes = domNode.childNodes;
			for (var j = 0; j < vChildren.length; j++)
			{
				low++;
				var vChild = vChildren[j];
				var nextLow = low + (vChild.descendantsCount || 0);
				if (low <= index && index <= nextLow)
				{
					i = addDomNodesHelp(childNodes[j], vChild, patches, i, low, nextLow, eventNode);
					if (!(patch = patches[i]) || (index = patch.index) > high)
					{
						return i;
					}
				}
				low = nextLow;
			}
			return i;

		case 'keyed-node':
			var vChildren = vNode.children;
			var childNodes = domNode.childNodes;
			for (var j = 0; j < vChildren.length; j++)
			{
				low++;
				var vChild = vChildren[j]._1;
				var nextLow = low + (vChild.descendantsCount || 0);
				if (low <= index && index <= nextLow)
				{
					i = addDomNodesHelp(childNodes[j], vChild, patches, i, low, nextLow, eventNode);
					if (!(patch = patches[i]) || (index = patch.index) > high)
					{
						return i;
					}
				}
				low = nextLow;
			}
			return i;

		case 'text':
		case 'thunk':
			throw new Error('should never traverse `text` or `thunk` nodes like this');
	}
}



////////////  APPLY PATCHES  ////////////


function applyPatches(rootDomNode, oldVirtualNode, patches, eventNode)
{
	if (patches.length === 0)
	{
		return rootDomNode;
	}

	addDomNodes(rootDomNode, oldVirtualNode, patches, eventNode);
	return applyPatchesHelp(rootDomNode, patches);
}

function applyPatchesHelp(rootDomNode, patches)
{
	for (var i = 0; i < patches.length; i++)
	{
		var patch = patches[i];
		var localDomNode = patch.domNode
		var newNode = applyPatch(localDomNode, patch);
		if (localDomNode === rootDomNode)
		{
			rootDomNode = newNode;
		}
	}
	return rootDomNode;
}

function applyPatch(domNode, patch)
{
	switch (patch.type)
	{
		case 'p-redraw':
			return applyPatchRedraw(domNode, patch.data, patch.eventNode);

		case 'p-facts':
			applyFacts(domNode, patch.eventNode, patch.data);
			return domNode;

		case 'p-text':
			domNode.replaceData(0, domNode.length, patch.data);
			return domNode;

		case 'p-thunk':
			return applyPatchesHelp(domNode, patch.data);

		case 'p-tagger':
			if (typeof domNode.elm_event_node_ref !== 'undefined')
			{
				domNode.elm_event_node_ref.tagger = patch.data;
			}
			else
			{
				domNode.elm_event_node_ref = { tagger: patch.data, parent: patch.eventNode };
			}
			return domNode;

		case 'p-remove-last':
			var i = patch.data;
			while (i--)
			{
				domNode.removeChild(domNode.lastChild);
			}
			return domNode;

		case 'p-append':
			var newNodes = patch.data;
			for (var i = 0; i < newNodes.length; i++)
			{
				domNode.appendChild(render(newNodes[i], patch.eventNode));
			}
			return domNode;

		case 'p-remove':
			var data = patch.data;
			if (typeof data === 'undefined')
			{
				domNode.parentNode.removeChild(domNode);
				return domNode;
			}
			var entry = data.entry;
			if (typeof entry.index !== 'undefined')
			{
				domNode.parentNode.removeChild(domNode);
			}
			entry.data = applyPatchesHelp(domNode, data.patches);
			return domNode;

		case 'p-reorder':
			return applyPatchReorder(domNode, patch);

		case 'p-custom':
			var impl = patch.data;
			return impl.applyPatch(domNode, impl.data);

		default:
			throw new Error('Ran into an unknown patch!');
	}
}


function applyPatchRedraw(domNode, vNode, eventNode)
{
	var parentNode = domNode.parentNode;
	var newNode = render(vNode, eventNode);

	if (typeof newNode.elm_event_node_ref === 'undefined')
	{
		newNode.elm_event_node_ref = domNode.elm_event_node_ref;
	}

	if (parentNode && newNode !== domNode)
	{
		parentNode.replaceChild(newNode, domNode);
	}
	return newNode;
}


function applyPatchReorder(domNode, patch)
{
	var data = patch.data;

	// remove end inserts
	var frag = applyPatchReorderEndInsertsHelp(data.endInserts, patch);

	// removals
	domNode = applyPatchesHelp(domNode, data.patches);

	// inserts
	var inserts = data.inserts;
	for (var i = 0; i < inserts.length; i++)
	{
		var insert = inserts[i];
		var entry = insert.entry;
		var node = entry.tag === 'move'
			? entry.data
			: render(entry.vnode, patch.eventNode);
		domNode.insertBefore(node, domNode.childNodes[insert.index]);
	}

	// add end inserts
	if (typeof frag !== 'undefined')
	{
		domNode.appendChild(frag);
	}

	return domNode;
}


function applyPatchReorderEndInsertsHelp(endInserts, patch)
{
	if (typeof endInserts === 'undefined')
	{
		return;
	}

	var frag = localDoc.createDocumentFragment();
	for (var i = 0; i < endInserts.length; i++)
	{
		var insert = endInserts[i];
		var entry = insert.entry;
		frag.appendChild(entry.tag === 'move'
			? entry.data
			: render(entry.vnode, patch.eventNode)
		);
	}
	return frag;
}


// PROGRAMS

var program = makeProgram(checkNoFlags);
var programWithFlags = makeProgram(checkYesFlags);

function makeProgram(flagChecker)
{
	return F2(function(debugWrap, impl)
	{
		return function(flagDecoder)
		{
			return function(object, moduleName, debugMetadata)
			{
				var checker = flagChecker(flagDecoder, moduleName);
				if (typeof debugMetadata === 'undefined')
				{
					normalSetup(impl, object, moduleName, checker);
				}
				else
				{
					debugSetup(A2(debugWrap, debugMetadata, impl), object, moduleName, checker);
				}
			};
		};
	});
}

function staticProgram(vNode)
{
	var nothing = _elm_lang$core$Native_Utils.Tuple2(
		_elm_lang$core$Native_Utils.Tuple0,
		_elm_lang$core$Platform_Cmd$none
	);
	return A2(program, _elm_lang$virtual_dom$VirtualDom_Debug$wrap, {
		init: nothing,
		view: function() { return vNode; },
		update: F2(function() { return nothing; }),
		subscriptions: function() { return _elm_lang$core$Platform_Sub$none; }
	})();
}


// FLAG CHECKERS

function checkNoFlags(flagDecoder, moduleName)
{
	return function(init, flags, domNode)
	{
		if (typeof flags === 'undefined')
		{
			return init;
		}

		var errorMessage =
			'The `' + moduleName + '` module does not need flags.\n'
			+ 'Initialize it with no arguments and you should be all set!';

		crash(errorMessage, domNode);
	};
}

function checkYesFlags(flagDecoder, moduleName)
{
	return function(init, flags, domNode)
	{
		if (typeof flagDecoder === 'undefined')
		{
			var errorMessage =
				'Are you trying to sneak a Never value into Elm? Trickster!\n'
				+ 'It looks like ' + moduleName + '.main is defined with `programWithFlags` but has type `Program Never`.\n'
				+ 'Use `program` instead if you do not want flags.'

			crash(errorMessage, domNode);
		}

		var result = A2(_elm_lang$core$Native_Json.run, flagDecoder, flags);
		if (result.ctor === 'Ok')
		{
			return init(result._0);
		}

		var errorMessage =
			'Trying to initialize the `' + moduleName + '` module with an unexpected flag.\n'
			+ 'I tried to convert it to an Elm value, but ran into this problem:\n\n'
			+ result._0;

		crash(errorMessage, domNode);
	};
}

function crash(errorMessage, domNode)
{
	if (domNode)
	{
		domNode.innerHTML =
			'<div style="padding-left:1em;">'
			+ '<h2 style="font-weight:normal;"><b>Oops!</b> Something went wrong when starting your Elm program.</h2>'
			+ '<pre style="padding-left:1em;">' + errorMessage + '</pre>'
			+ '</div>';
	}

	throw new Error(errorMessage);
}


//  NORMAL SETUP

function normalSetup(impl, object, moduleName, flagChecker)
{
	object['embed'] = function embed(node, flags)
	{
		while (node.lastChild)
		{
			node.removeChild(node.lastChild);
		}

		return _elm_lang$core$Native_Platform.initialize(
			flagChecker(impl.init, flags, node),
			impl.update,
			impl.subscriptions,
			normalRenderer(node, impl.view)
		);
	};

	object['fullscreen'] = function fullscreen(flags)
	{
		return _elm_lang$core$Native_Platform.initialize(
			flagChecker(impl.init, flags, document.body),
			impl.update,
			impl.subscriptions,
			normalRenderer(document.body, impl.view)
		);
	};
}

function normalRenderer(parentNode, view)
{
	return function(tagger, initialModel)
	{
		var eventNode = { tagger: tagger, parent: undefined };
		var initialVirtualNode = view(initialModel);
		var domNode = render(initialVirtualNode, eventNode);
		parentNode.appendChild(domNode);
		return makeStepper(domNode, view, initialVirtualNode, eventNode);
	};
}


// STEPPER

var rAF =
	typeof requestAnimationFrame !== 'undefined'
		? requestAnimationFrame
		: function(callback) { callback(); };

function makeStepper(domNode, view, initialVirtualNode, eventNode)
{
	var state = 'NO_REQUEST';
	var currNode = initialVirtualNode;
	var nextModel;

	function updateIfNeeded()
	{
		switch (state)
		{
			case 'NO_REQUEST':
				throw new Error(
					'Unexpected draw callback.\n' +
					'Please report this to <https://github.com/elm-lang/virtual-dom/issues>.'
				);

			case 'PENDING_REQUEST':
				rAF(updateIfNeeded);
				state = 'EXTRA_REQUEST';

				var nextNode = view(nextModel);
				var patches = diff(currNode, nextNode);
				domNode = applyPatches(domNode, currNode, patches, eventNode);
				currNode = nextNode;

				return;

			case 'EXTRA_REQUEST':
				state = 'NO_REQUEST';
				return;
		}
	}

	return function stepper(model)
	{
		if (state === 'NO_REQUEST')
		{
			rAF(updateIfNeeded);
		}
		state = 'PENDING_REQUEST';
		nextModel = model;
	};
}


// DEBUG SETUP

function debugSetup(impl, object, moduleName, flagChecker)
{
	object['fullscreen'] = function fullscreen(flags)
	{
		var popoutRef = { doc: undefined };
		return _elm_lang$core$Native_Platform.initialize(
			flagChecker(impl.init, flags, document.body),
			impl.update(scrollTask(popoutRef)),
			impl.subscriptions,
			debugRenderer(moduleName, document.body, popoutRef, impl.view, impl.viewIn, impl.viewOut)
		);
	};

	object['embed'] = function fullscreen(node, flags)
	{
		var popoutRef = { doc: undefined };
		return _elm_lang$core$Native_Platform.initialize(
			flagChecker(impl.init, flags, node),
			impl.update(scrollTask(popoutRef)),
			impl.subscriptions,
			debugRenderer(moduleName, node, popoutRef, impl.view, impl.viewIn, impl.viewOut)
		);
	};
}

function scrollTask(popoutRef)
{
	return _elm_lang$core$Native_Scheduler.nativeBinding(function(callback)
	{
		var doc = popoutRef.doc;
		if (doc)
		{
			var msgs = doc.getElementsByClassName('debugger-sidebar-messages')[0];
			if (msgs)
			{
				msgs.scrollTop = msgs.scrollHeight;
			}
		}
		callback(_elm_lang$core$Native_Scheduler.succeed(_elm_lang$core$Native_Utils.Tuple0));
	});
}


function debugRenderer(moduleName, parentNode, popoutRef, view, viewIn, viewOut)
{
	return function(tagger, initialModel)
	{
		var appEventNode = { tagger: tagger, parent: undefined };
		var eventNode = { tagger: tagger, parent: undefined };

		// make normal stepper
		var appVirtualNode = view(initialModel);
		var appNode = render(appVirtualNode, appEventNode);
		parentNode.appendChild(appNode);
		var appStepper = makeStepper(appNode, view, appVirtualNode, appEventNode);

		// make overlay stepper
		var overVirtualNode = viewIn(initialModel)._1;
		var overNode = render(overVirtualNode, eventNode);
		parentNode.appendChild(overNode);
		var wrappedViewIn = wrapViewIn(appEventNode, overNode, viewIn);
		var overStepper = makeStepper(overNode, wrappedViewIn, overVirtualNode, eventNode);

		// make debugger stepper
		var debugStepper = makeDebugStepper(initialModel, viewOut, eventNode, parentNode, moduleName, popoutRef);

		return function stepper(model)
		{
			appStepper(model);
			overStepper(model);
			debugStepper(model);
		}
	};
}

function makeDebugStepper(initialModel, view, eventNode, parentNode, moduleName, popoutRef)
{
	var curr;
	var domNode;

	return function stepper(model)
	{
		if (!model.isDebuggerOpen)
		{
			return;
		}

		if (!popoutRef.doc)
		{
			curr = view(model);
			domNode = openDebugWindow(moduleName, popoutRef, curr, eventNode);
			return;
		}

		// switch to document of popout
		localDoc = popoutRef.doc;

		var next = view(model);
		var patches = diff(curr, next);
		domNode = applyPatches(domNode, curr, patches, eventNode);
		curr = next;

		// switch back to normal document
		localDoc = document;
	};
}

function openDebugWindow(moduleName, popoutRef, virtualNode, eventNode)
{
	var w = 900;
	var h = 360;
	var x = screen.width - w;
	var y = screen.height - h;
	var debugWindow = window.open('', '', 'width=' + w + ',height=' + h + ',left=' + x + ',top=' + y);

	// switch to window document
	localDoc = debugWindow.document;

	popoutRef.doc = localDoc;
	localDoc.title = 'Debugger - ' + moduleName;
	localDoc.body.style.margin = '0';
	localDoc.body.style.padding = '0';
	var domNode = render(virtualNode, eventNode);
	localDoc.body.appendChild(domNode);

	localDoc.addEventListener('keydown', function(event) {
		if (event.metaKey && event.which === 82)
		{
			window.location.reload();
		}
		if (event.which === 38)
		{
			eventNode.tagger({ ctor: 'Up' });
			event.preventDefault();
		}
		if (event.which === 40)
		{
			eventNode.tagger({ ctor: 'Down' });
			event.preventDefault();
		}
	});

	function close()
	{
		popoutRef.doc = undefined;
		debugWindow.close();
	}
	window.addEventListener('unload', close);
	debugWindow.addEventListener('unload', function() {
		popoutRef.doc = undefined;
		window.removeEventListener('unload', close);
		eventNode.tagger({ ctor: 'Close' });
	});

	// switch back to the normal document
	localDoc = document;

	return domNode;
}


// BLOCK EVENTS

function wrapViewIn(appEventNode, overlayNode, viewIn)
{
	var ignorer = makeIgnorer(overlayNode);
	var blocking = 'Normal';
	var overflow;

	var normalTagger = appEventNode.tagger;
	var blockTagger = function() {};

	return function(model)
	{
		var tuple = viewIn(model);
		var newBlocking = tuple._0.ctor;
		appEventNode.tagger = newBlocking === 'Normal' ? normalTagger : blockTagger;
		if (blocking !== newBlocking)
		{
			traverse('removeEventListener', ignorer, blocking);
			traverse('addEventListener', ignorer, newBlocking);

			if (blocking === 'Normal')
			{
				overflow = document.body.style.overflow;
				document.body.style.overflow = 'hidden';
			}

			if (newBlocking === 'Normal')
			{
				document.body.style.overflow = overflow;
			}

			blocking = newBlocking;
		}
		return tuple._1;
	}
}

function traverse(verbEventListener, ignorer, blocking)
{
	switch(blocking)
	{
		case 'Normal':
			return;

		case 'Pause':
			return traverseHelp(verbEventListener, ignorer, mostEvents);

		case 'Message':
			return traverseHelp(verbEventListener, ignorer, allEvents);
	}
}

function traverseHelp(verbEventListener, handler, eventNames)
{
	for (var i = 0; i < eventNames.length; i++)
	{
		document.body[verbEventListener](eventNames[i], handler, true);
	}
}

function makeIgnorer(overlayNode)
{
	return function(event)
	{
		if (event.type === 'keydown' && event.metaKey && event.which === 82)
		{
			return;
		}

		var isScroll = event.type === 'scroll' || event.type === 'wheel';

		var node = event.target;
		while (node !== null)
		{
			if (node.className === 'elm-overlay-message-details' && isScroll)
			{
				return;
			}

			if (node === overlayNode && !isScroll)
			{
				return;
			}
			node = node.parentNode;
		}

		event.stopPropagation();
		event.preventDefault();
	}
}

var mostEvents = [
	'click', 'dblclick', 'mousemove',
	'mouseup', 'mousedown', 'mouseenter', 'mouseleave',
	'touchstart', 'touchend', 'touchcancel', 'touchmove',
	'pointerdown', 'pointerup', 'pointerover', 'pointerout',
	'pointerenter', 'pointerleave', 'pointermove', 'pointercancel',
	'dragstart', 'drag', 'dragend', 'dragenter', 'dragover', 'dragleave', 'drop',
	'keyup', 'keydown', 'keypress',
	'input', 'change',
	'focus', 'blur'
];

var allEvents = mostEvents.concat('wheel', 'scroll');


return {
	node: node,
	text: text,
	custom: custom,
	map: F2(map),

	on: F3(on),
	style: style,
	property: F2(property),
	attribute: F2(attribute),
	attributeNS: F3(attributeNS),
	mapProperty: F2(mapProperty),

	lazy: F2(lazy),
	lazy2: F3(lazy2),
	lazy3: F4(lazy3),
	keyedNode: F3(keyedNode),

	program: program,
	programWithFlags: programWithFlags,
	staticProgram: staticProgram
};

}();

var _elm_lang$virtual_dom$VirtualDom$programWithFlags = function (impl) {
	return A2(_elm_lang$virtual_dom$Native_VirtualDom.programWithFlags, _elm_lang$virtual_dom$VirtualDom_Debug$wrapWithFlags, impl);
};
var _elm_lang$virtual_dom$VirtualDom$program = function (impl) {
	return A2(_elm_lang$virtual_dom$Native_VirtualDom.program, _elm_lang$virtual_dom$VirtualDom_Debug$wrap, impl);
};
var _elm_lang$virtual_dom$VirtualDom$keyedNode = _elm_lang$virtual_dom$Native_VirtualDom.keyedNode;
var _elm_lang$virtual_dom$VirtualDom$lazy3 = _elm_lang$virtual_dom$Native_VirtualDom.lazy3;
var _elm_lang$virtual_dom$VirtualDom$lazy2 = _elm_lang$virtual_dom$Native_VirtualDom.lazy2;
var _elm_lang$virtual_dom$VirtualDom$lazy = _elm_lang$virtual_dom$Native_VirtualDom.lazy;
var _elm_lang$virtual_dom$VirtualDom$defaultOptions = {stopPropagation: false, preventDefault: false};
var _elm_lang$virtual_dom$VirtualDom$onWithOptions = _elm_lang$virtual_dom$Native_VirtualDom.on;
var _elm_lang$virtual_dom$VirtualDom$on = F2(
	function (eventName, decoder) {
		return A3(_elm_lang$virtual_dom$VirtualDom$onWithOptions, eventName, _elm_lang$virtual_dom$VirtualDom$defaultOptions, decoder);
	});
var _elm_lang$virtual_dom$VirtualDom$style = _elm_lang$virtual_dom$Native_VirtualDom.style;
var _elm_lang$virtual_dom$VirtualDom$mapProperty = _elm_lang$virtual_dom$Native_VirtualDom.mapProperty;
var _elm_lang$virtual_dom$VirtualDom$attributeNS = _elm_lang$virtual_dom$Native_VirtualDom.attributeNS;
var _elm_lang$virtual_dom$VirtualDom$attribute = _elm_lang$virtual_dom$Native_VirtualDom.attribute;
var _elm_lang$virtual_dom$VirtualDom$property = _elm_lang$virtual_dom$Native_VirtualDom.property;
var _elm_lang$virtual_dom$VirtualDom$map = _elm_lang$virtual_dom$Native_VirtualDom.map;
var _elm_lang$virtual_dom$VirtualDom$text = _elm_lang$virtual_dom$Native_VirtualDom.text;
var _elm_lang$virtual_dom$VirtualDom$node = _elm_lang$virtual_dom$Native_VirtualDom.node;
var _elm_lang$virtual_dom$VirtualDom$Options = F2(
	function (a, b) {
		return {stopPropagation: a, preventDefault: b};
	});
var _elm_lang$virtual_dom$VirtualDom$Node = {ctor: 'Node'};
var _elm_lang$virtual_dom$VirtualDom$Property = {ctor: 'Property'};

var _elm_lang$html$Html$programWithFlags = _elm_lang$virtual_dom$VirtualDom$programWithFlags;
var _elm_lang$html$Html$program = _elm_lang$virtual_dom$VirtualDom$program;
var _elm_lang$html$Html$beginnerProgram = function (_p0) {
	var _p1 = _p0;
	return _elm_lang$html$Html$program(
		{
			init: A2(
				_elm_lang$core$Platform_Cmd_ops['!'],
				_p1.model,
				{ctor: '[]'}),
			update: F2(
				function (msg, model) {
					return A2(
						_elm_lang$core$Platform_Cmd_ops['!'],
						A2(_p1.update, msg, model),
						{ctor: '[]'});
				}),
			view: _p1.view,
			subscriptions: function (_p2) {
				return _elm_lang$core$Platform_Sub$none;
			}
		});
};
var _elm_lang$html$Html$map = _elm_lang$virtual_dom$VirtualDom$map;
var _elm_lang$html$Html$text = _elm_lang$virtual_dom$VirtualDom$text;
var _elm_lang$html$Html$node = _elm_lang$virtual_dom$VirtualDom$node;
var _elm_lang$html$Html$body = _elm_lang$html$Html$node('body');
var _elm_lang$html$Html$section = _elm_lang$html$Html$node('section');
var _elm_lang$html$Html$nav = _elm_lang$html$Html$node('nav');
var _elm_lang$html$Html$article = _elm_lang$html$Html$node('article');
var _elm_lang$html$Html$aside = _elm_lang$html$Html$node('aside');
var _elm_lang$html$Html$h1 = _elm_lang$html$Html$node('h1');
var _elm_lang$html$Html$h2 = _elm_lang$html$Html$node('h2');
var _elm_lang$html$Html$h3 = _elm_lang$html$Html$node('h3');
var _elm_lang$html$Html$h4 = _elm_lang$html$Html$node('h4');
var _elm_lang$html$Html$h5 = _elm_lang$html$Html$node('h5');
var _elm_lang$html$Html$h6 = _elm_lang$html$Html$node('h6');
var _elm_lang$html$Html$header = _elm_lang$html$Html$node('header');
var _elm_lang$html$Html$footer = _elm_lang$html$Html$node('footer');
var _elm_lang$html$Html$address = _elm_lang$html$Html$node('address');
var _elm_lang$html$Html$main_ = _elm_lang$html$Html$node('main');
var _elm_lang$html$Html$p = _elm_lang$html$Html$node('p');
var _elm_lang$html$Html$hr = _elm_lang$html$Html$node('hr');
var _elm_lang$html$Html$pre = _elm_lang$html$Html$node('pre');
var _elm_lang$html$Html$blockquote = _elm_lang$html$Html$node('blockquote');
var _elm_lang$html$Html$ol = _elm_lang$html$Html$node('ol');
var _elm_lang$html$Html$ul = _elm_lang$html$Html$node('ul');
var _elm_lang$html$Html$li = _elm_lang$html$Html$node('li');
var _elm_lang$html$Html$dl = _elm_lang$html$Html$node('dl');
var _elm_lang$html$Html$dt = _elm_lang$html$Html$node('dt');
var _elm_lang$html$Html$dd = _elm_lang$html$Html$node('dd');
var _elm_lang$html$Html$figure = _elm_lang$html$Html$node('figure');
var _elm_lang$html$Html$figcaption = _elm_lang$html$Html$node('figcaption');
var _elm_lang$html$Html$div = _elm_lang$html$Html$node('div');
var _elm_lang$html$Html$a = _elm_lang$html$Html$node('a');
var _elm_lang$html$Html$em = _elm_lang$html$Html$node('em');
var _elm_lang$html$Html$strong = _elm_lang$html$Html$node('strong');
var _elm_lang$html$Html$small = _elm_lang$html$Html$node('small');
var _elm_lang$html$Html$s = _elm_lang$html$Html$node('s');
var _elm_lang$html$Html$cite = _elm_lang$html$Html$node('cite');
var _elm_lang$html$Html$q = _elm_lang$html$Html$node('q');
var _elm_lang$html$Html$dfn = _elm_lang$html$Html$node('dfn');
var _elm_lang$html$Html$abbr = _elm_lang$html$Html$node('abbr');
var _elm_lang$html$Html$time = _elm_lang$html$Html$node('time');
var _elm_lang$html$Html$code = _elm_lang$html$Html$node('code');
var _elm_lang$html$Html$var = _elm_lang$html$Html$node('var');
var _elm_lang$html$Html$samp = _elm_lang$html$Html$node('samp');
var _elm_lang$html$Html$kbd = _elm_lang$html$Html$node('kbd');
var _elm_lang$html$Html$sub = _elm_lang$html$Html$node('sub');
var _elm_lang$html$Html$sup = _elm_lang$html$Html$node('sup');
var _elm_lang$html$Html$i = _elm_lang$html$Html$node('i');
var _elm_lang$html$Html$b = _elm_lang$html$Html$node('b');
var _elm_lang$html$Html$u = _elm_lang$html$Html$node('u');
var _elm_lang$html$Html$mark = _elm_lang$html$Html$node('mark');
var _elm_lang$html$Html$ruby = _elm_lang$html$Html$node('ruby');
var _elm_lang$html$Html$rt = _elm_lang$html$Html$node('rt');
var _elm_lang$html$Html$rp = _elm_lang$html$Html$node('rp');
var _elm_lang$html$Html$bdi = _elm_lang$html$Html$node('bdi');
var _elm_lang$html$Html$bdo = _elm_lang$html$Html$node('bdo');
var _elm_lang$html$Html$span = _elm_lang$html$Html$node('span');
var _elm_lang$html$Html$br = _elm_lang$html$Html$node('br');
var _elm_lang$html$Html$wbr = _elm_lang$html$Html$node('wbr');
var _elm_lang$html$Html$ins = _elm_lang$html$Html$node('ins');
var _elm_lang$html$Html$del = _elm_lang$html$Html$node('del');
var _elm_lang$html$Html$img = _elm_lang$html$Html$node('img');
var _elm_lang$html$Html$iframe = _elm_lang$html$Html$node('iframe');
var _elm_lang$html$Html$embed = _elm_lang$html$Html$node('embed');
var _elm_lang$html$Html$object = _elm_lang$html$Html$node('object');
var _elm_lang$html$Html$param = _elm_lang$html$Html$node('param');
var _elm_lang$html$Html$video = _elm_lang$html$Html$node('video');
var _elm_lang$html$Html$audio = _elm_lang$html$Html$node('audio');
var _elm_lang$html$Html$source = _elm_lang$html$Html$node('source');
var _elm_lang$html$Html$track = _elm_lang$html$Html$node('track');
var _elm_lang$html$Html$canvas = _elm_lang$html$Html$node('canvas');
var _elm_lang$html$Html$math = _elm_lang$html$Html$node('math');
var _elm_lang$html$Html$table = _elm_lang$html$Html$node('table');
var _elm_lang$html$Html$caption = _elm_lang$html$Html$node('caption');
var _elm_lang$html$Html$colgroup = _elm_lang$html$Html$node('colgroup');
var _elm_lang$html$Html$col = _elm_lang$html$Html$node('col');
var _elm_lang$html$Html$tbody = _elm_lang$html$Html$node('tbody');
var _elm_lang$html$Html$thead = _elm_lang$html$Html$node('thead');
var _elm_lang$html$Html$tfoot = _elm_lang$html$Html$node('tfoot');
var _elm_lang$html$Html$tr = _elm_lang$html$Html$node('tr');
var _elm_lang$html$Html$td = _elm_lang$html$Html$node('td');
var _elm_lang$html$Html$th = _elm_lang$html$Html$node('th');
var _elm_lang$html$Html$form = _elm_lang$html$Html$node('form');
var _elm_lang$html$Html$fieldset = _elm_lang$html$Html$node('fieldset');
var _elm_lang$html$Html$legend = _elm_lang$html$Html$node('legend');
var _elm_lang$html$Html$label = _elm_lang$html$Html$node('label');
var _elm_lang$html$Html$input = _elm_lang$html$Html$node('input');
var _elm_lang$html$Html$button = _elm_lang$html$Html$node('button');
var _elm_lang$html$Html$select = _elm_lang$html$Html$node('select');
var _elm_lang$html$Html$datalist = _elm_lang$html$Html$node('datalist');
var _elm_lang$html$Html$optgroup = _elm_lang$html$Html$node('optgroup');
var _elm_lang$html$Html$option = _elm_lang$html$Html$node('option');
var _elm_lang$html$Html$textarea = _elm_lang$html$Html$node('textarea');
var _elm_lang$html$Html$keygen = _elm_lang$html$Html$node('keygen');
var _elm_lang$html$Html$output = _elm_lang$html$Html$node('output');
var _elm_lang$html$Html$progress = _elm_lang$html$Html$node('progress');
var _elm_lang$html$Html$meter = _elm_lang$html$Html$node('meter');
var _elm_lang$html$Html$details = _elm_lang$html$Html$node('details');
var _elm_lang$html$Html$summary = _elm_lang$html$Html$node('summary');
var _elm_lang$html$Html$menuitem = _elm_lang$html$Html$node('menuitem');
var _elm_lang$html$Html$menu = _elm_lang$html$Html$node('menu');

var _elm_lang$html$Html_Attributes$map = _elm_lang$virtual_dom$VirtualDom$mapProperty;
var _elm_lang$html$Html_Attributes$attribute = _elm_lang$virtual_dom$VirtualDom$attribute;
var _elm_lang$html$Html_Attributes$contextmenu = function (value) {
	return A2(_elm_lang$html$Html_Attributes$attribute, 'contextmenu', value);
};
var _elm_lang$html$Html_Attributes$draggable = function (value) {
	return A2(_elm_lang$html$Html_Attributes$attribute, 'draggable', value);
};
var _elm_lang$html$Html_Attributes$itemprop = function (value) {
	return A2(_elm_lang$html$Html_Attributes$attribute, 'itemprop', value);
};
var _elm_lang$html$Html_Attributes$tabindex = function (n) {
	return A2(
		_elm_lang$html$Html_Attributes$attribute,
		'tabIndex',
		_elm_lang$core$Basics$toString(n));
};
var _elm_lang$html$Html_Attributes$charset = function (value) {
	return A2(_elm_lang$html$Html_Attributes$attribute, 'charset', value);
};
var _elm_lang$html$Html_Attributes$height = function (value) {
	return A2(
		_elm_lang$html$Html_Attributes$attribute,
		'height',
		_elm_lang$core$Basics$toString(value));
};
var _elm_lang$html$Html_Attributes$width = function (value) {
	return A2(
		_elm_lang$html$Html_Attributes$attribute,
		'width',
		_elm_lang$core$Basics$toString(value));
};
var _elm_lang$html$Html_Attributes$formaction = function (value) {
	return A2(_elm_lang$html$Html_Attributes$attribute, 'formAction', value);
};
var _elm_lang$html$Html_Attributes$list = function (value) {
	return A2(_elm_lang$html$Html_Attributes$attribute, 'list', value);
};
var _elm_lang$html$Html_Attributes$minlength = function (n) {
	return A2(
		_elm_lang$html$Html_Attributes$attribute,
		'minLength',
		_elm_lang$core$Basics$toString(n));
};
var _elm_lang$html$Html_Attributes$maxlength = function (n) {
	return A2(
		_elm_lang$html$Html_Attributes$attribute,
		'maxlength',
		_elm_lang$core$Basics$toString(n));
};
var _elm_lang$html$Html_Attributes$size = function (n) {
	return A2(
		_elm_lang$html$Html_Attributes$attribute,
		'size',
		_elm_lang$core$Basics$toString(n));
};
var _elm_lang$html$Html_Attributes$form = function (value) {
	return A2(_elm_lang$html$Html_Attributes$attribute, 'form', value);
};
var _elm_lang$html$Html_Attributes$cols = function (n) {
	return A2(
		_elm_lang$html$Html_Attributes$attribute,
		'cols',
		_elm_lang$core$Basics$toString(n));
};
var _elm_lang$html$Html_Attributes$rows = function (n) {
	return A2(
		_elm_lang$html$Html_Attributes$attribute,
		'rows',
		_elm_lang$core$Basics$toString(n));
};
var _elm_lang$html$Html_Attributes$challenge = function (value) {
	return A2(_elm_lang$html$Html_Attributes$attribute, 'challenge', value);
};
var _elm_lang$html$Html_Attributes$media = function (value) {
	return A2(_elm_lang$html$Html_Attributes$attribute, 'media', value);
};
var _elm_lang$html$Html_Attributes$rel = function (value) {
	return A2(_elm_lang$html$Html_Attributes$attribute, 'rel', value);
};
var _elm_lang$html$Html_Attributes$datetime = function (value) {
	return A2(_elm_lang$html$Html_Attributes$attribute, 'datetime', value);
};
var _elm_lang$html$Html_Attributes$pubdate = function (value) {
	return A2(_elm_lang$html$Html_Attributes$attribute, 'pubdate', value);
};
var _elm_lang$html$Html_Attributes$colspan = function (n) {
	return A2(
		_elm_lang$html$Html_Attributes$attribute,
		'colspan',
		_elm_lang$core$Basics$toString(n));
};
var _elm_lang$html$Html_Attributes$rowspan = function (n) {
	return A2(
		_elm_lang$html$Html_Attributes$attribute,
		'rowspan',
		_elm_lang$core$Basics$toString(n));
};
var _elm_lang$html$Html_Attributes$manifest = function (value) {
	return A2(_elm_lang$html$Html_Attributes$attribute, 'manifest', value);
};
var _elm_lang$html$Html_Attributes$property = _elm_lang$virtual_dom$VirtualDom$property;
var _elm_lang$html$Html_Attributes$stringProperty = F2(
	function (name, string) {
		return A2(
			_elm_lang$html$Html_Attributes$property,
			name,
			_elm_lang$core$Json_Encode$string(string));
	});
var _elm_lang$html$Html_Attributes$class = function (name) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'className', name);
};
var _elm_lang$html$Html_Attributes$id = function (name) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'id', name);
};
var _elm_lang$html$Html_Attributes$title = function (name) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'title', name);
};
var _elm_lang$html$Html_Attributes$accesskey = function ($char) {
	return A2(
		_elm_lang$html$Html_Attributes$stringProperty,
		'accessKey',
		_elm_lang$core$String$fromChar($char));
};
var _elm_lang$html$Html_Attributes$dir = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'dir', value);
};
var _elm_lang$html$Html_Attributes$dropzone = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'dropzone', value);
};
var _elm_lang$html$Html_Attributes$lang = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'lang', value);
};
var _elm_lang$html$Html_Attributes$content = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'content', value);
};
var _elm_lang$html$Html_Attributes$httpEquiv = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'httpEquiv', value);
};
var _elm_lang$html$Html_Attributes$language = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'language', value);
};
var _elm_lang$html$Html_Attributes$src = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'src', value);
};
var _elm_lang$html$Html_Attributes$alt = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'alt', value);
};
var _elm_lang$html$Html_Attributes$preload = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'preload', value);
};
var _elm_lang$html$Html_Attributes$poster = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'poster', value);
};
var _elm_lang$html$Html_Attributes$kind = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'kind', value);
};
var _elm_lang$html$Html_Attributes$srclang = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'srclang', value);
};
var _elm_lang$html$Html_Attributes$sandbox = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'sandbox', value);
};
var _elm_lang$html$Html_Attributes$srcdoc = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'srcdoc', value);
};
var _elm_lang$html$Html_Attributes$type_ = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'type', value);
};
var _elm_lang$html$Html_Attributes$value = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'value', value);
};
var _elm_lang$html$Html_Attributes$defaultValue = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'defaultValue', value);
};
var _elm_lang$html$Html_Attributes$placeholder = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'placeholder', value);
};
var _elm_lang$html$Html_Attributes$accept = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'accept', value);
};
var _elm_lang$html$Html_Attributes$acceptCharset = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'acceptCharset', value);
};
var _elm_lang$html$Html_Attributes$action = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'action', value);
};
var _elm_lang$html$Html_Attributes$autocomplete = function (bool) {
	return A2(
		_elm_lang$html$Html_Attributes$stringProperty,
		'autocomplete',
		bool ? 'on' : 'off');
};
var _elm_lang$html$Html_Attributes$enctype = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'enctype', value);
};
var _elm_lang$html$Html_Attributes$method = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'method', value);
};
var _elm_lang$html$Html_Attributes$name = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'name', value);
};
var _elm_lang$html$Html_Attributes$pattern = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'pattern', value);
};
var _elm_lang$html$Html_Attributes$for = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'htmlFor', value);
};
var _elm_lang$html$Html_Attributes$max = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'max', value);
};
var _elm_lang$html$Html_Attributes$min = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'min', value);
};
var _elm_lang$html$Html_Attributes$step = function (n) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'step', n);
};
var _elm_lang$html$Html_Attributes$wrap = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'wrap', value);
};
var _elm_lang$html$Html_Attributes$usemap = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'useMap', value);
};
var _elm_lang$html$Html_Attributes$shape = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'shape', value);
};
var _elm_lang$html$Html_Attributes$coords = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'coords', value);
};
var _elm_lang$html$Html_Attributes$keytype = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'keytype', value);
};
var _elm_lang$html$Html_Attributes$align = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'align', value);
};
var _elm_lang$html$Html_Attributes$cite = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'cite', value);
};
var _elm_lang$html$Html_Attributes$href = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'href', value);
};
var _elm_lang$html$Html_Attributes$target = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'target', value);
};
var _elm_lang$html$Html_Attributes$downloadAs = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'download', value);
};
var _elm_lang$html$Html_Attributes$hreflang = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'hreflang', value);
};
var _elm_lang$html$Html_Attributes$ping = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'ping', value);
};
var _elm_lang$html$Html_Attributes$start = function (n) {
	return A2(
		_elm_lang$html$Html_Attributes$stringProperty,
		'start',
		_elm_lang$core$Basics$toString(n));
};
var _elm_lang$html$Html_Attributes$headers = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'headers', value);
};
var _elm_lang$html$Html_Attributes$scope = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'scope', value);
};
var _elm_lang$html$Html_Attributes$boolProperty = F2(
	function (name, bool) {
		return A2(
			_elm_lang$html$Html_Attributes$property,
			name,
			_elm_lang$core$Json_Encode$bool(bool));
	});
var _elm_lang$html$Html_Attributes$hidden = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'hidden', bool);
};
var _elm_lang$html$Html_Attributes$contenteditable = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'contentEditable', bool);
};
var _elm_lang$html$Html_Attributes$spellcheck = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'spellcheck', bool);
};
var _elm_lang$html$Html_Attributes$async = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'async', bool);
};
var _elm_lang$html$Html_Attributes$defer = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'defer', bool);
};
var _elm_lang$html$Html_Attributes$scoped = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'scoped', bool);
};
var _elm_lang$html$Html_Attributes$autoplay = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'autoplay', bool);
};
var _elm_lang$html$Html_Attributes$controls = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'controls', bool);
};
var _elm_lang$html$Html_Attributes$loop = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'loop', bool);
};
var _elm_lang$html$Html_Attributes$default = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'default', bool);
};
var _elm_lang$html$Html_Attributes$seamless = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'seamless', bool);
};
var _elm_lang$html$Html_Attributes$checked = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'checked', bool);
};
var _elm_lang$html$Html_Attributes$selected = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'selected', bool);
};
var _elm_lang$html$Html_Attributes$autofocus = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'autofocus', bool);
};
var _elm_lang$html$Html_Attributes$disabled = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'disabled', bool);
};
var _elm_lang$html$Html_Attributes$multiple = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'multiple', bool);
};
var _elm_lang$html$Html_Attributes$novalidate = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'noValidate', bool);
};
var _elm_lang$html$Html_Attributes$readonly = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'readOnly', bool);
};
var _elm_lang$html$Html_Attributes$required = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'required', bool);
};
var _elm_lang$html$Html_Attributes$ismap = function (value) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'isMap', value);
};
var _elm_lang$html$Html_Attributes$download = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'download', bool);
};
var _elm_lang$html$Html_Attributes$reversed = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'reversed', bool);
};
var _elm_lang$html$Html_Attributes$classList = function (list) {
	return _elm_lang$html$Html_Attributes$class(
		A2(
			_elm_lang$core$String$join,
			' ',
			A2(
				_elm_lang$core$List$map,
				_elm_lang$core$Tuple$first,
				A2(_elm_lang$core$List$filter, _elm_lang$core$Tuple$second, list))));
};
var _elm_lang$html$Html_Attributes$style = _elm_lang$virtual_dom$VirtualDom$style;

var _elm_lang$html$Html_Events$keyCode = A2(_elm_lang$core$Json_Decode$field, 'keyCode', _elm_lang$core$Json_Decode$int);
var _elm_lang$html$Html_Events$targetChecked = A2(
	_elm_lang$core$Json_Decode$at,
	{
		ctor: '::',
		_0: 'target',
		_1: {
			ctor: '::',
			_0: 'checked',
			_1: {ctor: '[]'}
		}
	},
	_elm_lang$core$Json_Decode$bool);
var _elm_lang$html$Html_Events$targetValue = A2(
	_elm_lang$core$Json_Decode$at,
	{
		ctor: '::',
		_0: 'target',
		_1: {
			ctor: '::',
			_0: 'value',
			_1: {ctor: '[]'}
		}
	},
	_elm_lang$core$Json_Decode$string);
var _elm_lang$html$Html_Events$defaultOptions = _elm_lang$virtual_dom$VirtualDom$defaultOptions;
var _elm_lang$html$Html_Events$onWithOptions = _elm_lang$virtual_dom$VirtualDom$onWithOptions;
var _elm_lang$html$Html_Events$on = _elm_lang$virtual_dom$VirtualDom$on;
var _elm_lang$html$Html_Events$onFocus = function (msg) {
	return A2(
		_elm_lang$html$Html_Events$on,
		'focus',
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _elm_lang$html$Html_Events$onBlur = function (msg) {
	return A2(
		_elm_lang$html$Html_Events$on,
		'blur',
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _elm_lang$html$Html_Events$onSubmitOptions = _elm_lang$core$Native_Utils.update(
	_elm_lang$html$Html_Events$defaultOptions,
	{preventDefault: true});
var _elm_lang$html$Html_Events$onSubmit = function (msg) {
	return A3(
		_elm_lang$html$Html_Events$onWithOptions,
		'submit',
		_elm_lang$html$Html_Events$onSubmitOptions,
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _elm_lang$html$Html_Events$onCheck = function (tagger) {
	return A2(
		_elm_lang$html$Html_Events$on,
		'change',
		A2(_elm_lang$core$Json_Decode$map, tagger, _elm_lang$html$Html_Events$targetChecked));
};
var _elm_lang$html$Html_Events$onInput = function (tagger) {
	return A2(
		_elm_lang$html$Html_Events$on,
		'input',
		A2(_elm_lang$core$Json_Decode$map, tagger, _elm_lang$html$Html_Events$targetValue));
};
var _elm_lang$html$Html_Events$onMouseOut = function (msg) {
	return A2(
		_elm_lang$html$Html_Events$on,
		'mouseout',
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _elm_lang$html$Html_Events$onMouseOver = function (msg) {
	return A2(
		_elm_lang$html$Html_Events$on,
		'mouseover',
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _elm_lang$html$Html_Events$onMouseLeave = function (msg) {
	return A2(
		_elm_lang$html$Html_Events$on,
		'mouseleave',
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _elm_lang$html$Html_Events$onMouseEnter = function (msg) {
	return A2(
		_elm_lang$html$Html_Events$on,
		'mouseenter',
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _elm_lang$html$Html_Events$onMouseUp = function (msg) {
	return A2(
		_elm_lang$html$Html_Events$on,
		'mouseup',
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _elm_lang$html$Html_Events$onMouseDown = function (msg) {
	return A2(
		_elm_lang$html$Html_Events$on,
		'mousedown',
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _elm_lang$html$Html_Events$onDoubleClick = function (msg) {
	return A2(
		_elm_lang$html$Html_Events$on,
		'dblclick',
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _elm_lang$html$Html_Events$onClick = function (msg) {
	return A2(
		_elm_lang$html$Html_Events$on,
		'click',
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _elm_lang$html$Html_Events$Options = F2(
	function (a, b) {
		return {stopPropagation: a, preventDefault: b};
	});

var _elm_lang$http$Native_Http = function() {


// ENCODING AND DECODING

function encodeUri(string)
{
	return encodeURIComponent(string);
}

function decodeUri(string)
{
	try
	{
		return _elm_lang$core$Maybe$Just(decodeURIComponent(string));
	}
	catch(e)
	{
		return _elm_lang$core$Maybe$Nothing;
	}
}


// SEND REQUEST

function toTask(request, maybeProgress)
{
	return _elm_lang$core$Native_Scheduler.nativeBinding(function(callback)
	{
		var xhr = new XMLHttpRequest();

		configureProgress(xhr, maybeProgress);

		xhr.addEventListener('error', function() {
			callback(_elm_lang$core$Native_Scheduler.fail({ ctor: 'NetworkError' }));
		});
		xhr.addEventListener('timeout', function() {
			callback(_elm_lang$core$Native_Scheduler.fail({ ctor: 'Timeout' }));
		});
		xhr.addEventListener('load', function() {
			callback(handleResponse(xhr, request.expect.responseToResult));
		});

		try
		{
			xhr.open(request.method, request.url, true);
		}
		catch (e)
		{
			return callback(_elm_lang$core$Native_Scheduler.fail({ ctor: 'BadUrl', _0: request.url }));
		}

		configureRequest(xhr, request);
		send(xhr, request.body);

		return function() { xhr.abort(); };
	});
}

function configureProgress(xhr, maybeProgress)
{
	if (maybeProgress.ctor === 'Nothing')
	{
		return;
	}

	xhr.addEventListener('progress', function(event) {
		if (!event.lengthComputable)
		{
			return;
		}
		_elm_lang$core$Native_Scheduler.rawSpawn(maybeProgress._0({
			bytes: event.loaded,
			bytesExpected: event.total
		}));
	});
}

function configureRequest(xhr, request)
{
	function setHeader(pair)
	{
		xhr.setRequestHeader(pair._0, pair._1);
	}

	A2(_elm_lang$core$List$map, setHeader, request.headers);
	xhr.responseType = request.expect.responseType;
	xhr.withCredentials = request.withCredentials;

	if (request.timeout.ctor === 'Just')
	{
		xhr.timeout = request.timeout._0;
	}
}

function send(xhr, body)
{
	switch (body.ctor)
	{
		case 'EmptyBody':
			xhr.send();
			return;

		case 'StringBody':
			xhr.setRequestHeader('Content-Type', body._0);
			xhr.send(body._1);
			return;

		case 'FormDataBody':
			xhr.send(body._0);
			return;
	}
}


// RESPONSES

function handleResponse(xhr, responseToResult)
{
	var response = toResponse(xhr);

	if (xhr.status < 200 || 300 <= xhr.status)
	{
		response.body = xhr.responseText;
		return _elm_lang$core$Native_Scheduler.fail({
			ctor: 'BadStatus',
			_0: response
		});
	}

	var result = responseToResult(response);

	if (result.ctor === 'Ok')
	{
		return _elm_lang$core$Native_Scheduler.succeed(result._0);
	}
	else
	{
		response.body = xhr.responseText;
		return _elm_lang$core$Native_Scheduler.fail({
			ctor: 'BadPayload',
			_0: result._0,
			_1: response
		});
	}
}

function toResponse(xhr)
{
	return {
		status: { code: xhr.status, message: xhr.statusText },
		headers: parseHeaders(xhr.getAllResponseHeaders()),
		url: xhr.responseURL,
		body: xhr.response
	};
}

function parseHeaders(rawHeaders)
{
	var headers = _elm_lang$core$Dict$empty;

	if (!rawHeaders)
	{
		return headers;
	}

	var headerPairs = rawHeaders.split('\u000d\u000a');
	for (var i = headerPairs.length; i--; )
	{
		var headerPair = headerPairs[i];
		var index = headerPair.indexOf('\u003a\u0020');
		if (index > 0)
		{
			var key = headerPair.substring(0, index);
			var value = headerPair.substring(index + 2);

			headers = A3(_elm_lang$core$Dict$update, key, function(oldValue) {
				if (oldValue.ctor === 'Just')
				{
					return _elm_lang$core$Maybe$Just(value + ', ' + oldValue._0);
				}
				return _elm_lang$core$Maybe$Just(value);
			}, headers);
		}
	}

	return headers;
}


// EXPECTORS

function expectStringResponse(responseToResult)
{
	return {
		responseType: 'text',
		responseToResult: responseToResult
	};
}

function mapExpect(func, expect)
{
	return {
		responseType: expect.responseType,
		responseToResult: function(response) {
			var convertedResponse = expect.responseToResult(response);
			return A2(_elm_lang$core$Result$map, func, convertedResponse);
		}
	};
}


// BODY

function multipart(parts)
{
	var formData = new FormData();

	while (parts.ctor !== '[]')
	{
		var part = parts._0;
		formData.append(part._0, part._1);
		parts = parts._1;
	}

	return { ctor: 'FormDataBody', _0: formData };
}

return {
	toTask: F2(toTask),
	expectStringResponse: expectStringResponse,
	mapExpect: F2(mapExpect),
	multipart: multipart,
	encodeUri: encodeUri,
	decodeUri: decodeUri
};

}();

var _elm_lang$http$Http_Internal$map = F2(
	function (func, request) {
		return _elm_lang$core$Native_Utils.update(
			request,
			{
				expect: A2(_elm_lang$http$Native_Http.mapExpect, func, request.expect)
			});
	});
var _elm_lang$http$Http_Internal$RawRequest = F7(
	function (a, b, c, d, e, f, g) {
		return {method: a, headers: b, url: c, body: d, expect: e, timeout: f, withCredentials: g};
	});
var _elm_lang$http$Http_Internal$Request = function (a) {
	return {ctor: 'Request', _0: a};
};
var _elm_lang$http$Http_Internal$Expect = {ctor: 'Expect'};
var _elm_lang$http$Http_Internal$FormDataBody = {ctor: 'FormDataBody'};
var _elm_lang$http$Http_Internal$StringBody = F2(
	function (a, b) {
		return {ctor: 'StringBody', _0: a, _1: b};
	});
var _elm_lang$http$Http_Internal$EmptyBody = {ctor: 'EmptyBody'};
var _elm_lang$http$Http_Internal$Header = F2(
	function (a, b) {
		return {ctor: 'Header', _0: a, _1: b};
	});

var _elm_lang$http$Http$decodeUri = _elm_lang$http$Native_Http.decodeUri;
var _elm_lang$http$Http$encodeUri = _elm_lang$http$Native_Http.encodeUri;
var _elm_lang$http$Http$expectStringResponse = _elm_lang$http$Native_Http.expectStringResponse;
var _elm_lang$http$Http$expectJson = function (decoder) {
	return _elm_lang$http$Http$expectStringResponse(
		function (response) {
			return A2(_elm_lang$core$Json_Decode$decodeString, decoder, response.body);
		});
};
var _elm_lang$http$Http$expectString = _elm_lang$http$Http$expectStringResponse(
	function (response) {
		return _elm_lang$core$Result$Ok(response.body);
	});
var _elm_lang$http$Http$multipartBody = _elm_lang$http$Native_Http.multipart;
var _elm_lang$http$Http$stringBody = _elm_lang$http$Http_Internal$StringBody;
var _elm_lang$http$Http$jsonBody = function (value) {
	return A2(
		_elm_lang$http$Http_Internal$StringBody,
		'application/json',
		A2(_elm_lang$core$Json_Encode$encode, 0, value));
};
var _elm_lang$http$Http$emptyBody = _elm_lang$http$Http_Internal$EmptyBody;
var _elm_lang$http$Http$header = _elm_lang$http$Http_Internal$Header;
var _elm_lang$http$Http$request = _elm_lang$http$Http_Internal$Request;
var _elm_lang$http$Http$post = F3(
	function (url, body, decoder) {
		return _elm_lang$http$Http$request(
			{
				method: 'POST',
				headers: {ctor: '[]'},
				url: url,
				body: body,
				expect: _elm_lang$http$Http$expectJson(decoder),
				timeout: _elm_lang$core$Maybe$Nothing,
				withCredentials: false
			});
	});
var _elm_lang$http$Http$get = F2(
	function (url, decoder) {
		return _elm_lang$http$Http$request(
			{
				method: 'GET',
				headers: {ctor: '[]'},
				url: url,
				body: _elm_lang$http$Http$emptyBody,
				expect: _elm_lang$http$Http$expectJson(decoder),
				timeout: _elm_lang$core$Maybe$Nothing,
				withCredentials: false
			});
	});
var _elm_lang$http$Http$getString = function (url) {
	return _elm_lang$http$Http$request(
		{
			method: 'GET',
			headers: {ctor: '[]'},
			url: url,
			body: _elm_lang$http$Http$emptyBody,
			expect: _elm_lang$http$Http$expectString,
			timeout: _elm_lang$core$Maybe$Nothing,
			withCredentials: false
		});
};
var _elm_lang$http$Http$toTask = function (_p0) {
	var _p1 = _p0;
	return A2(_elm_lang$http$Native_Http.toTask, _p1._0, _elm_lang$core$Maybe$Nothing);
};
var _elm_lang$http$Http$send = F2(
	function (resultToMessage, request) {
		return A2(
			_elm_lang$core$Task$attempt,
			resultToMessage,
			_elm_lang$http$Http$toTask(request));
	});
var _elm_lang$http$Http$Response = F4(
	function (a, b, c, d) {
		return {url: a, status: b, headers: c, body: d};
	});
var _elm_lang$http$Http$BadPayload = F2(
	function (a, b) {
		return {ctor: 'BadPayload', _0: a, _1: b};
	});
var _elm_lang$http$Http$BadStatus = function (a) {
	return {ctor: 'BadStatus', _0: a};
};
var _elm_lang$http$Http$NetworkError = {ctor: 'NetworkError'};
var _elm_lang$http$Http$Timeout = {ctor: 'Timeout'};
var _elm_lang$http$Http$BadUrl = function (a) {
	return {ctor: 'BadUrl', _0: a};
};
var _elm_lang$http$Http$StringPart = F2(
	function (a, b) {
		return {ctor: 'StringPart', _0: a, _1: b};
	});
var _elm_lang$http$Http$stringPart = _elm_lang$http$Http$StringPart;

var _newlandsvalley$elm_abc_parser$Abc_ParseTree$middlecOctave = 5;
var _newlandsvalley$elm_abc_parser$Abc_ParseTree$AbcNote = F5(
	function (a, b, c, d, e) {
		return {pitchClass: a, accidental: b, octave: c, duration: d, tied: e};
	});
var _newlandsvalley$elm_abc_parser$Abc_ParseTree$AbcChord = F2(
	function (a, b) {
		return {notes: a, duration: b};
	});
var _newlandsvalley$elm_abc_parser$Abc_ParseTree$Bar = F3(
	function (a, b, c) {
		return {thickness: a, repeat: b, iteration: c};
	});
var _newlandsvalley$elm_abc_parser$Abc_ParseTree$KeySignature = F3(
	function (a, b, c) {
		return {pitchClass: a, accidental: b, mode: c};
	});
var _newlandsvalley$elm_abc_parser$Abc_ParseTree$TempoSignature = F3(
	function (a, b, c) {
		return {noteLengths: a, bpm: b, marking: c};
	});
var _newlandsvalley$elm_abc_parser$Abc_ParseTree$BodyInfo = function (a) {
	return {ctor: 'BodyInfo', _0: a};
};
var _newlandsvalley$elm_abc_parser$Abc_ParseTree$Score = function (a) {
	return {ctor: 'Score', _0: a};
};
var _newlandsvalley$elm_abc_parser$Abc_ParseTree$Discretional = {ctor: 'Discretional'};
var _newlandsvalley$elm_abc_parser$Abc_ParseTree$RightOfNextSymbol = {ctor: 'RightOfNextSymbol'};
var _newlandsvalley$elm_abc_parser$Abc_ParseTree$LeftOfNextSymbol = {ctor: 'LeftOfNextSymbol'};
var _newlandsvalley$elm_abc_parser$Abc_ParseTree$BelowNextSymbol = {ctor: 'BelowNextSymbol'};
var _newlandsvalley$elm_abc_parser$Abc_ParseTree$AboveNextSymbol = {ctor: 'AboveNextSymbol'};
var _newlandsvalley$elm_abc_parser$Abc_ParseTree$Continuation = {ctor: 'Continuation'};
var _newlandsvalley$elm_abc_parser$Abc_ParseTree$Ignore = {ctor: 'Ignore'};
var _newlandsvalley$elm_abc_parser$Abc_ParseTree$Spacer = function (a) {
	return {ctor: 'Spacer', _0: a};
};
var _newlandsvalley$elm_abc_parser$Abc_ParseTree$Inline = function (a) {
	return {ctor: 'Inline', _0: a};
};
var _newlandsvalley$elm_abc_parser$Abc_ParseTree$Chord = function (a) {
	return {ctor: 'Chord', _0: a};
};
var _newlandsvalley$elm_abc_parser$Abc_ParseTree$ChordSymbol = function (a) {
	return {ctor: 'ChordSymbol', _0: a};
};
var _newlandsvalley$elm_abc_parser$Abc_ParseTree$Annotation = F2(
	function (a, b) {
		return {ctor: 'Annotation', _0: a, _1: b};
	});
var _newlandsvalley$elm_abc_parser$Abc_ParseTree$GraceNote = F2(
	function (a, b) {
		return {ctor: 'GraceNote', _0: a, _1: b};
	});
var _newlandsvalley$elm_abc_parser$Abc_ParseTree$Slur = function (a) {
	return {ctor: 'Slur', _0: a};
};
var _newlandsvalley$elm_abc_parser$Abc_ParseTree$Decoration = function (a) {
	return {ctor: 'Decoration', _0: a};
};
var _newlandsvalley$elm_abc_parser$Abc_ParseTree$Tuplet = F2(
	function (a, b) {
		return {ctor: 'Tuplet', _0: a, _1: b};
	});
var _newlandsvalley$elm_abc_parser$Abc_ParseTree$Rest = function (a) {
	return {ctor: 'Rest', _0: a};
};
var _newlandsvalley$elm_abc_parser$Abc_ParseTree$BrokenRhythmPair = F3(
	function (a, b, c) {
		return {ctor: 'BrokenRhythmPair', _0: a, _1: b, _2: c};
	});
var _newlandsvalley$elm_abc_parser$Abc_ParseTree$Note = function (a) {
	return {ctor: 'Note', _0: a};
};
var _newlandsvalley$elm_abc_parser$Abc_ParseTree$Barline = function (a) {
	return {ctor: 'Barline', _0: a};
};
var _newlandsvalley$elm_abc_parser$Abc_ParseTree$ThickThin = {ctor: 'ThickThin'};
var _newlandsvalley$elm_abc_parser$Abc_ParseTree$ThinThick = {ctor: 'ThinThick'};
var _newlandsvalley$elm_abc_parser$Abc_ParseTree$ThinThin = {ctor: 'ThinThin'};
var _newlandsvalley$elm_abc_parser$Abc_ParseTree$Thin = {ctor: 'Thin'};
var _newlandsvalley$elm_abc_parser$Abc_ParseTree$BeginAndEnd = {ctor: 'BeginAndEnd'};
var _newlandsvalley$elm_abc_parser$Abc_ParseTree$End = {ctor: 'End'};
var _newlandsvalley$elm_abc_parser$Abc_ParseTree$Begin = {ctor: 'Begin'};
var _newlandsvalley$elm_abc_parser$Abc_ParseTree$Locrian = {ctor: 'Locrian'};
var _newlandsvalley$elm_abc_parser$Abc_ParseTree$Aeolian = {ctor: 'Aeolian'};
var _newlandsvalley$elm_abc_parser$Abc_ParseTree$Mixolydian = {ctor: 'Mixolydian'};
var _newlandsvalley$elm_abc_parser$Abc_ParseTree$Lydian = {ctor: 'Lydian'};
var _newlandsvalley$elm_abc_parser$Abc_ParseTree$Phrygian = {ctor: 'Phrygian'};
var _newlandsvalley$elm_abc_parser$Abc_ParseTree$Dorian = {ctor: 'Dorian'};
var _newlandsvalley$elm_abc_parser$Abc_ParseTree$Ionian = {ctor: 'Ionian'};
var _newlandsvalley$elm_abc_parser$Abc_ParseTree$Minor = {ctor: 'Minor'};
var _newlandsvalley$elm_abc_parser$Abc_ParseTree$Major = {ctor: 'Major'};
var _newlandsvalley$elm_abc_parser$Abc_ParseTree$Natural = {ctor: 'Natural'};
var _newlandsvalley$elm_abc_parser$Abc_ParseTree$DoubleFlat = {ctor: 'DoubleFlat'};
var _newlandsvalley$elm_abc_parser$Abc_ParseTree$DoubleSharp = {ctor: 'DoubleSharp'};
var _newlandsvalley$elm_abc_parser$Abc_ParseTree$Flat = {ctor: 'Flat'};
var _newlandsvalley$elm_abc_parser$Abc_ParseTree$Sharp = {ctor: 'Sharp'};
var _newlandsvalley$elm_abc_parser$Abc_ParseTree$G = {ctor: 'G'};
var _newlandsvalley$elm_abc_parser$Abc_ParseTree$F = {ctor: 'F'};
var _newlandsvalley$elm_abc_parser$Abc_ParseTree$E = {ctor: 'E'};
var _newlandsvalley$elm_abc_parser$Abc_ParseTree$D = {ctor: 'D'};
var _newlandsvalley$elm_abc_parser$Abc_ParseTree$C = {ctor: 'C'};
var _newlandsvalley$elm_abc_parser$Abc_ParseTree$B = {ctor: 'B'};
var _newlandsvalley$elm_abc_parser$Abc_ParseTree$A = {ctor: 'A'};
var _newlandsvalley$elm_abc_parser$Abc_ParseTree$RightArrow = function (a) {
	return {ctor: 'RightArrow', _0: a};
};
var _newlandsvalley$elm_abc_parser$Abc_ParseTree$LeftArrow = function (a) {
	return {ctor: 'LeftArrow', _0: a};
};
var _newlandsvalley$elm_abc_parser$Abc_ParseTree$UnsupportedHeader = {ctor: 'UnsupportedHeader'};
var _newlandsvalley$elm_abc_parser$Abc_ParseTree$Comment = function (a) {
	return {ctor: 'Comment', _0: a};
};
var _newlandsvalley$elm_abc_parser$Abc_ParseTree$FieldContinuation = function (a) {
	return {ctor: 'FieldContinuation', _0: a};
};
var _newlandsvalley$elm_abc_parser$Abc_ParseTree$Transcription = function (a) {
	return {ctor: 'Transcription', _0: a};
};
var _newlandsvalley$elm_abc_parser$Abc_ParseTree$ReferenceNumber = function (a) {
	return {ctor: 'ReferenceNumber', _0: a};
};
var _newlandsvalley$elm_abc_parser$Abc_ParseTree$WordsAligned = function (a) {
	return {ctor: 'WordsAligned', _0: a};
};
var _newlandsvalley$elm_abc_parser$Abc_ParseTree$WordsAfter = function (a) {
	return {ctor: 'WordsAfter', _0: a};
};
var _newlandsvalley$elm_abc_parser$Abc_ParseTree$Voice = function (a) {
	return {ctor: 'Voice', _0: a};
};
var _newlandsvalley$elm_abc_parser$Abc_ParseTree$UserDefined = function (a) {
	return {ctor: 'UserDefined', _0: a};
};
var _newlandsvalley$elm_abc_parser$Abc_ParseTree$Title = function (a) {
	return {ctor: 'Title', _0: a};
};
var _newlandsvalley$elm_abc_parser$Abc_ParseTree$SymbolLine = function (a) {
	return {ctor: 'SymbolLine', _0: a};
};
var _newlandsvalley$elm_abc_parser$Abc_ParseTree$Source = function (a) {
	return {ctor: 'Source', _0: a};
};
var _newlandsvalley$elm_abc_parser$Abc_ParseTree$Remark = function (a) {
	return {ctor: 'Remark', _0: a};
};
var _newlandsvalley$elm_abc_parser$Abc_ParseTree$Rhythm = function (a) {
	return {ctor: 'Rhythm', _0: a};
};
var _newlandsvalley$elm_abc_parser$Abc_ParseTree$Tempo = function (a) {
	return {ctor: 'Tempo', _0: a};
};
var _newlandsvalley$elm_abc_parser$Abc_ParseTree$Parts = function (a) {
	return {ctor: 'Parts', _0: a};
};
var _newlandsvalley$elm_abc_parser$Abc_ParseTree$Origin = function (a) {
	return {ctor: 'Origin', _0: a};
};
var _newlandsvalley$elm_abc_parser$Abc_ParseTree$Notes = function (a) {
	return {ctor: 'Notes', _0: a};
};
var _newlandsvalley$elm_abc_parser$Abc_ParseTree$Macro = function (a) {
	return {ctor: 'Macro', _0: a};
};
var _newlandsvalley$elm_abc_parser$Abc_ParseTree$Meter = function (a) {
	return {ctor: 'Meter', _0: a};
};
var _newlandsvalley$elm_abc_parser$Abc_ParseTree$UnitNoteLength = function (a) {
	return {ctor: 'UnitNoteLength', _0: a};
};
var _newlandsvalley$elm_abc_parser$Abc_ParseTree$Key = function (a) {
	return {ctor: 'Key', _0: a};
};
var _newlandsvalley$elm_abc_parser$Abc_ParseTree$Instruction = function (a) {
	return {ctor: 'Instruction', _0: a};
};
var _newlandsvalley$elm_abc_parser$Abc_ParseTree$History = function (a) {
	return {ctor: 'History', _0: a};
};
var _newlandsvalley$elm_abc_parser$Abc_ParseTree$Group = function (a) {
	return {ctor: 'Group', _0: a};
};
var _newlandsvalley$elm_abc_parser$Abc_ParseTree$FileUrl = function (a) {
	return {ctor: 'FileUrl', _0: a};
};
var _newlandsvalley$elm_abc_parser$Abc_ParseTree$Discography = function (a) {
	return {ctor: 'Discography', _0: a};
};
var _newlandsvalley$elm_abc_parser$Abc_ParseTree$Composer = function (a) {
	return {ctor: 'Composer', _0: a};
};
var _newlandsvalley$elm_abc_parser$Abc_ParseTree$Book = function (a) {
	return {ctor: 'Book', _0: a};
};
var _newlandsvalley$elm_abc_parser$Abc_ParseTree$Area = function (a) {
	return {ctor: 'Area', _0: a};
};

var _newlandsvalley$elm_abc_parser$Combine_Extra$leftBiasedOr = F2(
	function (lp, rp) {
		var f = F2(
			function (state, cx) {
				var res = A3(_Bogdanp$elm_combine$Combine$app, lp, state, cx);
				var _p0 = res;
				if (_p0._2.ctor === 'Ok') {
					return res;
				} else {
					var res1 = A3(_Bogdanp$elm_combine$Combine$app, rp, state, cx);
					var _p1 = res1;
					if (_p1._2.ctor === 'Ok') {
						return res1;
					} else {
						return {
							ctor: '_Tuple3',
							_0: _p1._0,
							_1: _p0._1,
							_2: _elm_lang$core$Result$Err(
								A2(_elm_lang$core$Basics_ops['++'], _p0._2._0, _p1._2._0))
						};
					}
				}
			});
		return _Bogdanp$elm_combine$Combine$primitive(f);
	});
var _newlandsvalley$elm_abc_parser$Combine_Extra$manyTill1 = F2(
	function (p, end) {
		var accumulate = F3(
			function (acc, state, stream) {
				accumulate:
				while (true) {
					var _p2 = A3(_Bogdanp$elm_combine$Combine$app, end, state, stream);
					if ((_p2.ctor === '_Tuple3') && (_p2._2.ctor === 'Ok')) {
						return {
							ctor: '_Tuple3',
							_0: _p2._0,
							_1: _p2._1,
							_2: _elm_lang$core$Result$Ok(
								_elm_lang$core$List$reverse(acc))
						};
					} else {
						var _p3 = A3(_Bogdanp$elm_combine$Combine$app, p, state, stream);
						if (_p3._2.ctor === 'Ok') {
							var _v4 = {ctor: '::', _0: _p3._2._0, _1: acc},
								_v5 = _p3._0,
								_v6 = _p3._1;
							acc = _v4;
							state = _v5;
							stream = _v6;
							continue accumulate;
						} else {
							return {
								ctor: '_Tuple3',
								_0: _p3._0,
								_1: _p3._1,
								_2: _elm_lang$core$Result$Err(_p3._2._0)
							};
						}
					}
				}
			});
		return _Bogdanp$elm_combine$Combine$primitive(
			accumulate(
				{ctor: '[]'}));
	});

var _newlandsvalley$elm_abc_parser$Abc$parseError = function (pe) {
	var append = F2(
		function (a, b) {
			return A2(
				_elm_lang$core$Basics_ops['++'],
				a,
				A2(_elm_lang$core$Basics_ops['++'], ',', b));
		});
	var msg = A3(_elm_lang$core$List$foldr, append, '', pe.msgs);
	return A2(
		_elm_lang$core$Basics_ops['++'],
		'parse error: ',
		A2(
			_elm_lang$core$Basics_ops['++'],
			msg,
			A2(
				_elm_lang$core$Basics_ops['++'],
				' on ',
				A2(
					_elm_lang$core$Basics_ops['++'],
					pe.input,
					A2(
						_elm_lang$core$Basics_ops['++'],
						' at position ',
						_elm_lang$core$Basics$toString(pe.position))))));
};
var _newlandsvalley$elm_abc_parser$Abc$toTupletInt = function (s) {
	return A2(
		_elm_lang$core$Maybe$withDefault,
		3,
		_elm_lang$core$Result$toMaybe(
			_elm_lang$core$String$toInt(s)));
};
var _newlandsvalley$elm_abc_parser$Abc$buildAnnotation = function (s) {
	var firstChar = _elm_lang$core$List$head(
		_elm_lang$core$String$toList(s));
	var placement = function () {
		var _p0 = firstChar;
		_v0_4:
		do {
			if (_p0.ctor === 'Just') {
				switch (_p0._0.valueOf()) {
					case '^':
						return _newlandsvalley$elm_abc_parser$Abc_ParseTree$AboveNextSymbol;
					case '_':
						return _newlandsvalley$elm_abc_parser$Abc_ParseTree$BelowNextSymbol;
					case '<':
						return _newlandsvalley$elm_abc_parser$Abc_ParseTree$LeftOfNextSymbol;
					case '>':
						return _newlandsvalley$elm_abc_parser$Abc_ParseTree$RightOfNextSymbol;
					default:
						break _v0_4;
				}
			} else {
				break _v0_4;
			}
		} while(false);
		return _newlandsvalley$elm_abc_parser$Abc_ParseTree$Discretional;
	}();
	return A2(_newlandsvalley$elm_abc_parser$Abc_ParseTree$Annotation, placement, s);
};
var _newlandsvalley$elm_abc_parser$Abc$buildBrokenOperator = function (s) {
	return A2(_elm_lang$core$String$startsWith, '<', s) ? _newlandsvalley$elm_abc_parser$Abc_ParseTree$LeftArrow(
		_elm_lang$core$String$length(s)) : _newlandsvalley$elm_abc_parser$Abc_ParseTree$RightArrow(
		_elm_lang$core$String$length(s));
};
var _newlandsvalley$elm_abc_parser$Abc$buildTupletSignature = F3(
	function (ps, mq, mr) {
		var p = _newlandsvalley$elm_abc_parser$Abc$toTupletInt(ps);
		var qdefault = function () {
			var _p1 = p;
			switch (_p1) {
				case 2:
					return 3;
				case 3:
					return 2;
				case 4:
					return 3;
				case 6:
					return 2;
				case 8:
					return 3;
				default:
					return 2;
			}
		}();
		var q = A2(
			_elm_lang$core$Maybe$withDefault,
			qdefault,
			A2(_elm_lang$core$Maybe$map, _newlandsvalley$elm_abc_parser$Abc$toTupletInt, mq));
		var r = A2(
			_elm_lang$core$Maybe$withDefault,
			p,
			A2(_elm_lang$core$Maybe$map, _newlandsvalley$elm_abc_parser$Abc$toTupletInt, mr));
		return {ctor: '_Tuple3', _0: p, _1: q, _2: r};
	});
var _newlandsvalley$elm_abc_parser$Abc$buildChord = F2(
	function (ns, ml) {
		var l = A2(
			_elm_lang$core$Maybe$withDefault,
			_elm_community$ratio$Ratio$fromInt(1),
			ml);
		return {notes: ns, duration: l};
	});
var _newlandsvalley$elm_abc_parser$Abc$buildKeyAccidentals = F2(
	function (mac, acs) {
		var _p2 = mac;
		if (_p2.ctor === 'Just') {
			return {ctor: '::', _0: _p2._0, _1: acs};
		} else {
			return acs;
		}
	});
var _newlandsvalley$elm_abc_parser$Abc$buildAccidental = function (s) {
	var _p3 = s;
	switch (_p3) {
		case '^^':
			return _newlandsvalley$elm_abc_parser$Abc_ParseTree$DoubleSharp;
		case '__':
			return _newlandsvalley$elm_abc_parser$Abc_ParseTree$DoubleFlat;
		case '^':
			return _newlandsvalley$elm_abc_parser$Abc_ParseTree$Sharp;
		case '_':
			return _newlandsvalley$elm_abc_parser$Abc_ParseTree$Flat;
		default:
			return _newlandsvalley$elm_abc_parser$Abc_ParseTree$Natural;
	}
};
var _newlandsvalley$elm_abc_parser$Abc$scientificPitchNotation = F2(
	function (pc, oct) {
		return A2(
			_elm_lang$core$Regex$contains,
			_elm_lang$core$Regex$regex('[A-G]'),
			pc) ? (_newlandsvalley$elm_abc_parser$Abc_ParseTree$middlecOctave + oct) : ((_newlandsvalley$elm_abc_parser$Abc_ParseTree$middlecOctave + 1) + oct);
	});
var _newlandsvalley$elm_abc_parser$Abc$buildBarline = F2(
	function (s, i) {
		var f = function (c) {
			var _p4 = c;
			switch (_p4.valueOf()) {
				case '[':
					return _elm_lang$core$Native_Utils.chr('|');
				case ']':
					return _elm_lang$core$Native_Utils.chr('|');
				default:
					return c;
			}
		};
		var normalised = A2(_elm_lang$core$String$map, f, s);
		var repeatCount = _elm_lang$core$String$length(
			A2(
				_elm_lang$core$String$filter,
				function (c) {
					return _elm_lang$core$Native_Utils.eq(
						c,
						_elm_lang$core$Native_Utils.chr(':'));
				},
				normalised));
		var repeat = _elm_lang$core$Native_Utils.eq(repeatCount, 0) ? _elm_lang$core$Maybe$Nothing : (_elm_lang$core$Native_Utils.eq(repeatCount, 1) ? (A2(_elm_lang$core$String$contains, ':|', normalised) ? _elm_lang$core$Maybe$Just(_newlandsvalley$elm_abc_parser$Abc_ParseTree$End) : _elm_lang$core$Maybe$Just(_newlandsvalley$elm_abc_parser$Abc_ParseTree$Begin)) : _elm_lang$core$Maybe$Just(_newlandsvalley$elm_abc_parser$Abc_ParseTree$BeginAndEnd));
		var thickness = A2(_elm_lang$core$String$contains, '|]', s) ? _newlandsvalley$elm_abc_parser$Abc_ParseTree$ThinThick : (A2(_elm_lang$core$String$contains, '[|', s) ? _newlandsvalley$elm_abc_parser$Abc_ParseTree$ThickThin : (A2(_elm_lang$core$String$contains, '||', s) ? _newlandsvalley$elm_abc_parser$Abc_ParseTree$ThinThin : _newlandsvalley$elm_abc_parser$Abc_ParseTree$Thin));
		return _newlandsvalley$elm_abc_parser$Abc_ParseTree$Barline(
			{thickness: thickness, repeat: repeat, iteration: i});
	});
var _newlandsvalley$elm_abc_parser$Abc$buildKey = F3(
	function (c, ks, ka) {
		return _newlandsvalley$elm_abc_parser$Abc_ParseTree$Key(
			{ctor: '_Tuple2', _0: ks, _1: ka});
	});
var _newlandsvalley$elm_abc_parser$Abc$pitchClassDict = _elm_lang$core$Dict$fromList(
	{
		ctor: '::',
		_0: {ctor: '_Tuple2', _0: 'A', _1: _newlandsvalley$elm_abc_parser$Abc_ParseTree$A},
		_1: {
			ctor: '::',
			_0: {ctor: '_Tuple2', _0: 'B', _1: _newlandsvalley$elm_abc_parser$Abc_ParseTree$B},
			_1: {
				ctor: '::',
				_0: {ctor: '_Tuple2', _0: 'C', _1: _newlandsvalley$elm_abc_parser$Abc_ParseTree$C},
				_1: {
					ctor: '::',
					_0: {ctor: '_Tuple2', _0: 'D', _1: _newlandsvalley$elm_abc_parser$Abc_ParseTree$D},
					_1: {
						ctor: '::',
						_0: {ctor: '_Tuple2', _0: 'E', _1: _newlandsvalley$elm_abc_parser$Abc_ParseTree$E},
						_1: {
							ctor: '::',
							_0: {ctor: '_Tuple2', _0: 'F', _1: _newlandsvalley$elm_abc_parser$Abc_ParseTree$F},
							_1: {
								ctor: '::',
								_0: {ctor: '_Tuple2', _0: 'G', _1: _newlandsvalley$elm_abc_parser$Abc_ParseTree$G},
								_1: {ctor: '[]'}
							}
						}
					}
				}
			}
		}
	});
var _newlandsvalley$elm_abc_parser$Abc$lookupPitch = function (p) {
	return A2(
		_elm_lang$core$Maybe$withDefault,
		_newlandsvalley$elm_abc_parser$Abc_ParseTree$C,
		A2(
			_elm_lang$core$Dict$get,
			_elm_lang$core$String$toUpper(p),
			_newlandsvalley$elm_abc_parser$Abc$pitchClassDict));
};
var _newlandsvalley$elm_abc_parser$Abc$buildKeySignature = F3(
	function (pStr, ma, mm) {
		return {
			pitchClass: _newlandsvalley$elm_abc_parser$Abc$lookupPitch(pStr),
			accidental: ma,
			mode: A2(_elm_lang$core$Maybe$withDefault, _newlandsvalley$elm_abc_parser$Abc_ParseTree$Major, mm)
		};
	});
var _newlandsvalley$elm_abc_parser$Abc$buildNote = F5(
	function (macc, pitchStr, octave, ml, mt) {
		var tied = function () {
			var _p5 = mt;
			if (_p5.ctor === 'Just') {
				return true;
			} else {
				return false;
			}
		}();
		var spn = A2(_newlandsvalley$elm_abc_parser$Abc$scientificPitchNotation, pitchStr, octave);
		var p = _newlandsvalley$elm_abc_parser$Abc$lookupPitch(
			_elm_lang$core$String$toUpper(pitchStr));
		var l = A2(
			_elm_lang$core$Maybe$withDefault,
			_elm_community$ratio$Ratio$fromInt(1),
			ml);
		return {pitchClass: p, accidental: macc, octave: spn, duration: l, tied: tied};
	});
var _newlandsvalley$elm_abc_parser$Abc$buildKeyAccidental = F2(
	function (a, pitchStr) {
		var pc = _newlandsvalley$elm_abc_parser$Abc$lookupPitch(pitchStr);
		return {ctor: '_Tuple2', _0: pc, _1: a};
	});
var _newlandsvalley$elm_abc_parser$Abc$buildTempoSignature = F5(
	function (ms1, fs, c, i, ms2) {
		var noteLengths = _elm_lang$core$List$isEmpty(fs) ? {
			ctor: '::',
			_0: A2(_elm_community$ratio$Ratio$over, 1, 4),
			_1: {ctor: '[]'}
		} : fs;
		var ms = function () {
			var _p6 = ms1;
			if (_p6.ctor === 'Nothing') {
				return ms2;
			} else {
				return ms1;
			}
		}();
		return {noteLengths: noteLengths, bpm: i, marking: ms};
	});
var _newlandsvalley$elm_abc_parser$Abc$buildRationalFromExponential = function (i) {
	return A2(
		_elm_community$ratio$Ratio$over,
		1,
		Math.pow(2, i));
};
var _newlandsvalley$elm_abc_parser$Abc$invert = function (r) {
	var unit = _elm_community$ratio$Ratio$fromInt(1);
	return A2(_elm_community$ratio$Ratio$divide, unit, r);
};
var _newlandsvalley$elm_abc_parser$Abc$tup = A2(
	_Bogdanp$elm_combine$Combine_ops['<$>'],
	_elm_community$maybe_extra$Maybe_Extra$join,
	_Bogdanp$elm_combine$Combine$maybe(
		A2(
			_Bogdanp$elm_combine$Combine_ops['*>'],
			_Bogdanp$elm_combine$Combine_Char$char(
				_elm_lang$core$Native_Utils.chr(':')),
			_Bogdanp$elm_combine$Combine$maybe(
				_Bogdanp$elm_combine$Combine$regex('[2-9]')))));
var _newlandsvalley$elm_abc_parser$Abc$integralAsRational = A2(_Bogdanp$elm_combine$Combine_ops['<$>'], _elm_community$ratio$Ratio$fromInt, _Bogdanp$elm_combine$Combine_Num$int);
var _newlandsvalley$elm_abc_parser$Abc$maybeTie = A2(
	_Bogdanp$elm_combine$Combine_ops['<?>'],
	_Bogdanp$elm_combine$Combine$maybe(
		_Bogdanp$elm_combine$Combine_Char$char(
			_elm_lang$core$Native_Utils.chr('-'))),
	'tie');
var _newlandsvalley$elm_abc_parser$Abc$octaveShift = function (s) {
	var f = F2(
		function (c, acc) {
			var _p7 = c;
			switch (_p7.valueOf()) {
				case '\'':
					var _p8 = acc;
					var up = _p8._0;
					var down = _p8._1;
					return {ctor: '_Tuple2', _0: up + 1, _1: down};
				case ',':
					var _p9 = acc;
					var up = _p9._0;
					var down = _p9._1;
					return {ctor: '_Tuple2', _0: up, _1: down + 1};
				default:
					return acc;
			}
		});
	var octs = A3(
		_elm_lang$core$String$foldl,
		f,
		{ctor: '_Tuple2', _0: 0, _1: 0},
		s);
	return _elm_lang$core$Tuple$first(octs) - _elm_lang$core$Tuple$second(octs);
};
var _newlandsvalley$elm_abc_parser$Abc$moveOctave = A2(
	_Bogdanp$elm_combine$Combine_ops['<$>'],
	_newlandsvalley$elm_abc_parser$Abc$octaveShift,
	_Bogdanp$elm_combine$Combine$regex('[\',]*'));
var _newlandsvalley$elm_abc_parser$Abc$accidental = A2(
	_Bogdanp$elm_combine$Combine_ops['<$>'],
	_newlandsvalley$elm_abc_parser$Abc$buildAccidental,
	_Bogdanp$elm_combine$Combine$choice(
		{
			ctor: '::',
			_0: _Bogdanp$elm_combine$Combine$string('^^'),
			_1: {
				ctor: '::',
				_0: _Bogdanp$elm_combine$Combine$string('__'),
				_1: {
					ctor: '::',
					_0: _Bogdanp$elm_combine$Combine$string('^'),
					_1: {
						ctor: '::',
						_0: _Bogdanp$elm_combine$Combine$string('_'),
						_1: {
							ctor: '::',
							_0: _Bogdanp$elm_combine$Combine$string('='),
							_1: {ctor: '[]'}
						}
					}
				}
			}
		}));
var _newlandsvalley$elm_abc_parser$Abc$maybeAccidental = _Bogdanp$elm_combine$Combine$maybe(_newlandsvalley$elm_abc_parser$Abc$accidental);
var _newlandsvalley$elm_abc_parser$Abc$pitch = _Bogdanp$elm_combine$Combine$regex('[A-Ga-g]');
var _newlandsvalley$elm_abc_parser$Abc$inlineInfo = function (isInline) {
	var pattern = isInline ? '[^\r\n\\[\\]]*' : '[^\r\n]*';
	return _Bogdanp$elm_combine$Combine$regex(pattern);
};
var _newlandsvalley$elm_abc_parser$Abc$strToEol = _Bogdanp$elm_combine$Combine$regex('[^\r\n]*');
var _newlandsvalley$elm_abc_parser$Abc$annotationString = A2(
	_Bogdanp$elm_combine$Combine_ops['<*'],
	A2(
		_Bogdanp$elm_combine$Combine_ops['*>'],
		_Bogdanp$elm_combine$Combine$string('\"'),
		_Bogdanp$elm_combine$Combine$regex('[\\^\\>\\<-@](\\\\\"|[^\"\n])*')),
	A2(
		_Bogdanp$elm_combine$Combine_ops['<?>'],
		_Bogdanp$elm_combine$Combine$string('\"'),
		'annotation'));
var _newlandsvalley$elm_abc_parser$Abc$quotedString = A2(
	_Bogdanp$elm_combine$Combine_ops['<*'],
	A2(
		_Bogdanp$elm_combine$Combine_ops['*>'],
		_Bogdanp$elm_combine$Combine$string('\"'),
		_Bogdanp$elm_combine$Combine$regex('(\\\\\"|[^\"\n])*')),
	A2(
		_Bogdanp$elm_combine$Combine_ops['<?>'],
		_Bogdanp$elm_combine$Combine$string('\"'),
		'quoted string'));
var _newlandsvalley$elm_abc_parser$Abc$continuation = A2(
	_Bogdanp$elm_combine$Combine_ops['<*'],
	A2(
		_Bogdanp$elm_combine$Combine_ops['<*'],
		_Bogdanp$elm_combine$Combine$succeed(_newlandsvalley$elm_abc_parser$Abc_ParseTree$Continuation),
		_Bogdanp$elm_combine$Combine_Char$char(
			_elm_lang$core$Native_Utils.chr('\\'))),
	A2(
		_Bogdanp$elm_combine$Combine_ops['<?>'],
		_Bogdanp$elm_combine$Combine$regex('[^\r\n]*'),
		'continuation'));
var _newlandsvalley$elm_abc_parser$Abc$ignore = A2(
	_Bogdanp$elm_combine$Combine_ops['<*'],
	_Bogdanp$elm_combine$Combine$succeed(_newlandsvalley$elm_abc_parser$Abc_ParseTree$Ignore),
	A2(
		_Bogdanp$elm_combine$Combine_ops['<?>'],
		_Bogdanp$elm_combine$Combine$regex('[#@;`\\*\\?]+'),
		'ignored character'));
var _newlandsvalley$elm_abc_parser$Abc$scoreSpace = _Bogdanp$elm_combine$Combine$choice(
	{
		ctor: '::',
		_0: _Bogdanp$elm_combine$Combine_Char$space,
		_1: {
			ctor: '::',
			_0: _Bogdanp$elm_combine$Combine_Char$char(
				_elm_lang$core$Native_Utils.chr('y')),
			_1: {
				ctor: '::',
				_0: _Bogdanp$elm_combine$Combine_Char$tab,
				_1: {ctor: '[]'}
			}
		}
	});
var _newlandsvalley$elm_abc_parser$Abc$spacer = A2(
	_Bogdanp$elm_combine$Combine_ops['<$>'],
	_newlandsvalley$elm_abc_parser$Abc_ParseTree$Spacer,
	A2(
		_Bogdanp$elm_combine$Combine_ops['<?>'],
		A2(
			_Bogdanp$elm_combine$Combine_ops['<$>'],
			_elm_lang$core$List$length,
			_Bogdanp$elm_combine$Combine$many1(_newlandsvalley$elm_abc_parser$Abc$scoreSpace)),
		'space'));
var _newlandsvalley$elm_abc_parser$Abc$whiteSpace = A2(
	_Bogdanp$elm_combine$Combine_ops['<$>'],
	_elm_lang$core$String$fromList,
	_Bogdanp$elm_combine$Combine$many(
		_Bogdanp$elm_combine$Combine$choice(
			{
				ctor: '::',
				_0: _Bogdanp$elm_combine$Combine_Char$space,
				_1: {
					ctor: '::',
					_0: _Bogdanp$elm_combine$Combine_Char$tab,
					_1: {ctor: '[]'}
				}
			})));
var _newlandsvalley$elm_abc_parser$Abc$headerCode = function (c) {
	return A2(
		_Bogdanp$elm_combine$Combine_ops['<*'],
		A2(
			_Bogdanp$elm_combine$Combine_ops['<*'],
			_Bogdanp$elm_combine$Combine_Char$char(c),
			_Bogdanp$elm_combine$Combine_Char$char(
				_elm_lang$core$Native_Utils.chr(':'))),
		_newlandsvalley$elm_abc_parser$Abc$whiteSpace);
};
var _newlandsvalley$elm_abc_parser$Abc$unsupportedHeaderCode = A2(
	_Bogdanp$elm_combine$Combine_ops['<*'],
	A2(
		_Bogdanp$elm_combine$Combine_ops['<*'],
		_Bogdanp$elm_combine$Combine$regex('[a-qt-vx-zEJ]'),
		_Bogdanp$elm_combine$Combine_Char$char(
			_elm_lang$core$Native_Utils.chr(':'))),
	_newlandsvalley$elm_abc_parser$Abc$whiteSpace);
var _newlandsvalley$elm_abc_parser$Abc$spacedQuotedString = A2(
	_Bogdanp$elm_combine$Combine_ops['<*'],
	A2(_Bogdanp$elm_combine$Combine_ops['*>'], _newlandsvalley$elm_abc_parser$Abc$whiteSpace, _newlandsvalley$elm_abc_parser$Abc$quotedString),
	_newlandsvalley$elm_abc_parser$Abc$whiteSpace);
var _newlandsvalley$elm_abc_parser$Abc$tupletSignature = A2(
	_Bogdanp$elm_combine$Combine_ops['<*'],
	A2(
		_Bogdanp$elm_combine$Combine_ops['<*>'],
		A2(
			_Bogdanp$elm_combine$Combine_ops['<*>'],
			A2(
				_Bogdanp$elm_combine$Combine_ops['<$>'],
				_newlandsvalley$elm_abc_parser$Abc$buildTupletSignature,
				_Bogdanp$elm_combine$Combine$regex('[2-9]')),
			_newlandsvalley$elm_abc_parser$Abc$tup),
		_newlandsvalley$elm_abc_parser$Abc$tup),
	_newlandsvalley$elm_abc_parser$Abc$whiteSpace);
var _newlandsvalley$elm_abc_parser$Abc$comment = A2(
	_Bogdanp$elm_combine$Combine_ops['<$>'],
	_newlandsvalley$elm_abc_parser$Abc_ParseTree$Comment,
	A2(
		_Bogdanp$elm_combine$Combine_ops['<?>'],
		A2(
			_Bogdanp$elm_combine$Combine_ops['*>'],
			_Bogdanp$elm_combine$Combine$regex('%'),
			_newlandsvalley$elm_abc_parser$Abc$strToEol),
		'comment'));
var _newlandsvalley$elm_abc_parser$Abc$unsupportedHeader = A2(
	_Bogdanp$elm_combine$Combine_ops['<*'],
	A2(_Bogdanp$elm_combine$Combine_ops['<$'], _newlandsvalley$elm_abc_parser$Abc_ParseTree$UnsupportedHeader, _newlandsvalley$elm_abc_parser$Abc$unsupportedHeaderCode),
	A2(_Bogdanp$elm_combine$Combine_ops['<?>'], _newlandsvalley$elm_abc_parser$Abc$strToEol, 'unsupported header'));
var _newlandsvalley$elm_abc_parser$Abc$fieldContinuation = A2(
	_Bogdanp$elm_combine$Combine_ops['<$>'],
	_newlandsvalley$elm_abc_parser$Abc_ParseTree$FieldContinuation,
	A2(
		_Bogdanp$elm_combine$Combine_ops['<?>'],
		A2(
			_Bogdanp$elm_combine$Combine_ops['*>'],
			_newlandsvalley$elm_abc_parser$Abc$headerCode(
				_elm_lang$core$Native_Utils.chr('+')),
			_newlandsvalley$elm_abc_parser$Abc$strToEol),
		'field continuation'));
var _newlandsvalley$elm_abc_parser$Abc$transcription = A2(
	_Bogdanp$elm_combine$Combine_ops['<$>'],
	_newlandsvalley$elm_abc_parser$Abc_ParseTree$Transcription,
	A2(
		_Bogdanp$elm_combine$Combine_ops['<?>'],
		A2(
			_Bogdanp$elm_combine$Combine_ops['*>'],
			_newlandsvalley$elm_abc_parser$Abc$headerCode(
				_elm_lang$core$Native_Utils.chr('Z')),
			_newlandsvalley$elm_abc_parser$Abc$strToEol),
		'Z header'));
var _newlandsvalley$elm_abc_parser$Abc$referenceNumber = A2(
	_Bogdanp$elm_combine$Combine_ops['<$>'],
	_newlandsvalley$elm_abc_parser$Abc_ParseTree$ReferenceNumber,
	A2(
		_Bogdanp$elm_combine$Combine_ops['<?>'],
		A2(
			_Bogdanp$elm_combine$Combine_ops['*>'],
			_newlandsvalley$elm_abc_parser$Abc$headerCode(
				_elm_lang$core$Native_Utils.chr('X')),
			_Bogdanp$elm_combine$Combine_Num$int),
		'x header'));
var _newlandsvalley$elm_abc_parser$Abc$wordsAligned = function (isInline) {
	return A2(
		_Bogdanp$elm_combine$Combine_ops['<$>'],
		_newlandsvalley$elm_abc_parser$Abc_ParseTree$WordsAligned,
		A2(
			_Bogdanp$elm_combine$Combine_ops['<?>'],
			A2(
				_Bogdanp$elm_combine$Combine_ops['*>'],
				_newlandsvalley$elm_abc_parser$Abc$headerCode(
					_elm_lang$core$Native_Utils.chr('w')),
				_newlandsvalley$elm_abc_parser$Abc$inlineInfo(isInline)),
			'w header'));
};
var _newlandsvalley$elm_abc_parser$Abc$wordsAfter = function (isInline) {
	return A2(
		_Bogdanp$elm_combine$Combine_ops['<$>'],
		_newlandsvalley$elm_abc_parser$Abc_ParseTree$WordsAfter,
		A2(
			_Bogdanp$elm_combine$Combine_ops['<?>'],
			A2(
				_Bogdanp$elm_combine$Combine_ops['*>'],
				_newlandsvalley$elm_abc_parser$Abc$headerCode(
					_elm_lang$core$Native_Utils.chr('W')),
				_newlandsvalley$elm_abc_parser$Abc$inlineInfo(isInline)),
			'W header'));
};
var _newlandsvalley$elm_abc_parser$Abc$voice = function (isInline) {
	return A2(
		_Bogdanp$elm_combine$Combine_ops['<$>'],
		_newlandsvalley$elm_abc_parser$Abc_ParseTree$Voice,
		A2(
			_Bogdanp$elm_combine$Combine_ops['<?>'],
			A2(
				_Bogdanp$elm_combine$Combine_ops['*>'],
				_newlandsvalley$elm_abc_parser$Abc$headerCode(
					_elm_lang$core$Native_Utils.chr('V')),
				_newlandsvalley$elm_abc_parser$Abc$inlineInfo(isInline)),
			'V header'));
};
var _newlandsvalley$elm_abc_parser$Abc$userDefined = function (isInline) {
	return A2(
		_Bogdanp$elm_combine$Combine_ops['<$>'],
		_newlandsvalley$elm_abc_parser$Abc_ParseTree$UserDefined,
		A2(
			_Bogdanp$elm_combine$Combine_ops['<?>'],
			A2(
				_Bogdanp$elm_combine$Combine_ops['*>'],
				_newlandsvalley$elm_abc_parser$Abc$headerCode(
					_elm_lang$core$Native_Utils.chr('U')),
				_newlandsvalley$elm_abc_parser$Abc$inlineInfo(isInline)),
			'U header'));
};
var _newlandsvalley$elm_abc_parser$Abc$title = function (isInline) {
	return A2(
		_Bogdanp$elm_combine$Combine_ops['<$>'],
		_newlandsvalley$elm_abc_parser$Abc_ParseTree$Title,
		A2(
			_Bogdanp$elm_combine$Combine_ops['<?>'],
			A2(
				_Bogdanp$elm_combine$Combine_ops['*>'],
				_newlandsvalley$elm_abc_parser$Abc$headerCode(
					_elm_lang$core$Native_Utils.chr('T')),
				_newlandsvalley$elm_abc_parser$Abc$inlineInfo(isInline)),
			'T header'));
};
var _newlandsvalley$elm_abc_parser$Abc$symbolLine = function (isInline) {
	return A2(
		_Bogdanp$elm_combine$Combine_ops['<$>'],
		_newlandsvalley$elm_abc_parser$Abc_ParseTree$SymbolLine,
		A2(
			_Bogdanp$elm_combine$Combine_ops['<?>'],
			A2(
				_Bogdanp$elm_combine$Combine_ops['*>'],
				_newlandsvalley$elm_abc_parser$Abc$headerCode(
					_elm_lang$core$Native_Utils.chr('s')),
				_newlandsvalley$elm_abc_parser$Abc$inlineInfo(isInline)),
			's header'));
};
var _newlandsvalley$elm_abc_parser$Abc$tuneBodyOnlyInfo = function (isInline) {
	return A2(
		_Bogdanp$elm_combine$Combine_ops['<?>'],
		_Bogdanp$elm_combine$Combine$choice(
			{
				ctor: '::',
				_0: _newlandsvalley$elm_abc_parser$Abc$symbolLine(isInline),
				_1: {
					ctor: '::',
					_0: _newlandsvalley$elm_abc_parser$Abc$wordsAligned(isInline),
					_1: {ctor: '[]'}
				}
			}),
		'tune body only info');
};
var _newlandsvalley$elm_abc_parser$Abc$source = A2(
	_Bogdanp$elm_combine$Combine_ops['<$>'],
	_newlandsvalley$elm_abc_parser$Abc_ParseTree$Source,
	A2(
		_Bogdanp$elm_combine$Combine_ops['<?>'],
		A2(
			_Bogdanp$elm_combine$Combine_ops['*>'],
			_newlandsvalley$elm_abc_parser$Abc$headerCode(
				_elm_lang$core$Native_Utils.chr('S')),
			_newlandsvalley$elm_abc_parser$Abc$strToEol),
		'S header'));
var _newlandsvalley$elm_abc_parser$Abc$remark = function (isInline) {
	return A2(
		_Bogdanp$elm_combine$Combine_ops['<$>'],
		_newlandsvalley$elm_abc_parser$Abc_ParseTree$Remark,
		A2(
			_Bogdanp$elm_combine$Combine_ops['<?>'],
			A2(
				_Bogdanp$elm_combine$Combine_ops['*>'],
				_newlandsvalley$elm_abc_parser$Abc$headerCode(
					_elm_lang$core$Native_Utils.chr('r')),
				_newlandsvalley$elm_abc_parser$Abc$inlineInfo(isInline)),
			'r header'));
};
var _newlandsvalley$elm_abc_parser$Abc$rhythm = function (isInline) {
	return A2(
		_Bogdanp$elm_combine$Combine_ops['<$>'],
		_newlandsvalley$elm_abc_parser$Abc_ParseTree$Rhythm,
		A2(
			_Bogdanp$elm_combine$Combine_ops['<?>'],
			A2(
				_Bogdanp$elm_combine$Combine_ops['*>'],
				_newlandsvalley$elm_abc_parser$Abc$headerCode(
					_elm_lang$core$Native_Utils.chr('R')),
				_newlandsvalley$elm_abc_parser$Abc$inlineInfo(isInline)),
			'R header'));
};
var _newlandsvalley$elm_abc_parser$Abc$parts = function (isInline) {
	return A2(
		_Bogdanp$elm_combine$Combine_ops['<$>'],
		_newlandsvalley$elm_abc_parser$Abc_ParseTree$Parts,
		A2(
			_Bogdanp$elm_combine$Combine_ops['<?>'],
			A2(
				_Bogdanp$elm_combine$Combine_ops['*>'],
				_newlandsvalley$elm_abc_parser$Abc$headerCode(
					_elm_lang$core$Native_Utils.chr('P')),
				_newlandsvalley$elm_abc_parser$Abc$inlineInfo(isInline)),
			'P header'));
};
var _newlandsvalley$elm_abc_parser$Abc$origin = A2(
	_Bogdanp$elm_combine$Combine_ops['<$>'],
	_newlandsvalley$elm_abc_parser$Abc_ParseTree$Origin,
	A2(
		_Bogdanp$elm_combine$Combine_ops['<?>'],
		A2(
			_Bogdanp$elm_combine$Combine_ops['*>'],
			_newlandsvalley$elm_abc_parser$Abc$headerCode(
				_elm_lang$core$Native_Utils.chr('O')),
			_newlandsvalley$elm_abc_parser$Abc$strToEol),
		'O header'));
var _newlandsvalley$elm_abc_parser$Abc$notes = function (isInline) {
	return A2(
		_Bogdanp$elm_combine$Combine_ops['<$>'],
		_newlandsvalley$elm_abc_parser$Abc_ParseTree$Notes,
		A2(
			_Bogdanp$elm_combine$Combine_ops['<?>'],
			A2(
				_Bogdanp$elm_combine$Combine_ops['*>'],
				_newlandsvalley$elm_abc_parser$Abc$headerCode(
					_elm_lang$core$Native_Utils.chr('N')),
				_newlandsvalley$elm_abc_parser$Abc$inlineInfo(isInline)),
			'N header'));
};
var _newlandsvalley$elm_abc_parser$Abc$macro = function (isInline) {
	return A2(
		_Bogdanp$elm_combine$Combine_ops['<$>'],
		_newlandsvalley$elm_abc_parser$Abc_ParseTree$Macro,
		A2(
			_Bogdanp$elm_combine$Combine_ops['<?>'],
			A2(
				_Bogdanp$elm_combine$Combine_ops['*>'],
				_newlandsvalley$elm_abc_parser$Abc$headerCode(
					_elm_lang$core$Native_Utils.chr('m')),
				_newlandsvalley$elm_abc_parser$Abc$inlineInfo(isInline)),
			'm header'));
};
var _newlandsvalley$elm_abc_parser$Abc$instruction = function (isInline) {
	return A2(
		_Bogdanp$elm_combine$Combine_ops['<$>'],
		_newlandsvalley$elm_abc_parser$Abc_ParseTree$Instruction,
		A2(
			_Bogdanp$elm_combine$Combine_ops['<?>'],
			A2(
				_Bogdanp$elm_combine$Combine_ops['*>'],
				_newlandsvalley$elm_abc_parser$Abc$headerCode(
					_elm_lang$core$Native_Utils.chr('I')),
				_newlandsvalley$elm_abc_parser$Abc$inlineInfo(isInline)),
			'I header'));
};
var _newlandsvalley$elm_abc_parser$Abc$history = A2(
	_Bogdanp$elm_combine$Combine_ops['<$>'],
	_newlandsvalley$elm_abc_parser$Abc_ParseTree$History,
	A2(
		_Bogdanp$elm_combine$Combine_ops['<?>'],
		A2(
			_Bogdanp$elm_combine$Combine_ops['*>'],
			_newlandsvalley$elm_abc_parser$Abc$headerCode(
				_elm_lang$core$Native_Utils.chr('H')),
			_newlandsvalley$elm_abc_parser$Abc$strToEol),
		'H header'));
var _newlandsvalley$elm_abc_parser$Abc$group = A2(
	_Bogdanp$elm_combine$Combine_ops['<$>'],
	_newlandsvalley$elm_abc_parser$Abc_ParseTree$Group,
	A2(
		_Bogdanp$elm_combine$Combine_ops['<?>'],
		A2(
			_Bogdanp$elm_combine$Combine_ops['*>'],
			_newlandsvalley$elm_abc_parser$Abc$headerCode(
				_elm_lang$core$Native_Utils.chr('G')),
			_newlandsvalley$elm_abc_parser$Abc$strToEol),
		'G header'));
var _newlandsvalley$elm_abc_parser$Abc$fileUrl = A2(
	_Bogdanp$elm_combine$Combine_ops['<$>'],
	_newlandsvalley$elm_abc_parser$Abc_ParseTree$FileUrl,
	A2(
		_Bogdanp$elm_combine$Combine_ops['<?>'],
		A2(
			_Bogdanp$elm_combine$Combine_ops['*>'],
			_newlandsvalley$elm_abc_parser$Abc$headerCode(
				_elm_lang$core$Native_Utils.chr('F')),
			_newlandsvalley$elm_abc_parser$Abc$strToEol),
		'F header'));
var _newlandsvalley$elm_abc_parser$Abc$discography = A2(
	_Bogdanp$elm_combine$Combine_ops['<$>'],
	_newlandsvalley$elm_abc_parser$Abc_ParseTree$Discography,
	A2(
		_Bogdanp$elm_combine$Combine_ops['<?>'],
		A2(
			_Bogdanp$elm_combine$Combine_ops['*>'],
			_newlandsvalley$elm_abc_parser$Abc$headerCode(
				_elm_lang$core$Native_Utils.chr('D')),
			_newlandsvalley$elm_abc_parser$Abc$strToEol),
		'D header'));
var _newlandsvalley$elm_abc_parser$Abc$composer = A2(
	_Bogdanp$elm_combine$Combine_ops['<$>'],
	_newlandsvalley$elm_abc_parser$Abc_ParseTree$Composer,
	A2(
		_Bogdanp$elm_combine$Combine_ops['<?>'],
		A2(
			_Bogdanp$elm_combine$Combine_ops['*>'],
			_newlandsvalley$elm_abc_parser$Abc$headerCode(
				_elm_lang$core$Native_Utils.chr('C')),
			_newlandsvalley$elm_abc_parser$Abc$strToEol),
		'C header'));
var _newlandsvalley$elm_abc_parser$Abc$book = A2(
	_Bogdanp$elm_combine$Combine_ops['<$>'],
	_newlandsvalley$elm_abc_parser$Abc_ParseTree$Book,
	A2(
		_Bogdanp$elm_combine$Combine_ops['<?>'],
		A2(
			_Bogdanp$elm_combine$Combine_ops['*>'],
			_newlandsvalley$elm_abc_parser$Abc$headerCode(
				_elm_lang$core$Native_Utils.chr('B')),
			_newlandsvalley$elm_abc_parser$Abc$strToEol),
		'B Header'));
var _newlandsvalley$elm_abc_parser$Abc$area = A2(
	_Bogdanp$elm_combine$Combine_ops['<$>'],
	_newlandsvalley$elm_abc_parser$Abc_ParseTree$Area,
	A2(
		_Bogdanp$elm_combine$Combine_ops['<?>'],
		A2(
			_Bogdanp$elm_combine$Combine_ops['*>'],
			_newlandsvalley$elm_abc_parser$Abc$headerCode(
				_elm_lang$core$Native_Utils.chr('A')),
			_newlandsvalley$elm_abc_parser$Abc$strToEol),
		'A header'));
var _newlandsvalley$elm_abc_parser$Abc$tuneInfo = A2(
	_Bogdanp$elm_combine$Combine_ops['<?>'],
	_Bogdanp$elm_combine$Combine$choice(
		{
			ctor: '::',
			_0: _newlandsvalley$elm_abc_parser$Abc$area,
			_1: {
				ctor: '::',
				_0: _newlandsvalley$elm_abc_parser$Abc$book,
				_1: {
					ctor: '::',
					_0: _newlandsvalley$elm_abc_parser$Abc$composer,
					_1: {
						ctor: '::',
						_0: _newlandsvalley$elm_abc_parser$Abc$discography,
						_1: {
							ctor: '::',
							_0: _newlandsvalley$elm_abc_parser$Abc$fileUrl,
							_1: {
								ctor: '::',
								_0: _newlandsvalley$elm_abc_parser$Abc$group,
								_1: {
									ctor: '::',
									_0: _newlandsvalley$elm_abc_parser$Abc$history,
									_1: {
										ctor: '::',
										_0: _newlandsvalley$elm_abc_parser$Abc$origin,
										_1: {
											ctor: '::',
											_0: _newlandsvalley$elm_abc_parser$Abc$source,
											_1: {
												ctor: '::',
												_0: _newlandsvalley$elm_abc_parser$Abc$referenceNumber,
												_1: {
													ctor: '::',
													_0: _newlandsvalley$elm_abc_parser$Abc$transcription,
													_1: {
														ctor: '::',
														_0: _newlandsvalley$elm_abc_parser$Abc$unsupportedHeader,
														_1: {ctor: '[]'}
													}
												}
											}
										}
									}
								}
							}
						}
					}
				}
			}
		}),
	'tune info');
var _newlandsvalley$elm_abc_parser$Abc$locrian = A2(
	_Bogdanp$elm_combine$Combine_ops['<*'],
	A2(_Bogdanp$elm_combine$Combine_ops['<$'], _newlandsvalley$elm_abc_parser$Abc_ParseTree$Locrian, _newlandsvalley$elm_abc_parser$Abc$whiteSpace),
	_Bogdanp$elm_combine$Combine$regex('(L|l)(O|o)(C|c)([A-Za-z])*'));
var _newlandsvalley$elm_abc_parser$Abc$aeolian = A2(
	_Bogdanp$elm_combine$Combine_ops['<*'],
	A2(_Bogdanp$elm_combine$Combine_ops['<$'], _newlandsvalley$elm_abc_parser$Abc_ParseTree$Aeolian, _newlandsvalley$elm_abc_parser$Abc$whiteSpace),
	_Bogdanp$elm_combine$Combine$regex('(A|a)(E|e)(O|o)([A-Za-z])*'));
var _newlandsvalley$elm_abc_parser$Abc$mixolydian = A2(
	_Bogdanp$elm_combine$Combine_ops['<*'],
	A2(_Bogdanp$elm_combine$Combine_ops['<$'], _newlandsvalley$elm_abc_parser$Abc_ParseTree$Mixolydian, _newlandsvalley$elm_abc_parser$Abc$whiteSpace),
	_Bogdanp$elm_combine$Combine$regex('(M|m)(I|i)(X|x)([A-Za-z])*'));
var _newlandsvalley$elm_abc_parser$Abc$lydian = A2(
	_Bogdanp$elm_combine$Combine_ops['<*'],
	A2(_Bogdanp$elm_combine$Combine_ops['<$'], _newlandsvalley$elm_abc_parser$Abc_ParseTree$Lydian, _newlandsvalley$elm_abc_parser$Abc$whiteSpace),
	_Bogdanp$elm_combine$Combine$regex('(L|l)(Y|y)(D|d)([A-Za-z])*'));
var _newlandsvalley$elm_abc_parser$Abc$phrygian = A2(
	_Bogdanp$elm_combine$Combine_ops['<*'],
	A2(_Bogdanp$elm_combine$Combine_ops['<$'], _newlandsvalley$elm_abc_parser$Abc_ParseTree$Phrygian, _newlandsvalley$elm_abc_parser$Abc$whiteSpace),
	_Bogdanp$elm_combine$Combine$regex('(P|p)(H|h)(R|r)([A-Za-z])*'));
var _newlandsvalley$elm_abc_parser$Abc$dorian = A2(
	_Bogdanp$elm_combine$Combine_ops['<*'],
	A2(_Bogdanp$elm_combine$Combine_ops['<$'], _newlandsvalley$elm_abc_parser$Abc_ParseTree$Dorian, _newlandsvalley$elm_abc_parser$Abc$whiteSpace),
	_Bogdanp$elm_combine$Combine$regex('(D|d)(O|o)(R|r)([A-Za-z])*'));
var _newlandsvalley$elm_abc_parser$Abc$ionian = A2(
	_Bogdanp$elm_combine$Combine_ops['<*'],
	A2(_Bogdanp$elm_combine$Combine_ops['<$'], _newlandsvalley$elm_abc_parser$Abc_ParseTree$Ionian, _newlandsvalley$elm_abc_parser$Abc$whiteSpace),
	_Bogdanp$elm_combine$Combine$regex('(I|i)(O|o)(N|n)([A-Za-z])*'));
var _newlandsvalley$elm_abc_parser$Abc$major = A2(
	_Bogdanp$elm_combine$Combine_ops['<*'],
	A2(_Bogdanp$elm_combine$Combine_ops['<$'], _newlandsvalley$elm_abc_parser$Abc_ParseTree$Major, _newlandsvalley$elm_abc_parser$Abc$whiteSpace),
	_Bogdanp$elm_combine$Combine$regex('(M|m)(A|a)(J|j)([A-Za-z])*'));
var _newlandsvalley$elm_abc_parser$Abc$minor = A2(
	_Bogdanp$elm_combine$Combine_ops['<*'],
	A2(_Bogdanp$elm_combine$Combine_ops['<$'], _newlandsvalley$elm_abc_parser$Abc_ParseTree$Minor, _newlandsvalley$elm_abc_parser$Abc$whiteSpace),
	_Bogdanp$elm_combine$Combine$regex('(M|m)([A-Za-z])*'));
var _newlandsvalley$elm_abc_parser$Abc$mode = _Bogdanp$elm_combine$Combine$choice(
	{
		ctor: '::',
		_0: _newlandsvalley$elm_abc_parser$Abc$major,
		_1: {
			ctor: '::',
			_0: _newlandsvalley$elm_abc_parser$Abc$ionian,
			_1: {
				ctor: '::',
				_0: _newlandsvalley$elm_abc_parser$Abc$dorian,
				_1: {
					ctor: '::',
					_0: _newlandsvalley$elm_abc_parser$Abc$phrygian,
					_1: {
						ctor: '::',
						_0: _newlandsvalley$elm_abc_parser$Abc$lydian,
						_1: {
							ctor: '::',
							_0: _newlandsvalley$elm_abc_parser$Abc$mixolydian,
							_1: {
								ctor: '::',
								_0: _newlandsvalley$elm_abc_parser$Abc$aeolian,
								_1: {
									ctor: '::',
									_0: _newlandsvalley$elm_abc_parser$Abc$locrian,
									_1: {
										ctor: '::',
										_0: _newlandsvalley$elm_abc_parser$Abc$minor,
										_1: {ctor: '[]'}
									}
								}
							}
						}
					}
				}
			}
		}
	});
var _newlandsvalley$elm_abc_parser$Abc$keyAccidental = A2(
	_Bogdanp$elm_combine$Combine_ops['<*>'],
	A2(_Bogdanp$elm_combine$Combine_ops['<$>'], _newlandsvalley$elm_abc_parser$Abc$buildKeyAccidental, _newlandsvalley$elm_abc_parser$Abc$accidental),
	_newlandsvalley$elm_abc_parser$Abc$pitch);
var _newlandsvalley$elm_abc_parser$Abc$keyAccidentalsList = _Bogdanp$elm_combine$Combine$many(
	A2(_Bogdanp$elm_combine$Combine_ops['*>'], _Bogdanp$elm_combine$Combine_Char$space, _newlandsvalley$elm_abc_parser$Abc$keyAccidental));
var _newlandsvalley$elm_abc_parser$Abc$spacelessAccidental = _Bogdanp$elm_combine$Combine$maybe(_newlandsvalley$elm_abc_parser$Abc$keyAccidental);
var _newlandsvalley$elm_abc_parser$Abc$keyAccidentals = A2(
	_Bogdanp$elm_combine$Combine_ops['<*>'],
	A2(_Bogdanp$elm_combine$Combine_ops['<$>'], _newlandsvalley$elm_abc_parser$Abc$buildKeyAccidentals, _newlandsvalley$elm_abc_parser$Abc$spacelessAccidental),
	_newlandsvalley$elm_abc_parser$Abc$keyAccidentalsList);
var _newlandsvalley$elm_abc_parser$Abc$keyName = _Bogdanp$elm_combine$Combine$regex('[A-G]');
var _newlandsvalley$elm_abc_parser$Abc$sharpOrFlat = A2(
	_Bogdanp$elm_combine$Combine$map,
	function (x) {
		return _elm_lang$core$Native_Utils.eq(
			x,
			_elm_lang$core$Native_Utils.chr('#')) ? _newlandsvalley$elm_abc_parser$Abc_ParseTree$Sharp : _newlandsvalley$elm_abc_parser$Abc_ParseTree$Flat;
	},
	_Bogdanp$elm_combine$Combine$choice(
		{
			ctor: '::',
			_0: _Bogdanp$elm_combine$Combine_Char$char(
				_elm_lang$core$Native_Utils.chr('#')),
			_1: {
				ctor: '::',
				_0: _Bogdanp$elm_combine$Combine_Char$char(
					_elm_lang$core$Native_Utils.chr('b')),
				_1: {ctor: '[]'}
			}
		}));
var _newlandsvalley$elm_abc_parser$Abc$keySignature = A2(
	_Bogdanp$elm_combine$Combine_ops['<*>'],
	A2(
		_Bogdanp$elm_combine$Combine_ops['<*>'],
		A2(_Bogdanp$elm_combine$Combine_ops['<$>'], _newlandsvalley$elm_abc_parser$Abc$buildKeySignature, _newlandsvalley$elm_abc_parser$Abc$keyName),
		_Bogdanp$elm_combine$Combine$maybe(_newlandsvalley$elm_abc_parser$Abc$sharpOrFlat)),
	_Bogdanp$elm_combine$Combine$maybe(_newlandsvalley$elm_abc_parser$Abc$mode));
var _newlandsvalley$elm_abc_parser$Abc$key = A2(
	_Bogdanp$elm_combine$Combine_ops['<*'],
	A2(
		_Bogdanp$elm_combine$Combine_ops['<*>'],
		A2(
			_Bogdanp$elm_combine$Combine_ops['<*>'],
			A2(
				_Bogdanp$elm_combine$Combine_ops['<$>'],
				_newlandsvalley$elm_abc_parser$Abc$buildKey,
				_newlandsvalley$elm_abc_parser$Abc$headerCode(
					_elm_lang$core$Native_Utils.chr('K'))),
			_newlandsvalley$elm_abc_parser$Abc$keySignature),
		_newlandsvalley$elm_abc_parser$Abc$keyAccidentals),
	A2(_Bogdanp$elm_combine$Combine_ops['<?>'], _newlandsvalley$elm_abc_parser$Abc$whiteSpace, 'K header'));
var _newlandsvalley$elm_abc_parser$Abc$parseKeySignature = function (s) {
	var _p10 = A2(_Bogdanp$elm_combine$Combine$parse, _newlandsvalley$elm_abc_parser$Abc$keySignature, s);
	if (_p10.ctor === 'Ok') {
		return _elm_lang$core$Result$Ok(
			{
				ctor: '_Tuple2',
				_0: _p10._0._2,
				_1: {ctor: '[]'}
			});
	} else {
		var _p11 = _p10._0._1;
		return _elm_lang$core$Result$Err(
			{msgs: _p10._0._2, input: _p11.input, position: _p11.position});
	}
};
var _newlandsvalley$elm_abc_parser$Abc$nometer = A2(
	_Bogdanp$elm_combine$Combine_ops['<$'],
	_elm_lang$core$Maybe$Nothing,
	_Bogdanp$elm_combine$Combine$string('none'));
var _newlandsvalley$elm_abc_parser$Abc$meterSignature = A2(
	_Bogdanp$elm_combine$Combine_ops['<$>'],
	_elm_lang$core$Maybe$Just,
	A2(
		_Bogdanp$elm_combine$Combine_ops['<*'],
		A2(
			_Bogdanp$elm_combine$Combine_ops['<*>'],
			A2(
				_Bogdanp$elm_combine$Combine_ops['<*'],
				A2(
					_Bogdanp$elm_combine$Combine_ops['<$>'],
					F2(
						function (v0, v1) {
							return {ctor: '_Tuple2', _0: v0, _1: v1};
						}),
					_Bogdanp$elm_combine$Combine_Num$int),
				_Bogdanp$elm_combine$Combine_Char$char(
					_elm_lang$core$Native_Utils.chr('/'))),
			_Bogdanp$elm_combine$Combine_Num$int),
		_newlandsvalley$elm_abc_parser$Abc$whiteSpace));
var _newlandsvalley$elm_abc_parser$Abc$cutTime = A2(
	_Bogdanp$elm_combine$Combine_ops['<$'],
	_elm_lang$core$Maybe$Just(
		{ctor: '_Tuple2', _0: 2, _1: 2}),
	_Bogdanp$elm_combine$Combine$string('C|'));
var _newlandsvalley$elm_abc_parser$Abc$commonTime = A2(
	_Bogdanp$elm_combine$Combine_ops['<$'],
	_elm_lang$core$Maybe$Just(
		{ctor: '_Tuple2', _0: 4, _1: 4}),
	_Bogdanp$elm_combine$Combine_Char$char(
		_elm_lang$core$Native_Utils.chr('C')));
var _newlandsvalley$elm_abc_parser$Abc$meterDefinition = _Bogdanp$elm_combine$Combine$choice(
	{
		ctor: '::',
		_0: _newlandsvalley$elm_abc_parser$Abc$cutTime,
		_1: {
			ctor: '::',
			_0: _newlandsvalley$elm_abc_parser$Abc$commonTime,
			_1: {
				ctor: '::',
				_0: _newlandsvalley$elm_abc_parser$Abc$meterSignature,
				_1: {
					ctor: '::',
					_0: _newlandsvalley$elm_abc_parser$Abc$nometer,
					_1: {ctor: '[]'}
				}
			}
		}
	});
var _newlandsvalley$elm_abc_parser$Abc$meter = A2(
	_Bogdanp$elm_combine$Combine_ops['<$>'],
	_newlandsvalley$elm_abc_parser$Abc_ParseTree$Meter,
	A2(
		_Bogdanp$elm_combine$Combine_ops['<?>'],
		A2(
			_Bogdanp$elm_combine$Combine_ops['*>'],
			_newlandsvalley$elm_abc_parser$Abc$headerCode(
				_elm_lang$core$Native_Utils.chr('M')),
			_newlandsvalley$elm_abc_parser$Abc$meterDefinition),
		'M header'));
var _newlandsvalley$elm_abc_parser$Abc$slashesRational = A2(
	_Bogdanp$elm_combine$Combine_ops['<$>'],
	_newlandsvalley$elm_abc_parser$Abc$buildRationalFromExponential,
	A2(
		_Bogdanp$elm_combine$Combine_ops['<$>'],
		_elm_lang$core$List$length,
		_Bogdanp$elm_combine$Combine$many1(
			_Bogdanp$elm_combine$Combine_Char$char(
				_elm_lang$core$Native_Utils.chr('/')))));
var _newlandsvalley$elm_abc_parser$Abc$curtailedRightRational = A2(
	_Bogdanp$elm_combine$Combine_ops['<$>'],
	_newlandsvalley$elm_abc_parser$Abc$invert,
	A2(
		_Bogdanp$elm_combine$Combine_ops['<$>'],
		_elm_community$ratio$Ratio$over(2),
		A2(
			_Bogdanp$elm_combine$Combine_ops['<*'],
			_Bogdanp$elm_combine$Combine_Num$int,
			_Bogdanp$elm_combine$Combine_Char$char(
				_elm_lang$core$Native_Utils.chr('/')))));
var _newlandsvalley$elm_abc_parser$Abc$curtailedLeftRational = A2(
	_Bogdanp$elm_combine$Combine_ops['<$>'],
	_elm_community$ratio$Ratio$over(1),
	A2(
		_Bogdanp$elm_combine$Combine_ops['*>'],
		_Bogdanp$elm_combine$Combine_Char$char(
			_elm_lang$core$Native_Utils.chr('/')),
		_Bogdanp$elm_combine$Combine_Num$int));
var _newlandsvalley$elm_abc_parser$Abc$rational = A2(
	_Bogdanp$elm_combine$Combine_ops['<*>'],
	A2(
		_Bogdanp$elm_combine$Combine_ops['<*'],
		A2(_Bogdanp$elm_combine$Combine_ops['<$>'], _elm_community$ratio$Ratio$over, _Bogdanp$elm_combine$Combine_Num$int),
		_Bogdanp$elm_combine$Combine_Char$char(
			_elm_lang$core$Native_Utils.chr('/'))),
	_Bogdanp$elm_combine$Combine_Num$int);
var _newlandsvalley$elm_abc_parser$Abc$headerRational = A2(_Bogdanp$elm_combine$Combine_ops['<*'], _newlandsvalley$elm_abc_parser$Abc$rational, _newlandsvalley$elm_abc_parser$Abc$whiteSpace);
var _newlandsvalley$elm_abc_parser$Abc$tempoSignature = A2(
	_Bogdanp$elm_combine$Combine_ops['<*'],
	A2(
		_Bogdanp$elm_combine$Combine_ops['<*>'],
		A2(
			_Bogdanp$elm_combine$Combine_ops['<*>'],
			A2(
				_Bogdanp$elm_combine$Combine_ops['<*>'],
				A2(
					_Bogdanp$elm_combine$Combine_ops['<*>'],
					A2(
						_Bogdanp$elm_combine$Combine_ops['<$>'],
						_newlandsvalley$elm_abc_parser$Abc$buildTempoSignature,
						_Bogdanp$elm_combine$Combine$maybe(_newlandsvalley$elm_abc_parser$Abc$spacedQuotedString)),
					_Bogdanp$elm_combine$Combine$many(_newlandsvalley$elm_abc_parser$Abc$headerRational)),
				_Bogdanp$elm_combine$Combine$maybe(
					_Bogdanp$elm_combine$Combine_Char$char(
						_elm_lang$core$Native_Utils.chr('=')))),
			_Bogdanp$elm_combine$Combine_Num$int),
		_Bogdanp$elm_combine$Combine$maybe(_newlandsvalley$elm_abc_parser$Abc$spacedQuotedString)),
	_newlandsvalley$elm_abc_parser$Abc$whiteSpace);
var _newlandsvalley$elm_abc_parser$Abc$tempo = A2(
	_Bogdanp$elm_combine$Combine_ops['<$>'],
	_newlandsvalley$elm_abc_parser$Abc_ParseTree$Tempo,
	A2(
		_Bogdanp$elm_combine$Combine_ops['<?>'],
		A2(
			_Bogdanp$elm_combine$Combine_ops['*>'],
			_newlandsvalley$elm_abc_parser$Abc$headerCode(
				_elm_lang$core$Native_Utils.chr('Q')),
			_newlandsvalley$elm_abc_parser$Abc$tempoSignature),
		'Q header'));
var _newlandsvalley$elm_abc_parser$Abc$noteDuration = A2(_Bogdanp$elm_combine$Combine_ops['<*'], _newlandsvalley$elm_abc_parser$Abc$rational, _newlandsvalley$elm_abc_parser$Abc$whiteSpace);
var _newlandsvalley$elm_abc_parser$Abc$unitNoteLength = A2(
	_Bogdanp$elm_combine$Combine_ops['<$>'],
	_newlandsvalley$elm_abc_parser$Abc_ParseTree$UnitNoteLength,
	A2(
		_Bogdanp$elm_combine$Combine_ops['<?>'],
		A2(
			_Bogdanp$elm_combine$Combine_ops['*>'],
			_newlandsvalley$elm_abc_parser$Abc$headerCode(
				_elm_lang$core$Native_Utils.chr('L')),
			_newlandsvalley$elm_abc_parser$Abc$noteDuration),
		'L header'));
var _newlandsvalley$elm_abc_parser$Abc$anywhereInfo = function (isInline) {
	return A2(
		_Bogdanp$elm_combine$Combine_ops['<?>'],
		_Bogdanp$elm_combine$Combine$choice(
			{
				ctor: '::',
				_0: _newlandsvalley$elm_abc_parser$Abc$instruction(isInline),
				_1: {
					ctor: '::',
					_0: _newlandsvalley$elm_abc_parser$Abc$key,
					_1: {
						ctor: '::',
						_0: _newlandsvalley$elm_abc_parser$Abc$unitNoteLength,
						_1: {
							ctor: '::',
							_0: _newlandsvalley$elm_abc_parser$Abc$meter,
							_1: {
								ctor: '::',
								_0: _newlandsvalley$elm_abc_parser$Abc$macro(isInline),
								_1: {
									ctor: '::',
									_0: _newlandsvalley$elm_abc_parser$Abc$notes(isInline),
									_1: {
										ctor: '::',
										_0: _newlandsvalley$elm_abc_parser$Abc$parts(isInline),
										_1: {
											ctor: '::',
											_0: _newlandsvalley$elm_abc_parser$Abc$tempo,
											_1: {
												ctor: '::',
												_0: _newlandsvalley$elm_abc_parser$Abc$rhythm(isInline),
												_1: {
													ctor: '::',
													_0: _newlandsvalley$elm_abc_parser$Abc$remark(isInline),
													_1: {
														ctor: '::',
														_0: _newlandsvalley$elm_abc_parser$Abc$title(isInline),
														_1: {
															ctor: '::',
															_0: _newlandsvalley$elm_abc_parser$Abc$userDefined(isInline),
															_1: {
																ctor: '::',
																_0: _newlandsvalley$elm_abc_parser$Abc$voice(isInline),
																_1: {
																	ctor: '::',
																	_0: _newlandsvalley$elm_abc_parser$Abc$wordsAfter(isInline),
																	_1: {
																		ctor: '::',
																		_0: _newlandsvalley$elm_abc_parser$Abc$fieldContinuation,
																		_1: {
																			ctor: '::',
																			_0: _newlandsvalley$elm_abc_parser$Abc$comment,
																			_1: {ctor: '[]'}
																		}
																	}
																}
															}
														}
													}
												}
											}
										}
									}
								}
							}
						}
					}
				}
			}),
		'anywhere info');
};
var _newlandsvalley$elm_abc_parser$Abc$informationField = function (isInline) {
	return A2(
		_Bogdanp$elm_combine$Combine_ops['<?>'],
		_Bogdanp$elm_combine$Combine$choice(
			{
				ctor: '::',
				_0: _newlandsvalley$elm_abc_parser$Abc$anywhereInfo(isInline),
				_1: {
					ctor: '::',
					_0: _newlandsvalley$elm_abc_parser$Abc$tuneInfo,
					_1: {ctor: '[]'}
				}
			}),
		'header');
};
var _newlandsvalley$elm_abc_parser$Abc$header = A2(
	_Bogdanp$elm_combine$Combine_ops['<*'],
	_newlandsvalley$elm_abc_parser$Abc$informationField(false),
	_Bogdanp$elm_combine$Combine_Char$eol);
var _newlandsvalley$elm_abc_parser$Abc$headers = A2(
	_Bogdanp$elm_combine$Combine_ops['<?>'],
	_Bogdanp$elm_combine$Combine$many(_newlandsvalley$elm_abc_parser$Abc$header),
	'headers');
var _newlandsvalley$elm_abc_parser$Abc$tuneBodyInfo = function (isInline) {
	return A2(
		_Bogdanp$elm_combine$Combine_ops['<?>'],
		_Bogdanp$elm_combine$Combine$choice(
			{
				ctor: '::',
				_0: _newlandsvalley$elm_abc_parser$Abc$tuneBodyOnlyInfo(isInline),
				_1: {
					ctor: '::',
					_0: _newlandsvalley$elm_abc_parser$Abc$anywhereInfo(isInline),
					_1: {ctor: '[]'}
				}
			}),
		'tune body info');
};
var _newlandsvalley$elm_abc_parser$Abc$tuneBodyHeader = A2(
	_Bogdanp$elm_combine$Combine_ops['<*'],
	A2(
		_Bogdanp$elm_combine$Combine_ops['<$>'],
		_newlandsvalley$elm_abc_parser$Abc_ParseTree$BodyInfo,
		_newlandsvalley$elm_abc_parser$Abc$tuneBodyInfo(true)),
	A2(_Bogdanp$elm_combine$Combine_ops['<?>'], _Bogdanp$elm_combine$Combine_Char$eol, 'tune body header'));
var _newlandsvalley$elm_abc_parser$Abc$noteDur = _Bogdanp$elm_combine$Combine$choice(
	{
		ctor: '::',
		_0: _newlandsvalley$elm_abc_parser$Abc$rational,
		_1: {
			ctor: '::',
			_0: _newlandsvalley$elm_abc_parser$Abc$curtailedRightRational,
			_1: {
				ctor: '::',
				_0: _newlandsvalley$elm_abc_parser$Abc$integralAsRational,
				_1: {
					ctor: '::',
					_0: _newlandsvalley$elm_abc_parser$Abc$curtailedLeftRational,
					_1: {
						ctor: '::',
						_0: _newlandsvalley$elm_abc_parser$Abc$slashesRational,
						_1: {ctor: '[]'}
					}
				}
			}
		}
	});
var _newlandsvalley$elm_abc_parser$Abc$abcNote = A2(
	_Bogdanp$elm_combine$Combine_ops['<*>'],
	A2(
		_Bogdanp$elm_combine$Combine_ops['<*>'],
		A2(
			_Bogdanp$elm_combine$Combine_ops['<*>'],
			A2(
				_Bogdanp$elm_combine$Combine_ops['<*>'],
				A2(_Bogdanp$elm_combine$Combine_ops['<$>'], _newlandsvalley$elm_abc_parser$Abc$buildNote, _newlandsvalley$elm_abc_parser$Abc$maybeAccidental),
				_newlandsvalley$elm_abc_parser$Abc$pitch),
			_newlandsvalley$elm_abc_parser$Abc$moveOctave),
		_Bogdanp$elm_combine$Combine$maybe(_newlandsvalley$elm_abc_parser$Abc$noteDur)),
	A2(_Bogdanp$elm_combine$Combine_ops['<?>'], _newlandsvalley$elm_abc_parser$Abc$maybeTie, 'ABC note'));
var _newlandsvalley$elm_abc_parser$Abc$note = A2(_Bogdanp$elm_combine$Combine_ops['<$>'], _newlandsvalley$elm_abc_parser$Abc_ParseTree$Note, _newlandsvalley$elm_abc_parser$Abc$abcNote);
var _newlandsvalley$elm_abc_parser$Abc$tuplet = A2(
	_Bogdanp$elm_combine$Combine_ops['<*>'],
	A2(
		_Bogdanp$elm_combine$Combine_ops['<$>'],
		_newlandsvalley$elm_abc_parser$Abc_ParseTree$Tuplet,
		A2(
			_Bogdanp$elm_combine$Combine_ops['*>'],
			_Bogdanp$elm_combine$Combine_Char$char(
				_elm_lang$core$Native_Utils.chr('(')),
			_newlandsvalley$elm_abc_parser$Abc$tupletSignature)),
	A2(
		_Bogdanp$elm_combine$Combine_ops['<?>'],
		_Bogdanp$elm_combine$Combine$many1(_newlandsvalley$elm_abc_parser$Abc$abcNote),
		'tuplet'));
var _newlandsvalley$elm_abc_parser$Abc$abcChord = A2(
	_Bogdanp$elm_combine$Combine_ops['<*>'],
	A2(
		_Bogdanp$elm_combine$Combine_ops['<$>'],
		_newlandsvalley$elm_abc_parser$Abc$buildChord,
		A3(
			_Bogdanp$elm_combine$Combine$between,
			_Bogdanp$elm_combine$Combine_Char$char(
				_elm_lang$core$Native_Utils.chr('[')),
			_Bogdanp$elm_combine$Combine_Char$char(
				_elm_lang$core$Native_Utils.chr(']')),
			_Bogdanp$elm_combine$Combine$many1(_newlandsvalley$elm_abc_parser$Abc$abcNote))),
	A2(
		_Bogdanp$elm_combine$Combine_ops['<?>'],
		_Bogdanp$elm_combine$Combine$maybe(_newlandsvalley$elm_abc_parser$Abc$noteDur),
		'ABC chord'));
var _newlandsvalley$elm_abc_parser$Abc$longDecoration = A2(
	_Bogdanp$elm_combine$Combine_ops['<?>'],
	A3(
		_Bogdanp$elm_combine$Combine$between,
		_Bogdanp$elm_combine$Combine_Char$char(
			_elm_lang$core$Native_Utils.chr('!')),
		_Bogdanp$elm_combine$Combine_Char$char(
			_elm_lang$core$Native_Utils.chr('!')),
		_Bogdanp$elm_combine$Combine$regex('[^\r\n!]*')),
	'long decoration');
var _newlandsvalley$elm_abc_parser$Abc$shortDecoration = A2(
	_Bogdanp$elm_combine$Combine_ops['<?>'],
	_Bogdanp$elm_combine$Combine$regex('[\\.~HLMOPSTuv]'),
	'short decoration');
var _newlandsvalley$elm_abc_parser$Abc$decoration = A2(
	_Bogdanp$elm_combine$Combine_ops['<$>'],
	_newlandsvalley$elm_abc_parser$Abc_ParseTree$Decoration,
	A2(
		_Bogdanp$elm_combine$Combine_ops['<?>'],
		_Bogdanp$elm_combine$Combine$choice(
			{
				ctor: '::',
				_0: _newlandsvalley$elm_abc_parser$Abc$shortDecoration,
				_1: {
					ctor: '::',
					_0: _newlandsvalley$elm_abc_parser$Abc$longDecoration,
					_1: {ctor: '[]'}
				}
			}),
		'decoration'));
var _newlandsvalley$elm_abc_parser$Abc$acciaccatura = A2(
	_Bogdanp$elm_combine$Combine_ops['<$>'],
	function (_p12) {
		return true;
	},
	_Bogdanp$elm_combine$Combine$maybe(
		_Bogdanp$elm_combine$Combine_Char$char(
			_elm_lang$core$Native_Utils.chr('/'))));
var _newlandsvalley$elm_abc_parser$Abc$grace = A2(
	_Bogdanp$elm_combine$Combine_ops['<*>'],
	A2(_Bogdanp$elm_combine$Combine_ops['<$>'], _newlandsvalley$elm_abc_parser$Abc_ParseTree$GraceNote, _newlandsvalley$elm_abc_parser$Abc$acciaccatura),
	_Bogdanp$elm_combine$Combine$many1(_newlandsvalley$elm_abc_parser$Abc$abcNote));
var _newlandsvalley$elm_abc_parser$Abc$graceNote = A2(
	_Bogdanp$elm_combine$Combine_ops['<?>'],
	A3(
		_Bogdanp$elm_combine$Combine$between,
		_Bogdanp$elm_combine$Combine_Char$char(
			_elm_lang$core$Native_Utils.chr('{')),
		_Bogdanp$elm_combine$Combine_Char$char(
			_elm_lang$core$Native_Utils.chr('}')),
		_newlandsvalley$elm_abc_parser$Abc$grace),
	'grace note');
var _newlandsvalley$elm_abc_parser$Abc$inline = A2(
	_Bogdanp$elm_combine$Combine_ops['<$>'],
	_newlandsvalley$elm_abc_parser$Abc_ParseTree$Inline,
	A2(
		_Bogdanp$elm_combine$Combine_ops['<?>'],
		A3(
			_Bogdanp$elm_combine$Combine$between,
			_Bogdanp$elm_combine$Combine_Char$char(
				_elm_lang$core$Native_Utils.chr('[')),
			_Bogdanp$elm_combine$Combine_Char$char(
				_elm_lang$core$Native_Utils.chr(']')),
			_newlandsvalley$elm_abc_parser$Abc$tuneBodyInfo(true)),
		'inline header'));
var _newlandsvalley$elm_abc_parser$Abc$chord = A2(
	_Bogdanp$elm_combine$Combine_ops['<$>'],
	_newlandsvalley$elm_abc_parser$Abc_ParseTree$Chord,
	A2(_Bogdanp$elm_combine$Combine_ops['<?>'], _newlandsvalley$elm_abc_parser$Abc$abcChord, 'chord'));
var _newlandsvalley$elm_abc_parser$Abc$annotation = A2(
	_Bogdanp$elm_combine$Combine_ops['<$>'],
	_newlandsvalley$elm_abc_parser$Abc$buildAnnotation,
	A2(_Bogdanp$elm_combine$Combine_ops['<?>'], _newlandsvalley$elm_abc_parser$Abc$annotationString, 'annotation'));
var _newlandsvalley$elm_abc_parser$Abc$chordSymbol = A2(
	_Bogdanp$elm_combine$Combine_ops['<$>'],
	_newlandsvalley$elm_abc_parser$Abc_ParseTree$ChordSymbol,
	A2(_Bogdanp$elm_combine$Combine_ops['<?>'], _newlandsvalley$elm_abc_parser$Abc$quotedString, 'chord symbol'));
var _newlandsvalley$elm_abc_parser$Abc$rest = A2(
	_Bogdanp$elm_combine$Combine_ops['<$>'],
	_newlandsvalley$elm_abc_parser$Abc_ParseTree$Rest,
	A2(
		_Bogdanp$elm_combine$Combine_ops['<?>'],
		A2(
			_Bogdanp$elm_combine$Combine_ops['<$>'],
			_elm_lang$core$Maybe$withDefault(
				_elm_community$ratio$Ratio$fromInt(1)),
			A2(
				_Bogdanp$elm_combine$Combine_ops['*>'],
				_Bogdanp$elm_combine$Combine$regex('[XxZz]'),
				_Bogdanp$elm_combine$Combine$maybe(_newlandsvalley$elm_abc_parser$Abc$noteDur))),
		'rest'));
var _newlandsvalley$elm_abc_parser$Abc$brokenRhythmTie = A2(
	_Bogdanp$elm_combine$Combine_ops['<*'],
	A2(
		_Bogdanp$elm_combine$Combine_ops['<$>'],
		_newlandsvalley$elm_abc_parser$Abc$buildBrokenOperator,
		_Bogdanp$elm_combine$Combine$regex('(<+|>+)')),
	_newlandsvalley$elm_abc_parser$Abc$whiteSpace);
var _newlandsvalley$elm_abc_parser$Abc$brokenRhythmPair = A2(
	_Bogdanp$elm_combine$Combine_ops['<*>'],
	A2(
		_Bogdanp$elm_combine$Combine_ops['<*>'],
		A2(_Bogdanp$elm_combine$Combine_ops['<$>'], _newlandsvalley$elm_abc_parser$Abc_ParseTree$BrokenRhythmPair, _newlandsvalley$elm_abc_parser$Abc$abcNote),
		_newlandsvalley$elm_abc_parser$Abc$brokenRhythmTie),
	A2(_Bogdanp$elm_combine$Combine_ops['<?>'], _newlandsvalley$elm_abc_parser$Abc$abcNote, 'broken rhythm pair'));
var _newlandsvalley$elm_abc_parser$Abc$slur = A2(
	_Bogdanp$elm_combine$Combine_ops['<$>'],
	_newlandsvalley$elm_abc_parser$Abc_ParseTree$Slur,
	A2(
		_Bogdanp$elm_combine$Combine_ops['<?>'],
		_Bogdanp$elm_combine$Combine$choice(
			{
				ctor: '::',
				_0: _Bogdanp$elm_combine$Combine_Char$char(
					_elm_lang$core$Native_Utils.chr('(')),
				_1: {
					ctor: '::',
					_0: _Bogdanp$elm_combine$Combine_Char$char(
						_elm_lang$core$Native_Utils.chr(')')),
					_1: {ctor: '[]'}
				}
			}),
		'slur'));
var _newlandsvalley$elm_abc_parser$Abc$repeatSection = _Bogdanp$elm_combine$Combine$choice(
	{
		ctor: '::',
		_0: _Bogdanp$elm_combine$Combine_Num$digit,
		_1: {
			ctor: '::',
			_0: A2(
				_Bogdanp$elm_combine$Combine_ops['*>'],
				A2(
					_Bogdanp$elm_combine$Combine_ops['*>'],
					_newlandsvalley$elm_abc_parser$Abc$whiteSpace,
					_Bogdanp$elm_combine$Combine_Char$char(
						_elm_lang$core$Native_Utils.chr('['))),
				_Bogdanp$elm_combine$Combine_Num$digit),
			_1: {ctor: '[]'}
		}
	});
var _newlandsvalley$elm_abc_parser$Abc$barSeparator = A2(
	_Bogdanp$elm_combine$Combine_ops['<$>'],
	_elm_lang$core$String$concat,
	_Bogdanp$elm_combine$Combine$many1(
		_Bogdanp$elm_combine$Combine$choice(
			{
				ctor: '::',
				_0: _Bogdanp$elm_combine$Combine$string('[|'),
				_1: {
					ctor: '::',
					_0: _Bogdanp$elm_combine$Combine$string('|]:'),
					_1: {
						ctor: '::',
						_0: _Bogdanp$elm_combine$Combine$string('|]'),
						_1: {
							ctor: '::',
							_0: _Bogdanp$elm_combine$Combine$string(']|:'),
							_1: {
								ctor: '::',
								_0: _Bogdanp$elm_combine$Combine$string(']|'),
								_1: {
									ctor: '::',
									_0: _Bogdanp$elm_combine$Combine$string(':[|'),
									_1: {
										ctor: '::',
										_0: _Bogdanp$elm_combine$Combine$string('|:'),
										_1: {
											ctor: '::',
											_0: _Bogdanp$elm_combine$Combine$string(':|:'),
											_1: {
												ctor: '::',
												_0: _Bogdanp$elm_combine$Combine$string(':||:'),
												_1: {
													ctor: '::',
													_0: _Bogdanp$elm_combine$Combine$string(':|]'),
													_1: {
														ctor: '::',
														_0: _Bogdanp$elm_combine$Combine$string(':||'),
														_1: {
															ctor: '::',
															_0: _Bogdanp$elm_combine$Combine$string(':|'),
															_1: {
																ctor: '::',
																_0: _Bogdanp$elm_combine$Combine$string('::'),
																_1: {
																	ctor: '::',
																	_0: _Bogdanp$elm_combine$Combine$string('||:'),
																	_1: {
																		ctor: '::',
																		_0: _Bogdanp$elm_combine$Combine$string('||'),
																		_1: {
																			ctor: '::',
																			_0: _Bogdanp$elm_combine$Combine$string('|'),
																			_1: {ctor: '[]'}
																		}
																	}
																}
															}
														}
													}
												}
											}
										}
									}
								}
							}
						}
					}
				}
			})));
var _newlandsvalley$elm_abc_parser$Abc$degenerateBarRepeat = A2(
	_Bogdanp$elm_combine$Combine_ops['<$>'],
	_newlandsvalley$elm_abc_parser$Abc_ParseTree$Barline,
	A2(
		_Bogdanp$elm_combine$Combine_ops['<$>'],
		A2(_newlandsvalley$elm_abc_parser$Abc_ParseTree$Bar, _newlandsvalley$elm_abc_parser$Abc_ParseTree$Thin, _elm_lang$core$Maybe$Nothing),
		A2(
			_Bogdanp$elm_combine$Combine_ops['<$>'],
			_elm_lang$core$Maybe$Just,
			A2(
				_Bogdanp$elm_combine$Combine_ops['*>'],
				A2(
					_Bogdanp$elm_combine$Combine_ops['*>'],
					_newlandsvalley$elm_abc_parser$Abc$whiteSpace,
					_Bogdanp$elm_combine$Combine_Char$char(
						_elm_lang$core$Native_Utils.chr('['))),
				_Bogdanp$elm_combine$Combine_Num$digit))));
var _newlandsvalley$elm_abc_parser$Abc$normalBarline = A2(
	_Bogdanp$elm_combine$Combine_ops['<*>'],
	A2(_Bogdanp$elm_combine$Combine_ops['<$>'], _newlandsvalley$elm_abc_parser$Abc$buildBarline, _newlandsvalley$elm_abc_parser$Abc$barSeparator),
	A2(
		_Bogdanp$elm_combine$Combine_ops['<?>'],
		_Bogdanp$elm_combine$Combine$maybe(_newlandsvalley$elm_abc_parser$Abc$repeatSection),
		'barline'));
var _newlandsvalley$elm_abc_parser$Abc$barline = _Bogdanp$elm_combine$Combine$choice(
	{
		ctor: '::',
		_0: _newlandsvalley$elm_abc_parser$Abc$normalBarline,
		_1: {
			ctor: '::',
			_0: _newlandsvalley$elm_abc_parser$Abc$degenerateBarRepeat,
			_1: {ctor: '[]'}
		}
	});
var _newlandsvalley$elm_abc_parser$Abc$scoreItem = _Bogdanp$elm_combine$Combine$lazy(
	function (_p13) {
		var _p14 = _p13;
		return A2(
			_Bogdanp$elm_combine$Combine_ops['<?>'],
			_Bogdanp$elm_combine$Combine$choice(
				{
					ctor: '::',
					_0: _newlandsvalley$elm_abc_parser$Abc$chord,
					_1: {
						ctor: '::',
						_0: _newlandsvalley$elm_abc_parser$Abc$inline,
						_1: {
							ctor: '::',
							_0: _newlandsvalley$elm_abc_parser$Abc$barline,
							_1: {
								ctor: '::',
								_0: _newlandsvalley$elm_abc_parser$Abc$brokenRhythmPair,
								_1: {
									ctor: '::',
									_0: _newlandsvalley$elm_abc_parser$Abc$note,
									_1: {
										ctor: '::',
										_0: _newlandsvalley$elm_abc_parser$Abc$rest,
										_1: {
											ctor: '::',
											_0: _newlandsvalley$elm_abc_parser$Abc$tuplet,
											_1: {
												ctor: '::',
												_0: _newlandsvalley$elm_abc_parser$Abc$slur,
												_1: {
													ctor: '::',
													_0: _newlandsvalley$elm_abc_parser$Abc$graceNote,
													_1: {
														ctor: '::',
														_0: _newlandsvalley$elm_abc_parser$Abc$annotation,
														_1: {
															ctor: '::',
															_0: _newlandsvalley$elm_abc_parser$Abc$chordSymbol,
															_1: {
																ctor: '::',
																_0: _newlandsvalley$elm_abc_parser$Abc$decoration,
																_1: {
																	ctor: '::',
																	_0: _newlandsvalley$elm_abc_parser$Abc$spacer,
																	_1: {
																		ctor: '::',
																		_0: _newlandsvalley$elm_abc_parser$Abc$ignore,
																		_1: {
																			ctor: '::',
																			_0: _newlandsvalley$elm_abc_parser$Abc$continuation,
																			_1: {ctor: '[]'}
																		}
																	}
																}
															}
														}
													}
												}
											}
										}
									}
								}
							}
						}
					}
				}),
			'score item');
	});
var _newlandsvalley$elm_abc_parser$Abc$score = A2(
	_Bogdanp$elm_combine$Combine_ops['<$>'],
	_newlandsvalley$elm_abc_parser$Abc_ParseTree$Score,
	A2(_newlandsvalley$elm_abc_parser$Combine_Extra$manyTill1, _newlandsvalley$elm_abc_parser$Abc$scoreItem, _Bogdanp$elm_combine$Combine_Char$eol));
var _newlandsvalley$elm_abc_parser$Abc$body = A2(
	_Bogdanp$elm_combine$Combine_ops['<*>'],
	A2(
		_Bogdanp$elm_combine$Combine_ops['<$>'],
		F2(
			function (x, y) {
				return {ctor: '::', _0: x, _1: y};
			}),
		_newlandsvalley$elm_abc_parser$Abc$score),
	A2(
		_newlandsvalley$elm_abc_parser$Combine_Extra$manyTill1,
		A2(_newlandsvalley$elm_abc_parser$Combine_Extra$leftBiasedOr, _newlandsvalley$elm_abc_parser$Abc$score, _newlandsvalley$elm_abc_parser$Abc$tuneBodyHeader),
		_Bogdanp$elm_combine$Combine$end));
var _newlandsvalley$elm_abc_parser$Abc$abc = A2(
	_Bogdanp$elm_combine$Combine_ops['<*>'],
	A2(
		_Bogdanp$elm_combine$Combine_ops['<$>'],
		F2(
			function (v0, v1) {
				return {ctor: '_Tuple2', _0: v0, _1: v1};
			}),
		_newlandsvalley$elm_abc_parser$Abc$headers),
	_newlandsvalley$elm_abc_parser$Abc$body);
var _newlandsvalley$elm_abc_parser$Abc$parse = function (s) {
	var _p15 = A2(_Bogdanp$elm_combine$Combine$parse, _newlandsvalley$elm_abc_parser$Abc$abc, s);
	if (_p15.ctor === 'Ok') {
		return _elm_lang$core$Result$Ok(_p15._0._2);
	} else {
		var _p16 = _p15._0._1;
		return _elm_lang$core$Result$Err(
			{msgs: _p15._0._2, input: _p16.input, position: _p16.position});
	}
};
var _newlandsvalley$elm_abc_parser$Abc$ParseError = F3(
	function (a, b, c) {
		return {msgs: a, input: b, position: c};
	});

var _newlandsvalley$elm_abc_parser$Abc_Canonical$continuation = function (c) {
	return c ? '\\' : '';
};
var _newlandsvalley$elm_abc_parser$Abc_Canonical$broken = function (b) {
	var _p0 = b;
	if (_p0.ctor === 'LeftArrow') {
		return A2(_elm_lang$core$String$repeat, _p0._0, '<');
	} else {
		return A2(_elm_lang$core$String$repeat, _p0._0, '>');
	}
};
var _newlandsvalley$elm_abc_parser$Abc_Canonical$decorate = function (s) {
	return _elm_lang$core$Native_Utils.eq(
		_elm_lang$core$String$length(s),
		1) ? s : A2(
		_elm_lang$core$Basics_ops['++'],
		'!',
		A2(_elm_lang$core$Basics_ops['++'], s, '!'));
};
var _newlandsvalley$elm_abc_parser$Abc_Canonical$pitch = F2(
	function (octave, p) {
		return (_elm_lang$core$Native_Utils.cmp(octave, _newlandsvalley$elm_abc_parser$Abc_ParseTree$middlecOctave) < 1) ? _elm_lang$core$Basics$toString(p) : _elm_lang$core$String$toLower(
			_elm_lang$core$Basics$toString(p));
	});
var _newlandsvalley$elm_abc_parser$Abc_Canonical$octave = function (i) {
	var octaveAboveMiddleC = _newlandsvalley$elm_abc_parser$Abc_ParseTree$middlecOctave + 1;
	return (_elm_lang$core$Native_Utils.eq(i, _newlandsvalley$elm_abc_parser$Abc_ParseTree$middlecOctave) || _elm_lang$core$Native_Utils.eq(i, octaveAboveMiddleC)) ? '' : ((_elm_lang$core$Native_Utils.cmp(i, octaveAboveMiddleC) > 0) ? A2(_elm_lang$core$String$repeat, i - octaveAboveMiddleC, '\'') : A2(_elm_lang$core$String$repeat, _newlandsvalley$elm_abc_parser$Abc_ParseTree$middlecOctave - i, ','));
};
var _newlandsvalley$elm_abc_parser$Abc_Canonical$meter = function (ms) {
	var _p1 = ms;
	if (_p1.ctor === 'Nothing') {
		return 'none';
	} else {
		var _p2 = _p1._0;
		var n = _p2._0;
		var d = _p2._1;
		return A2(
			_elm_lang$core$Basics_ops['++'],
			_elm_lang$core$Basics$toString(n),
			A2(
				_elm_lang$core$Basics_ops['++'],
				'/',
				_elm_lang$core$Basics$toString(d)));
	}
};
var _newlandsvalley$elm_abc_parser$Abc_Canonical$rational = function (r) {
	return A2(
		_elm_lang$core$Basics_ops['++'],
		_elm_lang$core$Basics$toString(
			_elm_community$ratio$Ratio$numerator(r)),
		A2(
			_elm_lang$core$Basics_ops['++'],
			'/',
			_elm_lang$core$Basics$toString(
				_elm_community$ratio$Ratio$denominator(r))));
};
var _newlandsvalley$elm_abc_parser$Abc_Canonical$ratlist = function (rs) {
	var f = F2(
		function (r, acc) {
			return A2(
				_elm_lang$core$Basics_ops['++'],
				_newlandsvalley$elm_abc_parser$Abc_Canonical$rational(r),
				A2(_elm_lang$core$Basics_ops['++'], ' ', acc));
		});
	return _elm_lang$core$String$trimRight(
		A3(_elm_lang$core$List$foldr, f, '', rs));
};
var _newlandsvalley$elm_abc_parser$Abc_Canonical$duration = function (nd) {
	return (_elm_lang$core$Native_Utils.eq(
		_elm_community$ratio$Ratio$denominator(nd),
		1) && _elm_lang$core$Native_Utils.eq(
		_elm_community$ratio$Ratio$numerator(nd),
		1)) ? '' : ((_elm_lang$core$Native_Utils.eq(
		_elm_community$ratio$Ratio$denominator(nd),
		2) && _elm_lang$core$Native_Utils.eq(
		_elm_community$ratio$Ratio$numerator(nd),
		1)) ? '/' : (_elm_lang$core$Native_Utils.eq(
		_elm_community$ratio$Ratio$denominator(nd),
		1) ? _elm_lang$core$Basics$toString(
		_elm_community$ratio$Ratio$numerator(nd)) : _newlandsvalley$elm_abc_parser$Abc_Canonical$rational(nd)));
};
var _newlandsvalley$elm_abc_parser$Abc_Canonical$rest = function (n) {
	return A2(
		_elm_lang$core$Basics_ops['++'],
		'z',
		_newlandsvalley$elm_abc_parser$Abc_Canonical$duration(n));
};
var _newlandsvalley$elm_abc_parser$Abc_Canonical$tuplet = function (t) {
	var _p3 = t;
	var p = _p3._0;
	var q = _p3._1;
	var r = _p3._2;
	var _p4 = t;
	_v2_3:
	do {
		if (_p4.ctor === '_Tuple3') {
			switch (_p4._1) {
				case 2:
					if ((_p4._0 === 3) && (_p4._2 === 3)) {
						return '(3';
					} else {
						break _v2_3;
					}
				case 3:
					switch (_p4._0) {
						case 2:
							if (_p4._2 === 2) {
								return '(2';
							} else {
								break _v2_3;
							}
						case 4:
							if (_p4._2 === 4) {
								return '(4';
							} else {
								break _v2_3;
							}
						default:
							break _v2_3;
					}
				default:
					break _v2_3;
			}
		} else {
			break _v2_3;
		}
	} while(false);
	return A2(
		_elm_lang$core$Basics_ops['++'],
		'(',
		A2(
			_elm_lang$core$Basics_ops['++'],
			_elm_lang$core$Basics$toString(p),
			A2(
				_elm_lang$core$Basics_ops['++'],
				':',
				A2(
					_elm_lang$core$Basics_ops['++'],
					_elm_lang$core$Basics$toString(q),
					A2(
						_elm_lang$core$Basics_ops['++'],
						':',
						_elm_lang$core$Basics$toString(r))))));
};
var _newlandsvalley$elm_abc_parser$Abc_Canonical$headerAccidental = function (a) {
	var _p5 = a;
	switch (_p5.ctor) {
		case 'Sharp':
			return '#';
		case 'Flat':
			return 'b';
		default:
			return '';
	}
};
var _newlandsvalley$elm_abc_parser$Abc_Canonical$key = function (k) {
	var acc = A2(
		_elm_lang$core$Maybe$withDefault,
		'',
		A2(_elm_lang$core$Maybe$map, _newlandsvalley$elm_abc_parser$Abc_Canonical$headerAccidental, k.accidental));
	return A2(
		_elm_lang$core$Basics_ops['++'],
		_elm_lang$core$Basics$toString(k.pitchClass),
		A2(
			_elm_lang$core$Basics_ops['++'],
			acc,
			_elm_lang$core$Basics$toString(k.mode)));
};
var _newlandsvalley$elm_abc_parser$Abc_Canonical$accidental = function (a) {
	var _p6 = a;
	switch (_p6.ctor) {
		case 'Sharp':
			return '^';
		case 'Flat':
			return '_';
		case 'DoubleSharp':
			return '^^';
		case 'DoubleFlat':
			return '__';
		default:
			return '=';
	}
};
var _newlandsvalley$elm_abc_parser$Abc_Canonical$keyAccidental = function (ka) {
	var _p7 = ka;
	var pc = _p7._0;
	var acc = _p7._1;
	return A2(
		_elm_lang$core$Basics_ops['++'],
		_newlandsvalley$elm_abc_parser$Abc_Canonical$accidental(acc),
		_elm_lang$core$String$toLower(
			_elm_lang$core$Basics$toString(pc)));
};
var _newlandsvalley$elm_abc_parser$Abc_Canonical$keyAccidentals = function (_p8) {
	return _elm_lang$core$String$concat(
		A2(
			_elm_lang$core$List$map,
			function (a) {
				return A2(
					_elm_lang$core$Basics_ops['++'],
					' ',
					_newlandsvalley$elm_abc_parser$Abc_Canonical$keyAccidental(a));
			},
			_p8));
};
var _newlandsvalley$elm_abc_parser$Abc_Canonical$abcNote = function (a) {
	var tie = function () {
		var _p9 = a.tied;
		if (_p9 === true) {
			return '-';
		} else {
			return '';
		}
	}();
	var acc = A2(
		_elm_lang$core$Maybe$withDefault,
		'',
		A2(_elm_lang$core$Maybe$map, _newlandsvalley$elm_abc_parser$Abc_Canonical$accidental, a.accidental));
	return A2(
		_elm_lang$core$Basics_ops['++'],
		acc,
		A2(
			_elm_lang$core$Basics_ops['++'],
			A2(_newlandsvalley$elm_abc_parser$Abc_Canonical$pitch, a.octave, a.pitchClass),
			A2(
				_elm_lang$core$Basics_ops['++'],
				_newlandsvalley$elm_abc_parser$Abc_Canonical$octave(a.octave),
				A2(
					_elm_lang$core$Basics_ops['++'],
					_newlandsvalley$elm_abc_parser$Abc_Canonical$duration(a.duration),
					tie))));
};
var _newlandsvalley$elm_abc_parser$Abc_Canonical$notes = function (ns) {
	var f = F2(
		function (a, acc) {
			return A2(
				_elm_lang$core$Basics_ops['++'],
				_newlandsvalley$elm_abc_parser$Abc_Canonical$abcNote(a),
				acc);
		});
	return A3(_elm_lang$core$List$foldr, f, '', ns);
};
var _newlandsvalley$elm_abc_parser$Abc_Canonical$abcChord = function (a) {
	return A2(
		_elm_lang$core$Basics_ops['++'],
		'[',
		A2(
			_elm_lang$core$Basics_ops['++'],
			_newlandsvalley$elm_abc_parser$Abc_Canonical$notes(a.notes),
			A2(
				_elm_lang$core$Basics_ops['++'],
				']',
				_newlandsvalley$elm_abc_parser$Abc_Canonical$duration(a.duration))));
};
var _newlandsvalley$elm_abc_parser$Abc_Canonical$bar = function (b) {
	var lines = function () {
		var _p10 = b.thickness;
		switch (_p10.ctor) {
			case 'ThickThin':
				return '[|';
			case 'ThinThick':
				return '|]';
			case 'ThinThin':
				return '||';
			default:
				return '|';
		}
	}();
	var it = A2(
		_elm_lang$core$Maybe$withDefault,
		'',
		A2(_elm_lang$core$Maybe$map, _elm_lang$core$Basics$toString, b.iteration));
	var _p11 = b.repeat;
	if (_p11.ctor === 'Nothing') {
		return A2(_elm_lang$core$Basics_ops['++'], lines, it);
	} else {
		switch (_p11._0.ctor) {
			case 'Begin':
				return A2(_elm_lang$core$Basics_ops['++'], lines, ':');
			case 'End':
				return A2(
					_elm_lang$core$Basics_ops['++'],
					':',
					A2(_elm_lang$core$Basics_ops['++'], lines, it));
			default:
				return A2(
					_elm_lang$core$Basics_ops['++'],
					':',
					A2(_elm_lang$core$Basics_ops['++'], lines, ':'));
		}
	}
};
var _newlandsvalley$elm_abc_parser$Abc_Canonical$mode = function (m) {
	var _p12 = m;
	switch (_p12.ctor) {
		case 'Major':
			return 'major';
		case 'Minor':
			return 'minor';
		case 'Ionian':
			return 'ionian';
		case 'Dorian':
			return 'dorian';
		case 'Phrygian':
			return 'phrygian';
		case 'Lydian':
			return 'lydian';
		case 'Mixolydian':
			return 'mixolydian';
		case 'Aeolian':
			return 'aeolian';
		default:
			return 'locrian';
	}
};
var _newlandsvalley$elm_abc_parser$Abc_Canonical$enquote = function (s) {
	return A2(
		_elm_lang$core$Basics_ops['++'],
		'\"',
		A2(_elm_lang$core$Basics_ops['++'], s, '\"'));
};
var _newlandsvalley$elm_abc_parser$Abc_Canonical$tempo = function (t) {
	var eq = _elm_lang$core$Native_Utils.eq(
		_elm_lang$core$List$length(t.noteLengths),
		0) ? '' : '=';
	var text = A2(
		_elm_lang$core$Maybe$withDefault,
		'',
		A2(
			_elm_lang$core$Maybe$map,
			function (s) {
				return A2(
					_elm_lang$core$Basics_ops['++'],
					' ',
					_newlandsvalley$elm_abc_parser$Abc_Canonical$enquote(s));
			},
			t.marking));
	return A2(
		_elm_lang$core$Basics_ops['++'],
		_newlandsvalley$elm_abc_parser$Abc_Canonical$ratlist(t.noteLengths),
		A2(
			_elm_lang$core$Basics_ops['++'],
			eq,
			A2(
				_elm_lang$core$Basics_ops['++'],
				_elm_lang$core$Basics$toString(t.bpm),
				text)));
};
var _newlandsvalley$elm_abc_parser$Abc_Canonical$header = function (h) {
	var _p13 = h;
	_v9_28:
	do {
		switch (_p13.ctor) {
			case 'Area':
				return A2(_elm_lang$core$Basics_ops['++'], 'A: ', _p13._0);
			case 'Book':
				return A2(_elm_lang$core$Basics_ops['++'], 'B: ', _p13._0);
			case 'Composer':
				return A2(_elm_lang$core$Basics_ops['++'], 'C: ', _p13._0);
			case 'Discography':
				return A2(_elm_lang$core$Basics_ops['++'], 'D: ', _p13._0);
			case 'FileUrl':
				return A2(_elm_lang$core$Basics_ops['++'], 'F: ', _p13._0);
			case 'Group':
				return A2(_elm_lang$core$Basics_ops['++'], 'G: ', _p13._0);
			case 'History':
				return A2(_elm_lang$core$Basics_ops['++'], 'H: ', _p13._0);
			case 'Instruction':
				return A2(_elm_lang$core$Basics_ops['++'], 'I: ', _p13._0);
			case 'Key':
				if (_p13._0.ctor === '_Tuple2') {
					return A2(
						_elm_lang$core$Basics_ops['++'],
						'K: ',
						A2(
							_elm_lang$core$Basics_ops['++'],
							_newlandsvalley$elm_abc_parser$Abc_Canonical$key(_p13._0._0),
							_newlandsvalley$elm_abc_parser$Abc_Canonical$keyAccidentals(_p13._0._1)));
				} else {
					break _v9_28;
				}
			case 'UnitNoteLength':
				return A2(
					_elm_lang$core$Basics_ops['++'],
					'L: ',
					_newlandsvalley$elm_abc_parser$Abc_Canonical$duration(_p13._0));
			case 'Meter':
				return A2(
					_elm_lang$core$Basics_ops['++'],
					'M: ',
					_newlandsvalley$elm_abc_parser$Abc_Canonical$meter(_p13._0));
			case 'Macro':
				return A2(_elm_lang$core$Basics_ops['++'], 'm: ', _p13._0);
			case 'Notes':
				return A2(_elm_lang$core$Basics_ops['++'], 'N: ', _p13._0);
			case 'Origin':
				return A2(_elm_lang$core$Basics_ops['++'], 'O: ', _p13._0);
			case 'Parts':
				return A2(_elm_lang$core$Basics_ops['++'], 'P: ', _p13._0);
			case 'Rhythm':
				return A2(_elm_lang$core$Basics_ops['++'], 'R: ', _p13._0);
			case 'Remark':
				return A2(_elm_lang$core$Basics_ops['++'], 'r: ', _p13._0);
			case 'Source':
				return A2(_elm_lang$core$Basics_ops['++'], 'S: ', _p13._0);
			case 'Title':
				return A2(_elm_lang$core$Basics_ops['++'], 'T: ', _p13._0);
			case 'Tempo':
				return A2(
					_elm_lang$core$Basics_ops['++'],
					'Q: ',
					_newlandsvalley$elm_abc_parser$Abc_Canonical$tempo(_p13._0));
			case 'UserDefined':
				return A2(_elm_lang$core$Basics_ops['++'], 'U: ', _p13._0);
			case 'Voice':
				return A2(_elm_lang$core$Basics_ops['++'], 'V: ', _p13._0);
			case 'WordsAfter':
				return A2(_elm_lang$core$Basics_ops['++'], 'W: ', _p13._0);
			case 'WordsAligned':
				return A2(_elm_lang$core$Basics_ops['++'], 'w: ', _p13._0);
			case 'ReferenceNumber':
				return A2(
					_elm_lang$core$Basics_ops['++'],
					'X: ',
					_elm_lang$core$Basics$toString(_p13._0));
			case 'Transcription':
				return A2(_elm_lang$core$Basics_ops['++'], 'Z: ', _p13._0);
			case 'FieldContinuation':
				return A2(_elm_lang$core$Basics_ops['++'], '+: ', _p13._0);
			case 'Comment':
				return A2(_elm_lang$core$Basics_ops['++'], '%', _p13._0);
			default:
				break _v9_28;
		}
	} while(false);
	return '';
};
var _newlandsvalley$elm_abc_parser$Abc_Canonical$tuneHeaders = function (hs) {
	var f = F2(
		function (h, acc) {
			return A2(
				_elm_lang$core$Basics_ops['++'],
				_newlandsvalley$elm_abc_parser$Abc_Canonical$header(h),
				A2(_elm_lang$core$Basics_ops['++'], '\r\n', acc));
		});
	return A3(_elm_lang$core$List$foldr, f, '', hs);
};
var _newlandsvalley$elm_abc_parser$Abc_Canonical$music = function (m) {
	var _p14 = m;
	switch (_p14.ctor) {
		case 'Barline':
			return _newlandsvalley$elm_abc_parser$Abc_Canonical$bar(_p14._0);
		case 'Note':
			return _newlandsvalley$elm_abc_parser$Abc_Canonical$abcNote(_p14._0);
		case 'BrokenRhythmPair':
			return A2(
				_elm_lang$core$Basics_ops['++'],
				_newlandsvalley$elm_abc_parser$Abc_Canonical$abcNote(_p14._0),
				A2(
					_elm_lang$core$Basics_ops['++'],
					_newlandsvalley$elm_abc_parser$Abc_Canonical$broken(_p14._1),
					_newlandsvalley$elm_abc_parser$Abc_Canonical$abcNote(_p14._2)));
		case 'Rest':
			return _newlandsvalley$elm_abc_parser$Abc_Canonical$rest(_p14._0);
		case 'Tuplet':
			return A2(
				_elm_lang$core$Basics_ops['++'],
				_newlandsvalley$elm_abc_parser$Abc_Canonical$tuplet(_p14._0),
				_newlandsvalley$elm_abc_parser$Abc_Canonical$notes(_p14._1));
		case 'Decoration':
			return _newlandsvalley$elm_abc_parser$Abc_Canonical$decorate(_p14._0);
		case 'GraceNote':
			return A2(
				_elm_lang$core$Basics_ops['++'],
				'{',
				A2(
					_elm_lang$core$Basics_ops['++'],
					_newlandsvalley$elm_abc_parser$Abc_Canonical$notes(_p14._1),
					'}'));
		case 'Slur':
			return _elm_lang$core$String$fromChar(_p14._0);
		case 'Annotation':
			return A2(
				_elm_lang$core$Basics_ops['++'],
				_elm_lang$core$Basics$toString(_p14._0),
				A2(_elm_lang$core$Basics_ops['++'], ':', _p14._1));
		case 'ChordSymbol':
			return _newlandsvalley$elm_abc_parser$Abc_Canonical$enquote(_p14._0);
		case 'Chord':
			return _newlandsvalley$elm_abc_parser$Abc_Canonical$abcChord(_p14._0);
		case 'Inline':
			return A2(
				_elm_lang$core$Basics_ops['++'],
				'[',
				A2(
					_elm_lang$core$Basics_ops['++'],
					_newlandsvalley$elm_abc_parser$Abc_Canonical$header(_p14._0),
					']'));
		case 'Spacer':
			return ' ';
		case 'Ignore':
			return '';
		default:
			return '\\';
	}
};
var _newlandsvalley$elm_abc_parser$Abc_Canonical$musics = function (ms) {
	var f = F2(
		function (m, acc) {
			return A2(
				_elm_lang$core$Basics_ops['++'],
				_newlandsvalley$elm_abc_parser$Abc_Canonical$music(m),
				acc);
		});
	return A3(_elm_lang$core$List$foldr, f, '', ms);
};
var _newlandsvalley$elm_abc_parser$Abc_Canonical$bodyPart = function (bp) {
	var _p15 = bp;
	if (_p15.ctor === 'Score') {
		return _newlandsvalley$elm_abc_parser$Abc_Canonical$musics(_p15._0);
	} else {
		return _newlandsvalley$elm_abc_parser$Abc_Canonical$header(_p15._0);
	}
};
var _newlandsvalley$elm_abc_parser$Abc_Canonical$tuneBody = function (b) {
	var f = F2(
		function (bp, acc) {
			return A2(
				_elm_lang$core$Basics_ops['++'],
				_newlandsvalley$elm_abc_parser$Abc_Canonical$bodyPart(bp),
				A2(_elm_lang$core$Basics_ops['++'], '\r\n', acc));
		});
	return A3(_elm_lang$core$List$foldr, f, '', b);
};
var _newlandsvalley$elm_abc_parser$Abc_Canonical$fromTune = function (t) {
	return A2(
		_elm_lang$core$Basics_ops['++'],
		_newlandsvalley$elm_abc_parser$Abc_Canonical$tuneHeaders(
			_elm_lang$core$Tuple$first(t)),
		_newlandsvalley$elm_abc_parser$Abc_Canonical$tuneBody(
			_elm_lang$core$Tuple$second(t)));
};
var _newlandsvalley$elm_abc_parser$Abc_Canonical$fromResult = function (r) {
	return A2(_elm_lang$core$Result$map, _newlandsvalley$elm_abc_parser$Abc_Canonical$fromTune, r);
};

var _newlandsvalley$elm_abc_parser$Music_Accidentals$member = F2(
	function (ka, accs) {
		var _p0 = ka;
		var pc = _p0._0;
		var acc = _p0._1;
		var macc = A2(
			_elm_lang$core$Dict$get,
			_elm_lang$core$Basics$toString(pc),
			accs);
		return _elm_lang$core$Native_Utils.eq(
			_elm_lang$core$Maybe$Just(acc),
			macc);
	});
var _newlandsvalley$elm_abc_parser$Music_Accidentals$lookup = F2(
	function (pc, accs) {
		return A2(
			_elm_lang$core$Dict$get,
			_elm_lang$core$Basics$toString(pc),
			accs);
	});
var _newlandsvalley$elm_abc_parser$Music_Accidentals$fromKeySet = function (ks) {
	var f = function (_p1) {
		var _p2 = _p1;
		return {
			ctor: '_Tuple2',
			_0: _elm_lang$core$Basics$toString(_p2._0),
			_1: _p2._1
		};
	};
	var comparableks = A2(_elm_lang$core$List$map, f, ks);
	return _elm_lang$core$Dict$fromList(comparableks);
};
var _newlandsvalley$elm_abc_parser$Music_Accidentals$add = F3(
	function (pc, acc, accs) {
		return A3(
			_elm_lang$core$Dict$insert,
			_elm_lang$core$Basics$toString(pc),
			acc,
			accs);
	});
var _newlandsvalley$elm_abc_parser$Music_Accidentals$empty = _elm_lang$core$Dict$empty;

var _newlandsvalley$elm_abc_parser$Music_Notation$firstOneOf = A2(_elm_lang$core$List$foldr, _elm_community$maybe_extra$Maybe_Extra$or, _elm_lang$core$Maybe$Nothing);
var _newlandsvalley$elm_abc_parser$Music_Notation$accidentalPattern = function (ma) {
	var f = function (a) {
		var _p0 = a;
		switch (_p0.ctor) {
			case 'Sharp':
				return '#';
			case 'Flat':
				return 'b';
			default:
				return '';
		}
	};
	return A2(
		_elm_lang$core$Maybe$withDefault,
		'',
		A2(_elm_lang$core$Maybe$map, f, ma));
};
var _newlandsvalley$elm_abc_parser$Music_Notation$isFlatMajorKey = function (target) {
	var _p1 = target;
	var pc = _p1._0;
	var accidental = _p1._1;
	var _p2 = accidental;
	if (_p2.ctor === 'Natural') {
		return _elm_lang$core$Native_Utils.eq(pc, _newlandsvalley$elm_abc_parser$Abc_ParseTree$F);
	} else {
		return _elm_lang$core$Native_Utils.eq(_p2, _newlandsvalley$elm_abc_parser$Abc_ParseTree$Flat);
	}
};
var _newlandsvalley$elm_abc_parser$Music_Notation$accidentalKey = function (k) {
	var _p3 = k;
	var pc = _p3._0;
	var acc = _p3._1;
	return !_elm_lang$core$Native_Utils.eq(acc, _newlandsvalley$elm_abc_parser$Abc_ParseTree$Natural);
};
var _newlandsvalley$elm_abc_parser$Music_Notation$modalDistance = function (mode) {
	var _p4 = mode;
	switch (_p4.ctor) {
		case 'Dorian':
			return 10;
		case 'Phrygian':
			return 8;
		case 'Lydian':
			return 7;
		case 'Mixolydian':
			return 5;
		case 'Aeolian':
			return 3;
		case 'Minor':
			return 3;
		case 'Locrian':
			return 1;
		default:
			return 0;
	}
};
var _newlandsvalley$elm_abc_parser$Music_Notation$accToMacc = function (acc) {
	var _p5 = acc;
	switch (_p5.ctor) {
		case 'Sharp':
			return _elm_lang$core$Maybe$Just(_newlandsvalley$elm_abc_parser$Abc_ParseTree$Sharp);
		case 'Flat':
			return _elm_lang$core$Maybe$Just(_newlandsvalley$elm_abc_parser$Abc_ParseTree$Flat);
		default:
			return _elm_lang$core$Maybe$Nothing;
	}
};
var _newlandsvalley$elm_abc_parser$Music_Notation$maccToAcc = function (macc) {
	var _p6 = macc;
	_v4_2:
	do {
		if (_p6.ctor === 'Just') {
			switch (_p6._0.ctor) {
				case 'Sharp':
					return _newlandsvalley$elm_abc_parser$Abc_ParseTree$Sharp;
				case 'Flat':
					return _newlandsvalley$elm_abc_parser$Abc_ParseTree$Flat;
				default:
					break _v4_2;
			}
		} else {
			break _v4_2;
		}
	} while(false);
	return _newlandsvalley$elm_abc_parser$Abc_ParseTree$Natural;
};
var _newlandsvalley$elm_abc_parser$Music_Notation$partialSum = function (l) {
	return A2(
		_elm_lang$core$List$take,
		_elm_lang$core$List$length(l),
		_elm_lang$core$List$reverse(
			A2(
				_elm_lang$core$List$map,
				_elm_lang$core$List$sum,
				_elm_community$list_extra$List_Extra$tails(
					_elm_lang$core$List$reverse(l)))));
};
var _newlandsvalley$elm_abc_parser$Music_Notation$rotateLeftBy = F2(
	function (index, ls) {
		var listPair = A2(_elm_community$list_extra$List_Extra$splitAt, index, ls);
		return A2(
			_elm_lang$core$List$append,
			_elm_lang$core$Tuple$second(listPair),
			_elm_lang$core$Tuple$first(listPair));
	});
var _newlandsvalley$elm_abc_parser$Music_Notation$rotateFrom = F2(
	function (target, scale) {
		var index = A2(
			_elm_lang$core$Maybe$withDefault,
			0,
			A2(_elm_community$list_extra$List_Extra$elemIndex, target, scale));
		var listPair = A2(_elm_community$list_extra$List_Extra$splitAt, index, scale);
		return A2(
			_elm_lang$core$List$append,
			_elm_lang$core$Tuple$second(listPair),
			_elm_lang$core$Tuple$first(listPair));
	});
var _newlandsvalley$elm_abc_parser$Music_Notation$chromaticScaleDict = _elm_lang$core$Dict$fromList(
	{
		ctor: '::',
		_0: {ctor: '_Tuple2', _0: 'C', _1: 0},
		_1: {
			ctor: '::',
			_0: {ctor: '_Tuple2', _0: 'C#', _1: 1},
			_1: {
				ctor: '::',
				_0: {ctor: '_Tuple2', _0: 'Db', _1: 1},
				_1: {
					ctor: '::',
					_0: {ctor: '_Tuple2', _0: 'D', _1: 2},
					_1: {
						ctor: '::',
						_0: {ctor: '_Tuple2', _0: 'D#', _1: 3},
						_1: {
							ctor: '::',
							_0: {ctor: '_Tuple2', _0: 'Eb', _1: 3},
							_1: {
								ctor: '::',
								_0: {ctor: '_Tuple2', _0: 'E', _1: 4},
								_1: {
									ctor: '::',
									_0: {ctor: '_Tuple2', _0: 'F', _1: 5},
									_1: {
										ctor: '::',
										_0: {ctor: '_Tuple2', _0: 'F#', _1: 6},
										_1: {
											ctor: '::',
											_0: {ctor: '_Tuple2', _0: 'Gb', _1: 6},
											_1: {
												ctor: '::',
												_0: {ctor: '_Tuple2', _0: 'G', _1: 7},
												_1: {
													ctor: '::',
													_0: {ctor: '_Tuple2', _0: 'G#', _1: 8},
													_1: {
														ctor: '::',
														_0: {ctor: '_Tuple2', _0: 'Ab', _1: 8},
														_1: {
															ctor: '::',
															_0: {ctor: '_Tuple2', _0: 'A', _1: 9},
															_1: {
																ctor: '::',
																_0: {ctor: '_Tuple2', _0: 'A#', _1: 10},
																_1: {
																	ctor: '::',
																	_0: {ctor: '_Tuple2', _0: 'Bb', _1: 10},
																	_1: {
																		ctor: '::',
																		_0: {ctor: '_Tuple2', _0: 'B', _1: 11},
																		_1: {ctor: '[]'}
																	}
																}
															}
														}
													}
												}
											}
										}
									}
								}
							}
						}
					}
				}
			}
		}
	});
var _newlandsvalley$elm_abc_parser$Music_Notation$majorIntervals = {
	ctor: '::',
	_0: 2,
	_1: {
		ctor: '::',
		_0: 2,
		_1: {
			ctor: '::',
			_0: 1,
			_1: {
				ctor: '::',
				_0: 2,
				_1: {
					ctor: '::',
					_0: 2,
					_1: {
						ctor: '::',
						_0: 2,
						_1: {
							ctor: '::',
							_0: 1,
							_1: {ctor: '[]'}
						}
					}
				}
			}
		}
	}
};
var _newlandsvalley$elm_abc_parser$Music_Notation$equivalentEnharmonicKeySig = F3(
	function (pc, a, m) {
		var _p7 = {ctor: '_Tuple3', _0: pc, _1: a, _2: m};
		_v5_6:
		do {
			if (_p7.ctor === '_Tuple3') {
				switch (_p7._1.ctor) {
					case 'Sharp':
						if (_p7._2.ctor === 'Major') {
							switch (_p7._0.ctor) {
								case 'A':
									return {
										pitchClass: _newlandsvalley$elm_abc_parser$Abc_ParseTree$B,
										accidental: _elm_lang$core$Maybe$Just(_newlandsvalley$elm_abc_parser$Abc_ParseTree$Flat),
										mode: _newlandsvalley$elm_abc_parser$Abc_ParseTree$Major
									};
								case 'D':
									return {
										pitchClass: _newlandsvalley$elm_abc_parser$Abc_ParseTree$E,
										accidental: _elm_lang$core$Maybe$Just(_newlandsvalley$elm_abc_parser$Abc_ParseTree$Flat),
										mode: _newlandsvalley$elm_abc_parser$Abc_ParseTree$Major
									};
								case 'G':
									return {
										pitchClass: _newlandsvalley$elm_abc_parser$Abc_ParseTree$A,
										accidental: _elm_lang$core$Maybe$Just(_newlandsvalley$elm_abc_parser$Abc_ParseTree$Flat),
										mode: _newlandsvalley$elm_abc_parser$Abc_ParseTree$Major
									};
								default:
									break _v5_6;
							}
						} else {
							break _v5_6;
						}
					case 'Flat':
						if (_p7._2.ctor === 'Minor') {
							switch (_p7._0.ctor) {
								case 'G':
									return {
										pitchClass: _newlandsvalley$elm_abc_parser$Abc_ParseTree$F,
										accidental: _elm_lang$core$Maybe$Just(_newlandsvalley$elm_abc_parser$Abc_ParseTree$Sharp),
										mode: _newlandsvalley$elm_abc_parser$Abc_ParseTree$Minor
									};
								case 'D':
									return {
										pitchClass: _newlandsvalley$elm_abc_parser$Abc_ParseTree$C,
										accidental: _elm_lang$core$Maybe$Just(_newlandsvalley$elm_abc_parser$Abc_ParseTree$Sharp),
										mode: _newlandsvalley$elm_abc_parser$Abc_ParseTree$Minor
									};
								case 'A':
									return {
										pitchClass: _newlandsvalley$elm_abc_parser$Abc_ParseTree$G,
										accidental: _elm_lang$core$Maybe$Just(_newlandsvalley$elm_abc_parser$Abc_ParseTree$Sharp),
										mode: _newlandsvalley$elm_abc_parser$Abc_ParseTree$Minor
									};
								default:
									break _v5_6;
							}
						} else {
							break _v5_6;
						}
					default:
						break _v5_6;
				}
			} else {
				break _v5_6;
			}
		} while(false);
		return {
			pitchClass: pc,
			accidental: _elm_lang$core$Maybe$Just(a),
			mode: m
		};
	});
var _newlandsvalley$elm_abc_parser$Music_Notation$equivalentEnharmonic = function (k) {
	var _p8 = k;
	_v6_4:
	do {
		if ((_p8.ctor === '_Tuple2') && (_p8._1.ctor === 'Sharp')) {
			switch (_p8._0.ctor) {
				case 'A':
					return {ctor: '_Tuple2', _0: _newlandsvalley$elm_abc_parser$Abc_ParseTree$B, _1: _newlandsvalley$elm_abc_parser$Abc_ParseTree$Flat};
				case 'C':
					return {ctor: '_Tuple2', _0: _newlandsvalley$elm_abc_parser$Abc_ParseTree$D, _1: _newlandsvalley$elm_abc_parser$Abc_ParseTree$Flat};
				case 'D':
					return {ctor: '_Tuple2', _0: _newlandsvalley$elm_abc_parser$Abc_ParseTree$E, _1: _newlandsvalley$elm_abc_parser$Abc_ParseTree$Flat};
				case 'G':
					return {ctor: '_Tuple2', _0: _newlandsvalley$elm_abc_parser$Abc_ParseTree$A, _1: _newlandsvalley$elm_abc_parser$Abc_ParseTree$Flat};
				default:
					break _v6_4;
			}
		} else {
			break _v6_4;
		}
	} while(false);
	return k;
};
var _newlandsvalley$elm_abc_parser$Music_Notation$flatScale = {
	ctor: '::',
	_0: {ctor: '_Tuple2', _0: _newlandsvalley$elm_abc_parser$Abc_ParseTree$C, _1: _newlandsvalley$elm_abc_parser$Abc_ParseTree$Natural},
	_1: {
		ctor: '::',
		_0: {ctor: '_Tuple2', _0: _newlandsvalley$elm_abc_parser$Abc_ParseTree$D, _1: _newlandsvalley$elm_abc_parser$Abc_ParseTree$Flat},
		_1: {
			ctor: '::',
			_0: {ctor: '_Tuple2', _0: _newlandsvalley$elm_abc_parser$Abc_ParseTree$D, _1: _newlandsvalley$elm_abc_parser$Abc_ParseTree$Natural},
			_1: {
				ctor: '::',
				_0: {ctor: '_Tuple2', _0: _newlandsvalley$elm_abc_parser$Abc_ParseTree$E, _1: _newlandsvalley$elm_abc_parser$Abc_ParseTree$Flat},
				_1: {
					ctor: '::',
					_0: {ctor: '_Tuple2', _0: _newlandsvalley$elm_abc_parser$Abc_ParseTree$E, _1: _newlandsvalley$elm_abc_parser$Abc_ParseTree$Natural},
					_1: {
						ctor: '::',
						_0: {ctor: '_Tuple2', _0: _newlandsvalley$elm_abc_parser$Abc_ParseTree$F, _1: _newlandsvalley$elm_abc_parser$Abc_ParseTree$Natural},
						_1: {
							ctor: '::',
							_0: {ctor: '_Tuple2', _0: _newlandsvalley$elm_abc_parser$Abc_ParseTree$G, _1: _newlandsvalley$elm_abc_parser$Abc_ParseTree$Flat},
							_1: {
								ctor: '::',
								_0: {ctor: '_Tuple2', _0: _newlandsvalley$elm_abc_parser$Abc_ParseTree$G, _1: _newlandsvalley$elm_abc_parser$Abc_ParseTree$Natural},
								_1: {
									ctor: '::',
									_0: {ctor: '_Tuple2', _0: _newlandsvalley$elm_abc_parser$Abc_ParseTree$A, _1: _newlandsvalley$elm_abc_parser$Abc_ParseTree$Flat},
									_1: {
										ctor: '::',
										_0: {ctor: '_Tuple2', _0: _newlandsvalley$elm_abc_parser$Abc_ParseTree$A, _1: _newlandsvalley$elm_abc_parser$Abc_ParseTree$Natural},
										_1: {
											ctor: '::',
											_0: {ctor: '_Tuple2', _0: _newlandsvalley$elm_abc_parser$Abc_ParseTree$B, _1: _newlandsvalley$elm_abc_parser$Abc_ParseTree$Flat},
											_1: {
												ctor: '::',
												_0: {ctor: '_Tuple2', _0: _newlandsvalley$elm_abc_parser$Abc_ParseTree$B, _1: _newlandsvalley$elm_abc_parser$Abc_ParseTree$Natural},
												_1: {ctor: '[]'}
											}
										}
									}
								}
							}
						}
					}
				}
			}
		}
	}
};
var _newlandsvalley$elm_abc_parser$Music_Notation$extremeFlatScale = function () {
	var f = function (pc) {
		var _p9 = pc;
		_v7_2:
		do {
			if ((_p9.ctor === '_Tuple2') && (_p9._1.ctor === 'Natural')) {
				switch (_p9._0.ctor) {
					case 'E':
						return {ctor: '_Tuple2', _0: _newlandsvalley$elm_abc_parser$Abc_ParseTree$F, _1: _newlandsvalley$elm_abc_parser$Abc_ParseTree$Flat};
					case 'B':
						return {ctor: '_Tuple2', _0: _newlandsvalley$elm_abc_parser$Abc_ParseTree$C, _1: _newlandsvalley$elm_abc_parser$Abc_ParseTree$Flat};
					default:
						break _v7_2;
				}
			} else {
				break _v7_2;
			}
		} while(false);
		return pc;
	};
	return A2(_elm_lang$core$List$map, f, _newlandsvalley$elm_abc_parser$Music_Notation$flatScale);
}();
var _newlandsvalley$elm_abc_parser$Music_Notation$sharpScale = {
	ctor: '::',
	_0: {ctor: '_Tuple2', _0: _newlandsvalley$elm_abc_parser$Abc_ParseTree$C, _1: _newlandsvalley$elm_abc_parser$Abc_ParseTree$Natural},
	_1: {
		ctor: '::',
		_0: {ctor: '_Tuple2', _0: _newlandsvalley$elm_abc_parser$Abc_ParseTree$C, _1: _newlandsvalley$elm_abc_parser$Abc_ParseTree$Sharp},
		_1: {
			ctor: '::',
			_0: {ctor: '_Tuple2', _0: _newlandsvalley$elm_abc_parser$Abc_ParseTree$D, _1: _newlandsvalley$elm_abc_parser$Abc_ParseTree$Natural},
			_1: {
				ctor: '::',
				_0: {ctor: '_Tuple2', _0: _newlandsvalley$elm_abc_parser$Abc_ParseTree$D, _1: _newlandsvalley$elm_abc_parser$Abc_ParseTree$Sharp},
				_1: {
					ctor: '::',
					_0: {ctor: '_Tuple2', _0: _newlandsvalley$elm_abc_parser$Abc_ParseTree$E, _1: _newlandsvalley$elm_abc_parser$Abc_ParseTree$Natural},
					_1: {
						ctor: '::',
						_0: {ctor: '_Tuple2', _0: _newlandsvalley$elm_abc_parser$Abc_ParseTree$F, _1: _newlandsvalley$elm_abc_parser$Abc_ParseTree$Natural},
						_1: {
							ctor: '::',
							_0: {ctor: '_Tuple2', _0: _newlandsvalley$elm_abc_parser$Abc_ParseTree$F, _1: _newlandsvalley$elm_abc_parser$Abc_ParseTree$Sharp},
							_1: {
								ctor: '::',
								_0: {ctor: '_Tuple2', _0: _newlandsvalley$elm_abc_parser$Abc_ParseTree$G, _1: _newlandsvalley$elm_abc_parser$Abc_ParseTree$Natural},
								_1: {
									ctor: '::',
									_0: {ctor: '_Tuple2', _0: _newlandsvalley$elm_abc_parser$Abc_ParseTree$G, _1: _newlandsvalley$elm_abc_parser$Abc_ParseTree$Sharp},
									_1: {
										ctor: '::',
										_0: {ctor: '_Tuple2', _0: _newlandsvalley$elm_abc_parser$Abc_ParseTree$A, _1: _newlandsvalley$elm_abc_parser$Abc_ParseTree$Natural},
										_1: {
											ctor: '::',
											_0: {ctor: '_Tuple2', _0: _newlandsvalley$elm_abc_parser$Abc_ParseTree$A, _1: _newlandsvalley$elm_abc_parser$Abc_ParseTree$Sharp},
											_1: {
												ctor: '::',
												_0: {ctor: '_Tuple2', _0: _newlandsvalley$elm_abc_parser$Abc_ParseTree$B, _1: _newlandsvalley$elm_abc_parser$Abc_ParseTree$Natural},
												_1: {ctor: '[]'}
											}
										}
									}
								}
							}
						}
					}
				}
			}
		}
	}
};
var _newlandsvalley$elm_abc_parser$Music_Notation$extremeSharpScale = function () {
	var f = function (pc) {
		var _p10 = pc;
		_v8_2:
		do {
			if ((_p10.ctor === '_Tuple2') && (_p10._1.ctor === 'Natural')) {
				switch (_p10._0.ctor) {
					case 'F':
						return {ctor: '_Tuple2', _0: _newlandsvalley$elm_abc_parser$Abc_ParseTree$E, _1: _newlandsvalley$elm_abc_parser$Abc_ParseTree$Sharp};
					case 'C':
						return {ctor: '_Tuple2', _0: _newlandsvalley$elm_abc_parser$Abc_ParseTree$B, _1: _newlandsvalley$elm_abc_parser$Abc_ParseTree$Sharp};
					default:
						break _v8_2;
				}
			} else {
				break _v8_2;
			}
		} while(false);
		return pc;
	};
	return A2(_elm_lang$core$List$map, f, _newlandsvalley$elm_abc_parser$Music_Notation$sharpScale);
}();
var _newlandsvalley$elm_abc_parser$Music_Notation$transposeKeyAccidentalBy = F2(
	function (i, ka) {
		var _p11 = ka;
		var sourcepc = _p11._0;
		var sourceacc = _p11._1;
		var pattern = _elm_lang$core$Basics$toString(sourcepc);
		var index = A2(
			_elm_lang$core$Maybe$withDefault,
			0,
			A2(_elm_lang$core$Dict$get, pattern, _newlandsvalley$elm_abc_parser$Music_Notation$chromaticScaleDict));
		var _p12 = function () {
			var _p13 = sourceacc;
			switch (_p13.ctor) {
				case 'Sharp':
					return {ctor: '_Tuple2', _0: 1, _1: _newlandsvalley$elm_abc_parser$Music_Notation$sharpScale};
				case 'Flat':
					return {ctor: '_Tuple2', _0: -1, _1: _newlandsvalley$elm_abc_parser$Music_Notation$flatScale};
				case 'DoubleSharp':
					return {ctor: '_Tuple2', _0: 2, _1: _newlandsvalley$elm_abc_parser$Music_Notation$sharpScale};
				case 'DoubleFlat':
					return {ctor: '_Tuple2', _0: -2, _1: _newlandsvalley$elm_abc_parser$Music_Notation$flatScale};
				default:
					return {ctor: '_Tuple2', _0: 0, _1: _newlandsvalley$elm_abc_parser$Music_Notation$sharpScale};
			}
		}();
		var modifier = _p12._0;
		var scale = _p12._1;
		return A2(
			_elm_lang$core$Maybe$withDefault,
			{ctor: '_Tuple2', _0: _newlandsvalley$elm_abc_parser$Abc_ParseTree$C, _1: _newlandsvalley$elm_abc_parser$Abc_ParseTree$Natural},
			A2(_elm_community$list_extra$List_Extra$getAt, (index + modifier) + i, scale));
	});
var _newlandsvalley$elm_abc_parser$Music_Notation$midiTempo = function (t) {
	var relativeNoteLength = A2(_elm_community$ratio$Ratio$divide, t.unitNoteLength, t.tempoNoteLength);
	return _elm_lang$core$Basics$round(
		((60.0 * 1000000) * _elm_lang$core$Basics$toFloat(
			_elm_community$ratio$Ratio$numerator(relativeNoteLength))) / (_elm_lang$core$Basics$toFloat(t.bpm) * _elm_lang$core$Basics$toFloat(
			_elm_community$ratio$Ratio$denominator(relativeNoteLength))));
};
var _newlandsvalley$elm_abc_parser$Music_Notation$chordalNoteDuration = F3(
	function (t, note, chord) {
		return (((60.0 * _elm_community$ratio$Ratio$toFloat(t.unitNoteLength)) * _elm_community$ratio$Ratio$toFloat(note)) * _elm_community$ratio$Ratio$toFloat(chord)) / (_elm_community$ratio$Ratio$toFloat(t.tempoNoteLength) * _elm_lang$core$Basics$toFloat(t.bpm));
	});
var _newlandsvalley$elm_abc_parser$Music_Notation$noteDuration = F2(
	function (t, n) {
		return ((60.0 * _elm_community$ratio$Ratio$toFloat(t.unitNoteLength)) * _elm_community$ratio$Ratio$toFloat(n)) / (_elm_community$ratio$Ratio$toFloat(t.tempoNoteLength) * _elm_lang$core$Basics$toFloat(t.bpm));
	});
var _newlandsvalley$elm_abc_parser$Music_Notation$dotFactor = function (i) {
	var _p14 = i;
	switch (_p14) {
		case 1:
			return A2(_elm_community$ratio$Ratio$over, 1, 2);
		case 2:
			return A2(_elm_community$ratio$Ratio$over, 3, 4);
		case 3:
			return A2(_elm_community$ratio$Ratio$over, 7, 8);
		default:
			return A2(_elm_community$ratio$Ratio$over, 0, 1);
	}
};
var _newlandsvalley$elm_abc_parser$Music_Notation$modifyKeySet = F2(
	function (target, ks) {
		var _p15 = target;
		var pc = _p15._0;
		var accidental = _p15._1;
		var f = function (key) {
			return !_elm_lang$core$Native_Utils.eq(
				_elm_lang$core$Tuple$first(key),
				pc);
		};
		var newks = A2(_elm_lang$core$List$filter, f, ks);
		return _elm_lang$core$Native_Utils.eq(accidental, _newlandsvalley$elm_abc_parser$Abc_ParseTree$Natural) ? ks : {ctor: '::', _0: target, _1: ks};
	});
var _newlandsvalley$elm_abc_parser$Music_Notation$inScale = F2(
	function (ka, s) {
		return A2(_elm_lang$core$List$member, ka, s);
	});
var _newlandsvalley$elm_abc_parser$Music_Notation$getHeaderMap = function (t) {
	var f = function (h) {
		var _p16 = h;
		switch (_p16.ctor) {
			case 'Area':
				return {
					ctor: '_Tuple2',
					_0: _elm_lang$core$Native_Utils.chr('A'),
					_1: h
				};
			case 'Book':
				return {
					ctor: '_Tuple2',
					_0: _elm_lang$core$Native_Utils.chr('B'),
					_1: h
				};
			case 'Composer':
				return {
					ctor: '_Tuple2',
					_0: _elm_lang$core$Native_Utils.chr('C'),
					_1: h
				};
			case 'Discography':
				return {
					ctor: '_Tuple2',
					_0: _elm_lang$core$Native_Utils.chr('D'),
					_1: h
				};
			case 'FileUrl':
				return {
					ctor: '_Tuple2',
					_0: _elm_lang$core$Native_Utils.chr('F'),
					_1: h
				};
			case 'Group':
				return {
					ctor: '_Tuple2',
					_0: _elm_lang$core$Native_Utils.chr('G'),
					_1: h
				};
			case 'History':
				return {
					ctor: '_Tuple2',
					_0: _elm_lang$core$Native_Utils.chr('H'),
					_1: h
				};
			case 'Instruction':
				return {
					ctor: '_Tuple2',
					_0: _elm_lang$core$Native_Utils.chr('I'),
					_1: h
				};
			case 'Key':
				return {
					ctor: '_Tuple2',
					_0: _elm_lang$core$Native_Utils.chr('K'),
					_1: h
				};
			case 'UnitNoteLength':
				return {
					ctor: '_Tuple2',
					_0: _elm_lang$core$Native_Utils.chr('L'),
					_1: h
				};
			case 'Meter':
				return {
					ctor: '_Tuple2',
					_0: _elm_lang$core$Native_Utils.chr('M'),
					_1: h
				};
			case 'Macro':
				return {
					ctor: '_Tuple2',
					_0: _elm_lang$core$Native_Utils.chr('m'),
					_1: h
				};
			case 'Notes':
				return {
					ctor: '_Tuple2',
					_0: _elm_lang$core$Native_Utils.chr('N'),
					_1: h
				};
			case 'Origin':
				return {
					ctor: '_Tuple2',
					_0: _elm_lang$core$Native_Utils.chr('O'),
					_1: h
				};
			case 'Parts':
				return {
					ctor: '_Tuple2',
					_0: _elm_lang$core$Native_Utils.chr('P'),
					_1: h
				};
			case 'Tempo':
				return {
					ctor: '_Tuple2',
					_0: _elm_lang$core$Native_Utils.chr('Q'),
					_1: h
				};
			case 'Rhythm':
				return {
					ctor: '_Tuple2',
					_0: _elm_lang$core$Native_Utils.chr('R'),
					_1: h
				};
			case 'Remark':
				return {
					ctor: '_Tuple2',
					_0: _elm_lang$core$Native_Utils.chr('r'),
					_1: h
				};
			case 'Source':
				return {
					ctor: '_Tuple2',
					_0: _elm_lang$core$Native_Utils.chr('S'),
					_1: h
				};
			case 'SymbolLine':
				return {
					ctor: '_Tuple2',
					_0: _elm_lang$core$Native_Utils.chr('s'),
					_1: h
				};
			case 'Title':
				return {
					ctor: '_Tuple2',
					_0: _elm_lang$core$Native_Utils.chr('T'),
					_1: h
				};
			case 'UserDefined':
				return {
					ctor: '_Tuple2',
					_0: _elm_lang$core$Native_Utils.chr('U'),
					_1: h
				};
			case 'Voice':
				return {
					ctor: '_Tuple2',
					_0: _elm_lang$core$Native_Utils.chr('V'),
					_1: h
				};
			case 'WordsAfter':
				return {
					ctor: '_Tuple2',
					_0: _elm_lang$core$Native_Utils.chr('W'),
					_1: h
				};
			case 'WordsAligned':
				return {
					ctor: '_Tuple2',
					_0: _elm_lang$core$Native_Utils.chr('w'),
					_1: h
				};
			case 'ReferenceNumber':
				return {
					ctor: '_Tuple2',
					_0: _elm_lang$core$Native_Utils.chr('X'),
					_1: h
				};
			case 'Transcription':
				return {
					ctor: '_Tuple2',
					_0: _elm_lang$core$Native_Utils.chr('Z'),
					_1: h
				};
			case 'FieldContinuation':
				return {
					ctor: '_Tuple2',
					_0: _elm_lang$core$Native_Utils.chr('+'),
					_1: h
				};
			case 'Comment':
				return {
					ctor: '_Tuple2',
					_0: _elm_lang$core$Native_Utils.chr('-'),
					_1: h
				};
			default:
				return {
					ctor: '_Tuple2',
					_0: _elm_lang$core$Native_Utils.chr('u'),
					_1: h
				};
		}
	};
	var annotatedHeaders = A2(
		_elm_lang$core$List$map,
		f,
		_elm_lang$core$List$reverse(
			_elm_lang$core$Tuple$first(t)));
	return _elm_lang$core$Dict$fromList(annotatedHeaders);
};
var _newlandsvalley$elm_abc_parser$Music_Notation$getKeySig = function (t) {
	var headerMap = _newlandsvalley$elm_abc_parser$Music_Notation$getHeaderMap(t);
	var _p17 = A2(
		_elm_lang$core$Dict$get,
		_elm_lang$core$Native_Utils.chr('K'),
		headerMap);
	if (_p17.ctor === 'Just') {
		var _p18 = _p17._0;
		if (_p18.ctor === 'Key') {
			return _elm_lang$core$Maybe$Just(_p18._0);
		} else {
			return _elm_lang$core$Maybe$Nothing;
		}
	} else {
		return _elm_lang$core$Maybe$Nothing;
	}
};
var _newlandsvalley$elm_abc_parser$Music_Notation$getTempoSig = function (t) {
	var headerMap = _newlandsvalley$elm_abc_parser$Music_Notation$getHeaderMap(t);
	var _p19 = A2(
		_elm_lang$core$Dict$get,
		_elm_lang$core$Native_Utils.chr('Q'),
		headerMap);
	if (_p19.ctor === 'Just') {
		var _p20 = _p19._0;
		if (_p20.ctor === 'Tempo') {
			return _elm_lang$core$Maybe$Just(_p20._0);
		} else {
			return _elm_lang$core$Maybe$Nothing;
		}
	} else {
		return _elm_lang$core$Maybe$Nothing;
	}
};
var _newlandsvalley$elm_abc_parser$Music_Notation$getTitle = function (t) {
	var headerMap = _newlandsvalley$elm_abc_parser$Music_Notation$getHeaderMap(t);
	var _p21 = A2(
		_elm_lang$core$Dict$get,
		_elm_lang$core$Native_Utils.chr('T'),
		headerMap);
	if (_p21.ctor === 'Just') {
		var _p22 = _p21._0;
		if (_p22.ctor === 'Title') {
			return _elm_lang$core$Maybe$Just(_p22._0);
		} else {
			return _elm_lang$core$Maybe$Nothing;
		}
	} else {
		return _elm_lang$core$Maybe$Nothing;
	}
};
var _newlandsvalley$elm_abc_parser$Music_Notation$inKeySet = F2(
	function (ka, ks) {
		return A2(_elm_lang$core$List$member, ka, ks);
	});
var _newlandsvalley$elm_abc_parser$Music_Notation$notesInChromaticScale = 12;
var _newlandsvalley$elm_abc_parser$Music_Notation$lookUpScale = F2(
	function (s, i) {
		var modi = A2(_elm_lang$core$Basics_ops['%'], i, _newlandsvalley$elm_abc_parser$Music_Notation$notesInChromaticScale);
		var index = (_elm_lang$core$Native_Utils.cmp(modi, 0) < 0) ? (_newlandsvalley$elm_abc_parser$Music_Notation$notesInChromaticScale - modi) : modi;
		return A2(
			_elm_lang$core$Maybe$withDefault,
			{ctor: '_Tuple2', _0: _newlandsvalley$elm_abc_parser$Abc_ParseTree$C, _1: _newlandsvalley$elm_abc_parser$Abc_ParseTree$Natural},
			A2(_elm_community$list_extra$List_Extra$getAt, index, s));
	});
var _newlandsvalley$elm_abc_parser$Music_Notation$sharpScaleEquivalent = function (ka) {
	var _p23 = _elm_lang$core$Tuple$second(ka);
	if (_p23.ctor === 'Flat') {
		var index = A2(
			_elm_lang$core$Maybe$withDefault,
			0,
			A2(_elm_community$list_extra$List_Extra$elemIndex, ka, _newlandsvalley$elm_abc_parser$Music_Notation$flatScale));
		return A2(_newlandsvalley$elm_abc_parser$Music_Notation$lookUpScale, _newlandsvalley$elm_abc_parser$Music_Notation$sharpScale, index);
	} else {
		return ka;
	}
};
var _newlandsvalley$elm_abc_parser$Music_Notation$majorScale = function (target) {
	var chromaticScale = (_elm_lang$core$Native_Utils.eq(
		target,
		{ctor: '_Tuple2', _0: _newlandsvalley$elm_abc_parser$Abc_ParseTree$G, _1: _newlandsvalley$elm_abc_parser$Abc_ParseTree$Flat}) || _elm_lang$core$Native_Utils.eq(
		target,
		{ctor: '_Tuple2', _0: _newlandsvalley$elm_abc_parser$Abc_ParseTree$C, _1: _newlandsvalley$elm_abc_parser$Abc_ParseTree$Flat})) ? _newlandsvalley$elm_abc_parser$Music_Notation$extremeFlatScale : (_newlandsvalley$elm_abc_parser$Music_Notation$isFlatMajorKey(target) ? _newlandsvalley$elm_abc_parser$Music_Notation$flatScale : ((_elm_lang$core$Native_Utils.eq(
		target,
		{ctor: '_Tuple2', _0: _newlandsvalley$elm_abc_parser$Abc_ParseTree$F, _1: _newlandsvalley$elm_abc_parser$Abc_ParseTree$Sharp}) || _elm_lang$core$Native_Utils.eq(
		target,
		{ctor: '_Tuple2', _0: _newlandsvalley$elm_abc_parser$Abc_ParseTree$C, _1: _newlandsvalley$elm_abc_parser$Abc_ParseTree$Sharp})) ? _newlandsvalley$elm_abc_parser$Music_Notation$extremeSharpScale : _newlandsvalley$elm_abc_parser$Music_Notation$sharpScale));
	var f = _newlandsvalley$elm_abc_parser$Music_Notation$lookUpScale(
		A2(_newlandsvalley$elm_abc_parser$Music_Notation$rotateFrom, target, chromaticScale));
	return A2(
		_elm_lang$core$List$map,
		f,
		_newlandsvalley$elm_abc_parser$Music_Notation$partialSum(_newlandsvalley$elm_abc_parser$Music_Notation$majorIntervals));
};
var _newlandsvalley$elm_abc_parser$Music_Notation$modalScale = F2(
	function (target, mode) {
		var index = A2(
			_elm_lang$core$Maybe$withDefault,
			0,
			A2(_elm_community$list_extra$List_Extra$elemIndex, target, _newlandsvalley$elm_abc_parser$Music_Notation$sharpScale));
		var distance = function () {
			var _p24 = mode;
			switch (_p24.ctor) {
				case 'Minor':
					return 3;
				case 'Major':
					return 0;
				default:
					return _newlandsvalley$elm_abc_parser$Music_Notation$modalDistance(mode);
			}
		}();
		var majorKeyIndex = A2(_elm_lang$core$Basics_ops['%'], index + distance, _newlandsvalley$elm_abc_parser$Music_Notation$notesInChromaticScale);
		var majorKey = A2(_newlandsvalley$elm_abc_parser$Music_Notation$lookUpScale, _newlandsvalley$elm_abc_parser$Music_Notation$sharpScale, majorKeyIndex);
		return _newlandsvalley$elm_abc_parser$Music_Notation$majorScale(
			_newlandsvalley$elm_abc_parser$Music_Notation$equivalentEnharmonic(majorKey));
	});
var _newlandsvalley$elm_abc_parser$Music_Notation$diatonicScale = function (ks) {
	var accidental = function () {
		var _p25 = ks.accidental;
		if (_p25.ctor === 'Just') {
			return _p25._0;
		} else {
			return _newlandsvalley$elm_abc_parser$Abc_ParseTree$Natural;
		}
	}();
	var target = {ctor: '_Tuple2', _0: ks.pitchClass, _1: accidental};
	var _p26 = ks.mode;
	switch (_p26.ctor) {
		case 'Major':
			return _newlandsvalley$elm_abc_parser$Music_Notation$majorScale(target);
		case 'Ionian':
			return _newlandsvalley$elm_abc_parser$Music_Notation$majorScale(target);
		default:
			return A2(_newlandsvalley$elm_abc_parser$Music_Notation$modalScale, target, ks.mode);
	}
};
var _newlandsvalley$elm_abc_parser$Music_Notation$keySet = function (ks) {
	return A2(
		_elm_lang$core$List$filter,
		_newlandsvalley$elm_abc_parser$Music_Notation$accidentalKey,
		_newlandsvalley$elm_abc_parser$Music_Notation$diatonicScale(ks));
};
var _newlandsvalley$elm_abc_parser$Music_Notation$modifiedKeySet = function (ksm) {
	var _p27 = ksm;
	var ksig = _p27._0;
	var mods = _p27._1;
	var ks = _newlandsvalley$elm_abc_parser$Music_Notation$keySet(ksig);
	return _elm_lang$core$List$isEmpty(mods) ? ks : A3(_elm_lang$core$List$foldr, _newlandsvalley$elm_abc_parser$Music_Notation$modifyKeySet, ks, mods);
};
var _newlandsvalley$elm_abc_parser$Music_Notation$getKeySet = function (t) {
	var mksig = _newlandsvalley$elm_abc_parser$Music_Notation$getKeySig(t);
	var _p28 = mksig;
	if (_p28.ctor === 'Just') {
		return _newlandsvalley$elm_abc_parser$Music_Notation$modifiedKeySet(_p28._0);
	} else {
		return {ctor: '[]'};
	}
};
var _newlandsvalley$elm_abc_parser$Music_Notation$accidentalImplicitInKey = F2(
	function (pc, mks) {
		var keyset = _newlandsvalley$elm_abc_parser$Music_Notation$modifiedKeySet(mks);
		var accidentals = _newlandsvalley$elm_abc_parser$Music_Accidentals$fromKeySet(keyset);
		return A2(_newlandsvalley$elm_abc_parser$Music_Accidentals$lookup, pc, accidentals);
	});
var _newlandsvalley$elm_abc_parser$Music_Notation$midiPitchOffset = F3(
	function (n, mks, barAccidentals) {
		var inKeyAccidental = A2(_newlandsvalley$elm_abc_parser$Music_Notation$accidentalImplicitInKey, n.pitchClass, mks);
		var inBarAccidental = A2(_newlandsvalley$elm_abc_parser$Music_Accidentals$lookup, n.pitchClass, barAccidentals);
		var maybeAccidental = _newlandsvalley$elm_abc_parser$Music_Notation$firstOneOf(
			{
				ctor: '::',
				_0: n.accidental,
				_1: {
					ctor: '::',
					_0: inBarAccidental,
					_1: {
						ctor: '::',
						_0: inKeyAccidental,
						_1: {ctor: '[]'}
					}
				}
			});
		var accidental = _newlandsvalley$elm_abc_parser$Music_Notation$accidentalPattern(maybeAccidental);
		var pattern = A2(
			_elm_lang$core$Basics_ops['++'],
			_elm_lang$core$Basics$toString(n.pitchClass),
			accidental);
		return A2(
			_elm_lang$core$Maybe$withDefault,
			0,
			A2(_elm_lang$core$Dict$get, pattern, _newlandsvalley$elm_abc_parser$Music_Notation$chromaticScaleDict));
	});
var _newlandsvalley$elm_abc_parser$Music_Notation$toMidiPitch = F3(
	function (n, mks, barAccidentals) {
		return (n.octave * _newlandsvalley$elm_abc_parser$Music_Notation$notesInChromaticScale) + A3(_newlandsvalley$elm_abc_parser$Music_Notation$midiPitchOffset, n, mks, barAccidentals);
	});
var _newlandsvalley$elm_abc_parser$Music_Notation$isCOrSharpKey = function (ksig) {
	var kset = _newlandsvalley$elm_abc_parser$Music_Notation$keySet(ksig);
	var _p29 = A2(
		_elm_lang$core$Maybe$withDefault,
		{ctor: '_Tuple2', _0: _newlandsvalley$elm_abc_parser$Abc_ParseTree$C, _1: _newlandsvalley$elm_abc_parser$Abc_ParseTree$Sharp},
		_elm_lang$core$List$head(kset));
	var samplePC = _p29._0;
	var sampleAcc = _p29._1;
	return _elm_lang$core$Native_Utils.eq(sampleAcc, _newlandsvalley$elm_abc_parser$Abc_ParseTree$Sharp);
};
var _newlandsvalley$elm_abc_parser$Music_Notation$transposeKeySignatureBy = F2(
	function (i, mks) {
		var _p30 = mks;
		var ks = _p30._0;
		var keyaccs = _p30._1;
		var pattern = A2(
			_elm_lang$core$Basics_ops['++'],
			_elm_lang$core$Basics$toString(ks.pitchClass),
			_newlandsvalley$elm_abc_parser$Music_Notation$accidentalPattern(ks.accidental));
		var index = A2(
			_elm_lang$core$Maybe$withDefault,
			0,
			A2(_elm_lang$core$Dict$get, pattern, _newlandsvalley$elm_abc_parser$Music_Notation$chromaticScaleDict));
		var newIndex = A2(_elm_lang$core$Basics_ops['%'], (_newlandsvalley$elm_abc_parser$Music_Notation$notesInChromaticScale + index) + i, _newlandsvalley$elm_abc_parser$Music_Notation$notesInChromaticScale);
		var scale = _newlandsvalley$elm_abc_parser$Music_Notation$isCOrSharpKey(ks) ? _newlandsvalley$elm_abc_parser$Music_Notation$sharpScale : _newlandsvalley$elm_abc_parser$Music_Notation$flatScale;
		var _p31 = A2(
			_elm_lang$core$Maybe$withDefault,
			{ctor: '_Tuple2', _0: _newlandsvalley$elm_abc_parser$Abc_ParseTree$C, _1: _newlandsvalley$elm_abc_parser$Abc_ParseTree$Natural},
			A2(_elm_community$list_extra$List_Extra$getAt, newIndex, scale));
		var pc = _p31._0;
		var ma = _p31._1;
		var accs = A2(
			_elm_lang$core$List$map,
			_newlandsvalley$elm_abc_parser$Music_Notation$transposeKeyAccidentalBy(i),
			keyaccs);
		var newks = A3(_newlandsvalley$elm_abc_parser$Music_Notation$equivalentEnharmonicKeySig, pc, ma, ks.mode);
		return {ctor: '_Tuple2', _0: newks, _1: accs};
	});
var _newlandsvalley$elm_abc_parser$Music_Notation$normaliseModalKey = function (ks) {
	var scale = function () {
		var _p32 = ks.accidental;
		_v23_2:
		do {
			if (_p32.ctor === 'Just') {
				switch (_p32._0.ctor) {
					case 'Sharp':
						return _newlandsvalley$elm_abc_parser$Music_Notation$sharpScale;
					case 'Flat':
						return _newlandsvalley$elm_abc_parser$Music_Notation$flatScale;
					default:
						break _v23_2;
				}
			} else {
				break _v23_2;
			}
		} while(false);
		var _p33 = ks.pitchClass;
		if (_p33.ctor === 'F') {
			return _newlandsvalley$elm_abc_parser$Music_Notation$flatScale;
		} else {
			return _newlandsvalley$elm_abc_parser$Music_Notation$sharpScale;
		}
	}();
	var sourceAccidental = _newlandsvalley$elm_abc_parser$Music_Notation$maccToAcc(ks.accidental);
	var keyAccidental = {ctor: '_Tuple2', _0: ks.pitchClass, _1: sourceAccidental};
	var index = A2(
		_elm_lang$core$Maybe$withDefault,
		0,
		A2(_elm_community$list_extra$List_Extra$elemIndex, keyAccidental, scale));
	var distance = _newlandsvalley$elm_abc_parser$Music_Notation$modalDistance(ks.mode);
	var majorKeyIndex = A2(_elm_lang$core$Basics_ops['%'], index + distance, _newlandsvalley$elm_abc_parser$Music_Notation$notesInChromaticScale);
	var majorKeyAcc = A2(_newlandsvalley$elm_abc_parser$Music_Notation$lookUpScale, scale, majorKeyIndex);
	var targetAccidental = _newlandsvalley$elm_abc_parser$Music_Notation$accToMacc(
		_elm_lang$core$Tuple$second(majorKeyAcc));
	return _elm_lang$core$Native_Utils.eq(0, distance) ? ks : {
		pitchClass: _elm_lang$core$Tuple$first(majorKeyAcc),
		accidental: targetAccidental,
		mode: _newlandsvalley$elm_abc_parser$Abc_ParseTree$Major
	};
};
var _newlandsvalley$elm_abc_parser$Music_Notation$standardMidiTick = 480;
var _newlandsvalley$elm_abc_parser$Music_Notation$noteTicks = function (n) {
	return ((_newlandsvalley$elm_abc_parser$Music_Notation$standardMidiTick * _elm_community$ratio$Ratio$numerator(n)) / _elm_community$ratio$Ratio$denominator(n)) | 0;
};
var _newlandsvalley$elm_abc_parser$Music_Notation$chordalNoteTicks = F2(
	function (note, chord) {
		var nTicks = _newlandsvalley$elm_abc_parser$Music_Notation$noteTicks(note);
		return ((nTicks * _elm_community$ratio$Ratio$numerator(chord)) / _elm_community$ratio$Ratio$denominator(chord)) | 0;
	});
var _newlandsvalley$elm_abc_parser$Music_Notation$AbcTempo = F3(
	function (a, b, c) {
		return {tempoNoteLength: a, bpm: b, unitNoteLength: c};
	});

var _newlandsvalley$elm_abc_parser$Music_Octave$moveNoteBy = F2(
	function (i, note) {
		return _elm_lang$core$Native_Utils.update(
			note,
			{octave: note.octave + i});
	});
var _newlandsvalley$elm_abc_parser$Music_Octave$moveNoteList = function (i) {
	return _elm_lang$core$List$map(
		_newlandsvalley$elm_abc_parser$Music_Octave$moveNoteBy(i));
};
var _newlandsvalley$elm_abc_parser$Music_Octave$moveChord = F2(
	function (i, c) {
		return _elm_lang$core$Native_Utils.update(
			c,
			{
				notes: A2(_newlandsvalley$elm_abc_parser$Music_Octave$moveNoteList, i, c.notes)
			});
	});
var _newlandsvalley$elm_abc_parser$Music_Octave$moveOctave = F2(
	function (i, m) {
		var _p0 = m;
		switch (_p0.ctor) {
			case 'Note':
				return _newlandsvalley$elm_abc_parser$Abc_ParseTree$Note(
					A2(_newlandsvalley$elm_abc_parser$Music_Octave$moveNoteBy, i, _p0._0));
			case 'BrokenRhythmPair':
				return A3(
					_newlandsvalley$elm_abc_parser$Abc_ParseTree$BrokenRhythmPair,
					A2(_newlandsvalley$elm_abc_parser$Music_Octave$moveNoteBy, i, _p0._0),
					_p0._1,
					A2(_newlandsvalley$elm_abc_parser$Music_Octave$moveNoteBy, i, _p0._2));
			case 'Tuplet':
				return A2(
					_newlandsvalley$elm_abc_parser$Abc_ParseTree$Tuplet,
					_p0._0,
					A2(_newlandsvalley$elm_abc_parser$Music_Octave$moveNoteList, i, _p0._1));
			case 'GraceNote':
				return A2(
					_newlandsvalley$elm_abc_parser$Abc_ParseTree$GraceNote,
					_p0._0,
					A2(_newlandsvalley$elm_abc_parser$Music_Octave$moveNoteList, i, _p0._1));
			case 'Chord':
				return _newlandsvalley$elm_abc_parser$Abc_ParseTree$Chord(
					A2(_newlandsvalley$elm_abc_parser$Music_Octave$moveChord, i, _p0._0));
			default:
				return m;
		}
	});
var _newlandsvalley$elm_abc_parser$Music_Octave$moveMusicList = function (i) {
	return _elm_lang$core$List$map(
		_newlandsvalley$elm_abc_parser$Music_Octave$moveOctave(i));
};
var _newlandsvalley$elm_abc_parser$Music_Octave$moveBodyPart = F2(
	function (i, bp) {
		var _p1 = bp;
		if (_p1.ctor === 'Score') {
			return _newlandsvalley$elm_abc_parser$Abc_ParseTree$Score(
				A2(_newlandsvalley$elm_abc_parser$Music_Octave$moveMusicList, i, _p1._0));
		} else {
			return bp;
		}
	});
var _newlandsvalley$elm_abc_parser$Music_Octave$moveTuneBody = function (i) {
	return _elm_lang$core$List$map(
		_newlandsvalley$elm_abc_parser$Music_Octave$moveBodyPart(i));
};
var _newlandsvalley$elm_abc_parser$Music_Octave$moveTune = F2(
	function (i, t) {
		var _p2 = t;
		var headers = _p2._0;
		var body = _p2._1;
		return {
			ctor: '_Tuple2',
			_0: headers,
			_1: A2(_newlandsvalley$elm_abc_parser$Music_Octave$moveTuneBody, i, body)
		};
	});
var _newlandsvalley$elm_abc_parser$Music_Octave$down = function (t) {
	return A2(_newlandsvalley$elm_abc_parser$Music_Octave$moveTune, -1, t);
};
var _newlandsvalley$elm_abc_parser$Music_Octave$up = function (t) {
	return A2(_newlandsvalley$elm_abc_parser$Music_Octave$moveTune, 1, t);
};

var _newlandsvalley$elm_abc_parser$Music_Tempo$placeHeaderPenultimately = F2(
	function (h, hs) {
		var reversedhs = _elm_lang$core$List$reverse(hs);
		var _p0 = reversedhs;
		if (_p0.ctor === '[]') {
			return {
				ctor: '::',
				_0: h,
				_1: {ctor: '[]'}
			};
		} else {
			return _elm_lang$core$List$reverse(
				{
					ctor: '::',
					_0: _p0._0,
					_1: {ctor: '::', _0: h, _1: _p0._1}
				});
		}
	});
var _newlandsvalley$elm_abc_parser$Music_Tempo$replaceTempoHeader = F2(
	function (newTempoHeader, hs) {
		var f = function (h) {
			var _p1 = h;
			if (_p1.ctor === 'Tempo') {
				return false;
			} else {
				return true;
			}
		};
		var newhs = A2(_elm_lang$core$List$filter, f, hs);
		return A2(_newlandsvalley$elm_abc_parser$Music_Tempo$placeHeaderPenultimately, newTempoHeader, newhs);
	});
var _newlandsvalley$elm_abc_parser$Music_Tempo$defaultTempo = {
	noteLengths: {
		ctor: '::',
		_0: A2(_elm_community$ratio$Ratio$over, 1, 4),
		_1: {ctor: '[]'}
	},
	bpm: 120,
	marking: _elm_lang$core$Maybe$Nothing
};
var _newlandsvalley$elm_abc_parser$Music_Tempo$tempoHeader = function (tune) {
	var headerMap = _newlandsvalley$elm_abc_parser$Music_Notation$getHeaderMap(tune);
	var _p2 = tune;
	var headers = _p2._0;
	var body = _p2._1;
	return A2(
		_elm_lang$core$Maybe$withDefault,
		_newlandsvalley$elm_abc_parser$Abc_ParseTree$Tempo(_newlandsvalley$elm_abc_parser$Music_Tempo$defaultTempo),
		A2(
			_elm_lang$core$Dict$get,
			_elm_lang$core$Native_Utils.chr('Q'),
			headerMap));
};
var _newlandsvalley$elm_abc_parser$Music_Tempo$getBpm = function (tune) {
	var _p3 = _newlandsvalley$elm_abc_parser$Music_Tempo$tempoHeader(tune);
	if (_p3.ctor === 'Tempo') {
		return _p3._0.bpm;
	} else {
		return _newlandsvalley$elm_abc_parser$Music_Tempo$defaultTempo.bpm;
	}
};
var _newlandsvalley$elm_abc_parser$Music_Tempo$setBpm = F2(
	function (bpm, tune) {
		var newTempoHeader = function () {
			var _p4 = _newlandsvalley$elm_abc_parser$Music_Tempo$tempoHeader(tune);
			if (_p4.ctor === 'Tempo') {
				return _newlandsvalley$elm_abc_parser$Abc_ParseTree$Tempo(
					_elm_lang$core$Native_Utils.update(
						_p4._0,
						{bpm: bpm}));
			} else {
				return _p4;
			}
		}();
		var _p5 = tune;
		var headers = _p5._0;
		var body = _p5._1;
		var newHeaders = A2(_newlandsvalley$elm_abc_parser$Music_Tempo$replaceTempoHeader, newTempoHeader, headers);
		return {ctor: '_Tuple2', _0: newHeaders, _1: body};
	});

var _newlandsvalley$elm_abc_parser$Music_Transposition$firstOneOf = A2(_elm_lang$core$List$foldr, _elm_community$maybe_extra$Maybe_Extra$or, _elm_lang$core$Maybe$Nothing);
var _newlandsvalley$elm_abc_parser$Music_Transposition$replaceKeyHeader = F2(
	function (newmks, hs) {
		var f = function (h) {
			var _p0 = h;
			if (_p0.ctor === 'Key') {
				return false;
			} else {
				return true;
			}
		};
		var newhs = A2(_elm_lang$core$List$filter, f, hs);
		return A2(
			_elm_lang$core$Basics_ops['++'],
			newhs,
			{
				ctor: '::',
				_0: _newlandsvalley$elm_abc_parser$Abc_ParseTree$Key(newmks),
				_1: {ctor: '[]'}
			});
	});
var _newlandsvalley$elm_abc_parser$Music_Transposition$noteIndex = F2(
	function (from, increment) {
		var to = from + increment;
		return (_elm_lang$core$Native_Utils.cmp(to, 0) < 0) ? {ctor: '_Tuple2', _0: _newlandsvalley$elm_abc_parser$Music_Notation$notesInChromaticScale + to, _1: -1} : ((_elm_lang$core$Native_Utils.cmp(to, _newlandsvalley$elm_abc_parser$Music_Notation$notesInChromaticScale) > -1) ? {ctor: '_Tuple2', _0: to - _newlandsvalley$elm_abc_parser$Music_Notation$notesInChromaticScale, _1: 1} : {ctor: '_Tuple2', _0: to, _1: 0});
	});
var _newlandsvalley$elm_abc_parser$Music_Transposition$lookupChromatic = F2(
	function (dict, target) {
		return A2(
			_elm_lang$core$Maybe$withDefault,
			0,
			A2(_elm_lang$core$Dict$get, target, dict));
	});
var _newlandsvalley$elm_abc_parser$Music_Transposition$comparableNote = function (n) {
	var _p1 = n;
	var pc = _p1._0;
	var acc = _p1._1;
	var accStr = function () {
		var _p2 = acc;
		switch (_p2.ctor) {
			case 'Natural':
				return '';
			case 'Sharp':
				return '#';
			case 'Flat':
				return 'b';
			case 'DoubleSharp':
				return '##';
			default:
				return 'bb';
		}
	}();
	return A2(
		_elm_lang$core$Basics_ops['++'],
		_elm_lang$core$Basics$toString(pc),
		accStr);
};
var _newlandsvalley$elm_abc_parser$Music_Transposition$noteNumbers = {
	ctor: '::',
	_0: {
		ctor: '_Tuple2',
		_0: {ctor: '_Tuple2', _0: _newlandsvalley$elm_abc_parser$Abc_ParseTree$C, _1: _newlandsvalley$elm_abc_parser$Abc_ParseTree$Flat},
		_1: 11
	},
	_1: {
		ctor: '::',
		_0: {
			ctor: '_Tuple2',
			_0: {ctor: '_Tuple2', _0: _newlandsvalley$elm_abc_parser$Abc_ParseTree$C, _1: _newlandsvalley$elm_abc_parser$Abc_ParseTree$Natural},
			_1: 0
		},
		_1: {
			ctor: '::',
			_0: {
				ctor: '_Tuple2',
				_0: {ctor: '_Tuple2', _0: _newlandsvalley$elm_abc_parser$Abc_ParseTree$C, _1: _newlandsvalley$elm_abc_parser$Abc_ParseTree$Sharp},
				_1: 1
			},
			_1: {
				ctor: '::',
				_0: {
					ctor: '_Tuple2',
					_0: {ctor: '_Tuple2', _0: _newlandsvalley$elm_abc_parser$Abc_ParseTree$C, _1: _newlandsvalley$elm_abc_parser$Abc_ParseTree$DoubleSharp},
					_1: 2
				},
				_1: {
					ctor: '::',
					_0: {
						ctor: '_Tuple2',
						_0: {ctor: '_Tuple2', _0: _newlandsvalley$elm_abc_parser$Abc_ParseTree$D, _1: _newlandsvalley$elm_abc_parser$Abc_ParseTree$DoubleFlat},
						_1: 0
					},
					_1: {
						ctor: '::',
						_0: {
							ctor: '_Tuple2',
							_0: {ctor: '_Tuple2', _0: _newlandsvalley$elm_abc_parser$Abc_ParseTree$D, _1: _newlandsvalley$elm_abc_parser$Abc_ParseTree$Flat},
							_1: 1
						},
						_1: {
							ctor: '::',
							_0: {
								ctor: '_Tuple2',
								_0: {ctor: '_Tuple2', _0: _newlandsvalley$elm_abc_parser$Abc_ParseTree$D, _1: _newlandsvalley$elm_abc_parser$Abc_ParseTree$Natural},
								_1: 2
							},
							_1: {
								ctor: '::',
								_0: {
									ctor: '_Tuple2',
									_0: {ctor: '_Tuple2', _0: _newlandsvalley$elm_abc_parser$Abc_ParseTree$D, _1: _newlandsvalley$elm_abc_parser$Abc_ParseTree$Sharp},
									_1: 3
								},
								_1: {
									ctor: '::',
									_0: {
										ctor: '_Tuple2',
										_0: {ctor: '_Tuple2', _0: _newlandsvalley$elm_abc_parser$Abc_ParseTree$D, _1: _newlandsvalley$elm_abc_parser$Abc_ParseTree$DoubleSharp},
										_1: 4
									},
									_1: {
										ctor: '::',
										_0: {
											ctor: '_Tuple2',
											_0: {ctor: '_Tuple2', _0: _newlandsvalley$elm_abc_parser$Abc_ParseTree$E, _1: _newlandsvalley$elm_abc_parser$Abc_ParseTree$DoubleFlat},
											_1: 2
										},
										_1: {
											ctor: '::',
											_0: {
												ctor: '_Tuple2',
												_0: {ctor: '_Tuple2', _0: _newlandsvalley$elm_abc_parser$Abc_ParseTree$E, _1: _newlandsvalley$elm_abc_parser$Abc_ParseTree$Flat},
												_1: 3
											},
											_1: {
												ctor: '::',
												_0: {
													ctor: '_Tuple2',
													_0: {ctor: '_Tuple2', _0: _newlandsvalley$elm_abc_parser$Abc_ParseTree$E, _1: _newlandsvalley$elm_abc_parser$Abc_ParseTree$Natural},
													_1: 4
												},
												_1: {
													ctor: '::',
													_0: {
														ctor: '_Tuple2',
														_0: {ctor: '_Tuple2', _0: _newlandsvalley$elm_abc_parser$Abc_ParseTree$E, _1: _newlandsvalley$elm_abc_parser$Abc_ParseTree$Sharp},
														_1: 5
													},
													_1: {
														ctor: '::',
														_0: {
															ctor: '_Tuple2',
															_0: {ctor: '_Tuple2', _0: _newlandsvalley$elm_abc_parser$Abc_ParseTree$E, _1: _newlandsvalley$elm_abc_parser$Abc_ParseTree$DoubleSharp},
															_1: 6
														},
														_1: {
															ctor: '::',
															_0: {
																ctor: '_Tuple2',
																_0: {ctor: '_Tuple2', _0: _newlandsvalley$elm_abc_parser$Abc_ParseTree$F, _1: _newlandsvalley$elm_abc_parser$Abc_ParseTree$Flat},
																_1: 4
															},
															_1: {
																ctor: '::',
																_0: {
																	ctor: '_Tuple2',
																	_0: {ctor: '_Tuple2', _0: _newlandsvalley$elm_abc_parser$Abc_ParseTree$F, _1: _newlandsvalley$elm_abc_parser$Abc_ParseTree$Natural},
																	_1: 5
																},
																_1: {
																	ctor: '::',
																	_0: {
																		ctor: '_Tuple2',
																		_0: {ctor: '_Tuple2', _0: _newlandsvalley$elm_abc_parser$Abc_ParseTree$F, _1: _newlandsvalley$elm_abc_parser$Abc_ParseTree$Sharp},
																		_1: 6
																	},
																	_1: {
																		ctor: '::',
																		_0: {
																			ctor: '_Tuple2',
																			_0: {ctor: '_Tuple2', _0: _newlandsvalley$elm_abc_parser$Abc_ParseTree$F, _1: _newlandsvalley$elm_abc_parser$Abc_ParseTree$DoubleSharp},
																			_1: 7
																		},
																		_1: {
																			ctor: '::',
																			_0: {
																				ctor: '_Tuple2',
																				_0: {ctor: '_Tuple2', _0: _newlandsvalley$elm_abc_parser$Abc_ParseTree$G, _1: _newlandsvalley$elm_abc_parser$Abc_ParseTree$DoubleFlat},
																				_1: 5
																			},
																			_1: {
																				ctor: '::',
																				_0: {
																					ctor: '_Tuple2',
																					_0: {ctor: '_Tuple2', _0: _newlandsvalley$elm_abc_parser$Abc_ParseTree$G, _1: _newlandsvalley$elm_abc_parser$Abc_ParseTree$Flat},
																					_1: 6
																				},
																				_1: {
																					ctor: '::',
																					_0: {
																						ctor: '_Tuple2',
																						_0: {ctor: '_Tuple2', _0: _newlandsvalley$elm_abc_parser$Abc_ParseTree$G, _1: _newlandsvalley$elm_abc_parser$Abc_ParseTree$Natural},
																						_1: 7
																					},
																					_1: {
																						ctor: '::',
																						_0: {
																							ctor: '_Tuple2',
																							_0: {ctor: '_Tuple2', _0: _newlandsvalley$elm_abc_parser$Abc_ParseTree$G, _1: _newlandsvalley$elm_abc_parser$Abc_ParseTree$Sharp},
																							_1: 8
																						},
																						_1: {
																							ctor: '::',
																							_0: {
																								ctor: '_Tuple2',
																								_0: {ctor: '_Tuple2', _0: _newlandsvalley$elm_abc_parser$Abc_ParseTree$G, _1: _newlandsvalley$elm_abc_parser$Abc_ParseTree$DoubleSharp},
																								_1: 9
																							},
																							_1: {
																								ctor: '::',
																								_0: {
																									ctor: '_Tuple2',
																									_0: {ctor: '_Tuple2', _0: _newlandsvalley$elm_abc_parser$Abc_ParseTree$A, _1: _newlandsvalley$elm_abc_parser$Abc_ParseTree$DoubleFlat},
																									_1: 7
																								},
																								_1: {
																									ctor: '::',
																									_0: {
																										ctor: '_Tuple2',
																										_0: {ctor: '_Tuple2', _0: _newlandsvalley$elm_abc_parser$Abc_ParseTree$A, _1: _newlandsvalley$elm_abc_parser$Abc_ParseTree$Flat},
																										_1: 8
																									},
																									_1: {
																										ctor: '::',
																										_0: {
																											ctor: '_Tuple2',
																											_0: {ctor: '_Tuple2', _0: _newlandsvalley$elm_abc_parser$Abc_ParseTree$A, _1: _newlandsvalley$elm_abc_parser$Abc_ParseTree$Natural},
																											_1: 9
																										},
																										_1: {
																											ctor: '::',
																											_0: {
																												ctor: '_Tuple2',
																												_0: {ctor: '_Tuple2', _0: _newlandsvalley$elm_abc_parser$Abc_ParseTree$A, _1: _newlandsvalley$elm_abc_parser$Abc_ParseTree$Sharp},
																												_1: 10
																											},
																											_1: {
																												ctor: '::',
																												_0: {
																													ctor: '_Tuple2',
																													_0: {ctor: '_Tuple2', _0: _newlandsvalley$elm_abc_parser$Abc_ParseTree$A, _1: _newlandsvalley$elm_abc_parser$Abc_ParseTree$DoubleSharp},
																													_1: 11
																												},
																												_1: {
																													ctor: '::',
																													_0: {
																														ctor: '_Tuple2',
																														_0: {ctor: '_Tuple2', _0: _newlandsvalley$elm_abc_parser$Abc_ParseTree$B, _1: _newlandsvalley$elm_abc_parser$Abc_ParseTree$DoubleFlat},
																														_1: 9
																													},
																													_1: {
																														ctor: '::',
																														_0: {
																															ctor: '_Tuple2',
																															_0: {ctor: '_Tuple2', _0: _newlandsvalley$elm_abc_parser$Abc_ParseTree$B, _1: _newlandsvalley$elm_abc_parser$Abc_ParseTree$Flat},
																															_1: 10
																														},
																														_1: {
																															ctor: '::',
																															_0: {
																																ctor: '_Tuple2',
																																_0: {ctor: '_Tuple2', _0: _newlandsvalley$elm_abc_parser$Abc_ParseTree$B, _1: _newlandsvalley$elm_abc_parser$Abc_ParseTree$Natural},
																																_1: 11
																															},
																															_1: {
																																ctor: '::',
																																_0: {
																																	ctor: '_Tuple2',
																																	_0: {ctor: '_Tuple2', _0: _newlandsvalley$elm_abc_parser$Abc_ParseTree$B, _1: _newlandsvalley$elm_abc_parser$Abc_ParseTree$Sharp},
																																	_1: 0
																																},
																																_1: {
																																	ctor: '::',
																																	_0: {
																																		ctor: '_Tuple2',
																																		_0: {ctor: '_Tuple2', _0: _newlandsvalley$elm_abc_parser$Abc_ParseTree$B, _1: _newlandsvalley$elm_abc_parser$Abc_ParseTree$DoubleSharp},
																																		_1: 1
																																	},
																																	_1: {ctor: '[]'}
																																}
																															}
																														}
																													}
																												}
																											}
																										}
																									}
																								}
																							}
																						}
																					}
																				}
																			}
																		}
																	}
																}
															}
														}
													}
												}
											}
										}
									}
								}
							}
						}
					}
				}
			}
		}
	}
};
var _newlandsvalley$elm_abc_parser$Music_Transposition$sharpNoteNumbers = function () {
	var f = function (nn) {
		var _p3 = nn;
		var pc = _p3._0._0;
		var a = _p3._0._1;
		var i = _p3._1;
		return (_elm_lang$core$Native_Utils.eq(a, _newlandsvalley$elm_abc_parser$Abc_ParseTree$Sharp) && ((!_elm_lang$core$Native_Utils.eq(pc, _newlandsvalley$elm_abc_parser$Abc_ParseTree$E)) && (!_elm_lang$core$Native_Utils.eq(pc, _newlandsvalley$elm_abc_parser$Abc_ParseTree$B)))) || _elm_lang$core$Native_Utils.eq(a, _newlandsvalley$elm_abc_parser$Abc_ParseTree$Natural);
	};
	return A2(_elm_lang$core$List$filter, f, _newlandsvalley$elm_abc_parser$Music_Transposition$noteNumbers);
}();
var _newlandsvalley$elm_abc_parser$Music_Transposition$sharpNotedNumbers = function () {
	var invert = function (_p4) {
		var _p5 = _p4;
		return {ctor: '_Tuple2', _0: _p5._1, _1: _p5._0};
	};
	return _elm_lang$core$Dict$fromList(
		A2(_elm_lang$core$List$map, invert, _newlandsvalley$elm_abc_parser$Music_Transposition$sharpNoteNumbers));
}();
var _newlandsvalley$elm_abc_parser$Music_Transposition$flatNoteNumbers = function () {
	var f = function (nn) {
		var _p6 = nn;
		var pc = _p6._0._0;
		var a = _p6._0._1;
		var i = _p6._1;
		return (_elm_lang$core$Native_Utils.eq(a, _newlandsvalley$elm_abc_parser$Abc_ParseTree$Flat) && ((!_elm_lang$core$Native_Utils.eq(pc, _newlandsvalley$elm_abc_parser$Abc_ParseTree$F)) && (!_elm_lang$core$Native_Utils.eq(pc, _newlandsvalley$elm_abc_parser$Abc_ParseTree$C)))) || _elm_lang$core$Native_Utils.eq(a, _newlandsvalley$elm_abc_parser$Abc_ParseTree$Natural);
	};
	return A2(_elm_lang$core$List$filter, f, _newlandsvalley$elm_abc_parser$Music_Transposition$noteNumbers);
}();
var _newlandsvalley$elm_abc_parser$Music_Transposition$flatNotedNumbers = function () {
	var invert = function (_p7) {
		var _p8 = _p7;
		return {ctor: '_Tuple2', _0: _p8._1, _1: _p8._0};
	};
	return _elm_lang$core$Dict$fromList(
		A2(_elm_lang$core$List$map, invert, _newlandsvalley$elm_abc_parser$Music_Transposition$flatNoteNumbers));
}();
var _newlandsvalley$elm_abc_parser$Music_Transposition$pitchFromInt = F2(
	function (ks, i) {
		var dict = _newlandsvalley$elm_abc_parser$Music_Notation$isCOrSharpKey(ks) ? _newlandsvalley$elm_abc_parser$Music_Transposition$sharpNotedNumbers : _newlandsvalley$elm_abc_parser$Music_Transposition$flatNotedNumbers;
		return A2(
			_elm_lang$core$Maybe$withDefault,
			{ctor: '_Tuple2', _0: _newlandsvalley$elm_abc_parser$Abc_ParseTree$C, _1: _newlandsvalley$elm_abc_parser$Abc_ParseTree$Natural},
			A2(_elm_lang$core$Dict$get, i, dict));
	});
var _newlandsvalley$elm_abc_parser$Music_Transposition$comparableNoteNumbers = function () {
	var f = function (notePair) {
		return {
			ctor: '_Tuple2',
			_0: _newlandsvalley$elm_abc_parser$Music_Transposition$comparableNote(
				_elm_lang$core$Tuple$first(notePair)),
			_1: _elm_lang$core$Tuple$second(notePair)
		};
	};
	return A2(_elm_lang$core$List$map, f, _newlandsvalley$elm_abc_parser$Music_Transposition$noteNumbers);
}();
var _newlandsvalley$elm_abc_parser$Music_Transposition$chromaticScaleDict = _elm_lang$core$Dict$fromList(_newlandsvalley$elm_abc_parser$Music_Transposition$comparableNoteNumbers);
var _newlandsvalley$elm_abc_parser$Music_Transposition$pitchNumber = function (pa) {
	return A2(
		_newlandsvalley$elm_abc_parser$Music_Transposition$lookupChromatic,
		_newlandsvalley$elm_abc_parser$Music_Transposition$chromaticScaleDict,
		_newlandsvalley$elm_abc_parser$Music_Transposition$comparableNote(pa));
};
var _newlandsvalley$elm_abc_parser$Music_Transposition$noteNumber = function (n) {
	var acc = A2(_elm_lang$core$Maybe$withDefault, _newlandsvalley$elm_abc_parser$Abc_ParseTree$Natural, n.accidental);
	return _newlandsvalley$elm_abc_parser$Music_Transposition$pitchNumber(
		{ctor: '_Tuple2', _0: n.pitchClass, _1: acc});
};
var _newlandsvalley$elm_abc_parser$Music_Transposition$transpositionDistance = F2(
	function (target, src) {
		var _p9 = target;
		var tpc = _p9._0;
		var tmacc = _p9._1;
		var tacc = A2(_elm_lang$core$Maybe$withDefault, _newlandsvalley$elm_abc_parser$Abc_ParseTree$Natural, tmacc);
		var _p10 = src;
		var spc = _p10._0;
		var smacc = _p10._1;
		var sacc = A2(_elm_lang$core$Maybe$withDefault, _newlandsvalley$elm_abc_parser$Abc_ParseTree$Natural, smacc);
		var distance = _newlandsvalley$elm_abc_parser$Music_Transposition$pitchNumber(
			{ctor: '_Tuple2', _0: tpc, _1: tacc}) - _newlandsvalley$elm_abc_parser$Music_Transposition$pitchNumber(
			{ctor: '_Tuple2', _0: spc, _1: sacc});
		return (_elm_lang$core$Native_Utils.cmp(distance, -7) < 1) ? A2(_elm_lang$core$Basics_ops['%'], _newlandsvalley$elm_abc_parser$Music_Notation$notesInChromaticScale + distance, _newlandsvalley$elm_abc_parser$Music_Notation$notesInChromaticScale) : distance;
	});
var _newlandsvalley$elm_abc_parser$Music_Transposition$addBarAccidental = F3(
	function (pc, ma, accs) {
		var _p11 = ma;
		if (_p11.ctor === 'Just') {
			return A3(_newlandsvalley$elm_abc_parser$Music_Accidentals$add, pc, _p11._0, accs);
		} else {
			return accs;
		}
	});
var _newlandsvalley$elm_abc_parser$Music_Transposition$sharpenFlatEnharmonic = function (ka) {
	var _p12 = ka;
	_v5_2:
	do {
		if ((_p12.ctor === '_Tuple2') && (_p12._1.ctor === 'Flat')) {
			switch (_p12._0.ctor) {
				case 'G':
					return {ctor: '_Tuple2', _0: _newlandsvalley$elm_abc_parser$Abc_ParseTree$F, _1: _newlandsvalley$elm_abc_parser$Abc_ParseTree$Sharp};
				case 'D':
					return {ctor: '_Tuple2', _0: _newlandsvalley$elm_abc_parser$Abc_ParseTree$C, _1: _newlandsvalley$elm_abc_parser$Abc_ParseTree$Sharp};
				default:
					break _v5_2;
			}
		} else {
			break _v5_2;
		}
	} while(false);
	return ka;
};
var _newlandsvalley$elm_abc_parser$Music_Transposition$transposeNoteBy = F2(
	function (state, note) {
		var newSourceAccs = A3(_newlandsvalley$elm_abc_parser$Music_Transposition$addBarAccidental, note.pitchClass, note.accidental, state.sourceBarAccidentals);
		var inSourceBarAccidental = A2(_newlandsvalley$elm_abc_parser$Music_Accidentals$lookup, note.pitchClass, state.sourceBarAccidentals);
		var inSourceKeyAccidental = A2(_newlandsvalley$elm_abc_parser$Music_Notation$accidentalImplicitInKey, note.pitchClass, state.sourcemks);
		var implicitSourceAccidental = _newlandsvalley$elm_abc_parser$Music_Transposition$firstOneOf(
			{
				ctor: '::',
				_0: inSourceBarAccidental,
				_1: {
					ctor: '::',
					_0: inSourceKeyAccidental,
					_1: {ctor: '[]'}
				}
			});
		var explicitSourceNote = _elm_community$maybe_extra$Maybe_Extra$isJust(note.accidental) ? note : _elm_lang$core$Native_Utils.update(
			note,
			{accidental: implicitSourceAccidental});
		var srcNum = _newlandsvalley$elm_abc_parser$Music_Transposition$noteNumber(explicitSourceNote);
		var _p13 = A2(_newlandsvalley$elm_abc_parser$Music_Transposition$noteIndex, srcNum, state.keyDistance);
		var targetNum = _p13._0;
		var octaveIncrement = _p13._1;
		var ka = A2(
			_newlandsvalley$elm_abc_parser$Music_Transposition$pitchFromInt,
			_elm_lang$core$Tuple$first(state.targetmks),
			targetNum);
		var _p14 = _newlandsvalley$elm_abc_parser$Music_Transposition$sharpenFlatEnharmonic(ka);
		var pc = _p14._0;
		var acc = _p14._1;
		var targetAcc = A2(
			_newlandsvalley$elm_abc_parser$Music_Accidentals$member,
			{ctor: '_Tuple2', _0: pc, _1: acc},
			state.targetBarAccidentals) ? _elm_lang$core$Maybe$Nothing : (_elm_community$maybe_extra$Maybe_Extra$isJust(
			A2(_newlandsvalley$elm_abc_parser$Music_Accidentals$lookup, pc, state.targetBarAccidentals)) ? _elm_lang$core$Maybe$Just(acc) : (A2(
			_newlandsvalley$elm_abc_parser$Music_Notation$inScale,
			{ctor: '_Tuple2', _0: pc, _1: acc},
			state.targetScale) ? _elm_lang$core$Maybe$Nothing : _elm_lang$core$Maybe$Just(acc)));
		var newTargetAccs = _elm_community$maybe_extra$Maybe_Extra$isJust(targetAcc) ? A3(
			_newlandsvalley$elm_abc_parser$Music_Transposition$addBarAccidental,
			pc,
			_elm_lang$core$Maybe$Just(acc),
			state.targetBarAccidentals) : state.targetBarAccidentals;
		var newState = _elm_lang$core$Native_Utils.update(
			state,
			{sourceBarAccidentals: newSourceAccs, targetBarAccidentals: newTargetAccs});
		var transposedNote = _elm_lang$core$Native_Utils.update(
			note,
			{pitchClass: pc, accidental: targetAcc, octave: note.octave + octaveIncrement});
		return {ctor: '_Tuple2', _0: transposedNote, _1: newState};
	});
var _newlandsvalley$elm_abc_parser$Music_Transposition$transposeNoteList = F2(
	function (state, ns) {
		var f = F2(
			function (n, acc) {
				var _p15 = acc;
				var ns = _p15._0;
				var s0 = _p15._1;
				var _p16 = A2(_newlandsvalley$elm_abc_parser$Music_Transposition$transposeNoteBy, s0, n);
				var n1 = _p16._0;
				var s1 = _p16._1;
				return {
					ctor: '_Tuple2',
					_0: {ctor: '::', _0: n1, _1: ns},
					_1: s1
				};
			});
		var _p17 = A3(
			_elm_lang$core$List$foldl,
			f,
			{
				ctor: '_Tuple2',
				_0: {ctor: '[]'},
				_1: state
			},
			ns);
		var tns = _p17._0;
		var news = _p17._1;
		return {
			ctor: '_Tuple2',
			_0: _elm_lang$core$List$reverse(tns),
			_1: news
		};
	});
var _newlandsvalley$elm_abc_parser$Music_Transposition$transposeChord = F2(
	function (state, c) {
		var _p18 = A2(_newlandsvalley$elm_abc_parser$Music_Transposition$transposeNoteList, state, c.notes);
		var ns = _p18._0;
		var newstate = _p18._1;
		return {
			ctor: '_Tuple2',
			_0: _elm_lang$core$Native_Utils.update(
				c,
				{notes: ns}),
			_1: newstate
		};
	});
var _newlandsvalley$elm_abc_parser$Music_Transposition$processHeader = F2(
	function (state, h) {
		var _p19 = h;
		if (_p19.ctor === 'Key') {
			var _p20 = _p19._0;
			var newmks = A2(_newlandsvalley$elm_abc_parser$Music_Notation$transposeKeySignatureBy, state.keyDistance, _p20);
			return {
				ctor: '_Tuple2',
				_0: _newlandsvalley$elm_abc_parser$Abc_ParseTree$Key(newmks),
				_1: _elm_lang$core$Native_Utils.update(
					state,
					{
						sourcemks: _p20,
						sourceBarAccidentals: _newlandsvalley$elm_abc_parser$Music_Accidentals$empty,
						targetmks: newmks,
						targetKeySet: _newlandsvalley$elm_abc_parser$Music_Notation$modifiedKeySet(newmks),
						targetScale: _newlandsvalley$elm_abc_parser$Music_Notation$diatonicScale(
							_elm_lang$core$Tuple$first(newmks)),
						targetBarAccidentals: _newlandsvalley$elm_abc_parser$Music_Accidentals$empty
					})
			};
		} else {
			return {ctor: '_Tuple2', _0: h, _1: state};
		}
	});
var _newlandsvalley$elm_abc_parser$Music_Transposition$transposeMusic = F2(
	function (state, m) {
		var _p21 = m;
		switch (_p21.ctor) {
			case 'Note':
				var _p22 = A2(_newlandsvalley$elm_abc_parser$Music_Transposition$transposeNoteBy, state, _p21._0);
				var tn1 = _p22._0;
				var s1 = _p22._1;
				return {
					ctor: '_Tuple2',
					_0: _newlandsvalley$elm_abc_parser$Abc_ParseTree$Note(tn1),
					_1: s1
				};
			case 'BrokenRhythmPair':
				var _p23 = A2(_newlandsvalley$elm_abc_parser$Music_Transposition$transposeNoteBy, state, _p21._0);
				var tn1 = _p23._0;
				var s1 = _p23._1;
				var _p24 = A2(_newlandsvalley$elm_abc_parser$Music_Transposition$transposeNoteBy, s1, _p21._2);
				var tn2 = _p24._0;
				var s2 = _p24._1;
				return {
					ctor: '_Tuple2',
					_0: A3(_newlandsvalley$elm_abc_parser$Abc_ParseTree$BrokenRhythmPair, tn1, _p21._1, tn2),
					_1: s2
				};
			case 'Tuplet':
				var _p25 = A2(_newlandsvalley$elm_abc_parser$Music_Transposition$transposeNoteList, state, _p21._1);
				var ns1 = _p25._0;
				var s1 = _p25._1;
				return {
					ctor: '_Tuple2',
					_0: A2(_newlandsvalley$elm_abc_parser$Abc_ParseTree$Tuplet, _p21._0, ns1),
					_1: s1
				};
			case 'GraceNote':
				var _p26 = A2(_newlandsvalley$elm_abc_parser$Music_Transposition$transposeNoteList, state, _p21._1);
				var m1 = _p26._0;
				var s1 = _p26._1;
				return {
					ctor: '_Tuple2',
					_0: A2(_newlandsvalley$elm_abc_parser$Abc_ParseTree$GraceNote, _p21._0, m1),
					_1: s1
				};
			case 'Chord':
				var _p27 = A2(_newlandsvalley$elm_abc_parser$Music_Transposition$transposeChord, state, _p21._0);
				var tc = _p27._0;
				var s1 = _p27._1;
				return {
					ctor: '_Tuple2',
					_0: _newlandsvalley$elm_abc_parser$Abc_ParseTree$Chord(tc),
					_1: s1
				};
			case 'ChordSymbol':
				return {ctor: '_Tuple2', _0: _newlandsvalley$elm_abc_parser$Abc_ParseTree$Ignore, _1: state};
			case 'Barline':
				return {
					ctor: '_Tuple2',
					_0: _newlandsvalley$elm_abc_parser$Abc_ParseTree$Barline(_p21._0),
					_1: _elm_lang$core$Native_Utils.update(
						state,
						{sourceBarAccidentals: _newlandsvalley$elm_abc_parser$Music_Accidentals$empty, targetBarAccidentals: _newlandsvalley$elm_abc_parser$Music_Accidentals$empty})
				};
			case 'Inline':
				var _p28 = A2(_newlandsvalley$elm_abc_parser$Music_Transposition$processHeader, state, _p21._0);
				var h1 = _p28._0;
				var state1 = _p28._1;
				return {
					ctor: '_Tuple2',
					_0: _newlandsvalley$elm_abc_parser$Abc_ParseTree$Inline(h1),
					_1: state1
				};
			default:
				return {ctor: '_Tuple2', _0: m, _1: state};
		}
	});
var _newlandsvalley$elm_abc_parser$Music_Transposition$transposeMusicList = F2(
	function (state, ms) {
		var f = F2(
			function (n, acc) {
				var _p29 = acc;
				var ns = _p29._0;
				var s0 = _p29._1;
				var _p30 = A2(_newlandsvalley$elm_abc_parser$Music_Transposition$transposeMusic, s0, n);
				var n1 = _p30._0;
				var s1 = _p30._1;
				return {
					ctor: '_Tuple2',
					_0: {ctor: '::', _0: n1, _1: ns},
					_1: s1
				};
			});
		var _p31 = A3(
			_elm_lang$core$List$foldl,
			f,
			{
				ctor: '_Tuple2',
				_0: {ctor: '[]'},
				_1: state
			},
			ms);
		var tns = _p31._0;
		var news = _p31._1;
		return {
			ctor: '_Tuple2',
			_0: _elm_lang$core$List$reverse(tns),
			_1: news
		};
	});
var _newlandsvalley$elm_abc_parser$Music_Transposition$transposeBodyPart = F2(
	function (state, bp) {
		var _p32 = bp;
		if (_p32.ctor === 'Score') {
			var _p33 = A2(_newlandsvalley$elm_abc_parser$Music_Transposition$transposeMusicList, state, _p32._0);
			var ms1 = _p33._0;
			var s1 = _p33._1;
			return {
				ctor: '_Tuple2',
				_0: _newlandsvalley$elm_abc_parser$Abc_ParseTree$Score(ms1),
				_1: s1
			};
		} else {
			var _p34 = A2(_newlandsvalley$elm_abc_parser$Music_Transposition$processHeader, state, _p32._0);
			var h1 = _p34._0;
			var state1 = _p34._1;
			return {
				ctor: '_Tuple2',
				_0: _newlandsvalley$elm_abc_parser$Abc_ParseTree$BodyInfo(h1),
				_1: state1
			};
		}
	});
var _newlandsvalley$elm_abc_parser$Music_Transposition$transposeTuneBody = F2(
	function (state, body) {
		var f = F2(
			function (n, acc) {
				var _p35 = acc;
				var bs = _p35._0;
				var s0 = _p35._1;
				var _p36 = A2(_newlandsvalley$elm_abc_parser$Music_Transposition$transposeBodyPart, s0, n);
				var b1 = _p36._0;
				var s1 = _p36._1;
				return {
					ctor: '_Tuple2',
					_0: {ctor: '::', _0: b1, _1: bs},
					_1: s1
				};
			});
		var _p37 = A3(
			_elm_lang$core$List$foldl,
			f,
			{
				ctor: '_Tuple2',
				_0: {ctor: '[]'},
				_1: state
			},
			body);
		var tb = _p37._0;
		var news = _p37._1;
		return _elm_lang$core$List$reverse(tb);
	});
var _newlandsvalley$elm_abc_parser$Music_Transposition$transposeTune = F2(
	function (state, t) {
		var _p38 = t;
		var headers = _p38._0;
		var body = _p38._1;
		var newHeaders = A2(_newlandsvalley$elm_abc_parser$Music_Transposition$replaceKeyHeader, state.targetmks, headers);
		return {
			ctor: '_Tuple2',
			_0: newHeaders,
			_1: A2(_newlandsvalley$elm_abc_parser$Music_Transposition$transposeTuneBody, state, body)
		};
	});
var _newlandsvalley$elm_abc_parser$Music_Transposition$keyDistance = F2(
	function (targetmks, srcmks) {
		var src = _elm_lang$core$Tuple$first(srcmks);
		var target = _elm_lang$core$Tuple$first(targetmks);
		return (!_elm_lang$core$Native_Utils.eq(target.mode, src.mode)) ? _elm_lang$core$Result$Err('incompatible modes') : _elm_lang$core$Result$Ok(
			A2(
				_newlandsvalley$elm_abc_parser$Music_Transposition$transpositionDistance,
				{ctor: '_Tuple2', _0: target.pitchClass, _1: target.accidental},
				{ctor: '_Tuple2', _0: src.pitchClass, _1: src.accidental}));
	});
var _newlandsvalley$elm_abc_parser$Music_Transposition$transposeNote = F3(
	function (targetmks, srcKey, note) {
		var rdist = A2(_newlandsvalley$elm_abc_parser$Music_Transposition$keyDistance, targetmks, srcKey);
		var _p39 = rdist;
		if (_p39.ctor === 'Err') {
			return _elm_lang$core$Result$Err(_p39._0);
		} else {
			var transpositionState = {
				keyDistance: _p39._0,
				sourcemks: srcKey,
				sourceBarAccidentals: _newlandsvalley$elm_abc_parser$Music_Accidentals$empty,
				targetmks: targetmks,
				targetKeySet: _newlandsvalley$elm_abc_parser$Music_Notation$modifiedKeySet(targetmks),
				targetScale: _newlandsvalley$elm_abc_parser$Music_Notation$diatonicScale(
					_elm_lang$core$Tuple$first(targetmks)),
				targetBarAccidentals: _newlandsvalley$elm_abc_parser$Music_Accidentals$empty
			};
			var _p40 = A2(_newlandsvalley$elm_abc_parser$Music_Transposition$transposeNoteBy, transpositionState, note);
			var transposedNote = _p40._0;
			return _elm_lang$core$Result$Ok(transposedNote);
		}
	});
var _newlandsvalley$elm_abc_parser$Music_Transposition$defaultKey = {
	ctor: '_Tuple2',
	_0: {pitchClass: _newlandsvalley$elm_abc_parser$Abc_ParseTree$C, accidental: _elm_lang$core$Maybe$Nothing, mode: _newlandsvalley$elm_abc_parser$Abc_ParseTree$Major},
	_1: {ctor: '[]'}
};
var _newlandsvalley$elm_abc_parser$Music_Transposition$transposeTo = F2(
	function (targetmks, t) {
		var mks = A2(
			_elm_lang$core$Maybe$withDefault,
			_newlandsvalley$elm_abc_parser$Music_Transposition$defaultKey,
			_newlandsvalley$elm_abc_parser$Music_Notation$getKeySig(t));
		var rdistance = A2(_newlandsvalley$elm_abc_parser$Music_Transposition$keyDistance, targetmks, mks);
		var _p41 = rdistance;
		if (_p41.ctor === 'Err') {
			return _elm_lang$core$Result$Err(_p41._0);
		} else {
			var _p42 = _p41._0;
			if (_elm_lang$core$Native_Utils.eq(_p42, 0)) {
				return _elm_lang$core$Result$Ok(t);
			} else {
				var transpositionState = {
					keyDistance: _p42,
					sourcemks: mks,
					sourceBarAccidentals: _newlandsvalley$elm_abc_parser$Music_Accidentals$empty,
					targetmks: targetmks,
					targetKeySet: _newlandsvalley$elm_abc_parser$Music_Notation$modifiedKeySet(targetmks),
					targetScale: _newlandsvalley$elm_abc_parser$Music_Notation$diatonicScale(
						_elm_lang$core$Tuple$first(targetmks)),
					targetBarAccidentals: _newlandsvalley$elm_abc_parser$Music_Accidentals$empty
				};
				return _elm_lang$core$Result$Ok(
					A2(_newlandsvalley$elm_abc_parser$Music_Transposition$transposeTune, transpositionState, t));
			}
		}
	});
var _newlandsvalley$elm_abc_parser$Music_Transposition$TranspositionState = F7(
	function (a, b, c, d, e, f, g) {
		return {keyDistance: a, sourcemks: b, sourceBarAccidentals: c, targetmks: d, targetKeySet: e, targetScale: f, targetBarAccidentals: g};
	});

var _newlandsvalley$elm_abc_player$RepeatTypes$Section = F5(
	function (a, b, c, d, e) {
		return {start: a, firstEnding: b, secondEnding: c, end: d, isRepeated: e};
	});
var _newlandsvalley$elm_abc_player$RepeatTypes$RepeatState = F2(
	function (a, b) {
		return {current: a, repeats: b};
	});
var _newlandsvalley$elm_abc_player$RepeatTypes$GeneralisedBar = F5(
	function (a, b, c, d, e) {
		return {number: a, repeat: b, iteration: c, accidentals: d, notes: e};
	});

var _newlandsvalley$elm_abc_player$MidiMelody$MidiNote = F4(
	function (a, b, c, d) {
		return {ticks: a, pitch: b, pc: c, accidental: d};
	});
var _newlandsvalley$elm_abc_player$MidiMelody$MTempo = function (a) {
	return {ctor: 'MTempo', _0: a};
};
var _newlandsvalley$elm_abc_player$MidiMelody$MChord = function (a) {
	return {ctor: 'MChord', _0: a};
};
var _newlandsvalley$elm_abc_player$MidiMelody$MNote = F2(
	function (a, b) {
		return {ctor: 'MNote', _0: a, _1: b};
	});

var _newlandsvalley$elm_abc_player$MidiTypes$Header = F3(
	function (a, b, c) {
		return {formatType: a, trackCount: b, ticksPerBeat: c};
	});
var _newlandsvalley$elm_abc_player$MidiTypes$RunningStatus = F2(
	function (a, b) {
		return {ctor: 'RunningStatus', _0: a, _1: b};
	});
var _newlandsvalley$elm_abc_player$MidiTypes$PitchBend = F2(
	function (a, b) {
		return {ctor: 'PitchBend', _0: a, _1: b};
	});
var _newlandsvalley$elm_abc_player$MidiTypes$ChannelAfterTouch = F2(
	function (a, b) {
		return {ctor: 'ChannelAfterTouch', _0: a, _1: b};
	});
var _newlandsvalley$elm_abc_player$MidiTypes$ProgramChange = F2(
	function (a, b) {
		return {ctor: 'ProgramChange', _0: a, _1: b};
	});
var _newlandsvalley$elm_abc_player$MidiTypes$ControlChange = F3(
	function (a, b, c) {
		return {ctor: 'ControlChange', _0: a, _1: b, _2: c};
	});
var _newlandsvalley$elm_abc_player$MidiTypes$NoteAfterTouch = F3(
	function (a, b, c) {
		return {ctor: 'NoteAfterTouch', _0: a, _1: b, _2: c};
	});
var _newlandsvalley$elm_abc_player$MidiTypes$NoteOff = F3(
	function (a, b, c) {
		return {ctor: 'NoteOff', _0: a, _1: b, _2: c};
	});
var _newlandsvalley$elm_abc_player$MidiTypes$NoteOn = F3(
	function (a, b, c) {
		return {ctor: 'NoteOn', _0: a, _1: b, _2: c};
	});
var _newlandsvalley$elm_abc_player$MidiTypes$Unspecified = F2(
	function (a, b) {
		return {ctor: 'Unspecified', _0: a, _1: b};
	});
var _newlandsvalley$elm_abc_player$MidiTypes$SysEx = function (a) {
	return {ctor: 'SysEx', _0: a};
};
var _newlandsvalley$elm_abc_player$MidiTypes$SequencerSpecific = function (a) {
	return {ctor: 'SequencerSpecific', _0: a};
};
var _newlandsvalley$elm_abc_player$MidiTypes$KeySignature = F2(
	function (a, b) {
		return {ctor: 'KeySignature', _0: a, _1: b};
	});
var _newlandsvalley$elm_abc_player$MidiTypes$TimeSignature = F4(
	function (a, b, c, d) {
		return {ctor: 'TimeSignature', _0: a, _1: b, _2: c, _3: d};
	});
var _newlandsvalley$elm_abc_player$MidiTypes$SMPTEOffset = F5(
	function (a, b, c, d, e) {
		return {ctor: 'SMPTEOffset', _0: a, _1: b, _2: c, _3: d, _4: e};
	});
var _newlandsvalley$elm_abc_player$MidiTypes$Tempo = function (a) {
	return {ctor: 'Tempo', _0: a};
};
var _newlandsvalley$elm_abc_player$MidiTypes$ChannelPrefix = function (a) {
	return {ctor: 'ChannelPrefix', _0: a};
};
var _newlandsvalley$elm_abc_player$MidiTypes$CuePoint = function (a) {
	return {ctor: 'CuePoint', _0: a};
};
var _newlandsvalley$elm_abc_player$MidiTypes$Marker = function (a) {
	return {ctor: 'Marker', _0: a};
};
var _newlandsvalley$elm_abc_player$MidiTypes$Lyrics = function (a) {
	return {ctor: 'Lyrics', _0: a};
};
var _newlandsvalley$elm_abc_player$MidiTypes$InstrumentName = function (a) {
	return {ctor: 'InstrumentName', _0: a};
};
var _newlandsvalley$elm_abc_player$MidiTypes$TrackName = function (a) {
	return {ctor: 'TrackName', _0: a};
};
var _newlandsvalley$elm_abc_player$MidiTypes$Copyright = function (a) {
	return {ctor: 'Copyright', _0: a};
};
var _newlandsvalley$elm_abc_player$MidiTypes$Text = function (a) {
	return {ctor: 'Text', _0: a};
};
var _newlandsvalley$elm_abc_player$MidiTypes$SequenceNumber = function (a) {
	return {ctor: 'SequenceNumber', _0: a};
};

var _newlandsvalley$elm_abc_player$Repeats$slice = F2(
	function (start, end) {
		return function (_p0) {
			return A2(
				_elm_community$list_extra$List_Extra$takeWhile,
				function (bar) {
					return _elm_lang$core$Native_Utils.cmp(bar.number, end) < 0;
				},
				A2(
					_elm_community$list_extra$List_Extra$dropWhile,
					function (bar) {
						return _elm_lang$core$Native_Utils.cmp(bar.number, start) < 0;
					},
					_p0));
		};
	});
var _newlandsvalley$elm_abc_player$Repeats$variantSlice = F5(
	function (start, firstRepeat, secondRepeat, end, ml) {
		var section = A3(_newlandsvalley$elm_abc_player$Repeats$slice, start, end, ml);
		var firstSection = A3(_newlandsvalley$elm_abc_player$Repeats$slice, start, secondRepeat, section);
		var secondSection = A2(
			_elm_lang$core$Basics_ops['++'],
			A3(_newlandsvalley$elm_abc_player$Repeats$slice, start, firstRepeat, section),
			A3(_newlandsvalley$elm_abc_player$Repeats$slice, secondRepeat, end, section));
		return A2(_elm_lang$core$Basics_ops['++'], firstSection, secondSection);
	});
var _newlandsvalley$elm_abc_player$Repeats$repeatedSection = F3(
	function (ml, s, acc) {
		var section = function (_p1) {
			var _p2 = _p1;
			return {ctor: '_Tuple5', _0: _p2.start, _1: _p2.firstEnding, _2: _p2.secondEnding, _3: _p2.end, _4: _p2.isRepeated};
		};
		var _p3 = section(s);
		_v1_0:
		do {
			if (((_p3.ctor === '_Tuple5') && (_p3._0.ctor === 'Just')) && (_p3._3.ctor === 'Just')) {
				if (_p3._4 === false) {
					if ((_p3._1.ctor === 'Just') && (_p3._2.ctor === 'Just')) {
						break _v1_0;
					} else {
						return A2(
							_elm_lang$core$Basics_ops['++'],
							A3(_newlandsvalley$elm_abc_player$Repeats$slice, _p3._0._0, _p3._3._0, ml),
							acc);
					}
				} else {
					if ((_p3._1.ctor === 'Just') && (_p3._2.ctor === 'Just')) {
						break _v1_0;
					} else {
						var _p5 = _p3._3._0;
						var _p4 = _p3._0._0;
						return A2(
							_elm_lang$core$Basics_ops['++'],
							A2(
								_elm_lang$core$Basics_ops['++'],
								A3(_newlandsvalley$elm_abc_player$Repeats$slice, _p4, _p5, ml),
								A3(_newlandsvalley$elm_abc_player$Repeats$slice, _p4, _p5, ml)),
							acc);
					}
				}
			} else {
				return {ctor: '[]'};
			}
		} while(false);
		return A2(
			_elm_lang$core$Basics_ops['++'],
			A5(_newlandsvalley$elm_abc_player$Repeats$variantSlice, _p3._0._0, _p3._1._0, _p3._2._0, _p3._3._0, ml),
			acc);
	});
var _newlandsvalley$elm_abc_player$Repeats$isEmptyRepeatEndBar = function (b) {
	return _elm_lang$core$Native_Utils.eq(
		_elm_lang$core$List$length(b.notes),
		0) && _elm_lang$core$Native_Utils.eq(
		b.repeat,
		_elm_lang$core$Maybe$Just(_newlandsvalley$elm_abc_parser$Abc_ParseTree$End));
};
var _newlandsvalley$elm_abc_player$Repeats$hasFirstEnding = function (s) {
	return _elm_community$maybe_extra$Maybe_Extra$isJust(s.firstEnding);
};
var _newlandsvalley$elm_abc_player$Repeats$setRepeated = function (s) {
	return _elm_lang$core$Native_Utils.update(
		s,
		{isRepeated: true});
};
var _newlandsvalley$elm_abc_player$Repeats$secondRepeat = F2(
	function (pos, s) {
		return _elm_lang$core$Native_Utils.update(
			s,
			{
				secondEnding: _elm_lang$core$Maybe$Just(pos)
			});
	});
var _newlandsvalley$elm_abc_player$Repeats$firstRepeat = F2(
	function (pos, s) {
		return _elm_lang$core$Native_Utils.update(
			s,
			{
				firstEnding: _elm_lang$core$Maybe$Just(pos)
			});
	});
var _newlandsvalley$elm_abc_player$Repeats$endCurrentSection = F2(
	function (pos, s) {
		return _elm_lang$core$Native_Utils.update(
			s,
			{
				end: _elm_lang$core$Maybe$Just(pos)
			});
	});
var _newlandsvalley$elm_abc_player$Repeats$nullSection = {
	start: _elm_lang$core$Maybe$Just(0),
	firstEnding: _elm_lang$core$Maybe$Nothing,
	secondEnding: _elm_lang$core$Maybe$Nothing,
	end: _elm_lang$core$Maybe$Just(0),
	isRepeated: false
};
var _newlandsvalley$elm_abc_player$Repeats$isNullSection = function (s) {
	return _elm_lang$core$Native_Utils.eq(s, _newlandsvalley$elm_abc_player$Repeats$nullSection);
};
var _newlandsvalley$elm_abc_player$Repeats$accumulateSection = function (r) {
	return (!_newlandsvalley$elm_abc_player$Repeats$isNullSection(r.current)) ? _elm_lang$core$Native_Utils.update(
		r,
		{
			repeats: {ctor: '::', _0: r.current, _1: r.repeats},
			current: _newlandsvalley$elm_abc_player$Repeats$nullSection
		}) : r;
};
var _newlandsvalley$elm_abc_player$Repeats$endAndStartSection = F4(
	function (pos, isRepeatEnd, isRepeatStart, r) {
		var newCurrent = _elm_lang$core$Native_Utils.update(
			_newlandsvalley$elm_abc_player$Repeats$nullSection,
			{
				start: _elm_lang$core$Maybe$Just(pos),
				isRepeated: isRepeatStart
			});
		var current = (isRepeatEnd && _elm_lang$core$Native_Utils.eq(
			r.current.start,
			_elm_lang$core$Maybe$Just(0))) ? _newlandsvalley$elm_abc_player$Repeats$setRepeated(r.current) : r.current;
		var endCurrent = _elm_lang$core$Native_Utils.update(
			current,
			{
				end: _elm_lang$core$Maybe$Just(pos)
			});
		var endState = _elm_lang$core$Native_Utils.update(
			r,
			{current: endCurrent});
		var newState = _newlandsvalley$elm_abc_player$Repeats$accumulateSection(endState);
		return _elm_lang$core$Native_Utils.update(
			newState,
			{current: newCurrent});
	});
var _newlandsvalley$elm_abc_player$Repeats$startSection = F2(
	function (pos, r) {
		return A4(_newlandsvalley$elm_abc_player$Repeats$endAndStartSection, pos, false, true, r);
	});
var _newlandsvalley$elm_abc_player$Repeats$endSection = F3(
	function (pos, isRepeatEnd, r) {
		if (_newlandsvalley$elm_abc_player$Repeats$hasFirstEnding(r.current)) {
			var current = A2(_newlandsvalley$elm_abc_player$Repeats$endCurrentSection, pos, r.current);
			return _elm_lang$core$Native_Utils.update(
				r,
				{current: current});
		} else {
			return A4(_newlandsvalley$elm_abc_player$Repeats$endAndStartSection, pos, isRepeatEnd, false, r);
		}
	});
var _newlandsvalley$elm_abc_player$Repeats$buildRepeatedMelody = function (_p6) {
	var _p7 = _p6;
	var _p9 = _p7._1;
	var _p8 = _p7._0;
	return _elm_lang$core$List$isEmpty(_p9) ? _p8 : A3(
		_elm_lang$core$List$foldr,
		_newlandsvalley$elm_abc_player$Repeats$repeatedSection(_p8),
		{ctor: '[]'},
		_p9);
};
var _newlandsvalley$elm_abc_player$Repeats$finalise = F2(
	function (lastBar, r) {
		var current = A2(_newlandsvalley$elm_abc_player$Repeats$endCurrentSection, lastBar.number, r.current);
		var current1 = _newlandsvalley$elm_abc_player$Repeats$isEmptyRepeatEndBar(lastBar) ? _newlandsvalley$elm_abc_player$Repeats$setRepeated(current) : current;
		var newr = _elm_lang$core$Native_Utils.update(
			r,
			{current: current1});
		return _newlandsvalley$elm_abc_player$Repeats$accumulateSection(newr);
	});
var _newlandsvalley$elm_abc_player$Repeats$indexBar = F2(
	function (b, r) {
		var _p10 = {ctor: '_Tuple2', _0: b.iteration, _1: b.repeat};
		_v3_5:
		do {
			_v3_4:
			do {
				_v3_3:
				do {
					_v3_2:
					do {
						_v3_1:
						do {
							_v3_0:
							do {
								if (_p10.ctor === '_Tuple2') {
									if (_p10._1.ctor === 'Just') {
										switch (_p10._1._0.ctor) {
											case 'Begin':
												if (_p10._0.ctor === 'Just') {
													switch (_p10._0._0) {
														case 1:
															break _v3_0;
														case 2:
															break _v3_1;
														default:
															break _v3_2;
													}
												} else {
													break _v3_2;
												}
											case 'End':
												if (_p10._0.ctor === 'Just') {
													switch (_p10._0._0) {
														case 1:
															break _v3_0;
														case 2:
															break _v3_1;
														default:
															break _v3_3;
													}
												} else {
													break _v3_3;
												}
											default:
												if (_p10._0.ctor === 'Just') {
													switch (_p10._0._0) {
														case 1:
															break _v3_0;
														case 2:
															break _v3_1;
														default:
															break _v3_4;
													}
												} else {
													break _v3_4;
												}
										}
									} else {
										if (_p10._0.ctor === 'Just') {
											switch (_p10._0._0) {
												case 1:
													break _v3_0;
												case 2:
													break _v3_1;
												default:
													break _v3_5;
											}
										} else {
											break _v3_5;
										}
									}
								} else {
									break _v3_5;
								}
							} while(false);
							return _elm_lang$core$Native_Utils.update(
								r,
								{
									current: A2(_newlandsvalley$elm_abc_player$Repeats$firstRepeat, b.number, r.current)
								});
						} while(false);
						return _elm_lang$core$Native_Utils.update(
							r,
							{
								current: A2(_newlandsvalley$elm_abc_player$Repeats$secondRepeat, b.number, r.current)
							});
					} while(false);
					return A2(_newlandsvalley$elm_abc_player$Repeats$startSection, b.number, r);
				} while(false);
				return A3(_newlandsvalley$elm_abc_player$Repeats$endSection, b.number, true, r);
			} while(false);
			return A4(_newlandsvalley$elm_abc_player$Repeats$endAndStartSection, b.number, true, true, r);
		} while(false);
		return r;
	});
var _newlandsvalley$elm_abc_player$Repeats$defaultRepeatState = {
	current: _newlandsvalley$elm_abc_player$Repeats$nullSection,
	repeats: {ctor: '[]'}
};

var _newlandsvalley$elm_abc_player$MidiPerformance$hasTempoHeader = function (hs) {
	var f = function (h) {
		var _p0 = h;
		switch (_p0.ctor) {
			case 'UnitNoteLength':
				return true;
			case 'Tempo':
				return true;
			default:
				return false;
		}
	};
	var tempoHeaders = A2(_elm_lang$core$List$filter, f, hs);
	return _elm_lang$core$Native_Utils.cmp(
		_elm_lang$core$List$length(tempoHeaders),
		0) > 0;
};
var _newlandsvalley$elm_abc_player$MidiPerformance$reverseMelody = function () {
	var reverseBar = function (b) {
		return _elm_lang$core$Native_Utils.update(
			b,
			{
				notes: _elm_lang$core$List$reverse(b.notes)
			});
	};
	return function (_p1) {
		return _elm_lang$core$List$reverse(
			A2(_elm_lang$core$List$map, reverseBar, _p1));
	};
}();
var _newlandsvalley$elm_abc_player$MidiPerformance$translateChord = F3(
	function (state, notes, maybeChordDur) {
		var chordDuration = function () {
			var _p2 = maybeChordDur;
			if (_p2.ctor === 'Nothing') {
				return _elm_community$ratio$Ratio$fromInt(1);
			} else {
				return _p2._0;
			}
		}();
		var f = function (abc) {
			var barAccidentals = state.thisBar.accidentals;
			var ticks = A2(_newlandsvalley$elm_abc_parser$Music_Notation$chordalNoteTicks, abc.duration, chordDuration);
			return {
				ticks: ticks,
				pitch: A3(_newlandsvalley$elm_abc_parser$Music_Notation$toMidiPitch, abc, state.modifiedKeySignature, barAccidentals),
				pc: _elm_lang$core$Maybe$Just(abc.pitchClass),
				accidental: abc.accidental
			};
		};
		return {
			ctor: '::',
			_0: _newlandsvalley$elm_abc_player$MidiMelody$MChord(
				A2(_elm_lang$core$List$map, f, notes)),
			_1: {ctor: '[]'}
		};
	});
var _newlandsvalley$elm_abc_player$MidiPerformance$addTempoToStateBar = F2(
	function (t, state) {
		var thisBar = state.thisBar;
		var line = state.thisBar.notes;
		return _elm_lang$core$Native_Utils.update(
			state,
			{
				thisBar: _elm_lang$core$Native_Utils.update(
					thisBar,
					{
						notes: {ctor: '::', _0: t, _1: line}
					})
			});
	});
var _newlandsvalley$elm_abc_player$MidiPerformance$addNoteToBarAccidentals = F2(
	function (n, accs) {
		var _p3 = {ctor: '_Tuple2', _0: n.pc, _1: n.accidental};
		if (((_p3.ctor === '_Tuple2') && (_p3._0.ctor === 'Just')) && (_p3._1.ctor === 'Just')) {
			return A3(_newlandsvalley$elm_abc_parser$Music_Accidentals$add, _p3._0._0, _p3._1._0, accs);
		} else {
			return accs;
		}
	});
var _newlandsvalley$elm_abc_player$MidiPerformance$addMidiNoteToBarAccidentals = F2(
	function (ne, accs) {
		var _p4 = ne;
		switch (_p4.ctor) {
			case 'MNote':
				return A2(_newlandsvalley$elm_abc_player$MidiPerformance$addNoteToBarAccidentals, _p4._0, accs);
			case 'MChord':
				return A3(_elm_lang$core$List$foldl, _newlandsvalley$elm_abc_player$MidiPerformance$addNoteToBarAccidentals, accs, _p4._0);
			default:
				return accs;
		}
	});
var _newlandsvalley$elm_abc_player$MidiPerformance$addMidiNotesToBarAccidentals = F2(
	function (nes, accs) {
		return A3(_elm_lang$core$List$foldl, _newlandsvalley$elm_abc_player$MidiPerformance$addMidiNoteToBarAccidentals, accs, nes);
	});
var _newlandsvalley$elm_abc_player$MidiPerformance$addNotesToState = F2(
	function (ns, state) {
		var thisBar = state.thisBar;
		var accidentals = A2(_newlandsvalley$elm_abc_player$MidiPerformance$addMidiNotesToBarAccidentals, ns, thisBar.accidentals);
		var line = state.thisBar.notes;
		return _elm_lang$core$Native_Utils.update(
			state,
			{
				thisBar: _elm_lang$core$Native_Utils.update(
					thisBar,
					{
						notes: A2(_elm_lang$core$List$append, ns, line),
						accidentals: accidentals
					})
			});
	});
var _newlandsvalley$elm_abc_player$MidiPerformance$addNoteToState = F2(
	function (n, state) {
		var lastNoteTied = function () {
			var _p5 = n;
			if (_p5.ctor === 'MNote') {
				return _p5._1;
			} else {
				return false;
			}
		}();
		var thisBar = state.thisBar;
		var accidentals = A2(_newlandsvalley$elm_abc_player$MidiPerformance$addMidiNoteToBarAccidentals, n, thisBar.accidentals);
		var line = state.thisBar.notes;
		return _elm_lang$core$Native_Utils.update(
			state,
			{
				thisBar: _elm_lang$core$Native_Utils.update(
					thisBar,
					{
						notes: {ctor: '::', _0: n, _1: line},
						accidentals: accidentals
					}),
				lastNoteTied: lastNoteTied
			});
	});
var _newlandsvalley$elm_abc_player$MidiPerformance$translateNote = F2(
	function (abc, state) {
		var barAccidentals = state.thisBar.accidentals;
		var pitch = state.lastNoteTied ? 0 : A3(_newlandsvalley$elm_abc_parser$Music_Notation$toMidiPitch, abc, state.modifiedKeySignature, barAccidentals);
		var ticks = ((_newlandsvalley$elm_abc_parser$Music_Notation$noteTicks(abc.duration) * _elm_community$ratio$Ratio$numerator(state.tempoModifier)) / _elm_community$ratio$Ratio$denominator(state.tempoModifier)) | 0;
		var note = A2(
			_newlandsvalley$elm_abc_player$MidiMelody$MNote,
			{
				ticks: ticks,
				pitch: pitch,
				pc: _elm_lang$core$Maybe$Just(abc.pitchClass),
				accidental: abc.accidental
			},
			abc.tied);
		return A2(_newlandsvalley$elm_abc_player$MidiPerformance$addNoteToState, note, state);
	});
var _newlandsvalley$elm_abc_player$MidiPerformance$translateNoteSequence = F2(
	function (notes, state) {
		return A3(_elm_lang$core$List$foldl, _newlandsvalley$elm_abc_player$MidiPerformance$translateNote, state, notes);
	});
var _newlandsvalley$elm_abc_player$MidiPerformance$midiTempo = function (state) {
	return _newlandsvalley$elm_abc_parser$Music_Notation$midiTempo(state.tempo);
};
var _newlandsvalley$elm_abc_player$MidiPerformance$updateState = F2(
	function (h, acc) {
		var _p6 = acc;
		var melody = _p6._0;
		var state = _p6._1;
		var tempo = state.tempo;
		var _p7 = h;
		switch (_p7.ctor) {
			case 'UnitNoteLength':
				var newState = _elm_lang$core$Native_Utils.update(
					state,
					{
						tempo: _elm_lang$core$Native_Utils.update(
							tempo,
							{unitNoteLength: _p7._0})
					});
				var mtempo = _newlandsvalley$elm_abc_player$MidiMelody$MTempo(
					_newlandsvalley$elm_abc_player$MidiPerformance$midiTempo(newState));
				var newState1 = A2(_newlandsvalley$elm_abc_player$MidiPerformance$addTempoToStateBar, mtempo, newState);
				return {ctor: '_Tuple2', _0: melody, _1: newState1};
			case 'Tempo':
				var _p8 = _p7._0;
				var tnl = A3(
					_elm_lang$core$List$foldl,
					_elm_community$ratio$Ratio$add,
					_elm_community$ratio$Ratio$fromInt(0),
					_p8.noteLengths);
				var newState = _elm_lang$core$Native_Utils.update(
					state,
					{
						tempo: _elm_lang$core$Native_Utils.update(
							tempo,
							{tempoNoteLength: tnl, bpm: _p8.bpm})
					});
				var mtempo = _newlandsvalley$elm_abc_player$MidiMelody$MTempo(
					_newlandsvalley$elm_abc_player$MidiPerformance$midiTempo(newState));
				var newState1 = A2(_newlandsvalley$elm_abc_player$MidiPerformance$addTempoToStateBar, mtempo, newState);
				return {ctor: '_Tuple2', _0: melody, _1: newState1};
			case 'Key':
				return {
					ctor: '_Tuple2',
					_0: melody,
					_1: _elm_lang$core$Native_Utils.update(
						state,
						{modifiedKeySignature: _p7._0})
				};
			default:
				return acc;
		}
	});
var _newlandsvalley$elm_abc_player$MidiPerformance$midiVolume = 80;
var _newlandsvalley$elm_abc_player$MidiPerformance$midiNoteOn = function (n) {
	return {
		ctor: '_Tuple2',
		_0: 0,
		_1: A3(_newlandsvalley$elm_abc_player$MidiTypes$NoteOn, 0, n.pitch, _newlandsvalley$elm_abc_player$MidiPerformance$midiVolume)
	};
};
var _newlandsvalley$elm_abc_player$MidiPerformance$midiNoteOff = function (n) {
	return {
		ctor: '_Tuple2',
		_0: n.ticks,
		_1: A3(_newlandsvalley$elm_abc_player$MidiTypes$NoteOff, 0, n.pitch, _newlandsvalley$elm_abc_player$MidiPerformance$midiVolume)
	};
};
var _newlandsvalley$elm_abc_player$MidiPerformance$midiChord = function (ns) {
	var firstNote = _elm_lang$core$List$head(ns);
	var finalNoteOff = function () {
		var _p9 = firstNote;
		if (_p9.ctor === 'Just') {
			return {
				ctor: '::',
				_0: _newlandsvalley$elm_abc_player$MidiPerformance$midiNoteOff(_p9._0),
				_1: {ctor: '[]'}
			};
		} else {
			return {ctor: '[]'};
		}
	}();
	return A2(
		_elm_lang$core$Basics_ops['++'],
		A2(_elm_lang$core$List$map, _newlandsvalley$elm_abc_player$MidiPerformance$midiNoteOn, ns),
		finalNoteOff);
};
var _newlandsvalley$elm_abc_player$MidiPerformance$midiNote = F2(
	function (isTied, n) {
		return (_elm_lang$core$Native_Utils.cmp(n.pitch, 0) > 0) ? {
			ctor: '::',
			_0: {
				ctor: '_Tuple2',
				_0: 0,
				_1: A3(_newlandsvalley$elm_abc_player$MidiTypes$NoteOn, 0, n.pitch, _newlandsvalley$elm_abc_player$MidiPerformance$midiVolume)
			},
			_1: {
				ctor: '::',
				_0: {
					ctor: '_Tuple2',
					_0: n.ticks,
					_1: A3(_newlandsvalley$elm_abc_player$MidiTypes$NoteOff, 0, n.pitch, _newlandsvalley$elm_abc_player$MidiPerformance$midiVolume)
				},
				_1: {ctor: '[]'}
			}
		} : {
			ctor: '::',
			_0: {
				ctor: '_Tuple2',
				_0: n.ticks,
				_1: _newlandsvalley$elm_abc_player$MidiTypes$Text('rest')
			},
			_1: {ctor: '[]'}
		};
	});
var _newlandsvalley$elm_abc_player$MidiPerformance$toMidiMessages = function (mi) {
	var _p10 = mi;
	switch (_p10.ctor) {
		case 'MNote':
			return A2(_newlandsvalley$elm_abc_player$MidiPerformance$midiNote, _p10._1, _p10._0);
		case 'MChord':
			return _newlandsvalley$elm_abc_player$MidiPerformance$midiChord(_p10._0);
		default:
			return {
				ctor: '::',
				_0: {
					ctor: '_Tuple2',
					_0: 0,
					_1: _newlandsvalley$elm_abc_player$MidiTypes$Tempo(_p10._0)
				},
				_1: {ctor: '[]'}
			};
	}
};
var _newlandsvalley$elm_abc_player$MidiPerformance$midiBar = function (b) {
	return _elm_lang$core$List$concat(
		A2(_elm_lang$core$List$map, _newlandsvalley$elm_abc_player$MidiPerformance$toMidiMessages, b.notes));
};
var _newlandsvalley$elm_abc_player$MidiPerformance$toMidiTrack = function (melody) {
	return _elm_lang$core$List$concat(
		A2(_elm_lang$core$List$map, _newlandsvalley$elm_abc_player$MidiPerformance$midiBar, melody));
};
var _newlandsvalley$elm_abc_player$MidiPerformance$isEmptyBar = function (b) {
	return _elm_lang$core$Native_Utils.eq(
		_elm_lang$core$List$length(b.notes),
		0);
};
var _newlandsvalley$elm_abc_player$MidiPerformance$defaultBar = function (i) {
	return {
		number: i,
		repeat: _elm_lang$core$Maybe$Nothing,
		iteration: _elm_lang$core$Maybe$Nothing,
		accidentals: _newlandsvalley$elm_abc_parser$Music_Accidentals$empty,
		notes: {ctor: '[]'}
	};
};
var _newlandsvalley$elm_abc_player$MidiPerformance$buildNewBar = F3(
	function (nextBarNumber, abcBar, lastBar) {
		var nextBar = _newlandsvalley$elm_abc_player$MidiPerformance$defaultBar(nextBarNumber);
		if (_newlandsvalley$elm_abc_player$MidiPerformance$isEmptyBar(lastBar)) {
			var _p11 = {ctor: '_Tuple2', _0: lastBar.repeat, _1: abcBar.repeat};
			if ((_p11.ctor === '_Tuple2') && (_p11._0.ctor === 'Just')) {
				if (((_p11._0._0.ctor === 'End') && (_p11._1.ctor === 'Just')) && (_p11._1._0.ctor === 'Begin')) {
					return _elm_lang$core$Native_Utils.update(
						nextBar,
						{
							repeat: _elm_lang$core$Maybe$Just(_newlandsvalley$elm_abc_parser$Abc_ParseTree$BeginAndEnd),
							iteration: abcBar.iteration
						});
				} else {
					return _elm_lang$core$Native_Utils.update(
						nextBar,
						{
							repeat: _elm_lang$core$Maybe$Just(_p11._0._0),
							iteration: abcBar.iteration
						});
				}
			} else {
				return _elm_lang$core$Native_Utils.update(
					nextBar,
					{repeat: abcBar.repeat, iteration: abcBar.iteration});
			}
		} else {
			return _elm_lang$core$Native_Utils.update(
				nextBar,
				{repeat: abcBar.repeat, iteration: abcBar.iteration});
		}
	});
var _newlandsvalley$elm_abc_player$MidiPerformance$translateMusic = F2(
	function (m, acc) {
		var _p12 = acc;
		var midiMelody = _p12._0;
		var state = _p12._1;
		var _p13 = m;
		switch (_p13.ctor) {
			case 'Note':
				var newState = A2(_newlandsvalley$elm_abc_player$MidiPerformance$translateNote, _p13._0, state);
				return {ctor: '_Tuple2', _0: midiMelody, _1: newState};
			case 'Rest':
				var ticks = _newlandsvalley$elm_abc_parser$Music_Notation$noteTicks(_p13._0);
				var note = A2(
					_newlandsvalley$elm_abc_player$MidiMelody$MNote,
					{ticks: ticks, pitch: 0, pc: _elm_lang$core$Maybe$Nothing, accidental: _elm_lang$core$Maybe$Nothing},
					false);
				var newState = A2(_newlandsvalley$elm_abc_player$MidiPerformance$addNoteToState, note, state);
				return {ctor: '_Tuple2', _0: midiMelody, _1: newState};
			case 'Tuplet':
				var _p14 = _p13._0;
				var p = _p14._0;
				var q = _p14._1;
				var r = _p14._2;
				var tupletStateStart = _elm_lang$core$Native_Utils.update(
					state,
					{
						tempoModifier: A2(_elm_community$ratio$Ratio$over, q, p)
					});
				var tupletStateEnd = A2(_newlandsvalley$elm_abc_player$MidiPerformance$translateNoteSequence, _p13._1, tupletStateStart);
				var newState = _elm_lang$core$Native_Utils.update(
					tupletStateEnd,
					{
						tempoModifier: A2(_elm_community$ratio$Ratio$over, 1, 1)
					});
				return {ctor: '_Tuple2', _0: midiMelody, _1: newState};
			case 'BrokenRhythmPair':
				var _p19 = _p13._2;
				var _p18 = _p13._0;
				var up = function (i) {
					return A2(
						_elm_community$ratio$Ratio$add,
						A2(_elm_community$ratio$Ratio$over, 1, 1),
						_newlandsvalley$elm_abc_parser$Music_Notation$dotFactor(i));
				};
				var down = function (i) {
					return A2(
						_elm_community$ratio$Ratio$add,
						A2(_elm_community$ratio$Ratio$over, 1, 1),
						_elm_community$ratio$Ratio$negate(
							_newlandsvalley$elm_abc_parser$Music_Notation$dotFactor(i)));
				};
				var _p15 = _p13._1;
				if (_p15.ctor === 'LeftArrow') {
					var _p16 = _p15._0;
					var leftStateStart = _elm_lang$core$Native_Utils.update(
						state,
						{
							tempoModifier: down(_p16)
						});
					var leftStateEnd = A2(_newlandsvalley$elm_abc_player$MidiPerformance$translateNote, _p18, leftStateStart);
					var rightStateStart = _elm_lang$core$Native_Utils.update(
						leftStateEnd,
						{
							tempoModifier: up(_p16)
						});
					var rightStateEnd = A2(_newlandsvalley$elm_abc_player$MidiPerformance$translateNote, _p19, rightStateStart);
					var newState = _elm_lang$core$Native_Utils.update(
						rightStateEnd,
						{
							tempoModifier: A2(_elm_community$ratio$Ratio$over, 1, 1)
						});
					return {ctor: '_Tuple2', _0: midiMelody, _1: newState};
				} else {
					var _p17 = _p15._0;
					var leftStateStart = _elm_lang$core$Native_Utils.update(
						state,
						{
							tempoModifier: up(_p17)
						});
					var leftStateEnd = A2(_newlandsvalley$elm_abc_player$MidiPerformance$translateNote, _p18, leftStateStart);
					var rightStateStart = _elm_lang$core$Native_Utils.update(
						leftStateEnd,
						{
							tempoModifier: down(_p17)
						});
					var rightStateEnd = A2(_newlandsvalley$elm_abc_player$MidiPerformance$translateNote, _p19, rightStateStart);
					var newState = _elm_lang$core$Native_Utils.update(
						rightStateEnd,
						{
							tempoModifier: A2(_elm_community$ratio$Ratio$over, 1, 1)
						});
					return {ctor: '_Tuple2', _0: midiMelody, _1: newState};
				}
			case 'Chord':
				var _p20 = _p13._0;
				var chord = A3(
					_newlandsvalley$elm_abc_player$MidiPerformance$translateChord,
					state,
					_p20.notes,
					_elm_lang$core$Maybe$Just(_p20.duration));
				var newState = A2(_newlandsvalley$elm_abc_player$MidiPerformance$addNotesToState, chord, state);
				return {ctor: '_Tuple2', _0: midiMelody, _1: newState};
			case 'Barline':
				var repeatState = _newlandsvalley$elm_abc_player$MidiPerformance$isEmptyBar(state.thisBar) ? state.repeatState : A2(_newlandsvalley$elm_abc_player$Repeats$indexBar, state.thisBar, state.repeatState);
				var nextBarNumber = _newlandsvalley$elm_abc_player$MidiPerformance$isEmptyBar(state.thisBar) ? state.nextBarNumber : (state.nextBarNumber + 1);
				var newBar = A3(_newlandsvalley$elm_abc_player$MidiPerformance$buildNewBar, nextBarNumber, _p13._0, state.thisBar);
				var newState = _elm_lang$core$Native_Utils.update(
					state,
					{thisBar: newBar, nextBarNumber: nextBarNumber, repeatState: repeatState});
				var newMelody = function () {
					if (_newlandsvalley$elm_abc_player$MidiPerformance$isEmptyBar(state.thisBar)) {
						return midiMelody;
					} else {
						var rb = state.thisBar;
						return {ctor: '::', _0: state.thisBar, _1: midiMelody};
					}
				}();
				return {ctor: '_Tuple2', _0: newMelody, _1: newState};
			case 'Inline':
				return A2(_newlandsvalley$elm_abc_player$MidiPerformance$updateState, _p13._0, acc);
			default:
				return acc;
		}
	});
var _newlandsvalley$elm_abc_player$MidiPerformance$toMidiMelody = F2(
	function (ml, state) {
		var _p21 = A3(_elm_lang$core$List$foldl, _newlandsvalley$elm_abc_player$MidiPerformance$translateMusic, state, ml);
		var melody = _p21._0;
		var s = _p21._1;
		return {ctor: '_Tuple2', _0: melody, _1: s};
	});
var _newlandsvalley$elm_abc_player$MidiPerformance$defaultKey = {
	ctor: '_Tuple2',
	_0: {pitchClass: _newlandsvalley$elm_abc_parser$Abc_ParseTree$C, accidental: _elm_lang$core$Maybe$Nothing, mode: _newlandsvalley$elm_abc_parser$Abc_ParseTree$Major},
	_1: {ctor: '[]'}
};
var _newlandsvalley$elm_abc_player$MidiPerformance$defaultTempo = {
	tempoNoteLength: A2(_elm_community$ratio$Ratio$over, 1, 4),
	bpm: 120,
	unitNoteLength: A2(_elm_community$ratio$Ratio$over, 1, 8)
};
var _newlandsvalley$elm_abc_player$MidiPerformance$fromAbc = function (tune) {
	var f = F2(
		function (bp, acc) {
			var _p22 = bp;
			if (_p22.ctor === 'Score') {
				var _p23 = A2(_newlandsvalley$elm_abc_player$MidiPerformance$toMidiMelody, _p22._0, acc);
				var newLine = _p23._0;
				var newState = _p23._1;
				var _p24 = acc;
				var existingLine = _p24._0;
				var state = _p24._1;
				return {ctor: '_Tuple2', _0: newLine, _1: newState};
			} else {
				return A2(_newlandsvalley$elm_abc_player$MidiPerformance$updateState, _p22._0, acc);
			}
		});
	var abcHeaders = _elm_lang$core$Tuple$first(tune);
	var initialHeaders = _newlandsvalley$elm_abc_player$MidiPerformance$hasTempoHeader(abcHeaders) ? abcHeaders : {
		ctor: '::',
		_0: _newlandsvalley$elm_abc_parser$Abc_ParseTree$UnitNoteLength(_newlandsvalley$elm_abc_player$MidiPerformance$defaultTempo.unitNoteLength),
		_1: abcHeaders
	};
	var defaultState = {
		ctor: '_Tuple2',
		_0: {ctor: '[]'},
		_1: {
			modifiedKeySignature: _newlandsvalley$elm_abc_player$MidiPerformance$defaultKey,
			tempo: _newlandsvalley$elm_abc_player$MidiPerformance$defaultTempo,
			tempoModifier: A2(_elm_community$ratio$Ratio$over, 1, 1),
			nextBarNumber: 0,
			thisBar: _newlandsvalley$elm_abc_player$MidiPerformance$defaultBar(0),
			lastNoteTied: false,
			repeatState: _newlandsvalley$elm_abc_player$Repeats$defaultRepeatState
		}
	};
	var headerState = A3(_elm_lang$core$List$foldl, _newlandsvalley$elm_abc_player$MidiPerformance$updateState, defaultState, initialHeaders);
	var _p25 = A3(
		_elm_lang$core$List$foldl,
		f,
		headerState,
		_elm_lang$core$Tuple$second(tune));
	var music = _p25._0;
	var state = _p25._1;
	var fullMusic = _newlandsvalley$elm_abc_player$MidiPerformance$reverseMelody(
		{ctor: '::', _0: state.thisBar, _1: music});
	var repeatState = A2(_newlandsvalley$elm_abc_player$Repeats$finalise, state.thisBar, state.repeatState);
	return {
		ctor: '_Tuple2',
		_0: fullMusic,
		_1: _elm_lang$core$List$reverse(repeatState.repeats)
	};
};
var _newlandsvalley$elm_abc_player$MidiPerformance$melodyFromAbc = F2(
	function (expandRepeats, tune) {
		var mr = _newlandsvalley$elm_abc_player$MidiPerformance$fromAbc(tune);
		return expandRepeats ? {
			ctor: '_Tuple2',
			_0: _newlandsvalley$elm_abc_player$Repeats$buildRepeatedMelody(mr),
			_1: {ctor: '[]'}
		} : mr;
	});
var _newlandsvalley$elm_abc_player$MidiPerformance$midiRecordingFromAbc = F2(
	function (expandRepeats, tune) {
		var header = {formatType: 0, trackCount: 1, ticksPerBeat: _newlandsvalley$elm_abc_parser$Music_Notation$standardMidiTick};
		var _p26 = A2(_newlandsvalley$elm_abc_player$MidiPerformance$melodyFromAbc, expandRepeats, tune);
		var melody = _p26._0;
		var track = _newlandsvalley$elm_abc_player$MidiPerformance$toMidiTrack(melody);
		return {
			ctor: '_Tuple2',
			_0: header,
			_1: {
				ctor: '::',
				_0: track,
				_1: {ctor: '[]'}
			}
		};
	});
var _newlandsvalley$elm_abc_player$MidiPerformance$fromAbcResult = function (r) {
	return A2(_elm_lang$core$Result$map, _newlandsvalley$elm_abc_player$MidiPerformance$fromAbc, r);
};
var _newlandsvalley$elm_abc_player$MidiPerformance$melodyFromAbcResult = function (r) {
	return A2(
		_elm_lang$core$Result$map,
		function (_p27) {
			return _newlandsvalley$elm_abc_player$Repeats$buildRepeatedMelody(
				_newlandsvalley$elm_abc_player$MidiPerformance$fromAbc(_p27));
		},
		r);
};
var _newlandsvalley$elm_abc_player$MidiPerformance$TranslationState = F7(
	function (a, b, c, d, e, f, g) {
		return {modifiedKeySignature: a, tempo: b, tempoModifier: c, nextBarNumber: d, thisBar: e, lastNoteTied: f, repeatState: g};
	});

var _newlandsvalley$elm_abc_player$SoundFont_Types$AudioNode = {};
var _newlandsvalley$elm_abc_player$SoundFont_Types$AudioContext = F3(
	function (a, b, c) {
		return {currentTime: a, destination: b, sampleRate: c};
	});
var _newlandsvalley$elm_abc_player$SoundFont_Types$MidiNote = F3(
	function (a, b, c) {
		return {id: a, timeOffset: b, gain: c};
	});

var _newlandsvalley$elm_abc_player$SoundFont_Ports$initialiseAudioContext = _elm_lang$core$Native_Platform.outgoingPort(
	'initialiseAudioContext',
	function (v) {
		return null;
	});
var _newlandsvalley$elm_abc_player$SoundFont_Ports$requestIsOggEnabled = _elm_lang$core$Native_Platform.outgoingPort(
	'requestIsOggEnabled',
	function (v) {
		return null;
	});
var _newlandsvalley$elm_abc_player$SoundFont_Ports$requestLoadFonts = _elm_lang$core$Native_Platform.outgoingPort(
	'requestLoadFonts',
	function (v) {
		return v;
	});
var _newlandsvalley$elm_abc_player$SoundFont_Ports$requestPlayNote = _elm_lang$core$Native_Platform.outgoingPort(
	'requestPlayNote',
	function (v) {
		return {id: v.id, timeOffset: v.timeOffset, gain: v.gain};
	});
var _newlandsvalley$elm_abc_player$SoundFont_Ports$requestPlayNoteSequence = _elm_lang$core$Native_Platform.outgoingPort(
	'requestPlayNoteSequence',
	function (v) {
		return _elm_lang$core$Native_List.toArray(v).map(
			function (v) {
				return {id: v.id, timeOffset: v.timeOffset, gain: v.gain};
			});
	});
var _newlandsvalley$elm_abc_player$SoundFont_Ports$getAudioContext = _elm_lang$core$Native_Platform.incomingPort(
	'getAudioContext',
	A2(
		_elm_lang$core$Json_Decode$andThen,
		function (currentTime) {
			return A2(
				_elm_lang$core$Json_Decode$andThen,
				function (destination) {
					return A2(
						_elm_lang$core$Json_Decode$andThen,
						function (sampleRate) {
							return _elm_lang$core$Json_Decode$succeed(
								{currentTime: currentTime, destination: destination, sampleRate: sampleRate});
						},
						A2(_elm_lang$core$Json_Decode$field, 'sampleRate', _elm_lang$core$Json_Decode$int));
				},
				A2(
					_elm_lang$core$Json_Decode$field,
					'destination',
					_elm_lang$core$Json_Decode$succeed(
						{})));
		},
		A2(_elm_lang$core$Json_Decode$field, 'currentTime', _elm_lang$core$Json_Decode$float)));
var _newlandsvalley$elm_abc_player$SoundFont_Ports$oggEnabled = _elm_lang$core$Native_Platform.incomingPort('oggEnabled', _elm_lang$core$Json_Decode$bool);
var _newlandsvalley$elm_abc_player$SoundFont_Ports$fontsLoaded = _elm_lang$core$Native_Platform.incomingPort('fontsLoaded', _elm_lang$core$Json_Decode$bool);
var _newlandsvalley$elm_abc_player$SoundFont_Ports$playedNote = _elm_lang$core$Native_Platform.incomingPort('playedNote', _elm_lang$core$Json_Decode$bool);
var _newlandsvalley$elm_abc_player$SoundFont_Ports$playSequenceStarted = _elm_lang$core$Native_Platform.incomingPort('playSequenceStarted', _elm_lang$core$Json_Decode$bool);

var _newlandsvalley$elm_abc_player$Midi_Track$fromRecording = function (mr) {
	var tracks = _elm_lang$core$Tuple$second(mr);
	var track0 = _elm_lang$core$Array$fromList(
		A2(
			_elm_lang$core$Maybe$withDefault,
			{ctor: '[]'},
			_elm_lang$core$List$head(tracks)));
	var header = _elm_lang$core$Tuple$first(mr);
	return {ticksPerBeat: header.ticksPerBeat, messages: track0};
};
var _newlandsvalley$elm_abc_player$Midi_Track$MidiTrack = F2(
	function (a, b) {
		return {ticksPerBeat: a, messages: b};
	});

var _newlandsvalley$elm_abc_player$Midi_Player$capsuleStyle = {
	ctor: '::',
	_0: {ctor: '_Tuple2', _0: 'border', _1: '1px solid #000'},
	_1: {
		ctor: '::',
		_0: {ctor: '_Tuple2', _0: 'box-shadow', _1: '0 0 10px #555'},
		_1: {
			ctor: '::',
			_0: {ctor: '_Tuple2', _0: '-moz-box-shadow', _1: '0 0 10px #555'},
			_1: {
				ctor: '::',
				_0: {ctor: '_Tuple2', _0: '-webkit-box-shadow', _1: '0 0 10px #555'},
				_1: {
					ctor: '::',
					_0: {ctor: '_Tuple2', _0: 'background', _1: '#000'},
					_1: {
						ctor: '::',
						_0: {ctor: '_Tuple2', _0: 'background-image', _1: '-webkit-gradient(linear, left top, left bottom, color-stop(1, rgba(0,0,0,0.5)), color-stop(0, #333))'},
						_1: {
							ctor: '::',
							_0: {ctor: '_Tuple2', _0: 'background-image', _1: '-webkit-linear-gradient(top, rgba(0, 0, 0, 0.5) 1, #333 0)'},
							_1: {
								ctor: '::',
								_0: {ctor: '_Tuple2', _0: 'background-image', _1: '-moz-linear-gradient(top, rgba(0, 0, 0, 0.5) 1, #333 0)'},
								_1: {
									ctor: '::',
									_0: {ctor: '_Tuple2', _0: 'background-image', _1: '-ms-gradient(top, rgba(0, 0, 0, 0.5) 1, #333 0)'},
									_1: {
										ctor: '::',
										_0: {ctor: '_Tuple2', _0: 'background-image', _1: '-o-gradient(top, rgba(0, 0, 0, 0.5) 1, #333 0)'},
										_1: {
											ctor: '::',
											_0: {ctor: '_Tuple2', _0: 'background-image', _1: 'linear-gradient(top, rgba(0, 0, 0, 0.5) 1, #333 0)'},
											_1: {
												ctor: '::',
												_0: {ctor: '_Tuple2', _0: 'overflow', _1: 'hidden'},
												_1: {
													ctor: '::',
													_0: {ctor: '_Tuple2', _0: 'border-radius', _1: '5px'},
													_1: {
														ctor: '::',
														_0: {ctor: '_Tuple2', _0: '-moz-border-radius', _1: '5px'},
														_1: {
															ctor: '::',
															_0: {ctor: '_Tuple2', _0: '-webkit-border-radius', _1: '5px'},
															_1: {
																ctor: '::',
																_0: {ctor: '_Tuple2', _0: 'width', _1: '220px'},
																_1: {
																	ctor: '::',
																	_0: {ctor: '_Tuple2', _0: 'display', _1: 'inline-block'},
																	_1: {
																		ctor: '::',
																		_0: {ctor: '_Tuple2', _0: 'height', _1: '30px'},
																		_1: {ctor: '[]'}
																	}
																}
															}
														}
													}
												}
											}
										}
									}
								}
							}
						}
					}
				}
			}
		}
	}
};
var _newlandsvalley$elm_abc_player$Midi_Player$buttonStyle = {
	ctor: '::',
	_0: {ctor: '_Tuple2', _0: 'margin', _1: '0 auto'},
	_1: {
		ctor: '::',
		_0: {ctor: '_Tuple2', _0: 'width', _1: '80px'},
		_1: {
			ctor: '::',
			_0: {ctor: '_Tuple2', _0: 'float', _1: 'right'},
			_1: {
				ctor: '::',
				_0: {ctor: '_Tuple2', _0: 'opacity', _1: '0.7'},
				_1: {ctor: '[]'}
			}
		}
	}
};
var _newlandsvalley$elm_abc_player$Midi_Player$playerBase = {
	ctor: '::',
	_0: {ctor: '_Tuple2', _0: 'background', _1: 'rgba(0,0,0,0.7)'},
	_1: {
		ctor: '::',
		_0: {ctor: '_Tuple2', _0: 'background-image', _1: '-webkit-gradient(linear,left top,left bottom,from(rgba(66,66,66,1)),to(rgba(22,22,22,1)))'},
		_1: {
			ctor: '::',
			_0: {ctor: '_Tuple2', _0: 'background-image', _1: '-webkit-linear-gradient(top, rgba(66, 66, 66, 1) 0%, rgba(22, 22, 22, 1) 100%)'},
			_1: {
				ctor: '::',
				_0: {ctor: '_Tuple2', _0: 'background-image', _1: '-moz-linear-gradient(top, rgba(66, 66, 66, 1) 0%, rgba(22, 22, 22, 1) 100%)'},
				_1: {
					ctor: '::',
					_0: {ctor: '_Tuple2', _0: 'background-image', _1: '-ms-gradient(top, rgba(66, 66, 66, 1) 0%, rgba(22, 22, 22, 1) 100%)'},
					_1: {
						ctor: '::',
						_0: {ctor: '_Tuple2', _0: 'background-image', _1: '-o-gradient(top, rgba(66, 66, 66, 1) 0%, rgba(22, 22, 22, 1) 100%)'},
						_1: {
							ctor: '::',
							_0: {ctor: '_Tuple2', _0: 'background-image', _1: 'linear-gradient(top, rgba(66, 66, 66, 1) 0%, rgba(22, 22, 22, 1) 100%)'},
							_1: {
								ctor: '::',
								_0: {ctor: '_Tuple2', _0: 'padding', _1: '15px 20px'},
								_1: {
									ctor: '::',
									_0: {ctor: '_Tuple2', _0: 'border', _1: '1px solid #000'},
									_1: {
										ctor: '::',
										_0: {ctor: '_Tuple2', _0: 'box-shadow', _1: '0 0 10px #fff'},
										_1: {
											ctor: '::',
											_0: {ctor: '_Tuple2', _0: '-moz-box-shadow', _1: '0 0 10px #fff'},
											_1: {
												ctor: '::',
												_0: {ctor: '_Tuple2', _0: '-webkit-box-shadow', _1: '0 0 10px #fff'},
												_1: {
													ctor: '::',
													_0: {ctor: '_Tuple2', _0: 'border-radius', _1: '10px'},
													_1: {
														ctor: '::',
														_0: {ctor: '_Tuple2', _0: '-moz-border-radius', _1: '10px'},
														_1: {
															ctor: '::',
															_0: {ctor: '_Tuple2', _0: '-webkit-border-radius', _1: '10px'},
															_1: {
																ctor: '::',
																_0: {ctor: '_Tuple2', _0: 'color', _1: '#FFFFFF'},
																_1: {
																	ctor: '::',
																	_0: {ctor: '_Tuple2', _0: 'color', _1: 'rgba(255, 255, 255, 0.8)'},
																	_1: {
																		ctor: '::',
																		_0: {ctor: '_Tuple2', _0: 'text-shadow', _1: '1px 1px 2px #000'},
																		_1: {
																			ctor: '::',
																			_0: {ctor: '_Tuple2', _0: '-moz-text-shadow', _1: '1px 1px 2px #000'},
																			_1: {ctor: '[]'}
																		}
																	}
																}
															}
														}
													}
												}
											}
										}
									}
								}
							}
						}
					}
				}
			}
		}
	}
};
var _newlandsvalley$elm_abc_player$Midi_Player$playerStyle = {
	ctor: '::',
	_0: {ctor: '_Tuple2', _0: 'height', _1: '30px'},
	_1: {
		ctor: '::',
		_0: {ctor: '_Tuple2', _0: 'box-shadow', _1: '-1px #000'},
		_1: {
			ctor: '::',
			_0: {ctor: '_Tuple2', _0: 'border-bottom-right-radius', _1: '10'},
			_1: {
				ctor: '::',
				_0: {ctor: '_Tuple2', _0: 'border-bottom-left-radius', _1: '10'},
				_1: {ctor: '[]'}
			}
		}
	}
};
var _newlandsvalley$elm_abc_player$Midi_Player$playerBlock = {
	ctor: '::',
	_0: {ctor: '_Tuple2', _0: 'border', _1: '1px solid #000'},
	_1: {
		ctor: '::',
		_0: {ctor: '_Tuple2', _0: 'border-radius', _1: '10px'},
		_1: {
			ctor: '::',
			_0: {ctor: '_Tuple2', _0: 'width', _1: '360px'},
			_1: {
				ctor: '::',
				_0: {ctor: '_Tuple2', _0: 'position', _1: 'relative; z-index: 2'},
				_1: {ctor: '[]'}
			}
		}
	}
};
var _newlandsvalley$elm_abc_player$Midi_Player$viewRecordingResult = function (mr) {
	var _p0 = mr;
	if (_p0.ctor === 'Ok') {
		return A2(
			_elm_lang$core$Basics_ops['++'],
			'OK: ',
			_elm_lang$core$Basics$toString(_p0._0));
	} else {
		return A2(
			_elm_lang$core$Basics_ops['++'],
			'Fail: ',
			_elm_lang$core$Basics$toString(_p0._0));
	}
};
var _newlandsvalley$elm_abc_player$Midi_Player$stepState = F2(
	function (soundEvent, state) {
		stepState:
		while (true) {
			if (state.playing) {
				var _p1 = A2(_elm_lang$core$Debug$log, 'sound event', soundEvent.event);
				var _p2 = soundEvent.event;
				switch (_p2.ctor) {
					case 'Text':
						return _elm_lang$core$Native_Utils.eq(_p2._0, 'EndOfTrack') ? {
							ctor: '_Tuple2',
							_0: _elm_lang$core$Native_Utils.update(
								state,
								{playing: false, noteOnSequence: false}),
							_1: {ctor: '[]'}
						} : {
							ctor: '_Tuple2',
							_0: _elm_lang$core$Native_Utils.update(
								state,
								{index: state.index + 1, noteOnSequence: false}),
							_1: {ctor: '[]'}
						};
					case 'Tempo':
						return {
							ctor: '_Tuple2',
							_0: _elm_lang$core$Native_Utils.update(
								state,
								{
									microsecondsPerBeat: _elm_lang$core$Basics$toFloat(_p2._0),
									index: state.index + 1,
									noteOnSequence: false
								}),
							_1: {ctor: '[]'}
						};
					case 'RunningStatus':
						if (state.noteOnSequence) {
							var newEvent = {
								deltaTime: soundEvent.deltaTime,
								event: A3(_newlandsvalley$elm_abc_player$MidiTypes$NoteOn, state.noteOnChannel, _p2._0, _p2._1)
							};
							var _v2 = newEvent,
								_v3 = state;
							soundEvent = _v2;
							state = _v3;
							continue stepState;
						} else {
							return {
								ctor: '_Tuple2',
								_0: _elm_lang$core$Native_Utils.update(
									state,
									{index: state.index + 1, noteOnSequence: false}),
								_1: {ctor: '[]'}
							};
						}
					case 'NoteOn':
						var maxVelocity = 127;
						var gain = _elm_lang$core$Basics$toFloat(_p2._2) / maxVelocity;
						var midiNote = A3(_newlandsvalley$elm_abc_player$SoundFont_Types$MidiNote, _p2._1, soundEvent.deltaTime, gain);
						var midiNotes = {ctor: '::', _0: midiNote, _1: state.notes};
						var newstate = _elm_lang$core$Native_Utils.update(
							state,
							{index: state.index + 1, noteOnSequence: true, noteOnChannel: _p2._0, notes: midiNotes});
						return {
							ctor: '_Tuple2',
							_0: newstate,
							_1: {ctor: '[]'}
						};
					case 'NoteOff':
						var midiNotes = state.notes;
						return {
							ctor: '_Tuple2',
							_0: _elm_lang$core$Native_Utils.update(
								state,
								{
									index: state.index + 1,
									noteOnSequence: false,
									notes: {ctor: '[]'},
									delay: soundEvent.deltaTime
								}),
							_1: midiNotes
						};
					default:
						return {
							ctor: '_Tuple2',
							_0: _elm_lang$core$Native_Utils.update(
								state,
								{index: state.index + 1, noteOnSequence: false}),
							_1: {ctor: '[]'}
						};
				}
			} else {
				return {
					ctor: '_Tuple2',
					_0: state,
					_1: {ctor: '[]'}
				};
			}
		}
	});
var _newlandsvalley$elm_abc_player$Midi_Player$playChord = function (chord) {
	var f = function (n) {
		return _elm_lang$core$Native_Utils.update(
			n,
			{timeOffset: 0.0});
	};
	var notes = A2(_elm_lang$core$List$map, f, chord);
	return _newlandsvalley$elm_abc_player$SoundFont_Ports$requestPlayNoteSequence(notes);
};
var _newlandsvalley$elm_abc_player$Midi_Player$play = function (note) {
	var note1 = _elm_lang$core$Native_Utils.update(
		note,
		{timeOffset: 0.0});
	return _newlandsvalley$elm_abc_player$SoundFont_Ports$requestPlayNote(note1);
};
var _newlandsvalley$elm_abc_player$Midi_Player$toTrack0 = function (r) {
	return A2(_elm_lang$core$Result$map, _newlandsvalley$elm_abc_player$Midi_Track$fromRecording, r);
};
var _newlandsvalley$elm_abc_player$Midi_Player$init = function (track) {
	return A2(
		_elm_lang$core$Platform_Cmd_ops['!'],
		{
			fontsLoaded: false,
			track: track,
			playbackState: {
				index: 0,
				microsecondsPerBeat: _elm_lang$core$Basics$toFloat(500000),
				playing: false,
				noteOnSequence: false,
				noteOnChannel: -1,
				notes: {ctor: '[]'},
				delay: 0.0
			}
		},
		{
			ctor: '::',
			_0: _newlandsvalley$elm_abc_player$SoundFont_Ports$requestLoadFonts('assets/soundfonts'),
			_1: {ctor: '[]'}
		});
};
var _newlandsvalley$elm_abc_player$Midi_Player$endOfTrack = _newlandsvalley$elm_abc_player$MidiTypes$Text('EndOfTrack');
var _newlandsvalley$elm_abc_player$Midi_Player$nextEvent = F2(
	function (state, trackResult) {
		var _p3 = trackResult;
		if (_p3.ctor === 'Ok') {
			var _p4 = _p3._0;
			var maybeNextMessage = A2(_elm_lang$core$Array$get, state.index, _p4.messages);
			var nextMessage = A2(
				_elm_lang$core$Maybe$withDefault,
				{ctor: '_Tuple2', _0: 0, _1: _newlandsvalley$elm_abc_player$Midi_Player$endOfTrack},
				maybeNextMessage);
			var nextEvent = _elm_lang$core$Tuple$second(nextMessage);
			var deltaTime = (_elm_lang$core$Basics$toFloat(
				_elm_lang$core$Tuple$first(nextMessage)) * state.microsecondsPerBeat) / (_elm_lang$core$Basics$toFloat(_p4.ticksPerBeat) * 1000);
			return {deltaTime: deltaTime, event: nextEvent};
		} else {
			return {deltaTime: 0.0, event: _newlandsvalley$elm_abc_player$Midi_Player$endOfTrack};
		}
	});
var _newlandsvalley$elm_abc_player$Midi_Player$elmPlayerOverhead = 0.872;
var _newlandsvalley$elm_abc_player$Midi_Player$SoundEvent = F2(
	function (a, b) {
		return {deltaTime: a, event: b};
	});
var _newlandsvalley$elm_abc_player$Midi_Player$PlaybackState = F7(
	function (a, b, c, d, e, f, g) {
		return {index: a, microsecondsPerBeat: b, playing: c, noteOnSequence: d, noteOnChannel: e, notes: f, delay: g};
	});
var _newlandsvalley$elm_abc_player$Midi_Player$Model = F3(
	function (a, b, c) {
		return {fontsLoaded: a, track: b, playbackState: c};
	});
var _newlandsvalley$elm_abc_player$Midi_Player$MoveTo = function (a) {
	return {ctor: 'MoveTo', _0: a};
};
var _newlandsvalley$elm_abc_player$Midi_Player$Pause = {ctor: 'Pause'};
var _newlandsvalley$elm_abc_player$Midi_Player$Start = {ctor: 'Start'};
var _newlandsvalley$elm_abc_player$Midi_Player$player = function (model) {
	var playAction = function () {
		var _p5 = model.playbackState.playing;
		if (_p5 === true) {
			return _newlandsvalley$elm_abc_player$Midi_Player$Pause;
		} else {
			return _newlandsvalley$elm_abc_player$Midi_Player$Start;
		}
	}();
	var sliderPos = _elm_lang$core$Basics$toString(model.playbackState.index);
	var maxRange = function () {
		var _p6 = model.track;
		if (_p6.ctor === 'Ok') {
			return _elm_lang$core$Basics$toString(
				_elm_lang$core$Array$length(_p6._0.messages));
		} else {
			return '0';
		}
	}();
	var pause = 'assets/images/pause.png';
	var stop = 'assets/images/stop.png';
	var start = 'assets/images/play.png';
	var playButton = function () {
		var _p7 = model.playbackState.playing;
		if (_p7 === true) {
			return pause;
		} else {
			return start;
		}
	}();
	var _p8 = A2(_elm_lang$core$Debug$log, 'Midi Player view', model.track);
	var _p9 = model.track;
	if (_p9.ctor === 'Ok') {
		return A2(
			_elm_lang$html$Html$div,
			{
				ctor: '::',
				_0: _elm_lang$html$Html_Attributes$style(_newlandsvalley$elm_abc_player$Midi_Player$playerBlock),
				_1: {ctor: '[]'}
			},
			{
				ctor: '::',
				_0: A2(
					_elm_lang$html$Html$div,
					{
						ctor: '::',
						_0: _elm_lang$html$Html_Attributes$style(
							A2(_elm_lang$core$Basics_ops['++'], _newlandsvalley$elm_abc_player$Midi_Player$playerBase, _newlandsvalley$elm_abc_player$Midi_Player$playerStyle)),
						_1: {ctor: '[]'}
					},
					{
						ctor: '::',
						_0: A2(
							_elm_lang$html$Html$progress,
							{
								ctor: '::',
								_0: _elm_lang$html$Html_Attributes$max(maxRange),
								_1: {
									ctor: '::',
									_0: _elm_lang$html$Html_Attributes$value(sliderPos),
									_1: {
										ctor: '::',
										_0: _elm_lang$html$Html_Attributes$style(_newlandsvalley$elm_abc_player$Midi_Player$capsuleStyle),
										_1: {ctor: '[]'}
									}
								}
							},
							{ctor: '[]'}),
						_1: {
							ctor: '::',
							_0: A2(
								_elm_lang$html$Html$div,
								{
									ctor: '::',
									_0: _elm_lang$html$Html_Attributes$style(_newlandsvalley$elm_abc_player$Midi_Player$buttonStyle),
									_1: {ctor: '[]'}
								},
								{
									ctor: '::',
									_0: A2(
										_elm_lang$html$Html$input,
										{
											ctor: '::',
											_0: _elm_lang$html$Html_Attributes$type_('image'),
											_1: {
												ctor: '::',
												_0: _elm_lang$html$Html_Attributes$src(playButton),
												_1: {
													ctor: '::',
													_0: _elm_lang$html$Html_Events$onClick(playAction),
													_1: {ctor: '[]'}
												}
											}
										},
										{ctor: '[]'}),
									_1: {
										ctor: '::',
										_0: A2(
											_elm_lang$html$Html$input,
											{
												ctor: '::',
												_0: _elm_lang$html$Html_Attributes$type_('image'),
												_1: {
													ctor: '::',
													_0: _elm_lang$html$Html_Attributes$src(stop),
													_1: {
														ctor: '::',
														_0: _elm_lang$html$Html_Events$onClick(
															_newlandsvalley$elm_abc_player$Midi_Player$MoveTo(0)),
														_1: {ctor: '[]'}
													}
												}
											},
											{ctor: '[]'}),
										_1: {ctor: '[]'}
									}
								}),
							_1: {ctor: '[]'}
						}
					}),
				_1: {ctor: '[]'}
			});
	} else {
		return A2(
			_elm_lang$html$Html$div,
			{ctor: '[]'},
			{ctor: '[]'});
	}
};
var _newlandsvalley$elm_abc_player$Midi_Player$view = function (model) {
	return A2(
		_elm_lang$html$Html$div,
		{ctor: '[]'},
		{
			ctor: '::',
			_0: _newlandsvalley$elm_abc_player$Midi_Player$player(model),
			_1: {ctor: '[]'}
		});
};
var _newlandsvalley$elm_abc_player$Midi_Player$buttons = function (model) {
	var _p10 = model.playbackState.playing;
	if (_p10 === true) {
		return A2(
			_elm_lang$html$Html$div,
			{ctor: '[]'},
			{
				ctor: '::',
				_0: A2(
					_elm_lang$html$Html$button,
					{
						ctor: '::',
						_0: _elm_lang$html$Html_Events$onClick(_newlandsvalley$elm_abc_player$Midi_Player$Pause),
						_1: {ctor: '[]'}
					},
					{
						ctor: '::',
						_0: _elm_lang$html$Html$text('pause'),
						_1: {ctor: '[]'}
					}),
				_1: {
					ctor: '::',
					_0: A2(
						_elm_lang$html$Html$button,
						{
							ctor: '::',
							_0: _elm_lang$html$Html_Events$onClick(
								_newlandsvalley$elm_abc_player$Midi_Player$MoveTo(0)),
							_1: {ctor: '[]'}
						},
						{
							ctor: '::',
							_0: _elm_lang$html$Html$text('stop'),
							_1: {ctor: '[]'}
						}),
					_1: {ctor: '[]'}
				}
			});
	} else {
		return A2(
			_elm_lang$html$Html$div,
			{ctor: '[]'},
			{
				ctor: '::',
				_0: A2(
					_elm_lang$html$Html$button,
					{
						ctor: '::',
						_0: _elm_lang$html$Html_Events$onClick(_newlandsvalley$elm_abc_player$Midi_Player$Start),
						_1: {ctor: '[]'}
					},
					{
						ctor: '::',
						_0: _elm_lang$html$Html$text('play'),
						_1: {ctor: '[]'}
					}),
				_1: {
					ctor: '::',
					_0: A2(
						_elm_lang$html$Html$button,
						{
							ctor: '::',
							_0: _elm_lang$html$Html_Events$onClick(
								_newlandsvalley$elm_abc_player$Midi_Player$MoveTo(0)),
							_1: {ctor: '[]'}
						},
						{
							ctor: '::',
							_0: _elm_lang$html$Html$text('stop'),
							_1: {ctor: '[]'}
						}),
					_1: {ctor: '[]'}
				}
			});
	}
};
var _newlandsvalley$elm_abc_player$Midi_Player$PlaySequenceStarted = function (a) {
	return {ctor: 'PlaySequenceStarted', _0: a};
};
var _newlandsvalley$elm_abc_player$Midi_Player$playSequenceStartedSub = _newlandsvalley$elm_abc_player$SoundFont_Ports$playSequenceStarted(_newlandsvalley$elm_abc_player$Midi_Player$PlaySequenceStarted);
var _newlandsvalley$elm_abc_player$Midi_Player$PlayedNote = function (a) {
	return {ctor: 'PlayedNote', _0: a};
};
var _newlandsvalley$elm_abc_player$Midi_Player$playedNoteSub = _newlandsvalley$elm_abc_player$SoundFont_Ports$playedNote(_newlandsvalley$elm_abc_player$Midi_Player$PlayedNote);
var _newlandsvalley$elm_abc_player$Midi_Player$Step = {ctor: 'Step'};
var _newlandsvalley$elm_abc_player$Midi_Player$step = function (delay) {
	var task = A2(
		_elm_lang$core$Task$andThen,
		function (_p11) {
			return _elm_lang$core$Task$succeed(
				function (_p12) {
					return _newlandsvalley$elm_abc_player$Midi_Player$Step;
				});
		},
		_elm_lang$core$Process$sleep(delay * _newlandsvalley$elm_abc_player$Midi_Player$elmPlayerOverhead));
	return A2(
		_elm_lang$core$Task$perform,
		function (_p13) {
			return _newlandsvalley$elm_abc_player$Midi_Player$Step;
		},
		task);
};
var _newlandsvalley$elm_abc_player$Midi_Player$interpretSoundEvent = F3(
	function (soundEvent, notes, state) {
		if (state.playing) {
			var _p14 = _elm_lang$core$List$length(notes);
			switch (_p14) {
				case 0:
					return _newlandsvalley$elm_abc_player$Midi_Player$step(soundEvent.deltaTime * _newlandsvalley$elm_abc_player$Midi_Player$elmPlayerOverhead);
				case 1:
					var _p15 = _elm_lang$core$List$head(notes);
					if (_p15.ctor === 'Just') {
						return _newlandsvalley$elm_abc_player$Midi_Player$play(_p15._0);
					} else {
						return _newlandsvalley$elm_abc_player$Midi_Player$step(soundEvent.deltaTime * _newlandsvalley$elm_abc_player$Midi_Player$elmPlayerOverhead);
					}
				default:
					return _newlandsvalley$elm_abc_player$Midi_Player$playChord(notes);
			}
		} else {
			return _elm_lang$core$Platform_Cmd$none;
		}
	});
var _newlandsvalley$elm_abc_player$Midi_Player$SetRecording = function (a) {
	return {ctor: 'SetRecording', _0: a};
};
var _newlandsvalley$elm_abc_player$Midi_Player$FontsLoaded = function (a) {
	return {ctor: 'FontsLoaded', _0: a};
};
var _newlandsvalley$elm_abc_player$Midi_Player$fontsLoadedSub = _newlandsvalley$elm_abc_player$SoundFont_Ports$fontsLoaded(_newlandsvalley$elm_abc_player$Midi_Player$FontsLoaded);
var _newlandsvalley$elm_abc_player$Midi_Player$subscriptions = function (m) {
	return _elm_lang$core$Platform_Sub$batch(
		{
			ctor: '::',
			_0: _newlandsvalley$elm_abc_player$Midi_Player$fontsLoadedSub,
			_1: {
				ctor: '::',
				_0: _newlandsvalley$elm_abc_player$Midi_Player$playedNoteSub,
				_1: {
					ctor: '::',
					_0: _newlandsvalley$elm_abc_player$Midi_Player$playSequenceStartedSub,
					_1: {ctor: '[]'}
				}
			}
		});
};
var _newlandsvalley$elm_abc_player$Midi_Player$NoOp = {ctor: 'NoOp'};
var _newlandsvalley$elm_abc_player$Midi_Player$stop = A2(
	_elm_lang$core$Task$perform,
	function (_p16) {
		return _newlandsvalley$elm_abc_player$Midi_Player$MoveTo(0);
	},
	_elm_lang$core$Task$succeed(_newlandsvalley$elm_abc_player$Midi_Player$NoOp));
var _newlandsvalley$elm_abc_player$Midi_Player$update = F2(
	function (msg, model) {
		var _p17 = msg;
		switch (_p17.ctor) {
			case 'NoOp':
				return {ctor: '_Tuple2', _0: model, _1: _elm_lang$core$Platform_Cmd$none};
			case 'FontsLoaded':
				return {
					ctor: '_Tuple2',
					_0: _elm_lang$core$Native_Utils.update(
						model,
						{fontsLoaded: _p17._0}),
					_1: _elm_lang$core$Platform_Cmd$none
				};
			case 'SetRecording':
				var state = model.playbackState;
				var newState = _elm_lang$core$Native_Utils.update(
					state,
					{playing: false, noteOnSequence: false, noteOnChannel: -1});
				var newModel = _elm_lang$core$Native_Utils.update(
					model,
					{
						playbackState: newState,
						track: _newlandsvalley$elm_abc_player$Midi_Player$toTrack0(_p17._0)
					});
				return {ctor: '_Tuple2', _0: newModel, _1: _newlandsvalley$elm_abc_player$Midi_Player$stop};
			case 'Start':
				var cmd = _newlandsvalley$elm_abc_player$Midi_Player$step(0.0);
				var state = model.playbackState;
				var newState = _elm_lang$core$Native_Utils.update(
					state,
					{playing: true});
				var newModel = _elm_lang$core$Native_Utils.update(
					model,
					{playbackState: newState});
				return {ctor: '_Tuple2', _0: newModel, _1: cmd};
			case 'Pause':
				var state = model.playbackState;
				var newState = _elm_lang$core$Native_Utils.update(
					state,
					{playing: false});
				var newModel = _elm_lang$core$Native_Utils.update(
					model,
					{playbackState: newState});
				return {ctor: '_Tuple2', _0: newModel, _1: _elm_lang$core$Platform_Cmd$none};
			case 'MoveTo':
				var state = model.playbackState;
				var newState = _elm_lang$core$Native_Utils.update(
					state,
					{playing: false, index: _p17._0});
				var newModel = _elm_lang$core$Native_Utils.update(
					model,
					{playbackState: newState});
				return {ctor: '_Tuple2', _0: newModel, _1: _elm_lang$core$Platform_Cmd$none};
			case 'Step':
				var soundEvent = A2(_newlandsvalley$elm_abc_player$Midi_Player$nextEvent, model.playbackState, model.track);
				var _p18 = A2(_newlandsvalley$elm_abc_player$Midi_Player$stepState, soundEvent, model.playbackState);
				var newState = _p18._0;
				var midiNotes = _p18._1;
				var newModel = _elm_lang$core$Native_Utils.update(
					model,
					{playbackState: newState});
				var nextAction = A3(_newlandsvalley$elm_abc_player$Midi_Player$interpretSoundEvent, soundEvent, midiNotes, newState);
				var _p19 = A2(_elm_lang$core$Debug$log, 'step state', model.playbackState);
				return {ctor: '_Tuple2', _0: newModel, _1: nextAction};
			case 'PlayedNote':
				return {
					ctor: '_Tuple2',
					_0: model,
					_1: _newlandsvalley$elm_abc_player$Midi_Player$step(model.playbackState.delay)
				};
			default:
				return {
					ctor: '_Tuple2',
					_0: model,
					_1: _newlandsvalley$elm_abc_player$Midi_Player$step(model.playbackState.delay)
				};
		}
	});
var _newlandsvalley$elm_abc_player$Midi_Player$main = _elm_lang$html$Html$program(
	{
		init: _newlandsvalley$elm_abc_player$Midi_Player$init(
			_elm_lang$core$Result$Err('not started')),
		update: _newlandsvalley$elm_abc_player$Midi_Player$update,
		view: _newlandsvalley$elm_abc_player$Midi_Player$view,
		subscriptions: _newlandsvalley$elm_abc_player$Midi_Player$subscriptions
	})();

var _newlandsvalley$elm_abc_player$FileIO_Ports$requestLoadFile = _elm_lang$core$Native_Platform.outgoingPort(
	'requestLoadFile',
	function (v) {
		return null;
	});
var _newlandsvalley$elm_abc_player$FileIO_Ports$requestSaveFile = _elm_lang$core$Native_Platform.outgoingPort(
	'requestSaveFile',
	function (v) {
		return {contents: v.contents, name: v.name};
	});
var _newlandsvalley$elm_abc_player$FileIO_Ports$fileLoaded = _elm_lang$core$Native_Platform.incomingPort(
	'fileLoaded',
	_elm_lang$core$Json_Decode$oneOf(
		{
			ctor: '::',
			_0: _elm_lang$core$Json_Decode$null(_elm_lang$core$Maybe$Nothing),
			_1: {
				ctor: '::',
				_0: A2(
					_elm_lang$core$Json_Decode$map,
					_elm_lang$core$Maybe$Just,
					A2(
						_elm_lang$core$Json_Decode$andThen,
						function (contents) {
							return A2(
								_elm_lang$core$Json_Decode$andThen,
								function (name) {
									return _elm_lang$core$Json_Decode$succeed(
										{contents: contents, name: name});
								},
								A2(_elm_lang$core$Json_Decode$field, 'name', _elm_lang$core$Json_Decode$string));
						},
						A2(_elm_lang$core$Json_Decode$field, 'contents', _elm_lang$core$Json_Decode$string))),
				_1: {ctor: '[]'}
			}
		}));
var _newlandsvalley$elm_abc_player$FileIO_Ports$fileSaved = _elm_lang$core$Native_Platform.incomingPort('fileSaved', _elm_lang$core$Json_Decode$bool);
var _newlandsvalley$elm_abc_player$FileIO_Ports$Filespec = F2(
	function (a, b) {
		return {contents: a, name: b};
	});

var _newlandsvalley$elm_abc_player$VexTab_Config$Config = F5(
	function (a, b, c, d, e) {
		return {canvasDivId: a, canvasX: b, canvasY: c, canvasWidth: d, scale: e};
	});

var _newlandsvalley$elm_abc_player$VexTab_Ports$initialise = _elm_lang$core$Native_Platform.outgoingPort(
	'initialise',
	function (v) {
		return {canvasDivId: v.canvasDivId, canvasX: v.canvasX, canvasY: v.canvasY, canvasWidth: v.canvasWidth, scale: v.scale};
	});
var _newlandsvalley$elm_abc_player$VexTab_Ports$requestRender = _elm_lang$core$Native_Platform.outgoingPort(
	'requestRender',
	function (v) {
		return v;
	});
var _newlandsvalley$elm_abc_player$VexTab_Ports$initialised = _elm_lang$core$Native_Platform.incomingPort(
	'initialised',
	_elm_lang$core$Json_Decode$oneOf(
		{
			ctor: '::',
			_0: _elm_lang$core$Json_Decode$null(_elm_lang$core$Maybe$Nothing),
			_1: {
				ctor: '::',
				_0: A2(_elm_lang$core$Json_Decode$map, _elm_lang$core$Maybe$Just, _elm_lang$core$Json_Decode$string),
				_1: {ctor: '[]'}
			}
		}));
var _newlandsvalley$elm_abc_player$VexTab_Ports$rendered = _elm_lang$core$Native_Platform.incomingPort(
	'rendered',
	_elm_lang$core$Json_Decode$oneOf(
		{
			ctor: '::',
			_0: _elm_lang$core$Json_Decode$null(_elm_lang$core$Maybe$Nothing),
			_1: {
				ctor: '::',
				_0: A2(_elm_lang$core$Json_Decode$map, _elm_lang$core$Maybe$Just, _elm_lang$core$Json_Decode$string),
				_1: {ctor: '[]'}
			}
		}));

var _newlandsvalley$elm_abc_player$VexTab$saveError = F2(
	function (maybeError, model) {
		var _p0 = maybeError;
		if (_p0.ctor === 'Just') {
			return _elm_lang$core$Native_Utils.update(
				model,
				{error: maybeError});
		} else {
			return model;
		}
	});
var _newlandsvalley$elm_abc_player$VexTab$update = F2(
	function (msg, model) {
		var _p1 = msg;
		switch (_p1.ctor) {
			case 'InitialisedVexTab':
				var newModel = A2(_newlandsvalley$elm_abc_player$VexTab$saveError, _p1._0, model);
				return {ctor: '_Tuple2', _0: newModel, _1: _elm_lang$core$Platform_Cmd$none};
			case 'RequestRenderScore':
				var _p2 = _p1._0;
				return {
					ctor: '_Tuple2',
					_0: _elm_lang$core$Native_Utils.update(
						model,
						{
							text: _elm_lang$core$Maybe$Just(_p2),
							error: _elm_lang$core$Maybe$Nothing
						}),
					_1: _newlandsvalley$elm_abc_player$VexTab_Ports$requestRender(_p2)
				};
			default:
				var newModel = A2(_newlandsvalley$elm_abc_player$VexTab$saveError, _p1._0, model);
				return {ctor: '_Tuple2', _0: newModel, _1: _elm_lang$core$Platform_Cmd$none};
		}
	});
var _newlandsvalley$elm_abc_player$VexTab$Model = F2(
	function (a, b) {
		return {text: a, error: b};
	});
var _newlandsvalley$elm_abc_player$VexTab$init = function (divName) {
	return {
		ctor: '_Tuple2',
		_0: A2(_newlandsvalley$elm_abc_player$VexTab$Model, _elm_lang$core$Maybe$Nothing, _elm_lang$core$Maybe$Nothing),
		_1: _newlandsvalley$elm_abc_player$VexTab_Ports$initialise(divName)
	};
};
var _newlandsvalley$elm_abc_player$VexTab$ResponseScoreRendered = function (a) {
	return {ctor: 'ResponseScoreRendered', _0: a};
};
var _newlandsvalley$elm_abc_player$VexTab$renderedSub = _newlandsvalley$elm_abc_player$VexTab_Ports$rendered(_newlandsvalley$elm_abc_player$VexTab$ResponseScoreRendered);
var _newlandsvalley$elm_abc_player$VexTab$RequestRenderScore = function (a) {
	return {ctor: 'RequestRenderScore', _0: a};
};
var _newlandsvalley$elm_abc_player$VexTab$InitialisedVexTab = function (a) {
	return {ctor: 'InitialisedVexTab', _0: a};
};
var _newlandsvalley$elm_abc_player$VexTab$initialisedSub = _newlandsvalley$elm_abc_player$VexTab_Ports$initialised(_newlandsvalley$elm_abc_player$VexTab$InitialisedVexTab);
var _newlandsvalley$elm_abc_player$VexTab$subscriptions = function (model) {
	return _elm_lang$core$Platform_Sub$batch(
		{
			ctor: '::',
			_0: _newlandsvalley$elm_abc_player$VexTab$initialisedSub,
			_1: {
				ctor: '::',
				_0: _newlandsvalley$elm_abc_player$VexTab$renderedSub,
				_1: {ctor: '[]'}
			}
		});
};

var _newlandsvalley$elm_abc_player$VexScore_Score$VexLine = F2(
	function (a, b) {
		return {stave: a, items: b};
	});
var _newlandsvalley$elm_abc_player$VexScore_Score$VexStave = F3(
	function (a, b, c) {
		return {clef: a, mKey: b, mMeter: c};
	});
var _newlandsvalley$elm_abc_player$VexScore_Score$VexNote = F6(
	function (a, b, c, d, e, f) {
		return {pitchClass: a, accidental: b, octave: c, duration: d, tied: e, decoration: f};
	});
var _newlandsvalley$elm_abc_player$VexScore_Score$VEmptyLine = {ctor: 'VEmptyLine'};
var _newlandsvalley$elm_abc_player$VexScore_Score$VContextChange = {ctor: 'VContextChange'};
var _newlandsvalley$elm_abc_player$VexScore_Score$VLine = function (a) {
	return {ctor: 'VLine', _0: a};
};
var _newlandsvalley$elm_abc_player$VexScore_Score$VIgnore = {ctor: 'VIgnore'};
var _newlandsvalley$elm_abc_player$VexScore_Score$VNotePair = F2(
	function (a, b) {
		return {ctor: 'VNotePair', _0: a, _1: b};
	});
var _newlandsvalley$elm_abc_player$VexScore_Score$VChord = F2(
	function (a, b) {
		return {ctor: 'VChord', _0: a, _1: b};
	});
var _newlandsvalley$elm_abc_player$VexScore_Score$VTuplet = F2(
	function (a, b) {
		return {ctor: 'VTuplet', _0: a, _1: b};
	});
var _newlandsvalley$elm_abc_player$VexScore_Score$VBar = function (a) {
	return {ctor: 'VBar', _0: a};
};
var _newlandsvalley$elm_abc_player$VexScore_Score$VRest = function (a) {
	return {ctor: 'VRest', _0: a};
};
var _newlandsvalley$elm_abc_player$VexScore_Score$VNote = function (a) {
	return {ctor: 'VNote', _0: a};
};
var _newlandsvalley$elm_abc_player$VexScore_Score$Bass = {ctor: 'Bass'};
var _newlandsvalley$elm_abc_player$VexScore_Score$Treble = {ctor: 'Treble'};
var _newlandsvalley$elm_abc_player$VexScore_Score$SixtyFourthDotted = {ctor: 'SixtyFourthDotted'};
var _newlandsvalley$elm_abc_player$VexScore_Score$ThirtySecondDotted = {ctor: 'ThirtySecondDotted'};
var _newlandsvalley$elm_abc_player$VexScore_Score$SixteenthDotted = {ctor: 'SixteenthDotted'};
var _newlandsvalley$elm_abc_player$VexScore_Score$EighthDotted = {ctor: 'EighthDotted'};
var _newlandsvalley$elm_abc_player$VexScore_Score$QuarterDotted = {ctor: 'QuarterDotted'};
var _newlandsvalley$elm_abc_player$VexScore_Score$HalfDotted = {ctor: 'HalfDotted'};
var _newlandsvalley$elm_abc_player$VexScore_Score$SixtyFourth = {ctor: 'SixtyFourth'};
var _newlandsvalley$elm_abc_player$VexScore_Score$ThirtySecond = {ctor: 'ThirtySecond'};
var _newlandsvalley$elm_abc_player$VexScore_Score$Sixteenth = {ctor: 'Sixteenth'};
var _newlandsvalley$elm_abc_player$VexScore_Score$Eighth = {ctor: 'Eighth'};
var _newlandsvalley$elm_abc_player$VexScore_Score$Quarter = {ctor: 'Quarter'};
var _newlandsvalley$elm_abc_player$VexScore_Score$Half = {ctor: 'Half'};
var _newlandsvalley$elm_abc_player$VexScore_Score$Whole = {ctor: 'Whole'};

var _newlandsvalley$elm_abc_player$VexScore_Translate$emptyLine = function (musicLine) {
	var f = function (music) {
		var _p0 = music;
		switch (_p0.ctor) {
			case 'Spacer':
				return true;
			case 'Ignore':
				return true;
			case 'Continuation':
				return true;
			default:
				return false;
		}
	};
	return A2(_elm_lang$core$List$all, f, musicLine);
};
var _newlandsvalley$elm_abc_player$VexScore_Translate$normaliseMode = function (ks) {
	var _p1 = ks.mode;
	switch (_p1.ctor) {
		case 'Ionian':
			return ks;
		case 'Major':
			return ks;
		case 'Minor':
			return ks;
		default:
			return _newlandsvalley$elm_abc_parser$Music_Notation$normaliseModalKey(ks);
	}
};
var _newlandsvalley$elm_abc_player$VexScore_Translate$foldOverResult = F3(
	function (ctx, aline, fmus) {
		var apnd = F2(
			function (rvic, rvics) {
				var _p2 = {ctor: '_Tuple2', _0: rvic, _1: rvics};
				_v2_1:
				do {
					if (_p2._0.ctor === 'Ok') {
						if (_p2._1.ctor === 'Ok') {
							var _p3 = _p2._0._0;
							var newvis = {
								ctor: '::',
								_0: _elm_lang$core$Tuple$first(_p3),
								_1: _elm_lang$core$Tuple$first(_p2._1._0)
							};
							return _elm_lang$core$Result$Ok(
								{
									ctor: '_Tuple2',
									_0: newvis,
									_1: _elm_lang$core$Tuple$second(_p3)
								});
						} else {
							break _v2_1;
						}
					} else {
						if (_p2._1.ctor === 'Err') {
							break _v2_1;
						} else {
							return _elm_lang$core$Result$Err(_p2._0._0);
						}
					}
				} while(false);
				return _elm_lang$core$Result$Err(_p2._1._0);
			});
		var f = F2(
			function (mus, acc) {
				var applicableCtx = function () {
					var _p4 = acc;
					if ((_p4.ctor === 'Ok') && (_p4._0.ctor === '_Tuple2')) {
						return _p4._0._1;
					} else {
						return ctx;
					}
				}();
				return A2(
					apnd,
					A2(fmus, applicableCtx, mus),
					acc);
			});
		var result = A3(
			_elm_lang$core$List$foldl,
			f,
			_elm_lang$core$Result$Ok(
				{
					ctor: '_Tuple2',
					_0: {ctor: '[]'},
					_1: ctx
				}),
			aline);
		var _p5 = result;
		if ((_p5.ctor === 'Ok') && (_p5._0.ctor === '_Tuple2')) {
			return _elm_lang$core$Result$Ok(
				{
					ctor: '_Tuple2',
					_0: _elm_lang$core$List$reverse(_p5._0._0),
					_1: _p5._0._1
				});
		} else {
			return result;
		}
	});
var _newlandsvalley$elm_abc_player$VexScore_Translate$firstNoteDuration = function (ns) {
	return A2(
		_elm_lang$core$Maybe$withDefault,
		A2(_elm_community$ratio$Ratio$over, 1, 1),
		_elm_lang$core$List$head(
			A2(
				_elm_lang$core$List$map,
				function (a) {
					return a.duration;
				},
				ns)));
};
var _newlandsvalley$elm_abc_player$VexScore_Translate$unitNoteLen = function (muh) {
	var _p6 = muh;
	if (_p6.ctor === 'Just') {
		var _p7 = _p6._0;
		if (_p7.ctor === 'UnitNoteLength') {
			return _p7._0;
		} else {
			return A2(_elm_community$ratio$Ratio$over, 1, 8);
		}
	} else {
		return A2(_elm_community$ratio$Ratio$over, 1, 8);
	}
};
var _newlandsvalley$elm_abc_player$VexScore_Translate$getMeter = function (mmh) {
	var _p8 = mmh;
	if (_p8.ctor === 'Just') {
		var _p9 = _p8._0;
		if ((_p9.ctor === 'Meter') && (_p9._0.ctor === 'Just')) {
			return _elm_lang$core$Maybe$Just(_p9._0._0);
		} else {
			return _elm_lang$core$Maybe$Just(
				{ctor: '_Tuple2', _0: 4, _1: 4});
		}
	} else {
		return _elm_lang$core$Maybe$Just(
			{ctor: '_Tuple2', _0: 4, _1: 4});
	}
};
var _newlandsvalley$elm_abc_player$VexScore_Translate$getKeySig = function (mkh) {
	var cMajor = {
		ctor: '_Tuple2',
		_0: {pitchClass: _newlandsvalley$elm_abc_parser$Abc_ParseTree$C, accidental: _elm_lang$core$Maybe$Nothing, mode: _newlandsvalley$elm_abc_parser$Abc_ParseTree$Major},
		_1: {ctor: '[]'}
	};
	var _p10 = mkh;
	if (_p10.ctor === 'Just') {
		var _p11 = _p10._0;
		if (_p11.ctor === 'Key') {
			return _p11._0;
		} else {
			return cMajor;
		}
	} else {
		return cMajor;
	}
};
var _newlandsvalley$elm_abc_player$VexScore_Translate$initialContext = function (t) {
	var headerMap = _newlandsvalley$elm_abc_parser$Music_Notation$getHeaderMap(t);
	var keySig = _newlandsvalley$elm_abc_player$VexScore_Translate$getKeySig(
		A2(
			_elm_lang$core$Dict$get,
			_elm_lang$core$Native_Utils.chr('K'),
			headerMap));
	var meter = _newlandsvalley$elm_abc_player$VexScore_Translate$getMeter(
		A2(
			_elm_lang$core$Dict$get,
			_elm_lang$core$Native_Utils.chr('M'),
			headerMap));
	var unl = _newlandsvalley$elm_abc_player$VexScore_Translate$unitNoteLen(
		A2(
			_elm_lang$core$Dict$get,
			_elm_lang$core$Native_Utils.chr('L'),
			headerMap));
	return {modifiedKeySig: keySig, meter: meter, unitNoteLength: unl, tied: false, decoration: _elm_lang$core$Maybe$Nothing, continuation: false};
};
var _newlandsvalley$elm_abc_player$VexScore_Translate$inlineHeader = F2(
	function (ctx, h) {
		var _p12 = h;
		switch (_p12.ctor) {
			case 'Key':
				return _elm_lang$core$Result$Err('inline key signature changes not supported');
			case 'Meter':
				return _elm_lang$core$Result$Err('inline time signature changes not supported');
			case 'UnitNoteLength':
				return _elm_lang$core$Result$Ok(
					{
						ctor: '_Tuple2',
						_0: _newlandsvalley$elm_abc_player$VexScore_Score$VIgnore,
						_1: _elm_lang$core$Native_Utils.update(
							ctx,
							{unitNoteLength: _p12._0})
					});
			default:
				return _elm_lang$core$Result$Ok(
					{ctor: '_Tuple2', _0: _newlandsvalley$elm_abc_player$VexScore_Score$VIgnore, _1: ctx});
		}
	});
var _newlandsvalley$elm_abc_player$VexScore_Translate$header = F2(
	function (ctx, h) {
		var _p13 = h;
		switch (_p13.ctor) {
			case 'Key':
				return _elm_lang$core$Native_Utils.update(
					ctx,
					{modifiedKeySig: _p13._0});
			case 'UnitNoteLength':
				return _elm_lang$core$Native_Utils.update(
					ctx,
					{unitNoteLength: _p13._0});
			case 'Meter':
				return _elm_lang$core$Native_Utils.update(
					ctx,
					{meter: _p13._0});
			default:
				return ctx;
		}
	});
var _newlandsvalley$elm_abc_player$VexScore_Translate$makeBroken = F3(
	function (broken, n1, n2) {
		var up = function (i) {
			return A2(
				_elm_community$ratio$Ratio$add,
				A2(_elm_community$ratio$Ratio$over, 1, 1),
				_newlandsvalley$elm_abc_parser$Music_Notation$dotFactor(i));
		};
		var down = function (i) {
			return A2(
				_elm_community$ratio$Ratio$add,
				A2(_elm_community$ratio$Ratio$over, 1, 1),
				_elm_community$ratio$Ratio$negate(
					_newlandsvalley$elm_abc_parser$Music_Notation$dotFactor(i)));
		};
		var _p14 = broken;
		if (_p14.ctor === 'LeftArrow') {
			var _p15 = _p14._0;
			var right = _elm_lang$core$Native_Utils.update(
				n2,
				{
					duration: A2(
						_elm_community$ratio$Ratio$multiply,
						n2.duration,
						up(_p15))
				});
			var left = _elm_lang$core$Native_Utils.update(
				n1,
				{
					duration: A2(
						_elm_community$ratio$Ratio$multiply,
						n1.duration,
						down(_p15))
				});
			return {ctor: '_Tuple2', _0: left, _1: right};
		} else {
			var _p16 = _p14._0;
			var right = _elm_lang$core$Native_Utils.update(
				n2,
				{
					duration: A2(
						_elm_community$ratio$Ratio$multiply,
						n2.duration,
						down(_p16))
				});
			var left = _elm_lang$core$Native_Utils.update(
				n1,
				{
					duration: A2(
						_elm_community$ratio$Ratio$multiply,
						n1.duration,
						up(_p16))
				});
			return {ctor: '_Tuple2', _0: left, _1: right};
		}
	});
var _newlandsvalley$elm_abc_player$VexScore_Translate$noteDur = F2(
	function (ctx, d) {
		var denom = _elm_community$ratio$Ratio$denominator(ctx.unitNoteLength) * _elm_community$ratio$Ratio$denominator(d);
		var numer = (_elm_community$ratio$Ratio$numerator(ctx.unitNoteLength) * _elm_community$ratio$Ratio$numerator(d)) * 128;
		var durn = (numer / denom) | 0;
		var _p17 = durn;
		switch (_p17) {
			case 128:
				return _elm_lang$core$Result$Ok(_newlandsvalley$elm_abc_player$VexScore_Score$Whole);
			case 96:
				return _elm_lang$core$Result$Ok(_newlandsvalley$elm_abc_player$VexScore_Score$HalfDotted);
			case 64:
				return _elm_lang$core$Result$Ok(_newlandsvalley$elm_abc_player$VexScore_Score$Half);
			case 48:
				return _elm_lang$core$Result$Ok(_newlandsvalley$elm_abc_player$VexScore_Score$QuarterDotted);
			case 32:
				return _elm_lang$core$Result$Ok(_newlandsvalley$elm_abc_player$VexScore_Score$Quarter);
			case 24:
				return _elm_lang$core$Result$Ok(_newlandsvalley$elm_abc_player$VexScore_Score$EighthDotted);
			case 16:
				return _elm_lang$core$Result$Ok(_newlandsvalley$elm_abc_player$VexScore_Score$Eighth);
			case 12:
				return _elm_lang$core$Result$Ok(_newlandsvalley$elm_abc_player$VexScore_Score$SixteenthDotted);
			case 8:
				return _elm_lang$core$Result$Ok(_newlandsvalley$elm_abc_player$VexScore_Score$Sixteenth);
			case 6:
				return _elm_lang$core$Result$Ok(_newlandsvalley$elm_abc_player$VexScore_Score$ThirtySecondDotted);
			case 4:
				return _elm_lang$core$Result$Ok(_newlandsvalley$elm_abc_player$VexScore_Score$ThirtySecond);
			case 3:
				return _elm_lang$core$Result$Ok(_newlandsvalley$elm_abc_player$VexScore_Score$SixtyFourthDotted);
			case 2:
				return _elm_lang$core$Result$Ok(_newlandsvalley$elm_abc_player$VexScore_Score$SixtyFourth);
			default:
				return _elm_lang$core$Result$Err('too long or too dotted');
		}
	});
var _newlandsvalley$elm_abc_player$VexScore_Translate$note = F2(
	function (ctx, abcNote) {
		var noteDurResult = A2(_newlandsvalley$elm_abc_player$VexScore_Translate$noteDur, ctx, abcNote.duration);
		var _p18 = noteDurResult;
		if (_p18.ctor === 'Ok') {
			var newCtx = _elm_lang$core$Native_Utils.update(
				ctx,
				{tied: abcNote.tied, decoration: _elm_lang$core$Maybe$Nothing});
			var vexNote = {pitchClass: abcNote.pitchClass, accidental: abcNote.accidental, octave: abcNote.octave - 1, duration: _p18._0, tied: ctx.tied, decoration: ctx.decoration};
			return _elm_lang$core$Result$Ok(
				{ctor: '_Tuple2', _0: vexNote, _1: newCtx});
		} else {
			return _elm_lang$core$Result$Err(
				A2(
					_elm_lang$core$Basics_ops['++'],
					'Note ',
					A2(
						_elm_lang$core$Basics_ops['++'],
						_p18._0,
						A2(
							_elm_lang$core$Basics_ops['++'],
							': ',
							_newlandsvalley$elm_abc_parser$Abc_Canonical$abcNote(abcNote)))));
		}
	});
var _newlandsvalley$elm_abc_player$VexScore_Translate$noteList = F2(
	function (ctx, notes) {
		return A3(_newlandsvalley$elm_abc_player$VexScore_Translate$foldOverResult, ctx, notes, _newlandsvalley$elm_abc_player$VexScore_Translate$note);
	});
var _newlandsvalley$elm_abc_player$VexScore_Translate$music = F2(
	function (ctx, m) {
		var _p19 = m;
		switch (_p19.ctor) {
			case 'Barline':
				var _p21 = _p19._0;
				var newCtx = function () {
					var _p20 = _p21.iteration;
					_v17_2:
					do {
						if (_p20.ctor === 'Just') {
							switch (_p20._0) {
								case 1:
									return _elm_lang$core$Native_Utils.update(
										ctx,
										{
											decoration: _elm_lang$core$Maybe$Just('1')
										});
								case 2:
									return _elm_lang$core$Native_Utils.update(
										ctx,
										{
											decoration: _elm_lang$core$Maybe$Just('2')
										});
								default:
									break _v17_2;
							}
						} else {
							break _v17_2;
						}
					} while(false);
					return ctx;
				}();
				return _elm_lang$core$Result$Ok(
					{
						ctor: '_Tuple2',
						_0: _newlandsvalley$elm_abc_player$VexScore_Score$VBar(_p21),
						_1: newCtx
					});
			case 'Note':
				return A2(
					_elm_lang$core$Result$map,
					function (_p22) {
						var _p23 = _p22;
						return {
							ctor: '_Tuple2',
							_0: _newlandsvalley$elm_abc_player$VexScore_Score$VNote(_p23._0),
							_1: _p23._1
						};
					},
					A2(_newlandsvalley$elm_abc_player$VexScore_Translate$note, ctx, _p19._0));
			case 'Rest':
				var noteDurResult = A2(_newlandsvalley$elm_abc_player$VexScore_Translate$noteDur, ctx, _p19._0);
				var _p24 = noteDurResult;
				if (_p24.ctor === 'Ok') {
					return _elm_lang$core$Result$Ok(
						{
							ctor: '_Tuple2',
							_0: _newlandsvalley$elm_abc_player$VexScore_Score$VRest(_p24._0),
							_1: ctx
						});
				} else {
					return _elm_lang$core$Result$Err(
						A2(
							_elm_lang$core$Basics_ops['++'],
							'Rest ',
							A2(
								_elm_lang$core$Basics_ops['++'],
								_p24._0,
								A2(_elm_lang$core$Basics_ops['++'], ': ', 'rest'))));
				}
			case 'Tuplet':
				var notesResult = A2(_newlandsvalley$elm_abc_player$VexScore_Translate$noteList, ctx, _p19._1);
				var _p25 = _p19._0;
				var size = _p25._0;
				var noteCount = _p25._2;
				var _p26 = notesResult;
				if (_p26.ctor === 'Ok') {
					return _elm_lang$core$Result$Ok(
						{
							ctor: '_Tuple2',
							_0: A2(_newlandsvalley$elm_abc_player$VexScore_Score$VTuplet, size, _p26._0._0),
							_1: ctx
						});
				} else {
					return _elm_lang$core$Result$Err(_p26._0);
				}
			case 'Chord':
				var _p28 = _p19._0;
				var nDur = _newlandsvalley$elm_abc_player$VexScore_Translate$firstNoteDuration(_p28.notes);
				var overallDur = A2(_elm_community$ratio$Ratio$multiply, _p28.duration, nDur);
				var chordDurResult = A2(_newlandsvalley$elm_abc_player$VexScore_Translate$noteDur, ctx, overallDur);
				var notesResult = A2(_newlandsvalley$elm_abc_player$VexScore_Translate$noteList, ctx, _p28.notes);
				var _p27 = {ctor: '_Tuple2', _0: notesResult, _1: chordDurResult};
				if (_p27._0.ctor === 'Ok') {
					if (_p27._1.ctor === 'Ok') {
						return _elm_lang$core$Result$Ok(
							{
								ctor: '_Tuple2',
								_0: A2(_newlandsvalley$elm_abc_player$VexScore_Score$VChord, _p27._1._0, _p27._0._0._0),
								_1: ctx
							});
					} else {
						return _elm_lang$core$Result$Err(
							A2(
								_elm_lang$core$Basics_ops['++'],
								'Chord ',
								A2(
									_elm_lang$core$Basics_ops['++'],
									_p27._1._0,
									A2(
										_elm_lang$core$Basics_ops['++'],
										': ',
										_newlandsvalley$elm_abc_parser$Abc_Canonical$abcChord(_p28)))));
					}
				} else {
					return _elm_lang$core$Result$Err(_p27._0._0);
				}
			case 'BrokenRhythmPair':
				var _p33 = _p19._2;
				var _p32 = _p19._0;
				var _p29 = A3(_newlandsvalley$elm_abc_player$VexScore_Translate$makeBroken, _p19._1, _p32, _p33);
				var bNote1 = _p29._0;
				var bNote2 = _p29._1;
				var note1Result = A2(_newlandsvalley$elm_abc_player$VexScore_Translate$note, ctx, bNote1);
				var ctx1 = function () {
					var _p30 = note1Result;
					if ((_p30.ctor === 'Ok') && (_p30._0.ctor === '_Tuple2')) {
						return _p30._0._1;
					} else {
						return ctx;
					}
				}();
				var note2Result = A2(_newlandsvalley$elm_abc_player$VexScore_Translate$note, ctx1, bNote2);
				var _p31 = {ctor: '_Tuple2', _0: note1Result, _1: note2Result};
				if (_p31._0.ctor === 'Ok') {
					if (_p31._1.ctor === 'Ok') {
						return _elm_lang$core$Result$Ok(
							{
								ctor: '_Tuple2',
								_0: A2(_newlandsvalley$elm_abc_player$VexScore_Score$VNotePair, _p31._0._0._0, _p31._1._0._0),
								_1: _p31._1._0._1
							});
					} else {
						return _elm_lang$core$Result$Err(
							A2(
								_elm_lang$core$Basics_ops['++'],
								'Note ',
								A2(
									_elm_lang$core$Basics_ops['++'],
									_p31._1._0,
									A2(
										_elm_lang$core$Basics_ops['++'],
										': ',
										_newlandsvalley$elm_abc_parser$Abc_Canonical$abcNote(_p33)))));
					}
				} else {
					return _elm_lang$core$Result$Err(
						A2(
							_elm_lang$core$Basics_ops['++'],
							'Note ',
							A2(
								_elm_lang$core$Basics_ops['++'],
								_p31._0._0,
								A2(
									_elm_lang$core$Basics_ops['++'],
									': ',
									_newlandsvalley$elm_abc_parser$Abc_Canonical$abcNote(_p32)))));
				}
			case 'Decoration':
				return _elm_lang$core$Result$Ok(
					{
						ctor: '_Tuple2',
						_0: _newlandsvalley$elm_abc_player$VexScore_Score$VIgnore,
						_1: _elm_lang$core$Native_Utils.update(
							ctx,
							{
								decoration: _elm_lang$core$Maybe$Just(_p19._0)
							})
					});
			case 'Inline':
				return A2(_newlandsvalley$elm_abc_player$VexScore_Translate$inlineHeader, ctx, _p19._0);
			case 'Continuation':
				return _elm_lang$core$Result$Ok(
					{
						ctor: '_Tuple2',
						_0: _newlandsvalley$elm_abc_player$VexScore_Score$VIgnore,
						_1: _elm_lang$core$Native_Utils.update(
							ctx,
							{continuation: true})
					});
			default:
				return _elm_lang$core$Result$Ok(
					{ctor: '_Tuple2', _0: _newlandsvalley$elm_abc_player$VexScore_Score$VIgnore, _1: ctx});
		}
	});
var _newlandsvalley$elm_abc_player$VexScore_Translate$musicLine = F2(
	function (ctx, ml) {
		return A3(_newlandsvalley$elm_abc_player$VexScore_Translate$foldOverResult, ctx, ml, _newlandsvalley$elm_abc_player$VexScore_Translate$music);
	});
var _newlandsvalley$elm_abc_player$VexScore_Translate$vexLine = F2(
	function (ctx, line) {
		var staveCtx = _elm_lang$core$Native_Utils.update(
			ctx,
			{meter: _elm_lang$core$Maybe$Nothing, continuation: false});
		var itemsRes = A2(_newlandsvalley$elm_abc_player$VexScore_Translate$musicLine, staveCtx, line);
		var mKey = _elm_lang$core$Maybe$Just(
			_newlandsvalley$elm_abc_player$VexScore_Translate$normaliseMode(
				_elm_lang$core$Tuple$first(ctx.modifiedKeySig)));
		var vexStave = ctx.continuation ? _elm_lang$core$Maybe$Nothing : _elm_lang$core$Maybe$Just(
			{clef: _newlandsvalley$elm_abc_player$VexScore_Score$Treble, mKey: mKey, mMeter: ctx.meter});
		var _p34 = itemsRes;
		if (_p34.ctor === 'Ok') {
			return _elm_lang$core$Result$Ok(
				{
					ctor: '_Tuple2',
					_0: _newlandsvalley$elm_abc_player$VexScore_Score$VLine(
						{stave: vexStave, items: _p34._0._0}),
					_1: _p34._0._1
				});
		} else {
			return _elm_lang$core$Result$Err(_p34._0);
		}
	});
var _newlandsvalley$elm_abc_player$VexScore_Translate$bodyPart = F2(
	function (ctx, bp) {
		var _p35 = bp;
		if (_p35.ctor === 'Score') {
			var _p36 = _p35._0;
			return _newlandsvalley$elm_abc_player$VexScore_Translate$emptyLine(_p36) ? _elm_lang$core$Result$Ok(
				{ctor: '_Tuple2', _0: _newlandsvalley$elm_abc_player$VexScore_Score$VEmptyLine, _1: ctx}) : A2(_newlandsvalley$elm_abc_player$VexScore_Translate$vexLine, ctx, _p36);
		} else {
			var newCtx = A2(_newlandsvalley$elm_abc_player$VexScore_Translate$header, ctx, _p35._0);
			return _elm_lang$core$Result$Ok(
				{ctor: '_Tuple2', _0: _newlandsvalley$elm_abc_player$VexScore_Score$VContextChange, _1: newCtx});
		}
	});
var _newlandsvalley$elm_abc_player$VexScore_Translate$tuneBody = F2(
	function (ctx, tb) {
		return A3(_newlandsvalley$elm_abc_player$VexScore_Translate$foldOverResult, ctx, tb, _newlandsvalley$elm_abc_player$VexScore_Translate$bodyPart);
	});
var _newlandsvalley$elm_abc_player$VexScore_Translate$translate = function (t) {
	var ctx = _newlandsvalley$elm_abc_player$VexScore_Translate$initialContext(t);
	var ksmod = _elm_lang$core$Tuple$second(ctx.modifiedKeySig);
	var result = A2(
		_newlandsvalley$elm_abc_player$VexScore_Translate$tuneBody,
		ctx,
		_elm_lang$core$Tuple$second(t));
	if (_elm_lang$core$List$isEmpty(ksmod)) {
		var _p37 = result;
		if (_p37.ctor === 'Ok') {
			return _elm_lang$core$Result$Ok(
				_elm_lang$core$Tuple$first(_p37._0));
		} else {
			return _elm_lang$core$Result$Err(_p37._0);
		}
	} else {
		return _elm_lang$core$Result$Err('modified key signatures not supported');
	}
};
var _newlandsvalley$elm_abc_player$VexScore_Translate$translateText = function (s) {
	var parseResult = _newlandsvalley$elm_abc_parser$Abc$parse(s);
	var _p38 = parseResult;
	if (_p38.ctor === 'Ok') {
		return _newlandsvalley$elm_abc_player$VexScore_Translate$translate(_p38._0);
	} else {
		return _elm_lang$core$Result$Err(
			A2(
				_elm_lang$core$Basics_ops['++'],
				'parse error: ',
				_newlandsvalley$elm_abc_parser$Abc$parseError(_p38._0)));
	}
};
var _newlandsvalley$elm_abc_player$VexScore_Translate$Context = F6(
	function (a, b, c, d, e, f) {
		return {modifiedKeySig: a, meter: b, unitNoteLength: c, tied: d, decoration: e, continuation: f};
	});

var _newlandsvalley$elm_abc_player$VexScore_Canonical$vexDecoration = function (v) {
	var isTopPosition = (_elm_lang$core$Native_Utils.cmp(v.octave, 4) > 0) ? true : ((_elm_lang$core$Native_Utils.cmp(v.octave, 4) < 0) ? false : false);
	var formatDecoration = F2(
		function (isTop, vexCode) {
			var position = isTop ? '/top' : '/bottom';
			return A2(
				_elm_lang$core$Basics_ops['++'],
				' $.a',
				A2(
					_elm_lang$core$Basics_ops['++'],
					vexCode,
					A2(_elm_lang$core$Basics_ops['++'], position, '.$')));
		});
	var _p0 = v.decoration;
	_v0_7:
	do {
		if (_p0.ctor === 'Just') {
			switch (_p0._0) {
				case '.':
					return A2(formatDecoration, isTopPosition, '.');
				case 'H':
					return A2(formatDecoration, true, '@a');
				case 'L':
					return A2(formatDecoration, true, '>');
				case 'u':
					return A2(formatDecoration, true, '|');
				case 'v':
					return A2(formatDecoration, true, 'm');
				case '1':
					return ' $.top.$ $1───$';
				case '2':
					return ' $.top.$ $2───$';
				default:
					break _v0_7;
			}
		} else {
			break _v0_7;
		}
	} while(false);
	return '';
};
var _newlandsvalley$elm_abc_player$VexScore_Canonical$mode = function (m) {
	var _p1 = m;
	switch (_p1.ctor) {
		case 'Major':
			return '';
		case 'Minor':
			return 'm';
		case 'Ionian':
			return '';
		case 'Aeolian':
			return 'm';
		default:
			return 'error not supported';
	}
};
var _newlandsvalley$elm_abc_player$VexScore_Canonical$headerAccidental = function (ma) {
	var _p2 = ma;
	_v2_2:
	do {
		if (_p2.ctor === 'Just') {
			switch (_p2._0.ctor) {
				case 'Sharp':
					return '#';
				case 'Flat':
					return 'b';
				default:
					break _v2_2;
			}
		} else {
			break _v2_2;
		}
	} while(false);
	return '';
};
var _newlandsvalley$elm_abc_player$VexScore_Canonical$vexBar = function (b) {
	var _p3 = b.repeat;
	if (_p3.ctor === 'Just') {
		switch (_p3._0.ctor) {
			case 'Begin':
				return ' =|:';
			case 'End':
				return ' =:|';
			default:
				return ' =::';
		}
	} else {
		var _p4 = b.thickness;
		if (_p4.ctor === 'Thin') {
			return ' |';
		} else {
			return ' =||';
		}
	}
};
var _newlandsvalley$elm_abc_player$VexScore_Canonical$accidental = function (a) {
	var _p5 = a;
	switch (_p5.ctor) {
		case 'Sharp':
			return '#';
		case 'Flat':
			return '@';
		case 'DoubleSharp':
			return '##';
		case 'DoubleFlat':
			return '@@';
		default:
			return 'n';
	}
};
var _newlandsvalley$elm_abc_player$VexScore_Canonical$noteDur = function (nd) {
	var _p6 = nd;
	switch (_p6.ctor) {
		case 'Whole':
			return ':w';
		case 'Half':
			return ':h';
		case 'Quarter':
			return ':q';
		case 'Eighth':
			return ':8';
		case 'Sixteenth':
			return ':16';
		case 'ThirtySecond':
			return ':32';
		case 'SixtyFourth':
			return ':64';
		case 'HalfDotted':
			return ':hd';
		case 'QuarterDotted':
			return ':qd';
		case 'EighthDotted':
			return ':8d';
		case 'SixteenthDotted':
			return ':16d';
		case 'ThirtySecondDotted':
			return ':32d';
		default:
			return ':64d';
	}
};
var _newlandsvalley$elm_abc_player$VexScore_Canonical$options = 'options beam-rests=false\r\n';
var _newlandsvalley$elm_abc_player$VexScore_Canonical$nicelySpace = function (xs) {
	return _elm_lang$core$String$concat(
		A2(_elm_lang$core$List$intersperse, ' ', xs));
};
var _newlandsvalley$elm_abc_player$VexScore_Canonical$vexNote = F2(
	function (ctx, vnote) {
		var decor = _newlandsvalley$elm_abc_player$VexScore_Canonical$vexDecoration(vnote);
		var tie = vnote.tied ? 'T' : '';
		var dur = _newlandsvalley$elm_abc_player$VexScore_Canonical$noteDur(vnote.duration);
		var accident = A2(
			_elm_lang$core$Maybe$withDefault,
			'',
			A2(_elm_lang$core$Maybe$map, _newlandsvalley$elm_abc_player$VexScore_Canonical$accidental, vnote.accidental));
		var pitch = A2(
			_elm_lang$core$Basics_ops['++'],
			_elm_lang$core$Basics$toString(vnote.pitchClass),
			A2(
				_elm_lang$core$Basics_ops['++'],
				accident,
				A2(
					_elm_lang$core$Basics_ops['++'],
					'/',
					_elm_lang$core$Basics$toString(vnote.octave))));
		var _p7 = ctx;
		switch (_p7.ctor) {
			case 'Chordal':
				return pitch;
			case 'Tupleted':
				return _newlandsvalley$elm_abc_player$VexScore_Canonical$nicelySpace(
					{
						ctor: '::',
						_0: dur,
						_1: {
							ctor: '::',
							_0: pitch,
							_1: {ctor: '[]'}
						}
					});
			default:
				return vnote.tied ? A2(
					_elm_lang$core$Basics_ops['++'],
					_newlandsvalley$elm_abc_player$VexScore_Canonical$nicelySpace(
						{
							ctor: '::',
							_0: '',
							_1: {
								ctor: '::',
								_0: dur,
								_1: {
									ctor: '::',
									_0: tie,
									_1: {
										ctor: '::',
										_0: pitch,
										_1: {ctor: '[]'}
									}
								}
							}
						}),
					decor) : A2(
					_elm_lang$core$Basics_ops['++'],
					_newlandsvalley$elm_abc_player$VexScore_Canonical$nicelySpace(
						{
							ctor: '::',
							_0: '',
							_1: {
								ctor: '::',
								_0: dur,
								_1: {
									ctor: '::',
									_0: pitch,
									_1: {ctor: '[]'}
								}
							}
						}),
					decor);
		}
	});
var _newlandsvalley$elm_abc_player$VexScore_Canonical$eol = '\r\n';
var _newlandsvalley$elm_abc_player$VexScore_Canonical$vexStave = function (mvs) {
	var _p8 = mvs;
	if (_p8.ctor === 'Just') {
		var _p14 = _p8._0;
		var key = function () {
			var _p9 = _p14.mKey;
			if (_p9.ctor === 'Just') {
				var _p10 = _p9._0;
				var md = _newlandsvalley$elm_abc_player$VexScore_Canonical$mode(_p10.mode);
				var accidental = _newlandsvalley$elm_abc_player$VexScore_Canonical$headerAccidental(_p10.accidental);
				return A2(
					_elm_lang$core$Basics_ops['++'],
					'key=',
					A2(
						_elm_lang$core$Basics_ops['++'],
						_elm_lang$core$Basics$toString(_p10.pitchClass),
						A2(_elm_lang$core$Basics_ops['++'], accidental, md)));
			} else {
				return '';
			}
		}();
		var time = function () {
			var _p11 = _p14.mMeter;
			if (_p11.ctor === 'Just') {
				var _p12 = _p11._0;
				return A2(
					_elm_lang$core$Basics_ops['++'],
					'time=',
					A2(
						_elm_lang$core$Basics_ops['++'],
						_elm_lang$core$Basics$toString(
							_elm_lang$core$Tuple$first(_p12)),
						A2(
							_elm_lang$core$Basics_ops['++'],
							'/',
							_elm_lang$core$Basics$toString(
								_elm_lang$core$Tuple$second(_p12)))));
			} else {
				return '';
			}
		}();
		var clef = A2(
			_elm_lang$core$Basics_ops['++'],
			'clef=',
			function (_p13) {
				return _elm_lang$core$String$toLower(
					_elm_lang$core$Basics$toString(_p13));
			}(_p14.clef));
		return _newlandsvalley$elm_abc_player$VexScore_Canonical$nicelySpace(
			{
				ctor: '::',
				_0: 'stave notation=true',
				_1: {
					ctor: '::',
					_0: clef,
					_1: {
						ctor: '::',
						_0: key,
						_1: {
							ctor: '::',
							_0: time,
							_1: {
								ctor: '::',
								_0: _newlandsvalley$elm_abc_player$VexScore_Canonical$eol,
								_1: {
									ctor: '::',
									_0: 'notes',
									_1: {ctor: '[]'}
								}
							}
						}
					}
				}
			});
	} else {
		return ' notes';
	}
};
var _newlandsvalley$elm_abc_player$VexScore_Canonical$Chordal = {ctor: 'Chordal'};
var _newlandsvalley$elm_abc_player$VexScore_Canonical$Tupleted = {ctor: 'Tupleted'};
var _newlandsvalley$elm_abc_player$VexScore_Canonical$Staved = {ctor: 'Staved'};
var _newlandsvalley$elm_abc_player$VexScore_Canonical$vexItem = function (vi) {
	var _p15 = vi;
	switch (_p15.ctor) {
		case 'VBar':
			return _newlandsvalley$elm_abc_player$VexScore_Canonical$vexBar(_p15._0);
		case 'VNote':
			return A2(_newlandsvalley$elm_abc_player$VexScore_Canonical$vexNote, _newlandsvalley$elm_abc_player$VexScore_Canonical$Staved, _p15._0);
		case 'VRest':
			var rest = '##';
			var dur = _newlandsvalley$elm_abc_player$VexScore_Canonical$noteDur(_p15._0);
			return _newlandsvalley$elm_abc_player$VexScore_Canonical$nicelySpace(
				{
					ctor: '::',
					_0: '',
					_1: {
						ctor: '::',
						_0: dur,
						_1: {
							ctor: '::',
							_0: rest,
							_1: {ctor: '[]'}
						}
					}
				});
		case 'VTuplet':
			var _p16 = _p15._1;
			return A2(
				_elm_lang$core$Basics_ops['++'],
				' ',
				A2(
					_elm_lang$core$Basics_ops['++'],
					_elm_lang$core$String$concat(
						A2(
							_elm_lang$core$List$intersperse,
							' ',
							A2(
								_elm_lang$core$List$map,
								_newlandsvalley$elm_abc_player$VexScore_Canonical$vexNote(_newlandsvalley$elm_abc_player$VexScore_Canonical$Tupleted),
								_p16))),
					A2(
						_elm_lang$core$Basics_ops['++'],
						' ^',
						A2(
							_elm_lang$core$Basics_ops['++'],
							_elm_lang$core$Basics$toString(_p15._0),
							A2(
								_elm_lang$core$Basics_ops['++'],
								',',
								A2(
									_elm_lang$core$Basics_ops['++'],
									_elm_lang$core$Basics$toString(
										_elm_lang$core$List$length(_p16)),
									'^'))))));
		case 'VChord':
			var chordDur = _newlandsvalley$elm_abc_player$VexScore_Canonical$noteDur(_p15._0);
			return A2(
				_elm_lang$core$Basics_ops['++'],
				' ',
				A2(
					_elm_lang$core$Basics_ops['++'],
					chordDur,
					A2(
						_elm_lang$core$Basics_ops['++'],
						' ( ',
						A2(
							_elm_lang$core$Basics_ops['++'],
							_elm_lang$core$String$concat(
								A2(
									_elm_lang$core$List$intersperse,
									'.',
									A2(
										_elm_lang$core$List$map,
										_newlandsvalley$elm_abc_player$VexScore_Canonical$vexNote(_newlandsvalley$elm_abc_player$VexScore_Canonical$Chordal),
										_p15._1))),
							' )'))));
		case 'VNotePair':
			return A2(
				_elm_lang$core$Basics_ops['++'],
				A2(_newlandsvalley$elm_abc_player$VexScore_Canonical$vexNote, _newlandsvalley$elm_abc_player$VexScore_Canonical$Staved, _p15._0),
				A2(_newlandsvalley$elm_abc_player$VexScore_Canonical$vexNote, _newlandsvalley$elm_abc_player$VexScore_Canonical$Staved, _p15._1));
		default:
			return '';
	}
};
var _newlandsvalley$elm_abc_player$VexScore_Canonical$vexItems = function (vis) {
	return _elm_lang$core$String$concat(
		A2(_elm_lang$core$List$map, _newlandsvalley$elm_abc_player$VexScore_Canonical$vexItem, vis));
};
var _newlandsvalley$elm_abc_player$VexScore_Canonical$vexLine = function (vl) {
	return A2(
		_elm_lang$core$Basics_ops['++'],
		_newlandsvalley$elm_abc_player$VexScore_Canonical$vexStave(vl.stave),
		A2(
			_elm_lang$core$Basics_ops['++'],
			_newlandsvalley$elm_abc_player$VexScore_Canonical$vexItems(vl.items),
			'\r\n'));
};
var _newlandsvalley$elm_abc_player$VexScore_Canonical$vexBodyPart = function (bp) {
	var _p17 = bp;
	if (_p17.ctor === 'VLine') {
		return _newlandsvalley$elm_abc_player$VexScore_Canonical$vexLine(_p17._0);
	} else {
		return '';
	}
};
var _newlandsvalley$elm_abc_player$VexScore_Canonical$toScoreText = function (score) {
	var f = F2(
		function (vl, acc) {
			return A2(
				_elm_lang$core$Basics_ops['++'],
				acc,
				_newlandsvalley$elm_abc_player$VexScore_Canonical$vexBodyPart(vl));
		});
	return A2(
		_elm_lang$core$Basics_ops['++'],
		_newlandsvalley$elm_abc_player$VexScore_Canonical$options,
		A3(_elm_lang$core$List$foldl, f, '', score));
};

var _newlandsvalley$elm_abc_player$AbcEditorController$cMajor = {
	ctor: '_Tuple2',
	_0: {pitchClass: _newlandsvalley$elm_abc_parser$Abc_ParseTree$C, accidental: _elm_lang$core$Maybe$Nothing, mode: _newlandsvalley$elm_abc_parser$Abc_ParseTree$Major},
	_1: {ctor: '[]'}
};
var _newlandsvalley$elm_abc_player$AbcEditorController$defaultToC = function (mks) {
	var _p0 = mks;
	if (_p0.ctor === 'Just') {
		return mks;
	} else {
		return _elm_lang$core$Maybe$Just(_newlandsvalley$elm_abc_player$AbcEditorController$cMajor);
	}
};
var _newlandsvalley$elm_abc_player$AbcEditorController$flatKey = F2(
	function (pc, m) {
		return {
			pitchClass: pc,
			accidental: _elm_lang$core$Maybe$Just(_newlandsvalley$elm_abc_parser$Abc_ParseTree$Flat),
			mode: m
		};
	});
var _newlandsvalley$elm_abc_player$AbcEditorController$sharpKey = F2(
	function (pc, m) {
		return {
			pitchClass: pc,
			accidental: _elm_lang$core$Maybe$Just(_newlandsvalley$elm_abc_parser$Abc_ParseTree$Sharp),
			mode: m
		};
	});
var _newlandsvalley$elm_abc_player$AbcEditorController$key = F2(
	function (pc, m) {
		return {pitchClass: pc, accidental: _elm_lang$core$Maybe$Nothing, mode: m};
	});
var _newlandsvalley$elm_abc_player$AbcEditorController$selectionStyle = _elm_lang$html$Html_Attributes$style(
	{
		ctor: '::',
		_0: {ctor: '_Tuple2', _0: 'margin-left', _1: '40px'},
		_1: {
			ctor: '::',
			_0: {ctor: '_Tuple2', _0: 'margin-top', _1: '20px'},
			_1: {
				ctor: '::',
				_0: {ctor: '_Tuple2', _0: 'font-size', _1: '1em'},
				_1: {ctor: '[]'}
			}
		}
	});
var _newlandsvalley$elm_abc_player$AbcEditorController$errorHighlightStyle = _elm_lang$html$Html_Attributes$style(
	{
		ctor: '::',
		_0: {ctor: '_Tuple2', _0: 'color', _1: 'red'},
		_1: {ctor: '[]'}
	});
var _newlandsvalley$elm_abc_player$AbcEditorController$fieldsetStyle = _elm_lang$html$Html_Attributes$style(
	{
		ctor: '::',
		_0: {ctor: '_Tuple2', _0: 'background-color', _1: '#f1f1f1'},
		_1: {
			ctor: '::',
			_0: {ctor: '_Tuple2', _0: 'border', _1: 'none'},
			_1: {
				ctor: '::',
				_0: {ctor: '_Tuple2', _0: 'border-radius', _1: '2px'},
				_1: {
					ctor: '::',
					_0: {ctor: '_Tuple2', _0: 'margin-bottom', _1: '12px'},
					_1: {
						ctor: '::',
						_0: {ctor: '_Tuple2', _0: 'padding', _1: '10px 10px 20px 10px'},
						_1: {
							ctor: '::',
							_0: {ctor: '_Tuple2', _0: 'display', _1: 'inline-block'},
							_1: {ctor: '[]'}
						}
					}
				}
			}
		}
	});
var _newlandsvalley$elm_abc_player$AbcEditorController$bStyle = F2(
	function (enabled, hasTopMargin) {
		var marginTop = hasTopMargin ? {
			ctor: '::',
			_0: {ctor: '_Tuple2', _0: 'margin-top', _1: '20px'},
			_1: {ctor: '[]'}
		} : {ctor: '[]'};
		var textSize = {
			ctor: '::',
			_0: {ctor: '_Tuple2', _0: 'font-size', _1: '1em'},
			_1: {ctor: '[]'}
		};
		var colour = enabled ? {ctor: '[]'} : {
			ctor: '::',
			_0: {ctor: '_Tuple2', _0: 'background-color', _1: 'lightgray'},
			_1: {
				ctor: '::',
				_0: {ctor: '_Tuple2', _0: 'color', _1: 'darkgrey'},
				_1: {ctor: '[]'}
			}
		};
		return _elm_lang$html$Html_Attributes$style(
			A2(
				_elm_lang$core$Basics_ops['++'],
				colour,
				A2(_elm_lang$core$Basics_ops['++'], textSize, marginTop)));
	});
var _newlandsvalley$elm_abc_player$AbcEditorController$buttonAttributes = F3(
	function (isEnabled, hasTopMargin, msg) {
		return {
			ctor: '::',
			_0: _elm_lang$html$Html_Attributes$class('hoverable'),
			_1: {
				ctor: '::',
				_0: A2(_newlandsvalley$elm_abc_player$AbcEditorController$bStyle, isEnabled, hasTopMargin),
				_1: {
					ctor: '::',
					_0: _elm_lang$html$Html_Events$onClick(msg),
					_1: {
						ctor: '::',
						_0: _elm_lang$html$Html_Attributes$disabled(!isEnabled),
						_1: {ctor: '[]'}
					}
				}
			}
		};
	});
var _newlandsvalley$elm_abc_player$AbcEditorController$menuErrorStyle = _elm_lang$html$Html_Attributes$style(
	{
		ctor: '::',
		_0: {ctor: '_Tuple2', _0: 'width', _1: '200px'},
		_1: {ctor: '[]'}
	});
var _newlandsvalley$elm_abc_player$AbcEditorController$sliderStyle = _elm_lang$html$Html_Attributes$style(
	{
		ctor: '::',
		_0: {ctor: '_Tuple2', _0: 'width', _1: '150px'},
		_1: {
			ctor: '::',
			_0: {ctor: '_Tuple2', _0: 'margin-left', _1: '40px'},
			_1: {ctor: '[]'}
		}
	});
var _newlandsvalley$elm_abc_player$AbcEditorController$rightPaneStyle = _elm_lang$html$Html_Attributes$style(
	{
		ctor: '::',
		_0: {ctor: '_Tuple2', _0: 'float', _1: 'left'},
		_1: {ctor: '[]'}
	});
var _newlandsvalley$elm_abc_player$AbcEditorController$leftPaneStyle = _elm_lang$html$Html_Attributes$style(
	{
		ctor: '::',
		_0: {ctor: '_Tuple2', _0: 'float', _1: 'left'},
		_1: {
			ctor: '::',
			_0: {ctor: '_Tuple2', _0: 'width', _1: '350px'},
			_1: {ctor: '[]'}
		}
	});
var _newlandsvalley$elm_abc_player$AbcEditorController$centreStyle = _elm_lang$html$Html_Attributes$style(
	{
		ctor: '::',
		_0: {ctor: '_Tuple2', _0: 'text-align', _1: 'center'},
		_1: {
			ctor: '::',
			_0: {ctor: '_Tuple2', _0: 'margin', _1: 'auto'},
			_1: {ctor: '[]'}
		}
	});
var _newlandsvalley$elm_abc_player$AbcEditorController$inputStyle = _elm_lang$html$Html_Attributes$style(
	{
		ctor: '::',
		_0: {ctor: '_Tuple2', _0: 'padding', _1: '10px 0'},
		_1: {
			ctor: '::',
			_0: {ctor: '_Tuple2', _0: 'font-size', _1: '1em'},
			_1: {
				ctor: '::',
				_0: {ctor: '_Tuple2', _0: 'margin-left', _1: '40px'},
				_1: {ctor: '[]'}
			}
		}
	});
var _newlandsvalley$elm_abc_player$AbcEditorController$leftPanelLabelStyle = _elm_lang$html$Html_Attributes$style(
	{
		ctor: '::',
		_0: {ctor: '_Tuple2', _0: 'margin-left', _1: '40px'},
		_1: {
			ctor: '::',
			_0: {ctor: '_Tuple2', _0: 'margin-top', _1: '40px'},
			_1: {
				ctor: '::',
				_0: {ctor: '_Tuple2', _0: 'font-size', _1: '1.2em'},
				_1: {ctor: '[]'}
			}
		}
	});
var _newlandsvalley$elm_abc_player$AbcEditorController$taStyle = _elm_lang$html$Html_Attributes$style(
	{
		ctor: '::',
		_0: {ctor: '_Tuple2', _0: 'padding', _1: '10px 0'},
		_1: {
			ctor: '::',
			_0: {ctor: '_Tuple2', _0: 'font-size', _1: '1.5em'},
			_1: {
				ctor: '::',
				_0: {ctor: '_Tuple2', _0: 'text-align', _1: 'left'},
				_1: {
					ctor: '::',
					_0: {ctor: '_Tuple2', _0: 'align', _1: 'center'},
					_1: {
						ctor: '::',
						_0: {ctor: '_Tuple2', _0: 'display', _1: 'block'},
						_1: {
							ctor: '::',
							_0: {ctor: '_Tuple2', _0: 'margin-left', _1: 'auto'},
							_1: {
								ctor: '::',
								_0: {ctor: '_Tuple2', _0: 'margin-right', _1: 'auto'},
								_1: {
									ctor: '::',
									_0: {ctor: '_Tuple2', _0: 'background-color', _1: '#f3f6c6'},
									_1: {
										ctor: '::',
										_0: {ctor: '_Tuple2', _0: 'font-family', _1: 'monospace'},
										_1: {ctor: '[]'}
									}
								}
							}
						}
					}
				}
			}
		}
	});
var _newlandsvalley$elm_abc_player$AbcEditorController$displayKeySig = function (ks) {
	var accidental = function () {
		var _p1 = ks.accidental;
		_v1_2:
		do {
			if (_p1.ctor === 'Just') {
				switch (_p1._0.ctor) {
					case 'Sharp':
						return '#';
					case 'Flat':
						return 'b';
					default:
						break _v1_2;
				}
			} else {
				break _v1_2;
			}
		} while(false);
		return '';
	}();
	return _elm_lang$html$Html$text(
		A2(
			_elm_lang$core$Basics_ops['++'],
			_elm_lang$core$Basics$toString(ks.pitchClass),
			A2(
				_elm_lang$core$Basics_ops['++'],
				accidental,
				A2(
					_elm_lang$core$Basics_ops['++'],
					' ',
					_elm_lang$core$Basics$toString(ks.mode)))));
};
var _newlandsvalley$elm_abc_player$AbcEditorController$selectedKey = F2(
	function (target, pattern) {
		var isMatched = _elm_lang$core$Native_Utils.eq(target.pitchClass, pattern.pitchClass) && _elm_lang$core$Native_Utils.eq(target.accidental, pattern.accidental);
		return _elm_lang$html$Html_Attributes$selected(isMatched);
	});
var _newlandsvalley$elm_abc_player$AbcEditorController$safeToInt = function (s) {
	return A2(
		_elm_lang$core$Result$withDefault,
		120,
		_elm_lang$core$String$toInt(s));
};
var _newlandsvalley$elm_abc_player$AbcEditorController$transpositionOptions = function (mks) {
	var ks = _elm_lang$core$Tuple$first(mks);
	var mode = ks.mode;
	var allModes = {
		ctor: '::',
		_0: A2(
			_elm_lang$html$Html$option,
			{
				ctor: '::',
				_0: A2(
					_newlandsvalley$elm_abc_player$AbcEditorController$selectedKey,
					ks,
					A2(_newlandsvalley$elm_abc_player$AbcEditorController$key, _newlandsvalley$elm_abc_parser$Abc_ParseTree$C, mode)),
				_1: {ctor: '[]'}
			},
			{
				ctor: '::',
				_0: _newlandsvalley$elm_abc_player$AbcEditorController$displayKeySig(
					A2(_newlandsvalley$elm_abc_player$AbcEditorController$key, _newlandsvalley$elm_abc_parser$Abc_ParseTree$C, mode)),
				_1: {ctor: '[]'}
			}),
		_1: {
			ctor: '::',
			_0: A2(
				_elm_lang$html$Html$option,
				{
					ctor: '::',
					_0: A2(
						_newlandsvalley$elm_abc_player$AbcEditorController$selectedKey,
						ks,
						A2(_newlandsvalley$elm_abc_player$AbcEditorController$key, _newlandsvalley$elm_abc_parser$Abc_ParseTree$D, mode)),
					_1: {ctor: '[]'}
				},
				{
					ctor: '::',
					_0: _newlandsvalley$elm_abc_player$AbcEditorController$displayKeySig(
						A2(_newlandsvalley$elm_abc_player$AbcEditorController$key, _newlandsvalley$elm_abc_parser$Abc_ParseTree$D, mode)),
					_1: {ctor: '[]'}
				}),
			_1: {
				ctor: '::',
				_0: A2(
					_elm_lang$html$Html$option,
					{
						ctor: '::',
						_0: A2(
							_newlandsvalley$elm_abc_player$AbcEditorController$selectedKey,
							ks,
							A2(_newlandsvalley$elm_abc_player$AbcEditorController$key, _newlandsvalley$elm_abc_parser$Abc_ParseTree$E, mode)),
						_1: {ctor: '[]'}
					},
					{
						ctor: '::',
						_0: _newlandsvalley$elm_abc_player$AbcEditorController$displayKeySig(
							A2(_newlandsvalley$elm_abc_player$AbcEditorController$key, _newlandsvalley$elm_abc_parser$Abc_ParseTree$E, mode)),
						_1: {ctor: '[]'}
					}),
				_1: {
					ctor: '::',
					_0: A2(
						_elm_lang$html$Html$option,
						{
							ctor: '::',
							_0: A2(
								_newlandsvalley$elm_abc_player$AbcEditorController$selectedKey,
								ks,
								A2(_newlandsvalley$elm_abc_player$AbcEditorController$key, _newlandsvalley$elm_abc_parser$Abc_ParseTree$F, mode)),
							_1: {ctor: '[]'}
						},
						{
							ctor: '::',
							_0: _newlandsvalley$elm_abc_player$AbcEditorController$displayKeySig(
								A2(_newlandsvalley$elm_abc_player$AbcEditorController$key, _newlandsvalley$elm_abc_parser$Abc_ParseTree$F, mode)),
							_1: {ctor: '[]'}
						}),
					_1: {
						ctor: '::',
						_0: A2(
							_elm_lang$html$Html$option,
							{
								ctor: '::',
								_0: A2(
									_newlandsvalley$elm_abc_player$AbcEditorController$selectedKey,
									ks,
									A2(_newlandsvalley$elm_abc_player$AbcEditorController$key, _newlandsvalley$elm_abc_parser$Abc_ParseTree$G, mode)),
								_1: {ctor: '[]'}
							},
							{
								ctor: '::',
								_0: _newlandsvalley$elm_abc_player$AbcEditorController$displayKeySig(
									A2(_newlandsvalley$elm_abc_player$AbcEditorController$key, _newlandsvalley$elm_abc_parser$Abc_ParseTree$G, mode)),
								_1: {ctor: '[]'}
							}),
						_1: {
							ctor: '::',
							_0: A2(
								_elm_lang$html$Html$option,
								{
									ctor: '::',
									_0: A2(
										_newlandsvalley$elm_abc_player$AbcEditorController$selectedKey,
										ks,
										A2(_newlandsvalley$elm_abc_player$AbcEditorController$key, _newlandsvalley$elm_abc_parser$Abc_ParseTree$A, mode)),
									_1: {ctor: '[]'}
								},
								{
									ctor: '::',
									_0: _newlandsvalley$elm_abc_player$AbcEditorController$displayKeySig(
										A2(_newlandsvalley$elm_abc_player$AbcEditorController$key, _newlandsvalley$elm_abc_parser$Abc_ParseTree$A, mode)),
									_1: {ctor: '[]'}
								}),
							_1: {
								ctor: '::',
								_0: A2(
									_elm_lang$html$Html$option,
									{
										ctor: '::',
										_0: A2(
											_newlandsvalley$elm_abc_player$AbcEditorController$selectedKey,
											ks,
											A2(_newlandsvalley$elm_abc_player$AbcEditorController$key, _newlandsvalley$elm_abc_parser$Abc_ParseTree$B, mode)),
										_1: {ctor: '[]'}
									},
									{
										ctor: '::',
										_0: _newlandsvalley$elm_abc_player$AbcEditorController$displayKeySig(
											A2(_newlandsvalley$elm_abc_player$AbcEditorController$key, _newlandsvalley$elm_abc_parser$Abc_ParseTree$B, mode)),
										_1: {ctor: '[]'}
									}),
								_1: {ctor: '[]'}
							}
						}
					}
				}
			}
		}
	};
	var majorMode = {
		ctor: '::',
		_0: A2(
			_elm_lang$html$Html$option,
			{
				ctor: '::',
				_0: A2(
					_newlandsvalley$elm_abc_player$AbcEditorController$selectedKey,
					ks,
					A2(_newlandsvalley$elm_abc_player$AbcEditorController$flatKey, _newlandsvalley$elm_abc_parser$Abc_ParseTree$B, _newlandsvalley$elm_abc_parser$Abc_ParseTree$Major)),
				_1: {ctor: '[]'}
			},
			{
				ctor: '::',
				_0: _newlandsvalley$elm_abc_player$AbcEditorController$displayKeySig(
					A2(_newlandsvalley$elm_abc_player$AbcEditorController$flatKey, _newlandsvalley$elm_abc_parser$Abc_ParseTree$B, _newlandsvalley$elm_abc_parser$Abc_ParseTree$Major)),
				_1: {ctor: '[]'}
			}),
		_1: {
			ctor: '::',
			_0: A2(
				_elm_lang$html$Html$option,
				{
					ctor: '::',
					_0: A2(
						_newlandsvalley$elm_abc_player$AbcEditorController$selectedKey,
						ks,
						A2(_newlandsvalley$elm_abc_player$AbcEditorController$flatKey, _newlandsvalley$elm_abc_parser$Abc_ParseTree$A, _newlandsvalley$elm_abc_parser$Abc_ParseTree$Major)),
					_1: {ctor: '[]'}
				},
				{
					ctor: '::',
					_0: _newlandsvalley$elm_abc_player$AbcEditorController$displayKeySig(
						A2(_newlandsvalley$elm_abc_player$AbcEditorController$flatKey, _newlandsvalley$elm_abc_parser$Abc_ParseTree$A, _newlandsvalley$elm_abc_parser$Abc_ParseTree$Major)),
					_1: {ctor: '[]'}
				}),
			_1: {
				ctor: '::',
				_0: A2(
					_elm_lang$html$Html$option,
					{
						ctor: '::',
						_0: A2(
							_newlandsvalley$elm_abc_player$AbcEditorController$selectedKey,
							ks,
							A2(_newlandsvalley$elm_abc_player$AbcEditorController$flatKey, _newlandsvalley$elm_abc_parser$Abc_ParseTree$E, _newlandsvalley$elm_abc_parser$Abc_ParseTree$Major)),
						_1: {ctor: '[]'}
					},
					{
						ctor: '::',
						_0: _newlandsvalley$elm_abc_player$AbcEditorController$displayKeySig(
							A2(_newlandsvalley$elm_abc_player$AbcEditorController$flatKey, _newlandsvalley$elm_abc_parser$Abc_ParseTree$E, _newlandsvalley$elm_abc_parser$Abc_ParseTree$Major)),
						_1: {ctor: '[]'}
					}),
				_1: {ctor: '[]'}
			}
		}
	};
	var minorMode = {
		ctor: '::',
		_0: A2(
			_elm_lang$html$Html$option,
			{
				ctor: '::',
				_0: A2(
					_newlandsvalley$elm_abc_player$AbcEditorController$selectedKey,
					ks,
					A2(_newlandsvalley$elm_abc_player$AbcEditorController$sharpKey, _newlandsvalley$elm_abc_parser$Abc_ParseTree$F, _newlandsvalley$elm_abc_parser$Abc_ParseTree$Minor)),
				_1: {ctor: '[]'}
			},
			{
				ctor: '::',
				_0: _newlandsvalley$elm_abc_player$AbcEditorController$displayKeySig(
					A2(_newlandsvalley$elm_abc_player$AbcEditorController$sharpKey, _newlandsvalley$elm_abc_parser$Abc_ParseTree$F, _newlandsvalley$elm_abc_parser$Abc_ParseTree$Minor)),
				_1: {ctor: '[]'}
			}),
		_1: {
			ctor: '::',
			_0: A2(
				_elm_lang$html$Html$option,
				{
					ctor: '::',
					_0: A2(
						_newlandsvalley$elm_abc_player$AbcEditorController$selectedKey,
						ks,
						A2(_newlandsvalley$elm_abc_player$AbcEditorController$sharpKey, _newlandsvalley$elm_abc_parser$Abc_ParseTree$C, _newlandsvalley$elm_abc_parser$Abc_ParseTree$Minor)),
					_1: {ctor: '[]'}
				},
				{
					ctor: '::',
					_0: _newlandsvalley$elm_abc_player$AbcEditorController$displayKeySig(
						A2(_newlandsvalley$elm_abc_player$AbcEditorController$sharpKey, _newlandsvalley$elm_abc_parser$Abc_ParseTree$C, _newlandsvalley$elm_abc_parser$Abc_ParseTree$Minor)),
					_1: {ctor: '[]'}
				}),
			_1: {
				ctor: '::',
				_0: A2(
					_elm_lang$html$Html$option,
					{
						ctor: '::',
						_0: A2(
							_newlandsvalley$elm_abc_player$AbcEditorController$selectedKey,
							ks,
							A2(_newlandsvalley$elm_abc_player$AbcEditorController$sharpKey, _newlandsvalley$elm_abc_parser$Abc_ParseTree$G, _newlandsvalley$elm_abc_parser$Abc_ParseTree$Minor)),
						_1: {ctor: '[]'}
					},
					{
						ctor: '::',
						_0: _newlandsvalley$elm_abc_player$AbcEditorController$displayKeySig(
							A2(_newlandsvalley$elm_abc_player$AbcEditorController$sharpKey, _newlandsvalley$elm_abc_parser$Abc_ParseTree$G, _newlandsvalley$elm_abc_parser$Abc_ParseTree$Minor)),
						_1: {ctor: '[]'}
					}),
				_1: {ctor: '[]'}
			}
		}
	};
	var _p2 = mode;
	switch (_p2.ctor) {
		case 'Major':
			return A2(_elm_lang$core$Basics_ops['++'], allModes, majorMode);
		case 'Minor':
			return A2(_elm_lang$core$Basics_ops['++'], allModes, minorMode);
		default:
			return allModes;
	}
};
var _newlandsvalley$elm_abc_player$AbcEditorController$isParseError = function (model) {
	var _p3 = model.tuneResult;
	if (_p3.ctor === 'Ok') {
		return false;
	} else {
		return true;
	}
};
var _newlandsvalley$elm_abc_player$AbcEditorController$hideScore = function (model) {
	var _p4 = model.vexTranslationState;
	if ((_p4.ctor === 'Translated') && (_p4._0.ctor === 'Nothing')) {
		return _elm_community$maybe_extra$Maybe_Extra$isJust(model.vextab.error) || _newlandsvalley$elm_abc_player$AbcEditorController$isParseError(model);
	} else {
		return true;
	}
};
var _newlandsvalley$elm_abc_player$AbcEditorController$viewError = function (m) {
	var textRange = 10;
	var tuneResult = m.tuneResult;
	var _p5 = tuneResult;
	if (_p5.ctor === 'Err') {
		var _p6 = _p5._0;
		if (_elm_lang$core$List$isEmpty(_p6.msgs)) {
			return _elm_lang$html$Html$text('');
		} else {
			var errorChar = A3(_elm_lang$core$String$slice, _p6.position, _p6.position + 1, m.abc);
			var endSuffix = A2(
				_elm_lang$core$Basics$min,
				(_p6.position + textRange) + 1,
				_elm_lang$core$String$length(m.abc));
			var startSuffix = A2(
				_elm_lang$core$Basics$min,
				_p6.position + 1,
				_elm_lang$core$String$length(m.abc));
			var errorSuffix = A3(_elm_lang$core$String$slice, startSuffix, endSuffix, m.abc);
			var startPhrase = A2(_elm_lang$core$Basics$max, _p6.position - textRange, 0);
			var errorPrefix = A2(
				_elm_lang$core$Basics_ops['++'],
				'error: ',
				A3(_elm_lang$core$String$slice, startPhrase, _p6.position, m.abc));
			return A2(
				_elm_lang$html$Html$p,
				{ctor: '[]'},
				{
					ctor: '::',
					_0: _elm_lang$html$Html$text(errorPrefix),
					_1: {
						ctor: '::',
						_0: A2(
							_elm_lang$html$Html$span,
							{
								ctor: '::',
								_0: _newlandsvalley$elm_abc_player$AbcEditorController$errorHighlightStyle,
								_1: {ctor: '[]'}
							},
							{
								ctor: '::',
								_0: _elm_lang$html$Html$text(errorChar),
								_1: {ctor: '[]'}
							}),
						_1: {
							ctor: '::',
							_0: _elm_lang$html$Html$text(errorSuffix),
							_1: {ctor: '[]'}
						}
					}
				});
		}
	} else {
		return _elm_lang$html$Html$text('');
	}
};
var _newlandsvalley$elm_abc_player$AbcEditorController$moveOctave = F2(
	function (movefn, model) {
		var _p7 = model.tuneResult;
		if (_p7.ctor === 'Ok') {
			var newTune = movefn(_p7._0);
			var newAbc = _newlandsvalley$elm_abc_parser$Abc_Canonical$fromTune(newTune);
			return _elm_lang$core$Native_Utils.update(
				model,
				{
					abc: newAbc,
					tuneResult: _elm_lang$core$Result$Ok(newTune)
				});
		} else {
			return model;
		}
	});
var _newlandsvalley$elm_abc_player$AbcEditorController$changeTempo = F2(
	function (bpm, model) {
		var _p8 = model.tuneResult;
		if (_p8.ctor === 'Ok') {
			var newTune = A2(_newlandsvalley$elm_abc_parser$Music_Tempo$setBpm, bpm, _p8._0);
			var newAbc = _newlandsvalley$elm_abc_parser$Abc_Canonical$fromTune(newTune);
			return _elm_lang$core$Native_Utils.update(
				model,
				{
					abc: newAbc,
					tuneResult: _elm_lang$core$Result$Ok(newTune)
				});
		} else {
			return model;
		}
	});
var _newlandsvalley$elm_abc_player$AbcEditorController$toMidiRecording = function (r) {
	return A2(
		_elm_lang$core$Result$map,
		_newlandsvalley$elm_abc_player$MidiPerformance$midiRecordingFromAbc(true),
		A2(
			_elm_lang$core$Result$mapError,
			function (_p9) {
				return 'some error or other';
			},
			r));
};
var _newlandsvalley$elm_abc_player$AbcEditorController$terminateLine = function (s) {
	return A2(_elm_lang$core$Basics_ops['++'], s, ' \r\n');
};
var _newlandsvalley$elm_abc_player$AbcEditorController$getFileName = function (m) {
	var _p10 = m.fileName;
	if (_p10.ctor === 'Just') {
		return _p10._0;
	} else {
		var _p11 = m.tuneResult;
		if (_p11.ctor === 'Ok') {
			return A2(
				_elm_lang$core$Basics_ops['++'],
				A2(
					_elm_lang$core$Maybe$withDefault,
					'untitled',
					_newlandsvalley$elm_abc_parser$Music_Notation$getTitle(_p11._0)),
				'.abc');
		} else {
			return 'untitled.abc';
		}
	}
};
var _newlandsvalley$elm_abc_player$AbcEditorController$defaultVexTabConfig = {canvasDivId: '#vextab', canvasX: 10, canvasY: 10, canvasWidth: 1200, scale: 0.8};
var _newlandsvalley$elm_abc_player$AbcEditorController$emptyTune = {
	ctor: '_Tuple2',
	_0: {ctor: '[]'},
	_1: {ctor: '[]'}
};
var _newlandsvalley$elm_abc_player$AbcEditorController$dummyError = {
	msgs: {ctor: '[]'},
	input: '',
	position: 0
};
var _newlandsvalley$elm_abc_player$AbcEditorController$transpose = F2(
	function (kstr, model) {
		var mksr = _newlandsvalley$elm_abc_parser$Abc$parseKeySignature(kstr);
		var _p12 = {ctor: '_Tuple2', _0: mksr, _1: model.tuneResult};
		if (((_p12.ctor === '_Tuple2') && (_p12._0.ctor === 'Ok')) && (_p12._1.ctor === 'Ok')) {
			var newTuneResult = A2(_newlandsvalley$elm_abc_parser$Music_Transposition$transposeTo, _p12._0._0, _p12._1._0);
			var newTRCorrectedErr = A2(
				_elm_lang$core$Result$mapError,
				function (_p13) {
					return _newlandsvalley$elm_abc_player$AbcEditorController$dummyError;
				},
				newTuneResult);
			var newAbcResult = _newlandsvalley$elm_abc_parser$Abc_Canonical$fromResult(newTuneResult);
			var _p14 = newAbcResult;
			if (_p14.ctor === 'Ok') {
				return _elm_lang$core$Native_Utils.update(
					model,
					{abc: _p14._0, tuneResult: newTRCorrectedErr});
			} else {
				return model;
			}
		} else {
			return model;
		}
	});
var _newlandsvalley$elm_abc_player$AbcEditorController$Model = F6(
	function (a, b, c, d, e, f) {
		return {abc: a, fileName: b, tuneResult: c, vexTranslationState: d, vextab: e, player: f};
	});
var _newlandsvalley$elm_abc_player$AbcEditorController$Translated = function (a) {
	return {ctor: 'Translated', _0: a};
};
var _newlandsvalley$elm_abc_player$AbcEditorController$Untranslated = {ctor: 'Untranslated'};
var _newlandsvalley$elm_abc_player$AbcEditorController$VexTabMsg = function (a) {
	return {ctor: 'VexTabMsg', _0: a};
};
var _newlandsvalley$elm_abc_player$AbcEditorController$TranslateToVex = {ctor: 'TranslateToVex'};
var _newlandsvalley$elm_abc_player$AbcEditorController$PlayerMsg = function (a) {
	return {ctor: 'PlayerMsg', _0: a};
};
var _newlandsvalley$elm_abc_player$AbcEditorController$init = function () {
	var _p15 = _newlandsvalley$elm_abc_player$VexTab$init(_newlandsvalley$elm_abc_player$AbcEditorController$defaultVexTabConfig);
	var vextabModel = _p15._0;
	var vextabCmd = _p15._1;
	var recording = _elm_lang$core$Result$Err('not started');
	var _p16 = _newlandsvalley$elm_abc_player$Midi_Player$init(recording);
	var player = _p16._0;
	var playerCmd = _p16._1;
	return A2(
		_elm_lang$core$Platform_Cmd_ops['!'],
		{
			abc: '',
			fileName: _elm_lang$core$Maybe$Nothing,
			tuneResult: _elm_lang$core$Result$Ok(_newlandsvalley$elm_abc_player$AbcEditorController$emptyTune),
			vexTranslationState: _newlandsvalley$elm_abc_player$AbcEditorController$Untranslated,
			vextab: vextabModel,
			player: player
		},
		{
			ctor: '::',
			_0: A2(_elm_lang$core$Platform_Cmd$map, _newlandsvalley$elm_abc_player$AbcEditorController$PlayerMsg, playerCmd),
			_1: {
				ctor: '::',
				_0: A2(_elm_lang$core$Platform_Cmd$map, _newlandsvalley$elm_abc_player$AbcEditorController$VexTabMsg, vextabCmd),
				_1: {ctor: '[]'}
			}
		});
}();
var _newlandsvalley$elm_abc_player$AbcEditorController$establishRecording = function (r) {
	var nullTask = _elm_lang$core$Task$succeed(
		function (_p17) {
			return {ctor: '_Tuple0'};
		});
	var midiRecording = _newlandsvalley$elm_abc_player$AbcEditorController$toMidiRecording(r);
	return A2(
		_elm_lang$core$Task$perform,
		function (_p18) {
			return _newlandsvalley$elm_abc_player$AbcEditorController$PlayerMsg(
				_newlandsvalley$elm_abc_player$Midi_Player$SetRecording(midiRecording));
		},
		nullTask);
};
var _newlandsvalley$elm_abc_player$AbcEditorController$FileLoaded = function (a) {
	return {ctor: 'FileLoaded', _0: a};
};
var _newlandsvalley$elm_abc_player$AbcEditorController$fileLoadedSub = _newlandsvalley$elm_abc_player$FileIO_Ports$fileLoaded(_newlandsvalley$elm_abc_player$AbcEditorController$FileLoaded);
var _newlandsvalley$elm_abc_player$AbcEditorController$subscriptions = function (model) {
	return _elm_lang$core$Platform_Sub$batch(
		{
			ctor: '::',
			_0: A2(
				_elm_lang$core$Platform_Sub$map,
				_newlandsvalley$elm_abc_player$AbcEditorController$PlayerMsg,
				_newlandsvalley$elm_abc_player$Midi_Player$subscriptions(model.player)),
			_1: {
				ctor: '::',
				_0: A2(
					_elm_lang$core$Platform_Sub$map,
					_newlandsvalley$elm_abc_player$AbcEditorController$VexTabMsg,
					_newlandsvalley$elm_abc_player$VexTab$subscriptions(model.vextab)),
				_1: {
					ctor: '::',
					_0: _newlandsvalley$elm_abc_player$AbcEditorController$fileLoadedSub,
					_1: {ctor: '[]'}
				}
			}
		});
};
var _newlandsvalley$elm_abc_player$AbcEditorController$RequestFileDownload = {ctor: 'RequestFileDownload'};
var _newlandsvalley$elm_abc_player$AbcEditorController$RequestFileUpload = {ctor: 'RequestFileUpload'};
var _newlandsvalley$elm_abc_player$AbcEditorController$EstablishRecording = function (a) {
	return {ctor: 'EstablishRecording', _0: a};
};
var _newlandsvalley$elm_abc_player$AbcEditorController$displayScoreAndPlayer = function (model) {
	var terminatedAbc = _newlandsvalley$elm_abc_player$AbcEditorController$terminateLine(model.abc);
	var tuneResult = _newlandsvalley$elm_abc_parser$Abc$parse(terminatedAbc);
	var newModel = _elm_lang$core$Native_Utils.update(
		model,
		{tuneResult: tuneResult});
	var _p19 = tuneResult;
	if (_p19.ctor === 'Ok') {
		var _p20 = A2(_newlandsvalley$elm_abc_player$AbcEditorController$update, _newlandsvalley$elm_abc_player$AbcEditorController$TranslateToVex, newModel);
		var model1 = _p20._0;
		var cmd1 = _p20._1;
		var _p21 = A2(
			_newlandsvalley$elm_abc_player$AbcEditorController$update,
			_newlandsvalley$elm_abc_player$AbcEditorController$EstablishRecording(tuneResult),
			model1);
		var model2 = _p21._0;
		var cmd2 = _p21._1;
		return A2(
			_elm_lang$core$Platform_Cmd_ops['!'],
			model2,
			{
				ctor: '::',
				_0: cmd1,
				_1: {
					ctor: '::',
					_0: cmd2,
					_1: {ctor: '[]'}
				}
			});
	} else {
		return A2(
			_newlandsvalley$elm_abc_player$AbcEditorController$update,
			_newlandsvalley$elm_abc_player$AbcEditorController$EstablishRecording(tuneResult),
			newModel);
	}
};
var _newlandsvalley$elm_abc_player$AbcEditorController$update = F2(
	function (msg, model) {
		var _p22 = msg;
		switch (_p22.ctor) {
			case 'NoOp':
				return {ctor: '_Tuple2', _0: model, _1: _elm_lang$core$Platform_Cmd$none};
			case 'Abc':
				var newModel = _elm_lang$core$Native_Utils.update(
					model,
					{abc: _p22._0});
				return _newlandsvalley$elm_abc_player$AbcEditorController$displayScoreAndPlayer(newModel);
			case 'Transpose':
				var newModel = A2(_newlandsvalley$elm_abc_player$AbcEditorController$transpose, _p22._0, model);
				return _newlandsvalley$elm_abc_player$AbcEditorController$displayScoreAndPlayer(newModel);
			case 'SetTempo':
				var newModel = A2(_newlandsvalley$elm_abc_player$AbcEditorController$changeTempo, _p22._0, model);
				return _newlandsvalley$elm_abc_player$AbcEditorController$displayScoreAndPlayer(newModel);
			case 'MoveOctave':
				var newModel = _p22._0 ? A2(_newlandsvalley$elm_abc_player$AbcEditorController$moveOctave, _newlandsvalley$elm_abc_parser$Music_Octave$up, model) : A2(_newlandsvalley$elm_abc_player$AbcEditorController$moveOctave, _newlandsvalley$elm_abc_parser$Music_Octave$down, model);
				return _newlandsvalley$elm_abc_player$AbcEditorController$displayScoreAndPlayer(newModel);
			case 'EstablishRecording':
				var _p23 = _p22._0;
				return {
					ctor: '_Tuple2',
					_0: _elm_lang$core$Native_Utils.update(
						model,
						{tuneResult: _p23}),
					_1: _newlandsvalley$elm_abc_player$AbcEditorController$establishRecording(_p23)
				};
			case 'RequestFileUpload':
				return {
					ctor: '_Tuple2',
					_0: model,
					_1: _newlandsvalley$elm_abc_player$FileIO_Ports$requestLoadFile(
						{ctor: '_Tuple0'})
				};
			case 'RequestFileDownload':
				var fileName = _newlandsvalley$elm_abc_player$AbcEditorController$getFileName(model);
				var filespec = A2(_newlandsvalley$elm_abc_player$FileIO_Ports$Filespec, model.abc, fileName);
				return {
					ctor: '_Tuple2',
					_0: model,
					_1: _newlandsvalley$elm_abc_player$FileIO_Ports$requestSaveFile(filespec)
				};
			case 'FileLoaded':
				var _p24 = _p22._0;
				if (_p24.ctor === 'Just') {
					var _p25 = _p24._0;
					var newModel = _elm_lang$core$Native_Utils.update(
						model,
						{
							abc: _p25.contents,
							fileName: _elm_lang$core$Maybe$Just(_p25.name)
						});
					return _newlandsvalley$elm_abc_player$AbcEditorController$displayScoreAndPlayer(newModel);
				} else {
					return {ctor: '_Tuple2', _0: model, _1: _elm_lang$core$Platform_Cmd$none};
				}
			case 'PlayerMsg':
				var _p26 = A2(_newlandsvalley$elm_abc_player$Midi_Player$update, _p22._0, model.player);
				var newPlayer = _p26._0;
				var cmd = _p26._1;
				return A2(
					_elm_lang$core$Platform_Cmd_ops['!'],
					_elm_lang$core$Native_Utils.update(
						model,
						{player: newPlayer}),
					{
						ctor: '::',
						_0: A2(_elm_lang$core$Platform_Cmd$map, _newlandsvalley$elm_abc_player$AbcEditorController$PlayerMsg, cmd),
						_1: {ctor: '[]'}
					});
			case 'VexTabMsg':
				var _p27 = A2(_newlandsvalley$elm_abc_player$VexTab$update, _p22._0, model.vextab);
				var newVextab = _p27._0;
				var cmd = _p27._1;
				return A2(
					_elm_lang$core$Platform_Cmd_ops['!'],
					_elm_lang$core$Native_Utils.update(
						model,
						{vextab: newVextab}),
					{
						ctor: '::',
						_0: A2(_elm_lang$core$Platform_Cmd$map, _newlandsvalley$elm_abc_player$AbcEditorController$VexTabMsg, cmd),
						_1: {ctor: '[]'}
					});
			default:
				var translationResult = function () {
					var _p28 = model.tuneResult;
					if (_p28.ctor === 'Ok') {
						return _newlandsvalley$elm_abc_player$VexScore_Translate$translate(_p28._0);
					} else {
						return _elm_lang$core$Result$Err('Can\'t produce a score after a parse error');
					}
				}();
				var _p29 = translationResult;
				if (_p29.ctor === 'Ok') {
					var _p30 = A2(
						_newlandsvalley$elm_abc_player$VexTab$update,
						_newlandsvalley$elm_abc_player$VexTab$RequestRenderScore(
							_newlandsvalley$elm_abc_player$VexScore_Canonical$toScoreText(_p29._0)),
						model.vextab);
					var newVextab = _p30._0;
					var cmd = _p30._1;
					return A2(
						_elm_lang$core$Platform_Cmd_ops['!'],
						_elm_lang$core$Native_Utils.update(
							model,
							{
								vextab: newVextab,
								vexTranslationState: _newlandsvalley$elm_abc_player$AbcEditorController$Translated(_elm_lang$core$Maybe$Nothing)
							}),
						{
							ctor: '::',
							_0: A2(_elm_lang$core$Platform_Cmd$map, _newlandsvalley$elm_abc_player$AbcEditorController$VexTabMsg, cmd),
							_1: {ctor: '[]'}
						});
				} else {
					return A2(
						_elm_lang$core$Platform_Cmd_ops['!'],
						_elm_lang$core$Native_Utils.update(
							model,
							{
								vexTranslationState: _newlandsvalley$elm_abc_player$AbcEditorController$Translated(
									_elm_lang$core$Maybe$Just(_p29._0))
							}),
						{
							ctor: '::',
							_0: _elm_lang$core$Platform_Cmd$none,
							_1: {ctor: '[]'}
						});
				}
		}
	});
var _newlandsvalley$elm_abc_player$AbcEditorController$MoveOctave = function (a) {
	return {ctor: 'MoveOctave', _0: a};
};
var _newlandsvalley$elm_abc_player$AbcEditorController$SetTempo = function (a) {
	return {ctor: 'SetTempo', _0: a};
};
var _newlandsvalley$elm_abc_player$AbcEditorController$tempoSlider = function (m) {
	var _p31 = m.tuneResult;
	if (_p31.ctor === 'Ok') {
		var playing = m.player.playbackState.playing;
		var bpm = _newlandsvalley$elm_abc_parser$Music_Tempo$getBpm(_p31._0);
		return A2(
			_elm_lang$html$Html$input,
			{
				ctor: '::',
				_0: _elm_lang$html$Html_Attributes$type_('range'),
				_1: {
					ctor: '::',
					_0: _newlandsvalley$elm_abc_player$AbcEditorController$sliderStyle,
					_1: {
						ctor: '::',
						_0: _elm_lang$html$Html_Attributes$min('10'),
						_1: {
							ctor: '::',
							_0: _elm_lang$html$Html_Attributes$max('300'),
							_1: {
								ctor: '::',
								_0: _elm_lang$html$Html_Attributes$value(
									_elm_lang$core$Basics$toString(bpm)),
								_1: {
									ctor: '::',
									_0: A2(
										_elm_lang$html$Html_Events$on,
										'change',
										A2(
											_elm_lang$core$Json_Decode$map,
											function (_p32) {
												return _newlandsvalley$elm_abc_player$AbcEditorController$SetTempo(
													_newlandsvalley$elm_abc_player$AbcEditorController$safeToInt(_p32));
											},
											_elm_lang$html$Html_Events$targetValue)),
									_1: {
										ctor: '::',
										_0: _elm_lang$html$Html_Events$onInput(
											function (_p33) {
												return _newlandsvalley$elm_abc_player$AbcEditorController$SetTempo(
													_newlandsvalley$elm_abc_player$AbcEditorController$safeToInt(_p33));
											}),
										_1: {
											ctor: '::',
											_0: _elm_lang$html$Html_Attributes$disabled(playing),
											_1: {ctor: '[]'}
										}
									}
								}
							}
						}
					}
				}
			},
			{ctor: '[]'});
	} else {
		return A2(
			_elm_lang$html$Html$input,
			{
				ctor: '::',
				_0: _elm_lang$html$Html_Attributes$type_('range'),
				_1: {
					ctor: '::',
					_0: _newlandsvalley$elm_abc_player$AbcEditorController$sliderStyle,
					_1: {
						ctor: '::',
						_0: _elm_lang$html$Html_Attributes$min('10'),
						_1: {
							ctor: '::',
							_0: _elm_lang$html$Html_Attributes$max('300'),
							_1: {
								ctor: '::',
								_0: _elm_lang$html$Html_Attributes$value('120'),
								_1: {
									ctor: '::',
									_0: _elm_lang$html$Html_Attributes$disabled(true),
									_1: {ctor: '[]'}
								}
							}
						}
					}
				}
			},
			{ctor: '[]'});
	}
};
var _newlandsvalley$elm_abc_player$AbcEditorController$Transpose = function (a) {
	return {ctor: 'Transpose', _0: a};
};
var _newlandsvalley$elm_abc_player$AbcEditorController$transpositionMenu = function (m) {
	var mKeySig = function () {
		var _p34 = m.tuneResult;
		if (_p34.ctor === 'Ok') {
			return _newlandsvalley$elm_abc_player$AbcEditorController$defaultToC(
				_newlandsvalley$elm_abc_parser$Music_Notation$getKeySig(_p34._0));
		} else {
			return _elm_lang$core$Maybe$Nothing;
		}
	}();
	var _p35 = mKeySig;
	if (_p35.ctor === 'Just') {
		return A2(
			_elm_lang$html$Html$select,
			{
				ctor: '::',
				_0: _newlandsvalley$elm_abc_player$AbcEditorController$selectionStyle,
				_1: {
					ctor: '::',
					_0: A2(
						_elm_lang$html$Html_Events$on,
						'change',
						A2(_elm_lang$core$Json_Decode$map, _newlandsvalley$elm_abc_player$AbcEditorController$Transpose, _elm_lang$html$Html_Events$targetValue)),
					_1: {ctor: '[]'}
				}
			},
			_newlandsvalley$elm_abc_player$AbcEditorController$transpositionOptions(_p35._0));
	} else {
		return A2(
			_elm_lang$html$Html$select,
			{
				ctor: '::',
				_0: _newlandsvalley$elm_abc_player$AbcEditorController$selectionStyle,
				_1: {ctor: '[]'}
			},
			{
				ctor: '::',
				_0: A2(
					_elm_lang$html$Html$option,
					{ctor: '[]'},
					{
						ctor: '::',
						_0: _elm_lang$html$Html$text('unavailable'),
						_1: {ctor: '[]'}
					}),
				_1: {ctor: '[]'}
			});
	}
};
var _newlandsvalley$elm_abc_player$AbcEditorController$Abc = function (a) {
	return {ctor: 'Abc', _0: a};
};
var _newlandsvalley$elm_abc_player$AbcEditorController$view = function (model) {
	var hasTopMargin = true;
	var enableButton = function () {
		var _p36 = model.tuneResult;
		if (_p36.ctor === 'Ok') {
			return true;
		} else {
			return false;
		}
	}();
	return A2(
		_elm_lang$html$Html$div,
		{ctor: '[]'},
		{
			ctor: '::',
			_0: A2(
				_elm_lang$html$Html$h1,
				{
					ctor: '::',
					_0: _newlandsvalley$elm_abc_player$AbcEditorController$centreStyle,
					_1: {ctor: '[]'}
				},
				{
					ctor: '::',
					_0: _elm_lang$html$Html$text('ABC Editor'),
					_1: {ctor: '[]'}
				}),
			_1: {
				ctor: '::',
				_0: A2(
					_elm_lang$html$Html$div,
					{
						ctor: '::',
						_0: _newlandsvalley$elm_abc_player$AbcEditorController$leftPaneStyle,
						_1: {ctor: '[]'}
					},
					{
						ctor: '::',
						_0: A2(
							_elm_lang$html$Html$span,
							{
								ctor: '::',
								_0: _newlandsvalley$elm_abc_player$AbcEditorController$leftPanelLabelStyle,
								_1: {ctor: '[]'}
							},
							{
								ctor: '::',
								_0: _elm_lang$html$Html$text('Load an ABC file:'),
								_1: {ctor: '[]'}
							}),
						_1: {
							ctor: '::',
							_0: A2(
								_elm_lang$html$Html$input,
								{
									ctor: '::',
									_0: _elm_lang$html$Html_Attributes$type_('file'),
									_1: {
										ctor: '::',
										_0: _elm_lang$html$Html_Attributes$id('fileinput'),
										_1: {
											ctor: '::',
											_0: _elm_lang$html$Html_Attributes$accept('.abc, .txt'),
											_1: {
												ctor: '::',
												_0: A2(
													_elm_lang$html$Html_Events$on,
													'change',
													_elm_lang$core$Json_Decode$succeed(_newlandsvalley$elm_abc_player$AbcEditorController$RequestFileUpload)),
												_1: {
													ctor: '::',
													_0: _newlandsvalley$elm_abc_player$AbcEditorController$inputStyle,
													_1: {ctor: '[]'}
												}
											}
										}
									}
								},
								{ctor: '[]'}),
							_1: {
								ctor: '::',
								_0: A2(
									_elm_lang$html$Html$span,
									{
										ctor: '::',
										_0: _newlandsvalley$elm_abc_player$AbcEditorController$leftPanelLabelStyle,
										_1: {ctor: '[]'}
									},
									{
										ctor: '::',
										_0: _elm_lang$html$Html$text('Save ABC to file:'),
										_1: {
											ctor: '::',
											_0: A2(
												_elm_lang$html$Html$button,
												A3(_newlandsvalley$elm_abc_player$AbcEditorController$buttonAttributes, true, false, _newlandsvalley$elm_abc_player$AbcEditorController$RequestFileDownload),
												{
													ctor: '::',
													_0: _elm_lang$html$Html$text('save'),
													_1: {ctor: '[]'}
												}),
											_1: {ctor: '[]'}
										}
									}),
								_1: {
									ctor: '::',
									_0: A2(
										_elm_lang$html$Html$span,
										{
											ctor: '::',
											_0: _newlandsvalley$elm_abc_player$AbcEditorController$leftPanelLabelStyle,
											_1: {ctor: '[]'}
										},
										{
											ctor: '::',
											_0: _elm_lang$html$Html$text('Tempo:'),
											_1: {
												ctor: '::',
												_0: _newlandsvalley$elm_abc_player$AbcEditorController$tempoSlider(model),
												_1: {ctor: '[]'}
											}
										}),
									_1: {
										ctor: '::',
										_0: A2(
											_elm_lang$html$Html$span,
											{
												ctor: '::',
												_0: _newlandsvalley$elm_abc_player$AbcEditorController$leftPanelLabelStyle,
												_1: {ctor: '[]'}
											},
											{
												ctor: '::',
												_0: _elm_lang$html$Html$text('Transpose to:'),
												_1: {
													ctor: '::',
													_0: _newlandsvalley$elm_abc_player$AbcEditorController$transpositionMenu(model),
													_1: {ctor: '[]'}
												}
											}),
										_1: {
											ctor: '::',
											_0: A2(
												_elm_lang$html$Html$span,
												{
													ctor: '::',
													_0: _newlandsvalley$elm_abc_player$AbcEditorController$leftPanelLabelStyle,
													_1: {ctor: '[]'}
												},
												{
													ctor: '::',
													_0: _elm_lang$html$Html$text('Move octave:'),
													_1: {
														ctor: '::',
														_0: A2(
															_elm_lang$html$Html$button,
															A3(
																_newlandsvalley$elm_abc_player$AbcEditorController$buttonAttributes,
																enableButton,
																hasTopMargin,
																_newlandsvalley$elm_abc_player$AbcEditorController$MoveOctave(true)),
															{
																ctor: '::',
																_0: _elm_lang$html$Html$text('up'),
																_1: {ctor: '[]'}
															}),
														_1: {
															ctor: '::',
															_0: A2(
																_elm_lang$html$Html$button,
																A3(
																	_newlandsvalley$elm_abc_player$AbcEditorController$buttonAttributes,
																	enableButton,
																	hasTopMargin,
																	_newlandsvalley$elm_abc_player$AbcEditorController$MoveOctave(false)),
																{
																	ctor: '::',
																	_0: _elm_lang$html$Html$text('down'),
																	_1: {ctor: '[]'}
																}),
															_1: {ctor: '[]'}
														}
													}
												}),
											_1: {ctor: '[]'}
										}
									}
								}
							}
						}
					}),
				_1: {
					ctor: '::',
					_0: A2(
						_elm_lang$html$Html$div,
						{
							ctor: '::',
							_0: _newlandsvalley$elm_abc_player$AbcEditorController$rightPaneStyle,
							_1: {ctor: '[]'}
						},
						{
							ctor: '::',
							_0: A2(
								_elm_lang$html$Html$fieldset,
								{
									ctor: '::',
									_0: _newlandsvalley$elm_abc_player$AbcEditorController$fieldsetStyle,
									_1: {ctor: '[]'}
								},
								{
									ctor: '::',
									_0: A2(
										_elm_lang$html$Html$textarea,
										{
											ctor: '::',
											_0: _elm_lang$html$Html_Attributes$placeholder('abc'),
											_1: {
												ctor: '::',
												_0: _elm_lang$html$Html_Attributes$defaultValue(model.abc),
												_1: {
													ctor: '::',
													_0: _elm_lang$html$Html_Events$onInput(_newlandsvalley$elm_abc_player$AbcEditorController$Abc),
													_1: {
														ctor: '::',
														_0: _newlandsvalley$elm_abc_player$AbcEditorController$taStyle,
														_1: {
															ctor: '::',
															_0: _elm_lang$html$Html_Attributes$cols(76),
															_1: {
																ctor: '::',
																_0: _elm_lang$html$Html_Attributes$rows(16),
																_1: {
																	ctor: '::',
																	_0: _elm_lang$html$Html_Attributes$autocomplete(false),
																	_1: {
																		ctor: '::',
																		_0: _elm_lang$html$Html_Attributes$spellcheck(false),
																		_1: {
																			ctor: '::',
																			_0: _elm_lang$html$Html_Attributes$autofocus(true),
																			_1: {ctor: '[]'}
																		}
																	}
																}
															}
														}
													}
												}
											}
										},
										{ctor: '[]'}),
									_1: {ctor: '[]'}
								}),
							_1: {
								ctor: '::',
								_0: A2(
									_elm_lang$html$Html$div,
									{ctor: '[]'},
									{
										ctor: '::',
										_0: A2(
											_elm_lang$html$Html$map,
											_newlandsvalley$elm_abc_player$AbcEditorController$PlayerMsg,
											_newlandsvalley$elm_abc_player$Midi_Player$view(model.player)),
										_1: {ctor: '[]'}
									}),
								_1: {
									ctor: '::',
									_0: A2(
										_elm_lang$html$Html$div,
										{ctor: '[]'},
										{
											ctor: '::',
											_0: A2(
												_elm_lang$html$Html$p,
												{ctor: '[]'},
												{
													ctor: '::',
													_0: _newlandsvalley$elm_abc_player$AbcEditorController$viewError(model),
													_1: {ctor: '[]'}
												}),
											_1: {ctor: '[]'}
										}),
									_1: {
										ctor: '::',
										_0: A2(
											_elm_lang$html$Html$div,
											{ctor: '[]'},
											{
												ctor: '::',
												_0: A2(
													_elm_lang$html$Html$canvas,
													{
														ctor: '::',
														_0: _elm_lang$html$Html_Attributes$id('vextab'),
														_1: {
															ctor: '::',
															_0: _elm_lang$html$Html_Attributes$hidden(
																_newlandsvalley$elm_abc_player$AbcEditorController$hideScore(model)),
															_1: {ctor: '[]'}
														}
													},
													{ctor: '[]'}),
												_1: {ctor: '[]'}
											}),
										_1: {ctor: '[]'}
									}
								}
							}
						}),
					_1: {ctor: '[]'}
				}
			}
		});
};
var _newlandsvalley$elm_abc_player$AbcEditorController$main = _elm_lang$html$Html$program(
	{init: _newlandsvalley$elm_abc_player$AbcEditorController$init, update: _newlandsvalley$elm_abc_player$AbcEditorController$update, view: _newlandsvalley$elm_abc_player$AbcEditorController$view, subscriptions: _newlandsvalley$elm_abc_player$AbcEditorController$subscriptions})();
var _newlandsvalley$elm_abc_player$AbcEditorController$NoOp = {ctor: 'NoOp'};

var Elm = {};
Elm['AbcEditorController'] = Elm['AbcEditorController'] || {};
if (typeof _newlandsvalley$elm_abc_player$AbcEditorController$main !== 'undefined') {
    _newlandsvalley$elm_abc_player$AbcEditorController$main(Elm['AbcEditorController'], 'AbcEditorController', undefined);
}

if (typeof define === "function" && define['amd'])
{
  define([], function() { return Elm; });
  return;
}

if (typeof module === "object")
{
  module['exports'] = Elm;
  return;
}

var globalElm = this['Elm'];
if (typeof globalElm === "undefined")
{
  this['Elm'] = Elm;
  return;
}

for (var publicModule in Elm)
{
  if (publicModule in globalElm)
  {
    throw new Error('There are two Elm modules called `' + publicModule + '` on this page! Rename one of them.');
  }
  globalElm[publicModule] = Elm[publicModule];
}

}).call(this);

