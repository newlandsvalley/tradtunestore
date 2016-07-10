
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

function eq(rootX, rootY)
{
	var stack = [{ x: rootX, y: rootY }];
	while (stack.length > 0)
	{
		var front = stack.pop();
		var x = front.x;
		var y = front.y;
		if (x === y)
		{
			continue;
		}
		if (typeof x === 'object')
		{
			var c = 0;
			for (var key in x)
			{
				++c;
				if (!(key in y))
				{
					return false;
				}
				if (key === 'ctor')
				{
					continue;
				}
				stack.push({ x: x[key], y: y[key] });
			}
			if ('ctor' in x)
			{
				stack.push({ x: x.ctor, y: y.ctor});
			}
			if (c !== Object.keys(y).length)
			{
				return false;
			}
		}
		else if (typeof x === 'function')
		{
			throw new Error('Equality error: general function equality is ' +
							'undecidable, and therefore, unsupported');
		}
		else
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
	var ord;
	if (typeof x !== 'object')
	{
		return x === y ? EQ : x < y ? LT : GT;
	}
	else if (x instanceof String)
	{
		var a = x.valueOf();
		var b = y.valueOf();
		return a === b
			? EQ
			: a < b
				? LT
				: GT;
	}
	else if (x.ctor === '::' || x.ctor === '[]')
	{
		while (true)
		{
			if (x.ctor === '[]' && y.ctor === '[]')
			{
				return EQ;
			}
			if (x.ctor !== y.ctor)
			{
				return x.ctor === '[]' ? LT : GT;
			}
			ord = cmp(x._0, y._0);
			if (ord !== EQ)
			{
				return ord;
			}
			x = x._1;
			y = y._1;
		}
	}
	else if (x.ctor.slice(0, 6) === '_Tuple')
	{
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
	else
	{
		throw new Error('Comparison error: comparison is only defined on ints, ' +
						'floats, times, chars, strings, lists of comparable values, ' +
						'and tuples of comparable values.');
	}
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
		var value = (key in updatedFields) ? updatedFields[key] : oldRecord[key];
		newRecord[key] = value;
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

		if (v.ctor === 'RBNode_elm_builtin' || v.ctor === 'RBEmpty_elm_builtin' || v.ctor === 'Set_elm_builtin')
		{
			var name, list;
			if (v.ctor === 'Set_elm_builtin')
			{
				name = 'Set';
				list = A2(
					_elm_lang$core$List$map,
					function(x) {return x._0; },
					_elm_lang$core$Dict$toList(v._0)
				);
			}
			else
			{
				name = 'Dict';
				list = _elm_lang$core$Dict$toList(v);
			}
			return name + '.fromList ' + toString(list);
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
var _elm_lang$core$Basics$uncurry = F2(
	function (f, _p0) {
		var _p1 = _p0;
		return A2(f, _p1._0, _p1._1);
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
var _elm_lang$core$Basics$snd = function (_p2) {
	var _p3 = _p2;
	return _p3._1;
};
var _elm_lang$core$Basics$fst = function (_p4) {
	var _p5 = _p4;
	return _p5._0;
};
var _elm_lang$core$Basics$always = F2(
	function (a, _p6) {
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
var _elm_lang$core$Basics$Never = function (a) {
	return {ctor: 'Never', _0: a};
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
var _elm_lang$core$Maybe$oneOf = function (maybes) {
	oneOf:
	while (true) {
		var _p1 = maybes;
		if (_p1.ctor === '[]') {
			return _elm_lang$core$Maybe$Nothing;
		} else {
			var _p3 = _p1._0;
			var _p2 = _p3;
			if (_p2.ctor === 'Nothing') {
				var _v3 = _p1._1;
				maybes = _v3;
				continue oneOf;
			} else {
				return _p3;
			}
		}
	}
};
var _elm_lang$core$Maybe$andThen = F2(
	function (maybeValue, callback) {
		var _p4 = maybeValue;
		if (_p4.ctor === 'Just') {
			return callback(_p4._0);
		} else {
			return _elm_lang$core$Maybe$Nothing;
		}
	});
var _elm_lang$core$Maybe$Just = function (a) {
	return {ctor: 'Just', _0: a};
};
var _elm_lang$core$Maybe$map = F2(
	function (f, maybe) {
		var _p5 = maybe;
		if (_p5.ctor === 'Just') {
			return _elm_lang$core$Maybe$Just(
				f(_p5._0));
		} else {
			return _elm_lang$core$Maybe$Nothing;
		}
	});
var _elm_lang$core$Maybe$map2 = F3(
	function (func, ma, mb) {
		var _p6 = {ctor: '_Tuple2', _0: ma, _1: mb};
		if (((_p6.ctor === '_Tuple2') && (_p6._0.ctor === 'Just')) && (_p6._1.ctor === 'Just')) {
			return _elm_lang$core$Maybe$Just(
				A2(func, _p6._0._0, _p6._1._0));
		} else {
			return _elm_lang$core$Maybe$Nothing;
		}
	});
var _elm_lang$core$Maybe$map3 = F4(
	function (func, ma, mb, mc) {
		var _p7 = {ctor: '_Tuple3', _0: ma, _1: mb, _2: mc};
		if ((((_p7.ctor === '_Tuple3') && (_p7._0.ctor === 'Just')) && (_p7._1.ctor === 'Just')) && (_p7._2.ctor === 'Just')) {
			return _elm_lang$core$Maybe$Just(
				A3(func, _p7._0._0, _p7._1._0, _p7._2._0));
		} else {
			return _elm_lang$core$Maybe$Nothing;
		}
	});
var _elm_lang$core$Maybe$map4 = F5(
	function (func, ma, mb, mc, md) {
		var _p8 = {ctor: '_Tuple4', _0: ma, _1: mb, _2: mc, _3: md};
		if (((((_p8.ctor === '_Tuple4') && (_p8._0.ctor === 'Just')) && (_p8._1.ctor === 'Just')) && (_p8._2.ctor === 'Just')) && (_p8._3.ctor === 'Just')) {
			return _elm_lang$core$Maybe$Just(
				A4(func, _p8._0._0, _p8._1._0, _p8._2._0, _p8._3._0));
		} else {
			return _elm_lang$core$Maybe$Nothing;
		}
	});
var _elm_lang$core$Maybe$map5 = F6(
	function (func, ma, mb, mc, md, me) {
		var _p9 = {ctor: '_Tuple5', _0: ma, _1: mb, _2: mc, _3: md, _4: me};
		if ((((((_p9.ctor === '_Tuple5') && (_p9._0.ctor === 'Just')) && (_p9._1.ctor === 'Just')) && (_p9._2.ctor === 'Just')) && (_p9._3.ctor === 'Just')) && (_p9._4.ctor === 'Just')) {
			return _elm_lang$core$Maybe$Just(
				A5(func, _p9._0._0, _p9._1._0, _p9._2._0, _p9._3._0, _p9._4._0));
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


function range(lo, hi)
{
	var list = Nil;
	if (lo <= hi)
	{
		do
		{
			list = Cons(hi, list);
		}
		while (hi-- > lo);
	}
	return list;
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
	range: range,

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
		return _elm_lang$core$Basics$not(
			A2(
				_elm_lang$core$List$any,
				function (_p2) {
					return _elm_lang$core$Basics$not(
						isOkay(_p2));
				},
				list));
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
var _elm_lang$core$List$indexedMap = F2(
	function (f, xs) {
		return A3(
			_elm_lang$core$List$map2,
			f,
			_elm_lang$core$Native_List.range(
				0,
				_elm_lang$core$List$length(xs) - 1),
			xs);
	});
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
					return A2(
						_elm_lang$core$List_ops['::'],
						f(x),
						acc);
				}),
			_elm_lang$core$Native_List.fromArray(
				[]),
			xs);
	});
var _elm_lang$core$List$filter = F2(
	function (pred, xs) {
		var conditionalCons = F2(
			function (x, xs$) {
				return pred(x) ? A2(_elm_lang$core$List_ops['::'], x, xs$) : xs$;
			});
		return A3(
			_elm_lang$core$List$foldr,
			conditionalCons,
			_elm_lang$core$Native_List.fromArray(
				[]),
			xs);
	});
var _elm_lang$core$List$maybeCons = F3(
	function (f, mx, xs) {
		var _p10 = f(mx);
		if (_p10.ctor === 'Just') {
			return A2(_elm_lang$core$List_ops['::'], _p10._0, xs);
		} else {
			return xs;
		}
	});
var _elm_lang$core$List$filterMap = F2(
	function (f, xs) {
		return A3(
			_elm_lang$core$List$foldr,
			_elm_lang$core$List$maybeCons(f),
			_elm_lang$core$Native_List.fromArray(
				[]),
			xs);
	});
var _elm_lang$core$List$reverse = function (list) {
	return A3(
		_elm_lang$core$List$foldl,
		F2(
			function (x, y) {
				return A2(_elm_lang$core$List_ops['::'], x, y);
			}),
		_elm_lang$core$Native_List.fromArray(
			[]),
		list);
};
var _elm_lang$core$List$scanl = F3(
	function (f, b, xs) {
		var scan1 = F2(
			function (x, accAcc) {
				var _p11 = accAcc;
				if (_p11.ctor === '::') {
					return A2(
						_elm_lang$core$List_ops['::'],
						A2(f, x, _p11._0),
						accAcc);
				} else {
					return _elm_lang$core$Native_List.fromArray(
						[]);
				}
			});
		return _elm_lang$core$List$reverse(
			A3(
				_elm_lang$core$List$foldl,
				scan1,
				_elm_lang$core$Native_List.fromArray(
					[b]),
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
						return A2(_elm_lang$core$List_ops['::'], x, y);
					}),
				ys,
				xs);
		}
	});
var _elm_lang$core$List$concat = function (lists) {
	return A3(
		_elm_lang$core$List$foldr,
		_elm_lang$core$List$append,
		_elm_lang$core$Native_List.fromArray(
			[]),
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
					_0: A2(_elm_lang$core$List_ops['::'], x, _p16),
					_1: _p15
				} : {
					ctor: '_Tuple2',
					_0: _p16,
					_1: A2(_elm_lang$core$List_ops['::'], x, _p15)
				};
			});
		return A3(
			_elm_lang$core$List$foldr,
			step,
			{
				ctor: '_Tuple2',
				_0: _elm_lang$core$Native_List.fromArray(
					[]),
				_1: _elm_lang$core$Native_List.fromArray(
					[])
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
				_0: A2(_elm_lang$core$List_ops['::'], _p19._0, _p20._0),
				_1: A2(_elm_lang$core$List_ops['::'], _p19._1, _p20._1)
			};
		});
	return A3(
		_elm_lang$core$List$foldr,
		step,
		{
			ctor: '_Tuple2',
			_0: _elm_lang$core$Native_List.fromArray(
				[]),
			_1: _elm_lang$core$Native_List.fromArray(
				[])
		},
		pairs);
};
var _elm_lang$core$List$intersperse = F2(
	function (sep, xs) {
		var _p21 = xs;
		if (_p21.ctor === '[]') {
			return _elm_lang$core$Native_List.fromArray(
				[]);
		} else {
			var step = F2(
				function (x, rest) {
					return A2(
						_elm_lang$core$List_ops['::'],
						sep,
						A2(_elm_lang$core$List_ops['::'], x, rest));
				});
			var spersed = A3(
				_elm_lang$core$List$foldr,
				step,
				_elm_lang$core$Native_List.fromArray(
					[]),
				_p21._1);
			return A2(_elm_lang$core$List_ops['::'], _p21._0, spersed);
		}
	});
var _elm_lang$core$List$take = F2(
	function (n, list) {
		if (_elm_lang$core$Native_Utils.cmp(n, 0) < 1) {
			return _elm_lang$core$Native_List.fromArray(
				[]);
		} else {
			var _p22 = list;
			if (_p22.ctor === '[]') {
				return list;
			} else {
				return A2(
					_elm_lang$core$List_ops['::'],
					_p22._0,
					A2(_elm_lang$core$List$take, n - 1, _p22._1));
			}
		}
	});
var _elm_lang$core$List$repeatHelp = F3(
	function (result, n, value) {
		repeatHelp:
		while (true) {
			if (_elm_lang$core$Native_Utils.cmp(n, 0) < 1) {
				return result;
			} else {
				var _v23 = A2(_elm_lang$core$List_ops['::'], value, result),
					_v24 = n - 1,
					_v25 = value;
				result = _v23;
				n = _v24;
				value = _v25;
				continue repeatHelp;
			}
		}
	});
var _elm_lang$core$List$repeat = F2(
	function (n, value) {
		return A3(
			_elm_lang$core$List$repeatHelp,
			_elm_lang$core$Native_List.fromArray(
				[]),
			n,
			value);
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
	function (result, callback) {
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
var _elm_lang$core$Result$formatError = F2(
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

//import //

var _elm_lang$core$Native_Platform = function() {


// PROGRAMS

function addPublicModule(object, name, main)
{
	var init = main ? makeEmbed(name, main) : mainIsUndefined(name);

	object['worker'] = function worker(flags)
	{
		return init(undefined, flags, false);
	}

	object['embed'] = function embed(domNode, flags)
	{
		return init(domNode, flags, true);
	}

	object['fullscreen'] = function fullscreen(flags)
	{
		return init(document.body, flags, true);
	};
}


// PROGRAM FAIL

function mainIsUndefined(name)
{
	return function(domNode)
	{
		var message = 'Cannot initialize module `' + name +
			'` because it has no `main` value!\nWhat should I show on screen?';
		domNode.innerHTML = errorHtml(message);
		throw new Error(message);
	};
}

function errorHtml(message)
{
	return '<div style="padding-left:1em;">'
		+ '<h2 style="font-weight:normal;"><b>Oops!</b> Something went wrong when starting your Elm program.</h2>'
		+ '<pre style="padding-left:1em;">' + message + '</pre>'
		+ '</div>';
}


// PROGRAM SUCCESS

function makeEmbed(moduleName, main)
{
	return function embed(rootDomNode, flags, withRenderer)
	{
		try
		{
			var program = mainToProgram(moduleName, main);
			if (!withRenderer)
			{
				program.renderer = dummyRenderer;
			}
			return makeEmbedHelp(moduleName, program, rootDomNode, flags);
		}
		catch (e)
		{
			rootDomNode.innerHTML = errorHtml(e.message);
			throw e;
		}
	};
}

function dummyRenderer()
{
	return { update: function() {} };
}


// MAIN TO PROGRAM

function mainToProgram(moduleName, wrappedMain)
{
	var main = wrappedMain.main;

	if (typeof main.init === 'undefined')
	{
		var emptyBag = batch(_elm_lang$core$Native_List.Nil);
		var noChange = _elm_lang$core$Native_Utils.Tuple2(
			_elm_lang$core$Native_Utils.Tuple0,
			emptyBag
		);

		return _elm_lang$virtual_dom$VirtualDom$programWithFlags({
			init: function() { return noChange; },
			view: function() { return main; },
			update: F2(function() { return noChange; }),
			subscriptions: function () { return emptyBag; }
		});
	}

	var flags = wrappedMain.flags;
	var init = flags
		? initWithFlags(moduleName, main.init, flags)
		: initWithoutFlags(moduleName, main.init);

	return _elm_lang$virtual_dom$VirtualDom$programWithFlags({
		init: init,
		view: main.view,
		update: main.update,
		subscriptions: main.subscriptions,
	});
}

function initWithoutFlags(moduleName, realInit)
{
	return function init(flags)
	{
		if (typeof flags !== 'undefined')
		{
			throw new Error(
				'You are giving module `' + moduleName + '` an argument in JavaScript.\n'
				+ 'This module does not take arguments though! You probably need to change the\n'
				+ 'initialization code to something like `Elm.' + moduleName + '.fullscreen()`'
			);
		}
		return realInit();
	};
}

function initWithFlags(moduleName, realInit, flagDecoder)
{
	return function init(flags)
	{
		var result = A2(_elm_lang$core$Native_Json.run, flagDecoder, flags);
		if (result.ctor === 'Err')
		{
			throw new Error(
				'You are trying to initialize module `' + moduleName + '` with an unexpected argument.\n'
				+ 'When trying to convert it to a usable Elm value, I run into this problem:\n\n'
				+ result._0
			);
		}
		return realInit(result._0);
	};
}


// SETUP RUNTIME SYSTEM

function makeEmbedHelp(moduleName, program, rootDomNode, flags)
{
	var init = program.init;
	var update = program.update;
	var subscriptions = program.subscriptions;
	var view = program.view;
	var makeRenderer = program.renderer;

	// ambient state
	var managers = {};
	var renderer;

	// init and update state in main process
	var initApp = _elm_lang$core$Native_Scheduler.nativeBinding(function(callback) {
		var results = init(flags);
		var model = results._0;
		renderer = makeRenderer(rootDomNode, enqueue, view(model));
		var cmds = results._1;
		var subs = subscriptions(model);
		dispatchEffects(managers, cmds, subs);
		callback(_elm_lang$core$Native_Scheduler.succeed(model));
	});

	function onMessage(msg, model)
	{
		return _elm_lang$core$Native_Scheduler.nativeBinding(function(callback) {
			var results = A2(update, msg, model);
			model = results._0;
			renderer.update(view(model));
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
		return A2(andThen, handleMsg, loop);
	}

	var task = A2(andThen, init, loop);

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
			var value = converter(cmdList._0);
			for (var i = 0; i < subs.length; i++)
			{
				subs[i](value);
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
	var subs = _elm_lang$core$Native_List.Nil;
	var converter = effectManagers[name].converter;

	// CREATE MANAGER

	var init = _elm_lang$core$Native_Scheduler.succeed(null);

	function onEffects(router, subList, state)
	{
		subs = subList;
		return init;
	}

	effectManagers[name].init = init;
	effectManagers[name].onEffects = F3(onEffects);

	// PUBLIC API

	function send(value)
	{
		var result = A2(_elm_lang$core$Json_Decode$decodeValue, converter, value);
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

	return { send: send };
}

return {
	// routers
	sendToApp: F2(sendToApp),
	sendToSelf: F2(sendToSelf),

	// global setup
	mainToProgram: mainToProgram,
	effectManagers: effectManagers,
	outgoingPort: outgoingPort,
	incomingPort: incomingPort,
	addPublicModule: addPublicModule,

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

function andThen(task, callback)
{
	return {
		ctor: '_Task_andThen',
		task: task,
		callback: callback
	};
}

function onError(task, callback)
{
	return {
		ctor: '_Task_onError',
		task: task,
		callback: callback
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
		numSteps = step(numSteps, process);
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
var _elm_lang$core$Platform$hack = _elm_lang$core$Native_Scheduler.succeed;
var _elm_lang$core$Platform$sendToSelf = _elm_lang$core$Native_Platform.sendToSelf;
var _elm_lang$core$Platform$sendToApp = _elm_lang$core$Native_Platform.sendToApp;
var _elm_lang$core$Platform$Program = {ctor: 'Program'};
var _elm_lang$core$Platform$Task = {ctor: 'Task'};
var _elm_lang$core$Platform$ProcessId = {ctor: 'ProcessId'};
var _elm_lang$core$Platform$Router = {ctor: 'Router'};

var _elm_lang$core$Platform_Cmd$batch = _elm_lang$core$Native_Platform.batch;
var _elm_lang$core$Platform_Cmd$none = _elm_lang$core$Platform_Cmd$batch(
	_elm_lang$core$Native_List.fromArray(
		[]));
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
	_elm_lang$core$Native_List.fromArray(
		[]));
var _elm_lang$core$Platform_Sub$map = _elm_lang$core$Native_Platform.map;
var _elm_lang$core$Platform_Sub$Sub = {ctor: 'Sub'};

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
	function (a, callback) {
		return _elm_lang$lazy$Lazy$lazy(
			function (_p14) {
				var _p15 = _p14;
				return _elm_lang$lazy$Lazy$force(
					callback(
						_elm_lang$lazy$Lazy$force(a)));
			});
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
			index: arguments[i - 1],
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
	while (n--)
	{
		if (!(result = re.exec(string))) break;
		out.push(string.slice(start, result.index));
		start = re.lastIndex;
	}
	out.push(string.slice(start));
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
var _Bogdanp$elm_combine$Combine$parse = F2(
	function (p, input) {
		return A2(
			_Bogdanp$elm_combine$Combine$app,
			p,
			{input: input, position: 0});
	});
var _Bogdanp$elm_combine$Combine$Context = F2(
	function (a, b) {
		return {input: a, position: b};
	});
var _Bogdanp$elm_combine$Combine$RecursiveParser = function (a) {
	return {ctor: 'RecursiveParser', _0: a};
};
var _Bogdanp$elm_combine$Combine$rec = function (t) {
	return _Bogdanp$elm_combine$Combine$RecursiveParser(
		_elm_lang$lazy$Lazy$lazy(
			function (_p1) {
				var _p2 = _p1;
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
			function (cx) {
				var _p3 = A2(_Bogdanp$elm_combine$Combine$app, p, cx);
				if (_p3._0.ctor === 'Ok') {
					return {
						ctor: '_Tuple2',
						_0: _elm_lang$core$Result$Ok(
							fok(_p3._0._0)),
						_1: _p3._1
					};
				} else {
					return {
						ctor: '_Tuple2',
						_0: _elm_lang$core$Result$Err(
							ferr(_p3._0._0)),
						_1: _p3._1
					};
				}
			});
	});
var _Bogdanp$elm_combine$Combine$map = F2(
	function (f, p) {
		return A3(_Bogdanp$elm_combine$Combine$bimap, f, _elm_lang$core$Basics$identity, p);
	});
var _Bogdanp$elm_combine$Combine$mapError = _Bogdanp$elm_combine$Combine$bimap(_elm_lang$core$Basics$identity);
var _Bogdanp$elm_combine$Combine$andThen = F2(
	function (p, f) {
		return _Bogdanp$elm_combine$Combine$Parser(
			function (cx) {
				var _p4 = A2(_Bogdanp$elm_combine$Combine$app, p, cx);
				if (_p4._0.ctor === 'Ok') {
					return A2(
						_Bogdanp$elm_combine$Combine$app,
						f(_p4._0._0),
						_p4._1);
				} else {
					return {
						ctor: '_Tuple2',
						_0: _elm_lang$core$Result$Err(_p4._0._0),
						_1: _p4._1
					};
				}
			});
	});
var _Bogdanp$elm_combine$Combine$sequence = function (ps) {
	var accumulate = F3(
		function (acc, ps, cx) {
			accumulate:
			while (true) {
				var _p5 = ps;
				if (_p5.ctor === '[]') {
					return {
						ctor: '_Tuple2',
						_0: _elm_lang$core$Result$Ok(
							_elm_lang$core$List$reverse(acc)),
						_1: cx
					};
				} else {
					var _p6 = A2(_Bogdanp$elm_combine$Combine$app, _p5._0, cx);
					if (_p6._0.ctor === 'Ok') {
						var _v6 = A2(_elm_lang$core$List_ops['::'], _p6._0._0, acc),
							_v7 = _p5._1,
							_v8 = _p6._1;
						acc = _v6;
						ps = _v7;
						cx = _v8;
						continue accumulate;
					} else {
						return {
							ctor: '_Tuple2',
							_0: _elm_lang$core$Result$Err(_p6._0._0),
							_1: _p6._1
						};
					}
				}
			}
		});
	return _Bogdanp$elm_combine$Combine$Parser(
		function (cx) {
			return A3(
				accumulate,
				_elm_lang$core$Native_List.fromArray(
					[]),
				ps,
				cx);
		});
};
var _Bogdanp$elm_combine$Combine$fail = function (ms) {
	return _Bogdanp$elm_combine$Combine$Parser(
		function (cx) {
			return {
				ctor: '_Tuple2',
				_0: _elm_lang$core$Result$Err(ms),
				_1: cx
			};
		});
};
var _Bogdanp$elm_combine$Combine$succeed = function (r) {
	return _Bogdanp$elm_combine$Combine$Parser(
		function (cx) {
			return {
				ctor: '_Tuple2',
				_0: _elm_lang$core$Result$Ok(r),
				_1: cx
			};
		});
};
var _Bogdanp$elm_combine$Combine$andMap = F2(
	function (lp, rp) {
		return A2(
			_Bogdanp$elm_combine$Combine$andThen,
			lp,
			function (f) {
				return A2(
					_Bogdanp$elm_combine$Combine$andThen,
					rp,
					function (x) {
						return _Bogdanp$elm_combine$Combine$succeed(
							f(x));
					});
			});
	});
var _Bogdanp$elm_combine$Combine$between = F3(
	function (lp, rp, p) {
		return A2(
			_Bogdanp$elm_combine$Combine$andMap,
			A2(
				_Bogdanp$elm_combine$Combine$andMap,
				A2(
					_Bogdanp$elm_combine$Combine$map,
					_elm_lang$core$Basics$flip(
						function (_p7) {
							return _elm_lang$core$Basics$always(
								_elm_lang$core$Basics$always(_p7));
						}),
					lp),
				p),
			rp);
	});
var _Bogdanp$elm_combine$Combine$skip = function (p) {
	return A2(
		_Bogdanp$elm_combine$Combine$andThen,
		p,
		_elm_lang$core$Basics$always(
			_Bogdanp$elm_combine$Combine$succeed(
				{ctor: '_Tuple0'})));
};
var _Bogdanp$elm_combine$Combine$count = F2(
	function (n, p) {
		var accumulate = F2(
			function (x, acc) {
				return (_elm_lang$core$Native_Utils.cmp(x, 0) < 1) ? _Bogdanp$elm_combine$Combine$succeed(
					_elm_lang$core$List$reverse(acc)) : A2(
					_Bogdanp$elm_combine$Combine$andThen,
					p,
					function (res) {
						return A2(
							accumulate,
							x - 1,
							A2(_elm_lang$core$List_ops['::'], res, acc));
					});
			});
		return A2(
			accumulate,
			n,
			_elm_lang$core$Native_List.fromArray(
				[]));
	});
var _Bogdanp$elm_combine$Combine$string = function (s) {
	return _Bogdanp$elm_combine$Combine$Parser(
		function (cx) {
			if (A2(_elm_lang$core$String$startsWith, s, cx.input)) {
				var len = _elm_lang$core$String$length(s);
				var rem = A2(_elm_lang$core$String$dropLeft, len, cx.input);
				var pos = cx.position + len;
				return {
					ctor: '_Tuple2',
					_0: _elm_lang$core$Result$Ok(s),
					_1: _elm_lang$core$Native_Utils.update(
						cx,
						{input: rem, position: pos})
				};
			} else {
				return {
					ctor: '_Tuple2',
					_0: _elm_lang$core$Result$Err(
						_elm_lang$core$Native_List.fromArray(
							[
								A2(
								_elm_lang$core$Basics_ops['++'],
								'expected ',
								_elm_lang$core$Basics$toString(s))
							])),
					_1: cx
				};
			}
		});
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
var _Bogdanp$elm_combine$Combine$regex = function (pattern) {
	var pattern$ = A2(_elm_lang$core$String$startsWith, '^', pattern) ? pattern : A2(_elm_lang$core$Basics_ops['++'], '^', pattern);
	return _Bogdanp$elm_combine$Combine$Parser(
		function (cx) {
			var _p8 = A3(
				_elm_lang$core$Regex$find,
				_elm_lang$core$Regex$AtMost(1),
				_elm_lang$core$Regex$regex(pattern$),
				cx.input);
			if ((_p8.ctor === '::') && (_p8._1.ctor === '[]')) {
				var _p9 = _p8._0;
				var len = _elm_lang$core$String$length(_p9.match);
				var rem = A2(_elm_lang$core$String$dropLeft, len, cx.input);
				var pos = cx.position + len;
				return {
					ctor: '_Tuple2',
					_0: _elm_lang$core$Result$Ok(_p9.match),
					_1: _elm_lang$core$Native_Utils.update(
						cx,
						{input: rem, position: pos})
				};
			} else {
				return {
					ctor: '_Tuple2',
					_0: _elm_lang$core$Result$Err(
						_elm_lang$core$Native_List.fromArray(
							[
								A2(
								_elm_lang$core$Basics_ops['++'],
								'expected input matching Regexp /',
								A2(_elm_lang$core$Basics_ops['++'], pattern$, '/'))
							])),
					_1: cx
				};
			}
		});
};
var _Bogdanp$elm_combine$Combine$while = function (pred) {
	var accumulate = F2(
		function (acc, cx) {
			accumulate:
			while (true) {
				var _p10 = _elm_lang$core$String$uncons(cx.input);
				if (_p10.ctor === 'Just') {
					var _p11 = _p10._0._0;
					if (pred(_p11)) {
						var pos = cx.position + 1;
						var c = A2(_elm_lang$core$String$cons, _p11, '');
						var _v11 = A2(_elm_lang$core$Basics_ops['++'], acc, c),
							_v12 = _elm_lang$core$Native_Utils.update(
							cx,
							{input: _p10._0._1, position: pos});
						acc = _v11;
						cx = _v12;
						continue accumulate;
					} else {
						return {ctor: '_Tuple2', _0: acc, _1: cx};
					}
				} else {
					return {ctor: '_Tuple2', _0: acc, _1: cx};
				}
			}
		});
	return _Bogdanp$elm_combine$Combine$Parser(
		function (cx) {
			var _p12 = A2(accumulate, '', cx);
			var res = _p12._0;
			var cx$ = _p12._1;
			return {
				ctor: '_Tuple2',
				_0: _elm_lang$core$Result$Ok(res),
				_1: cx$
			};
		});
};
var _Bogdanp$elm_combine$Combine$end = _Bogdanp$elm_combine$Combine$Parser(
	function (cx) {
		return _elm_lang$core$Native_Utils.eq(cx.input, '') ? {
			ctor: '_Tuple2',
			_0: _elm_lang$core$Result$Ok(
				{ctor: '_Tuple0'}),
			_1: cx
		} : {
			ctor: '_Tuple2',
			_0: _elm_lang$core$Result$Err(
				_elm_lang$core$Native_List.fromArray(
					['expected end of input'])),
			_1: cx
		};
	});
var _Bogdanp$elm_combine$Combine$or = F2(
	function (lp, rp) {
		return _Bogdanp$elm_combine$Combine$Parser(
			function (cx) {
				var res = A2(_Bogdanp$elm_combine$Combine$app, lp, cx);
				var _p13 = res;
				if (_p13._0.ctor === 'Ok') {
					return res;
				} else {
					var res$ = A2(_Bogdanp$elm_combine$Combine$app, rp, cx);
					var _p14 = res$;
					if (_p14._0.ctor === 'Ok') {
						return res$;
					} else {
						return {
							ctor: '_Tuple2',
							_0: _elm_lang$core$Result$Err(
								A2(_elm_lang$core$Basics_ops['++'], _p13._0._0, _p14._0._0)),
							_1: cx
						};
					}
				}
			});
	});
var _Bogdanp$elm_combine$Combine$choice = function (xs) {
	return A3(
		_elm_lang$core$List$foldr,
		_Bogdanp$elm_combine$Combine$or,
		_Bogdanp$elm_combine$Combine$fail(
			_elm_lang$core$Native_List.fromArray(
				[])),
		xs);
};
var _Bogdanp$elm_combine$Combine$optional = F2(
	function (res, p) {
		return A2(
			_Bogdanp$elm_combine$Combine$or,
			p,
			_Bogdanp$elm_combine$Combine$succeed(res));
	});
var _Bogdanp$elm_combine$Combine$chainl = F2(
	function (p, op) {
		var accumulate = function (x) {
			return A2(
				_Bogdanp$elm_combine$Combine$or,
				A2(
					_Bogdanp$elm_combine$Combine$andThen,
					op,
					function (f) {
						return A2(
							_Bogdanp$elm_combine$Combine$andThen,
							p,
							function (y) {
								return accumulate(
									A2(f, x, y));
							});
					}),
				_Bogdanp$elm_combine$Combine$succeed(x));
		};
		return A2(_Bogdanp$elm_combine$Combine$andThen, p, accumulate);
	});
var _Bogdanp$elm_combine$Combine$chainr = F2(
	function (p, op) {
		var accumulate = function (x) {
			return A2(
				_Bogdanp$elm_combine$Combine$or,
				A2(
					_Bogdanp$elm_combine$Combine$andThen,
					op,
					function (f) {
						return A2(
							_Bogdanp$elm_combine$Combine$andThen,
							A2(_Bogdanp$elm_combine$Combine$andThen, p, accumulate),
							function (y) {
								return _Bogdanp$elm_combine$Combine$succeed(
									A2(f, x, y));
							});
					}),
				_Bogdanp$elm_combine$Combine$succeed(x));
		};
		return A2(_Bogdanp$elm_combine$Combine$andThen, p, accumulate);
	});
var _Bogdanp$elm_combine$Combine$maybe = function (p) {
	return _Bogdanp$elm_combine$Combine$Parser(
		function (cx) {
			var _p15 = A2(_Bogdanp$elm_combine$Combine$app, p, cx);
			if ((_p15.ctor === '_Tuple2') && (_p15._0.ctor === 'Ok')) {
				return {
					ctor: '_Tuple2',
					_0: _elm_lang$core$Result$Ok(
						_elm_lang$core$Maybe$Just(_p15._0._0)),
					_1: _p15._1
				};
			} else {
				return {
					ctor: '_Tuple2',
					_0: _elm_lang$core$Result$Ok(_elm_lang$core$Maybe$Nothing),
					_1: cx
				};
			}
		});
};
var _Bogdanp$elm_combine$Combine$many = function (p) {
	var accumulate = F2(
		function (acc, cx) {
			accumulate:
			while (true) {
				var _p16 = A2(_Bogdanp$elm_combine$Combine$app, p, cx);
				if ((_p16.ctor === '_Tuple2') && (_p16._0.ctor === 'Ok')) {
					var _p17 = _p16._1;
					if (_elm_lang$core$Native_Utils.eq(cx, _p17)) {
						return {
							ctor: '_Tuple2',
							_0: _elm_lang$core$List$reverse(acc),
							_1: cx
						};
					} else {
						var _v17 = A2(_elm_lang$core$List_ops['::'], _p16._0._0, acc),
							_v18 = _p17;
						acc = _v17;
						cx = _v18;
						continue accumulate;
					}
				} else {
					return {
						ctor: '_Tuple2',
						_0: _elm_lang$core$List$reverse(acc),
						_1: cx
					};
				}
			}
		});
	return _Bogdanp$elm_combine$Combine$Parser(
		function (cx) {
			var _p18 = A2(
				accumulate,
				_elm_lang$core$Native_List.fromArray(
					[]),
				cx);
			var res = _p18._0;
			var cx$ = _p18._1;
			return {
				ctor: '_Tuple2',
				_0: _elm_lang$core$Result$Ok(res),
				_1: cx$
			};
		});
};
var _Bogdanp$elm_combine$Combine$many1 = function (p) {
	return A2(
		_Bogdanp$elm_combine$Combine$andMap,
		A2(
			_Bogdanp$elm_combine$Combine$map,
			F2(
				function (x, y) {
					return A2(_elm_lang$core$List_ops['::'], x, y);
				}),
			p),
		_Bogdanp$elm_combine$Combine$many(p));
};
var _Bogdanp$elm_combine$Combine$skipMany1 = function (p) {
	return A2(
		_Bogdanp$elm_combine$Combine$andThen,
		_Bogdanp$elm_combine$Combine$many1(
			_Bogdanp$elm_combine$Combine$skip(p)),
		_elm_lang$core$Basics$always(
			_Bogdanp$elm_combine$Combine$succeed(
				{ctor: '_Tuple0'})));
};
var _Bogdanp$elm_combine$Combine$sepBy1 = F2(
	function (sep, p) {
		return A2(
			_Bogdanp$elm_combine$Combine$andMap,
			A2(
				_Bogdanp$elm_combine$Combine$map,
				F2(
					function (x, y) {
						return A2(_elm_lang$core$List_ops['::'], x, y);
					}),
				p),
			_Bogdanp$elm_combine$Combine$many(
				A2(
					_Bogdanp$elm_combine$Combine$andMap,
					A2(
						_Bogdanp$elm_combine$Combine$map,
						_elm_lang$core$Basics$flip(_elm_lang$core$Basics$always),
						sep),
					p)));
	});
var _Bogdanp$elm_combine$Combine$sepBy = F2(
	function (sep, p) {
		return A2(
			_Bogdanp$elm_combine$Combine$or,
			A2(_Bogdanp$elm_combine$Combine$sepBy1, sep, p),
			_Bogdanp$elm_combine$Combine$succeed(
				_elm_lang$core$Native_List.fromArray(
					[])));
	});
var _Bogdanp$elm_combine$Combine$sepEndBy1 = F2(
	function (sep, p) {
		return A2(
			_Bogdanp$elm_combine$Combine$andMap,
			A2(
				_Bogdanp$elm_combine$Combine$map,
				_elm_lang$core$Basics$always,
				A2(_Bogdanp$elm_combine$Combine$sepBy1, sep, p)),
			_Bogdanp$elm_combine$Combine$maybe(sep));
	});
var _Bogdanp$elm_combine$Combine$sepEndBy = F2(
	function (sep, p) {
		return A2(
			_Bogdanp$elm_combine$Combine$or,
			A2(_Bogdanp$elm_combine$Combine$sepEndBy1, sep, p),
			_Bogdanp$elm_combine$Combine$succeed(
				_elm_lang$core$Native_List.fromArray(
					[])));
	});
var _Bogdanp$elm_combine$Combine$skipMany = function (p) {
	return A2(
		_Bogdanp$elm_combine$Combine$andThen,
		_Bogdanp$elm_combine$Combine$many(
			_Bogdanp$elm_combine$Combine$skip(p)),
		_elm_lang$core$Basics$always(
			_Bogdanp$elm_combine$Combine$succeed(
				{ctor: '_Tuple0'})));
};
var _Bogdanp$elm_combine$Combine$manyTill = F2(
	function (p, end) {
		var accumulate = F2(
			function (acc, cx) {
				accumulate:
				while (true) {
					var _p19 = A2(_Bogdanp$elm_combine$Combine$app, end, cx);
					if (_p19._0.ctor === 'Ok') {
						return {
							ctor: '_Tuple2',
							_0: _elm_lang$core$Result$Ok(
								_elm_lang$core$List$reverse(acc)),
							_1: _p19._1
						};
					} else {
						var _p20 = A2(_Bogdanp$elm_combine$Combine$app, p, cx);
						if ((_p20.ctor === '_Tuple2') && (_p20._0.ctor === 'Ok')) {
							var _v21 = A2(_elm_lang$core$List_ops['::'], _p20._0._0, acc),
								_v22 = _p20._1;
							acc = _v21;
							cx = _v22;
							continue accumulate;
						} else {
							return {
								ctor: '_Tuple2',
								_0: _elm_lang$core$Result$Err(_p19._0._0),
								_1: _p19._1
							};
						}
					}
				}
			});
		return _Bogdanp$elm_combine$Combine$Parser(
			accumulate(
				_elm_lang$core$Native_List.fromArray(
					[])));
	});

var _Bogdanp$elm_combine$Combine_Infix_ops = _Bogdanp$elm_combine$Combine_Infix_ops || {};
_Bogdanp$elm_combine$Combine_Infix_ops['<|>'] = _Bogdanp$elm_combine$Combine$or;
var _Bogdanp$elm_combine$Combine_Infix_ops = _Bogdanp$elm_combine$Combine_Infix_ops || {};
_Bogdanp$elm_combine$Combine_Infix_ops['*>'] = F2(
	function (lp, rp) {
		return A2(
			_Bogdanp$elm_combine$Combine$andMap,
			A2(
				_Bogdanp$elm_combine$Combine$map,
				_elm_lang$core$Basics$flip(_elm_lang$core$Basics$always),
				lp),
			rp);
	});
var _Bogdanp$elm_combine$Combine_Infix_ops = _Bogdanp$elm_combine$Combine_Infix_ops || {};
_Bogdanp$elm_combine$Combine_Infix_ops['<*'] = F2(
	function (lp, rp) {
		return A2(
			_Bogdanp$elm_combine$Combine$andMap,
			A2(_Bogdanp$elm_combine$Combine$map, _elm_lang$core$Basics$always, lp),
			rp);
	});
var _Bogdanp$elm_combine$Combine_Infix_ops = _Bogdanp$elm_combine$Combine_Infix_ops || {};
_Bogdanp$elm_combine$Combine_Infix_ops['<?>'] = F2(
	function (p, m) {
		return A2(
			_Bogdanp$elm_combine$Combine$mapError,
			function (_p0) {
				return _elm_lang$core$Native_List.fromArray(
					[m]);
			},
			p);
	});
var _Bogdanp$elm_combine$Combine_Infix_ops = _Bogdanp$elm_combine$Combine_Infix_ops || {};
_Bogdanp$elm_combine$Combine_Infix_ops['<$'] = function (res) {
	return _Bogdanp$elm_combine$Combine$map(
		function (_p1) {
			return res;
		});
};
var _Bogdanp$elm_combine$Combine_Infix_ops = _Bogdanp$elm_combine$Combine_Infix_ops || {};
_Bogdanp$elm_combine$Combine_Infix_ops['<*>'] = _Bogdanp$elm_combine$Combine$andMap;
var _Bogdanp$elm_combine$Combine_Infix_ops = _Bogdanp$elm_combine$Combine_Infix_ops || {};
_Bogdanp$elm_combine$Combine_Infix_ops['<$>'] = _Bogdanp$elm_combine$Combine$map;

var _Bogdanp$elm_combine$Combine_Char$crlf = A2(
	_Bogdanp$elm_combine$Combine_Infix_ops['<?>'],
	A2(
		_Bogdanp$elm_combine$Combine_Infix_ops['<$'],
		_elm_lang$core$Native_Utils.chr('\n'),
		_Bogdanp$elm_combine$Combine$regex('\r\n')),
	'expected crlf');
var _Bogdanp$elm_combine$Combine_Char$satisfy = function (pred) {
	return _Bogdanp$elm_combine$Combine$primitive(
		function (cx) {
			var message = 'could not satisfy predicate';
			var _p0 = _elm_lang$core$String$uncons(cx.input);
			if (_p0.ctor === 'Just') {
				var _p1 = _p0._0._0;
				return pred(_p1) ? {
					ctor: '_Tuple2',
					_0: _elm_lang$core$Result$Ok(_p1),
					_1: _elm_lang$core$Native_Utils.update(
						cx,
						{input: _p0._0._1, position: cx.position + 1})
				} : {
					ctor: '_Tuple2',
					_0: _elm_lang$core$Result$Err(
						_elm_lang$core$Native_List.fromArray(
							[message])),
					_1: cx
				};
			} else {
				return {
					ctor: '_Tuple2',
					_0: _elm_lang$core$Result$Err(
						_elm_lang$core$Native_List.fromArray(
							[message])),
					_1: cx
				};
			}
		});
};
var _Bogdanp$elm_combine$Combine_Char$char = function (c) {
	return A2(
		_Bogdanp$elm_combine$Combine_Infix_ops['<?>'],
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
	_Bogdanp$elm_combine$Combine_Infix_ops['<?>'],
	_Bogdanp$elm_combine$Combine_Char$satisfy(
		_elm_lang$core$Basics$always(true)),
	'expected any character');
var _Bogdanp$elm_combine$Combine_Char$oneOf = function (cs) {
	return A2(
		_Bogdanp$elm_combine$Combine_Infix_ops['<?>'],
		_Bogdanp$elm_combine$Combine_Char$satisfy(
			A2(_elm_lang$core$Basics$flip, _elm_lang$core$List$member, cs)),
		A2(
			_elm_lang$core$Basics_ops['++'],
			'expected one of ',
			_elm_lang$core$Basics$toString(cs)));
};
var _Bogdanp$elm_combine$Combine_Char$noneOf = function (cs) {
	return A2(
		_Bogdanp$elm_combine$Combine_Infix_ops['<?>'],
		_Bogdanp$elm_combine$Combine_Char$satisfy(
			function (_p2) {
				return _elm_lang$core$Basics$not(
					A3(_elm_lang$core$Basics$flip, _elm_lang$core$List$member, cs, _p2));
			}),
		A2(
			_elm_lang$core$Basics_ops['++'],
			'expected none of ',
			_elm_lang$core$Basics$toString(cs)));
};
var _Bogdanp$elm_combine$Combine_Char$space = A2(
	_Bogdanp$elm_combine$Combine_Infix_ops['<?>'],
	_Bogdanp$elm_combine$Combine_Char$satisfy(
		F2(
			function (x, y) {
				return _elm_lang$core$Native_Utils.eq(x, y);
			})(
			_elm_lang$core$Native_Utils.chr(' '))),
	'expected space');
var _Bogdanp$elm_combine$Combine_Char$tab = A2(
	_Bogdanp$elm_combine$Combine_Infix_ops['<?>'],
	_Bogdanp$elm_combine$Combine_Char$satisfy(
		F2(
			function (x, y) {
				return _elm_lang$core$Native_Utils.eq(x, y);
			})(
			_elm_lang$core$Native_Utils.chr('\t'))),
	'expected tab');
var _Bogdanp$elm_combine$Combine_Char$newline = A2(
	_Bogdanp$elm_combine$Combine_Infix_ops['<?>'],
	_Bogdanp$elm_combine$Combine_Char$satisfy(
		F2(
			function (x, y) {
				return _elm_lang$core$Native_Utils.eq(x, y);
			})(
			_elm_lang$core$Native_Utils.chr('\n'))),
	'expected newline');
var _Bogdanp$elm_combine$Combine_Char$eol = A2(_Bogdanp$elm_combine$Combine_Infix_ops['<|>'], _Bogdanp$elm_combine$Combine_Char$newline, _Bogdanp$elm_combine$Combine_Char$crlf);
var _Bogdanp$elm_combine$Combine_Char$lower = A2(
	_Bogdanp$elm_combine$Combine_Infix_ops['<?>'],
	_Bogdanp$elm_combine$Combine_Char$satisfy(_elm_lang$core$Char$isLower),
	'expected a lowercase character');
var _Bogdanp$elm_combine$Combine_Char$upper = A2(
	_Bogdanp$elm_combine$Combine_Infix_ops['<?>'],
	_Bogdanp$elm_combine$Combine_Char$satisfy(_elm_lang$core$Char$isUpper),
	'expected an uppercase character');
var _Bogdanp$elm_combine$Combine_Char$digit = A2(
	_Bogdanp$elm_combine$Combine_Infix_ops['<?>'],
	_Bogdanp$elm_combine$Combine_Char$satisfy(_elm_lang$core$Char$isDigit),
	'expected a digit');
var _Bogdanp$elm_combine$Combine_Char$octDigit = A2(
	_Bogdanp$elm_combine$Combine_Infix_ops['<?>'],
	_Bogdanp$elm_combine$Combine_Char$satisfy(_elm_lang$core$Char$isOctDigit),
	'expected an octal digit');
var _Bogdanp$elm_combine$Combine_Char$hexDigit = A2(
	_Bogdanp$elm_combine$Combine_Infix_ops['<?>'],
	_Bogdanp$elm_combine$Combine_Char$satisfy(_elm_lang$core$Char$isHexDigit),
	'expected a hexadecimal digit');

var _Bogdanp$elm_combine$Combine_Num$digit = function () {
	var toDigit = function (c) {
		return _elm_lang$core$Char$toCode(c) - _elm_lang$core$Char$toCode(
			_elm_lang$core$Native_Utils.chr('0'));
	};
	return A2(
		_Bogdanp$elm_combine$Combine_Infix_ops['<?>'],
		A2(_Bogdanp$elm_combine$Combine_Infix_ops['<$>'], toDigit, _Bogdanp$elm_combine$Combine_Char$digit),
		'expected a digit');
}();
var _Bogdanp$elm_combine$Combine_Num$sign = A2(
	_Bogdanp$elm_combine$Combine$optional,
	1,
	_Bogdanp$elm_combine$Combine$choice(
		_elm_lang$core$Native_List.fromArray(
			[
				A2(
				_Bogdanp$elm_combine$Combine_Infix_ops['<$'],
				1,
				_Bogdanp$elm_combine$Combine$string('+')),
				A2(
				_Bogdanp$elm_combine$Combine_Infix_ops['<$'],
				-1,
				_Bogdanp$elm_combine$Combine$string('-'))
			])));
var _Bogdanp$elm_combine$Combine_Num$unwrap = F2(
	function (f, s) {
		var _p0 = f(s);
		if (_p0.ctor === 'Ok') {
			return _p0._0;
		} else {
			return _elm_lang$core$Native_Utils.crashCase(
				'Combine.Num',
				{
					start: {line: 19, column: 3},
					end: {line: 24, column: 73}
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
	_Bogdanp$elm_combine$Combine_Infix_ops['<?>'],
	A2(
		_Bogdanp$elm_combine$Combine$andMap,
		A2(
			_Bogdanp$elm_combine$Combine$map,
			F2(
				function (x, y) {
					return x * y;
				}),
			_Bogdanp$elm_combine$Combine_Num$sign),
		A2(
			_Bogdanp$elm_combine$Combine_Infix_ops['<$>'],
			_Bogdanp$elm_combine$Combine_Num$toInt,
			_Bogdanp$elm_combine$Combine$regex('(0|[1-9][0-9]*)'))),
	'expected an integer');
var _Bogdanp$elm_combine$Combine_Num$toFloat = _Bogdanp$elm_combine$Combine_Num$unwrap(_elm_lang$core$String$toFloat);
var _Bogdanp$elm_combine$Combine_Num$float = A2(
	_Bogdanp$elm_combine$Combine_Infix_ops['<?>'],
	A2(
		_Bogdanp$elm_combine$Combine$andMap,
		A2(
			_Bogdanp$elm_combine$Combine$map,
			function (_p2) {
				return F2(
					function (x, y) {
						return x * y;
					})(
					_elm_lang$core$Basics$toFloat(_p2));
			},
			_Bogdanp$elm_combine$Combine_Num$sign),
		A2(
			_Bogdanp$elm_combine$Combine_Infix_ops['<$>'],
			_Bogdanp$elm_combine$Combine_Num$toFloat,
			_Bogdanp$elm_combine$Combine$regex('(0|[1-9][0-9]*)(\\.[0-9]+)'))),
	'expected a float');

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
				return A2(_elm_lang$core$List_ops['::'], key, keyList);
			}),
		_elm_lang$core$Native_List.fromArray(
			[]),
		dict);
};
var _elm_lang$core$Dict$values = function (dict) {
	return A3(
		_elm_lang$core$Dict$foldr,
		F3(
			function (key, value, valueList) {
				return A2(_elm_lang$core$List_ops['::'], value, valueList);
			}),
		_elm_lang$core$Native_List.fromArray(
			[]),
		dict);
};
var _elm_lang$core$Dict$toList = function (dict) {
	return A3(
		_elm_lang$core$Dict$foldr,
		F3(
			function (key, value, list) {
				return A2(
					_elm_lang$core$List_ops['::'],
					{ctor: '_Tuple2', _0: key, _1: value},
					list);
			}),
		_elm_lang$core$Native_List.fromArray(
			[]),
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
					return (_elm_lang$core$Native_Utils.cmp(_p5, rKey) < 0) ? {
						ctor: '_Tuple2',
						_0: _p7,
						_1: A3(leftStep, _p5, _p6, _p9)
					} : ((_elm_lang$core$Native_Utils.cmp(_p5, rKey) > 0) ? {
						ctor: '_Tuple2',
						_0: _p8,
						_1: A3(rightStep, rKey, rValue, _p9)
					} : {
						ctor: '_Tuple2',
						_0: _p7,
						_1: A4(bothStep, _p5, _p6, rValue, _p9)
					});
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
				_elm_lang$core$Native_List.fromArray(
					[
						'Internal red-black tree invariant violated, expected ',
						msg,
						' and got ',
						_elm_lang$core$Basics$toString(c),
						'/',
						lgot,
						'/',
						rgot,
						'\nPlease report this bug to <https://github.com/elm-lang/core/issues>'
					])));
	});
var _elm_lang$core$Dict$isBBlack = function (dict) {
	var _p13 = dict;
	_v11_2:
	do {
		if (_p13.ctor === 'RBNode_elm_builtin') {
			if (_p13._0.ctor === 'BBlack') {
				return true;
			} else {
				break _v11_2;
			}
		} else {
			if (_p13._0.ctor === 'LBBlack') {
				return true;
			} else {
				break _v11_2;
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
				var _v13 = A2(_elm_lang$core$Dict$sizeHelp, n + 1, _p14._4),
					_v14 = _p14._3;
				n = _v13;
				dict = _v14;
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
						var _v17 = targetKey,
							_v18 = _p15._3;
						targetKey = _v17;
						dict = _v18;
						continue get;
					case 'EQ':
						return _elm_lang$core$Maybe$Just(_p15._2);
					default:
						var _v19 = targetKey,
							_v20 = _p15._4;
						targetKey = _v19;
						dict = _v20;
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
				var _v23 = _p18._1,
					_v24 = _p18._2,
					_v25 = _p18._4;
				k = _v23;
				v = _v24;
				r = _v25;
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
	_v33_6:
	do {
		_v33_5:
		do {
			_v33_4:
			do {
				_v33_3:
				do {
					_v33_2:
					do {
						_v33_1:
						do {
							_v33_0:
							do {
								if (_p27.ctor === 'RBNode_elm_builtin') {
									if (_p27._3.ctor === 'RBNode_elm_builtin') {
										if (_p27._4.ctor === 'RBNode_elm_builtin') {
											switch (_p27._3._0.ctor) {
												case 'Red':
													switch (_p27._4._0.ctor) {
														case 'Red':
															if ((_p27._3._3.ctor === 'RBNode_elm_builtin') && (_p27._3._3._0.ctor === 'Red')) {
																break _v33_0;
															} else {
																if ((_p27._3._4.ctor === 'RBNode_elm_builtin') && (_p27._3._4._0.ctor === 'Red')) {
																	break _v33_1;
																} else {
																	if ((_p27._4._3.ctor === 'RBNode_elm_builtin') && (_p27._4._3._0.ctor === 'Red')) {
																		break _v33_2;
																	} else {
																		if ((_p27._4._4.ctor === 'RBNode_elm_builtin') && (_p27._4._4._0.ctor === 'Red')) {
																			break _v33_3;
																		} else {
																			break _v33_6;
																		}
																	}
																}
															}
														case 'NBlack':
															if ((_p27._3._3.ctor === 'RBNode_elm_builtin') && (_p27._3._3._0.ctor === 'Red')) {
																break _v33_0;
															} else {
																if ((_p27._3._4.ctor === 'RBNode_elm_builtin') && (_p27._3._4._0.ctor === 'Red')) {
																	break _v33_1;
																} else {
																	if (((((_p27._0.ctor === 'BBlack') && (_p27._4._3.ctor === 'RBNode_elm_builtin')) && (_p27._4._3._0.ctor === 'Black')) && (_p27._4._4.ctor === 'RBNode_elm_builtin')) && (_p27._4._4._0.ctor === 'Black')) {
																		break _v33_4;
																	} else {
																		break _v33_6;
																	}
																}
															}
														default:
															if ((_p27._3._3.ctor === 'RBNode_elm_builtin') && (_p27._3._3._0.ctor === 'Red')) {
																break _v33_0;
															} else {
																if ((_p27._3._4.ctor === 'RBNode_elm_builtin') && (_p27._3._4._0.ctor === 'Red')) {
																	break _v33_1;
																} else {
																	break _v33_6;
																}
															}
													}
												case 'NBlack':
													switch (_p27._4._0.ctor) {
														case 'Red':
															if ((_p27._4._3.ctor === 'RBNode_elm_builtin') && (_p27._4._3._0.ctor === 'Red')) {
																break _v33_2;
															} else {
																if ((_p27._4._4.ctor === 'RBNode_elm_builtin') && (_p27._4._4._0.ctor === 'Red')) {
																	break _v33_3;
																} else {
																	if (((((_p27._0.ctor === 'BBlack') && (_p27._3._3.ctor === 'RBNode_elm_builtin')) && (_p27._3._3._0.ctor === 'Black')) && (_p27._3._4.ctor === 'RBNode_elm_builtin')) && (_p27._3._4._0.ctor === 'Black')) {
																		break _v33_5;
																	} else {
																		break _v33_6;
																	}
																}
															}
														case 'NBlack':
															if (_p27._0.ctor === 'BBlack') {
																if ((((_p27._4._3.ctor === 'RBNode_elm_builtin') && (_p27._4._3._0.ctor === 'Black')) && (_p27._4._4.ctor === 'RBNode_elm_builtin')) && (_p27._4._4._0.ctor === 'Black')) {
																	break _v33_4;
																} else {
																	if ((((_p27._3._3.ctor === 'RBNode_elm_builtin') && (_p27._3._3._0.ctor === 'Black')) && (_p27._3._4.ctor === 'RBNode_elm_builtin')) && (_p27._3._4._0.ctor === 'Black')) {
																		break _v33_5;
																	} else {
																		break _v33_6;
																	}
																}
															} else {
																break _v33_6;
															}
														default:
															if (((((_p27._0.ctor === 'BBlack') && (_p27._3._3.ctor === 'RBNode_elm_builtin')) && (_p27._3._3._0.ctor === 'Black')) && (_p27._3._4.ctor === 'RBNode_elm_builtin')) && (_p27._3._4._0.ctor === 'Black')) {
																break _v33_5;
															} else {
																break _v33_6;
															}
													}
												default:
													switch (_p27._4._0.ctor) {
														case 'Red':
															if ((_p27._4._3.ctor === 'RBNode_elm_builtin') && (_p27._4._3._0.ctor === 'Red')) {
																break _v33_2;
															} else {
																if ((_p27._4._4.ctor === 'RBNode_elm_builtin') && (_p27._4._4._0.ctor === 'Red')) {
																	break _v33_3;
																} else {
																	break _v33_6;
																}
															}
														case 'NBlack':
															if (((((_p27._0.ctor === 'BBlack') && (_p27._4._3.ctor === 'RBNode_elm_builtin')) && (_p27._4._3._0.ctor === 'Black')) && (_p27._4._4.ctor === 'RBNode_elm_builtin')) && (_p27._4._4._0.ctor === 'Black')) {
																break _v33_4;
															} else {
																break _v33_6;
															}
														default:
															break _v33_6;
													}
											}
										} else {
											switch (_p27._3._0.ctor) {
												case 'Red':
													if ((_p27._3._3.ctor === 'RBNode_elm_builtin') && (_p27._3._3._0.ctor === 'Red')) {
														break _v33_0;
													} else {
														if ((_p27._3._4.ctor === 'RBNode_elm_builtin') && (_p27._3._4._0.ctor === 'Red')) {
															break _v33_1;
														} else {
															break _v33_6;
														}
													}
												case 'NBlack':
													if (((((_p27._0.ctor === 'BBlack') && (_p27._3._3.ctor === 'RBNode_elm_builtin')) && (_p27._3._3._0.ctor === 'Black')) && (_p27._3._4.ctor === 'RBNode_elm_builtin')) && (_p27._3._4._0.ctor === 'Black')) {
														break _v33_5;
													} else {
														break _v33_6;
													}
												default:
													break _v33_6;
											}
										}
									} else {
										if (_p27._4.ctor === 'RBNode_elm_builtin') {
											switch (_p27._4._0.ctor) {
												case 'Red':
													if ((_p27._4._3.ctor === 'RBNode_elm_builtin') && (_p27._4._3._0.ctor === 'Red')) {
														break _v33_2;
													} else {
														if ((_p27._4._4.ctor === 'RBNode_elm_builtin') && (_p27._4._4._0.ctor === 'Red')) {
															break _v33_3;
														} else {
															break _v33_6;
														}
													}
												case 'NBlack':
													if (((((_p27._0.ctor === 'BBlack') && (_p27._4._3.ctor === 'RBNode_elm_builtin')) && (_p27._4._3._0.ctor === 'Black')) && (_p27._4._4.ctor === 'RBNode_elm_builtin')) && (_p27._4._4._0.ctor === 'Black')) {
														break _v33_4;
													} else {
														break _v33_6;
													}
												default:
													break _v33_6;
											}
										} else {
											break _v33_6;
										}
									}
								} else {
									break _v33_6;
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
	function (c, l, r) {
		var _p29 = {ctor: '_Tuple2', _0: l, _1: r};
		if (_p29._0.ctor === 'RBEmpty_elm_builtin') {
			if (_p29._1.ctor === 'RBEmpty_elm_builtin') {
				var _p30 = c;
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
				var _p31 = {ctor: '_Tuple3', _0: c, _1: _p32, _2: _p33};
				if ((((_p31.ctor === '_Tuple3') && (_p31._0.ctor === 'Black')) && (_p31._1.ctor === 'LBlack')) && (_p31._2.ctor === 'Red')) {
					return A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Black, _p29._1._1, _p29._1._2, _p29._1._3, _p29._1._4);
				} else {
					return A4(
						_elm_lang$core$Dict$reportRemBug,
						'Black/LBlack/Red',
						c,
						_elm_lang$core$Basics$toString(_p32),
						_elm_lang$core$Basics$toString(_p33));
				}
			}
		} else {
			if (_p29._1.ctor === 'RBEmpty_elm_builtin') {
				var _p36 = _p29._1._0;
				var _p35 = _p29._0._0;
				var _p34 = {ctor: '_Tuple3', _0: c, _1: _p35, _2: _p36};
				if ((((_p34.ctor === '_Tuple3') && (_p34._0.ctor === 'Black')) && (_p34._1.ctor === 'Red')) && (_p34._2.ctor === 'LBlack')) {
					return A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Black, _p29._0._1, _p29._0._2, _p29._0._3, _p29._0._4);
				} else {
					return A4(
						_elm_lang$core$Dict$reportRemBug,
						'Black/Red/LBlack',
						c,
						_elm_lang$core$Basics$toString(_p35),
						_elm_lang$core$Basics$toString(_p36));
				}
			} else {
				var _p40 = _p29._0._2;
				var _p39 = _p29._0._4;
				var _p38 = _p29._0._1;
				var l$ = A5(_elm_lang$core$Dict$removeMax, _p29._0._0, _p38, _p40, _p29._0._3, _p39);
				var _p37 = A3(_elm_lang$core$Dict$maxWithDefault, _p38, _p40, _p39);
				var k = _p37._0;
				var v = _p37._1;
				return A5(_elm_lang$core$Dict$bubble, c, k, v, l$, r);
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

var _elm_community$elm_list_extra$List_Extra$greedyGroupsOfWithStep = F3(
	function (size, step, xs) {
		var okayXs = _elm_lang$core$Native_Utils.cmp(
			_elm_lang$core$List$length(xs),
			0) > 0;
		var okayArgs = (_elm_lang$core$Native_Utils.cmp(size, 0) > 0) && (_elm_lang$core$Native_Utils.cmp(step, 0) > 0);
		var xs$ = A2(_elm_lang$core$List$drop, step, xs);
		var group = A2(_elm_lang$core$List$take, size, xs);
		return (okayArgs && okayXs) ? A2(
			_elm_lang$core$List_ops['::'],
			group,
			A3(_elm_community$elm_list_extra$List_Extra$greedyGroupsOfWithStep, size, step, xs$)) : _elm_lang$core$Native_List.fromArray(
			[]);
	});
var _elm_community$elm_list_extra$List_Extra$greedyGroupsOf = F2(
	function (size, xs) {
		return A3(_elm_community$elm_list_extra$List_Extra$greedyGroupsOfWithStep, size, size, xs);
	});
var _elm_community$elm_list_extra$List_Extra$groupsOfWithStep = F3(
	function (size, step, xs) {
		var okayArgs = (_elm_lang$core$Native_Utils.cmp(size, 0) > 0) && (_elm_lang$core$Native_Utils.cmp(step, 0) > 0);
		var xs$ = A2(_elm_lang$core$List$drop, step, xs);
		var group = A2(_elm_lang$core$List$take, size, xs);
		var okayLength = _elm_lang$core$Native_Utils.eq(
			size,
			_elm_lang$core$List$length(group));
		return (okayArgs && okayLength) ? A2(
			_elm_lang$core$List_ops['::'],
			group,
			A3(_elm_community$elm_list_extra$List_Extra$groupsOfWithStep, size, step, xs$)) : _elm_lang$core$Native_List.fromArray(
			[]);
	});
var _elm_community$elm_list_extra$List_Extra$groupsOf = F2(
	function (size, xs) {
		return A3(_elm_community$elm_list_extra$List_Extra$groupsOfWithStep, size, size, xs);
	});
var _elm_community$elm_list_extra$List_Extra$zip5 = _elm_lang$core$List$map5(
	F5(
		function (v0, v1, v2, v3, v4) {
			return {ctor: '_Tuple5', _0: v0, _1: v1, _2: v2, _3: v3, _4: v4};
		}));
var _elm_community$elm_list_extra$List_Extra$zip4 = _elm_lang$core$List$map4(
	F4(
		function (v0, v1, v2, v3) {
			return {ctor: '_Tuple4', _0: v0, _1: v1, _2: v2, _3: v3};
		}));
var _elm_community$elm_list_extra$List_Extra$zip3 = _elm_lang$core$List$map3(
	F3(
		function (v0, v1, v2) {
			return {ctor: '_Tuple3', _0: v0, _1: v1, _2: v2};
		}));
var _elm_community$elm_list_extra$List_Extra$zip = _elm_lang$core$List$map2(
	F2(
		function (v0, v1) {
			return {ctor: '_Tuple2', _0: v0, _1: v1};
		}));
var _elm_community$elm_list_extra$List_Extra$isPrefixOf = function (prefix) {
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
var _elm_community$elm_list_extra$List_Extra$isSuffixOf = F2(
	function (suffix, xs) {
		return A2(
			_elm_community$elm_list_extra$List_Extra$isPrefixOf,
			_elm_lang$core$List$reverse(suffix),
			_elm_lang$core$List$reverse(xs));
	});
var _elm_community$elm_list_extra$List_Extra$selectSplit = function (xs) {
	var _p1 = xs;
	if (_p1.ctor === '[]') {
		return _elm_lang$core$Native_List.fromArray(
			[]);
	} else {
		var _p5 = _p1._1;
		var _p4 = _p1._0;
		return A2(
			_elm_lang$core$List_ops['::'],
			{
				ctor: '_Tuple3',
				_0: _elm_lang$core$Native_List.fromArray(
					[]),
				_1: _p4,
				_2: _p5
			},
			A2(
				_elm_lang$core$List$map,
				function (_p2) {
					var _p3 = _p2;
					return {
						ctor: '_Tuple3',
						_0: A2(_elm_lang$core$List_ops['::'], _p4, _p3._0),
						_1: _p3._1,
						_2: _p3._2
					};
				},
				_elm_community$elm_list_extra$List_Extra$selectSplit(_p5)));
	}
};
var _elm_community$elm_list_extra$List_Extra$select = function (xs) {
	var _p6 = xs;
	if (_p6.ctor === '[]') {
		return _elm_lang$core$Native_List.fromArray(
			[]);
	} else {
		var _p10 = _p6._1;
		var _p9 = _p6._0;
		return A2(
			_elm_lang$core$List_ops['::'],
			{ctor: '_Tuple2', _0: _p9, _1: _p10},
			A2(
				_elm_lang$core$List$map,
				function (_p7) {
					var _p8 = _p7;
					return {
						ctor: '_Tuple2',
						_0: _p8._0,
						_1: A2(_elm_lang$core$List_ops['::'], _p9, _p8._1)
					};
				},
				_elm_community$elm_list_extra$List_Extra$select(_p10)));
	}
};
var _elm_community$elm_list_extra$List_Extra$tailsHelp = F2(
	function (e, list) {
		var _p11 = list;
		if (_p11.ctor === '::') {
			var _p12 = _p11._0;
			return A2(
				_elm_lang$core$List_ops['::'],
				A2(_elm_lang$core$List_ops['::'], e, _p12),
				A2(_elm_lang$core$List_ops['::'], _p12, _p11._1));
		} else {
			return _elm_lang$core$Native_List.fromArray(
				[]);
		}
	});
var _elm_community$elm_list_extra$List_Extra$tails = A2(
	_elm_lang$core$List$foldr,
	_elm_community$elm_list_extra$List_Extra$tailsHelp,
	_elm_lang$core$Native_List.fromArray(
		[
			_elm_lang$core$Native_List.fromArray(
			[])
		]));
var _elm_community$elm_list_extra$List_Extra$isInfixOf = F2(
	function (infix, xs) {
		return A2(
			_elm_lang$core$List$any,
			_elm_community$elm_list_extra$List_Extra$isPrefixOf(infix),
			_elm_community$elm_list_extra$List_Extra$tails(xs));
	});
var _elm_community$elm_list_extra$List_Extra$inits = A2(
	_elm_lang$core$List$foldr,
	F2(
		function (e, acc) {
			return A2(
				_elm_lang$core$List_ops['::'],
				_elm_lang$core$Native_List.fromArray(
					[]),
				A2(
					_elm_lang$core$List$map,
					F2(
						function (x, y) {
							return A2(_elm_lang$core$List_ops['::'], x, y);
						})(e),
					acc));
		}),
	_elm_lang$core$Native_List.fromArray(
		[
			_elm_lang$core$Native_List.fromArray(
			[])
		]));
var _elm_community$elm_list_extra$List_Extra$groupByTransitive = F2(
	function (cmp, xs$) {
		var _p13 = xs$;
		if (_p13.ctor === '[]') {
			return _elm_lang$core$Native_List.fromArray(
				[]);
		} else {
			if (_p13._1.ctor === '[]') {
				return _elm_lang$core$Native_List.fromArray(
					[
						_elm_lang$core$Native_List.fromArray(
						[_p13._0])
					]);
			} else {
				var _p15 = _p13._0;
				var _p14 = A2(_elm_community$elm_list_extra$List_Extra$groupByTransitive, cmp, _p13._1);
				if (_p14.ctor === '::') {
					return A2(cmp, _p15, _p13._1._0) ? A2(
						_elm_lang$core$List_ops['::'],
						A2(_elm_lang$core$List_ops['::'], _p15, _p14._0),
						_p14._1) : A2(
						_elm_lang$core$List_ops['::'],
						_elm_lang$core$Native_List.fromArray(
							[_p15]),
						_p14);
				} else {
					return _elm_lang$core$Native_List.fromArray(
						[]);
				}
			}
		}
	});
var _elm_community$elm_list_extra$List_Extra$stripPrefix = F2(
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
var _elm_community$elm_list_extra$List_Extra$dropWhileEnd = function (p) {
	return A2(
		_elm_lang$core$List$foldr,
		F2(
			function (x, xs) {
				return (p(x) && _elm_lang$core$List$isEmpty(xs)) ? _elm_lang$core$Native_List.fromArray(
					[]) : A2(_elm_lang$core$List_ops['::'], x, xs);
			}),
		_elm_lang$core$Native_List.fromArray(
			[]));
};
var _elm_community$elm_list_extra$List_Extra$takeWhileEnd = function (p) {
	var step = F2(
		function (x, _p17) {
			var _p18 = _p17;
			var _p19 = _p18._0;
			return (p(x) && _p18._1) ? {
				ctor: '_Tuple2',
				_0: A2(_elm_lang$core$List_ops['::'], x, _p19),
				_1: true
			} : {ctor: '_Tuple2', _0: _p19, _1: false};
		});
	return function (_p20) {
		return _elm_lang$core$Basics$fst(
			A3(
				_elm_lang$core$List$foldr,
				step,
				{
					ctor: '_Tuple2',
					_0: _elm_lang$core$Native_List.fromArray(
						[]),
					_1: true
				},
				_p20));
	};
};
var _elm_community$elm_list_extra$List_Extra$splitAt = F2(
	function (n, xs) {
		return {
			ctor: '_Tuple2',
			_0: A2(_elm_lang$core$List$take, n, xs),
			_1: A2(_elm_lang$core$List$drop, n, xs)
		};
	});
var _elm_community$elm_list_extra$List_Extra$unfoldr = F2(
	function (f, seed) {
		var _p21 = f(seed);
		if (_p21.ctor === 'Nothing') {
			return _elm_lang$core$Native_List.fromArray(
				[]);
		} else {
			return A2(
				_elm_lang$core$List_ops['::'],
				_p21._0._0,
				A2(_elm_community$elm_list_extra$List_Extra$unfoldr, f, _p21._0._1));
		}
	});
var _elm_community$elm_list_extra$List_Extra$scanr1 = F2(
	function (f, xs$) {
		var _p22 = xs$;
		if (_p22.ctor === '[]') {
			return _elm_lang$core$Native_List.fromArray(
				[]);
		} else {
			if (_p22._1.ctor === '[]') {
				return _elm_lang$core$Native_List.fromArray(
					[_p22._0]);
			} else {
				var _p23 = A2(_elm_community$elm_list_extra$List_Extra$scanr1, f, _p22._1);
				if (_p23.ctor === '::') {
					return A2(
						_elm_lang$core$List_ops['::'],
						A2(f, _p22._0, _p23._0),
						_p23);
				} else {
					return _elm_lang$core$Native_List.fromArray(
						[]);
				}
			}
		}
	});
var _elm_community$elm_list_extra$List_Extra$scanr = F3(
	function (f, acc, xs$) {
		var _p24 = xs$;
		if (_p24.ctor === '[]') {
			return _elm_lang$core$Native_List.fromArray(
				[acc]);
		} else {
			var _p25 = A3(_elm_community$elm_list_extra$List_Extra$scanr, f, acc, _p24._1);
			if (_p25.ctor === '::') {
				return A2(
					_elm_lang$core$List_ops['::'],
					A2(f, _p24._0, _p25._0),
					_p25);
			} else {
				return _elm_lang$core$Native_List.fromArray(
					[]);
			}
		}
	});
var _elm_community$elm_list_extra$List_Extra$scanl1 = F2(
	function (f, xs$) {
		var _p26 = xs$;
		if (_p26.ctor === '[]') {
			return _elm_lang$core$Native_List.fromArray(
				[]);
		} else {
			return A3(_elm_lang$core$List$scanl, f, _p26._0, _p26._1);
		}
	});
var _elm_community$elm_list_extra$List_Extra$foldr1 = F2(
	function (f, xs) {
		var mf = F2(
			function (x, m) {
				return _elm_lang$core$Maybe$Just(
					function () {
						var _p27 = m;
						if (_p27.ctor === 'Nothing') {
							return x;
						} else {
							return A2(f, x, _p27._0);
						}
					}());
			});
		return A3(_elm_lang$core$List$foldr, mf, _elm_lang$core$Maybe$Nothing, xs);
	});
var _elm_community$elm_list_extra$List_Extra$foldl1 = F2(
	function (f, xs) {
		var mf = F2(
			function (x, m) {
				return _elm_lang$core$Maybe$Just(
					function () {
						var _p28 = m;
						if (_p28.ctor === 'Nothing') {
							return x;
						} else {
							return A2(f, _p28._0, x);
						}
					}());
			});
		return A3(_elm_lang$core$List$foldl, mf, _elm_lang$core$Maybe$Nothing, xs);
	});
var _elm_community$elm_list_extra$List_Extra$interweaveHelp = F3(
	function (l1, l2, acc) {
		interweaveHelp:
		while (true) {
			var _p29 = {ctor: '_Tuple2', _0: l1, _1: l2};
			_v17_1:
			do {
				if (_p29._0.ctor === '::') {
					if (_p29._1.ctor === '::') {
						var _v18 = _p29._0._1,
							_v19 = _p29._1._1,
							_v20 = A2(
							_elm_lang$core$Basics_ops['++'],
							acc,
							_elm_lang$core$Native_List.fromArray(
								[_p29._0._0, _p29._1._0]));
						l1 = _v18;
						l2 = _v19;
						acc = _v20;
						continue interweaveHelp;
					} else {
						break _v17_1;
					}
				} else {
					if (_p29._1.ctor === '[]') {
						break _v17_1;
					} else {
						return A2(_elm_lang$core$Basics_ops['++'], acc, _p29._1);
					}
				}
			} while(false);
			return A2(_elm_lang$core$Basics_ops['++'], acc, _p29._0);
		}
	});
var _elm_community$elm_list_extra$List_Extra$interweave = F2(
	function (l1, l2) {
		return A3(
			_elm_community$elm_list_extra$List_Extra$interweaveHelp,
			l1,
			l2,
			_elm_lang$core$Native_List.fromArray(
				[]));
	});
var _elm_community$elm_list_extra$List_Extra$permutations = function (xs$) {
	var _p30 = xs$;
	if (_p30.ctor === '[]') {
		return _elm_lang$core$Native_List.fromArray(
			[
				_elm_lang$core$Native_List.fromArray(
				[])
			]);
	} else {
		var f = function (_p31) {
			var _p32 = _p31;
			return A2(
				_elm_lang$core$List$map,
				F2(
					function (x, y) {
						return A2(_elm_lang$core$List_ops['::'], x, y);
					})(_p32._0),
				_elm_community$elm_list_extra$List_Extra$permutations(_p32._1));
		};
		return A2(
			_elm_lang$core$List$concatMap,
			f,
			_elm_community$elm_list_extra$List_Extra$select(_p30));
	}
};
var _elm_community$elm_list_extra$List_Extra$isPermutationOf = F2(
	function (permut, xs) {
		return A2(
			_elm_lang$core$List$member,
			permut,
			_elm_community$elm_list_extra$List_Extra$permutations(xs));
	});
var _elm_community$elm_list_extra$List_Extra$subsequencesNonEmpty = function (xs) {
	var _p33 = xs;
	if (_p33.ctor === '[]') {
		return _elm_lang$core$Native_List.fromArray(
			[]);
	} else {
		var _p34 = _p33._0;
		var f = F2(
			function (ys, r) {
				return A2(
					_elm_lang$core$List_ops['::'],
					ys,
					A2(
						_elm_lang$core$List_ops['::'],
						A2(_elm_lang$core$List_ops['::'], _p34, ys),
						r));
			});
		return A2(
			_elm_lang$core$List_ops['::'],
			_elm_lang$core$Native_List.fromArray(
				[_p34]),
			A3(
				_elm_lang$core$List$foldr,
				f,
				_elm_lang$core$Native_List.fromArray(
					[]),
				_elm_community$elm_list_extra$List_Extra$subsequencesNonEmpty(_p33._1)));
	}
};
var _elm_community$elm_list_extra$List_Extra$subsequences = function (xs) {
	return A2(
		_elm_lang$core$List_ops['::'],
		_elm_lang$core$Native_List.fromArray(
			[]),
		_elm_community$elm_list_extra$List_Extra$subsequencesNonEmpty(xs));
};
var _elm_community$elm_list_extra$List_Extra$isSubsequenceOf = F2(
	function (subseq, xs) {
		return A2(
			_elm_lang$core$List$member,
			subseq,
			_elm_community$elm_list_extra$List_Extra$subsequences(xs));
	});
var _elm_community$elm_list_extra$List_Extra$transpose = function (ll) {
	transpose:
	while (true) {
		var _p35 = ll;
		if (_p35.ctor === '[]') {
			return _elm_lang$core$Native_List.fromArray(
				[]);
		} else {
			if (_p35._0.ctor === '[]') {
				var _v25 = _p35._1;
				ll = _v25;
				continue transpose;
			} else {
				var _p36 = _p35._1;
				var tails = A2(_elm_lang$core$List$filterMap, _elm_lang$core$List$tail, _p36);
				var heads = A2(_elm_lang$core$List$filterMap, _elm_lang$core$List$head, _p36);
				return A2(
					_elm_lang$core$List_ops['::'],
					A2(_elm_lang$core$List_ops['::'], _p35._0._0, heads),
					_elm_community$elm_list_extra$List_Extra$transpose(
						A2(_elm_lang$core$List_ops['::'], _p35._0._1, tails)));
			}
		}
	}
};
var _elm_community$elm_list_extra$List_Extra$intercalate = function (xs) {
	return function (_p37) {
		return _elm_lang$core$List$concat(
			A2(_elm_lang$core$List$intersperse, xs, _p37));
	};
};
var _elm_community$elm_list_extra$List_Extra$removeWhen = F2(
	function (pred, list) {
		return A2(
			_elm_lang$core$List$filter,
			function (_p38) {
				return _elm_lang$core$Basics$not(
					pred(_p38));
			},
			list);
	});
var _elm_community$elm_list_extra$List_Extra$removeAt = F2(
	function (index, l) {
		if (_elm_lang$core$Native_Utils.cmp(index, 0) < 0) {
			return l;
		} else {
			var tail = _elm_lang$core$List$tail(
				A2(_elm_lang$core$List$drop, index, l));
			var head = A2(_elm_lang$core$List$take, index, l);
			var _p39 = tail;
			if (_p39.ctor === 'Nothing') {
				return l;
			} else {
				return A2(_elm_lang$core$List$append, head, _p39._0);
			}
		}
	});
var _elm_community$elm_list_extra$List_Extra$singleton = function (x) {
	return _elm_lang$core$Native_List.fromArray(
		[x]);
};
var _elm_community$elm_list_extra$List_Extra$setAt = F3(
	function (index, value, l) {
		if (_elm_lang$core$Native_Utils.cmp(index, 0) < 0) {
			return _elm_lang$core$Maybe$Nothing;
		} else {
			var tail = _elm_lang$core$List$tail(
				A2(_elm_lang$core$List$drop, index, l));
			var head = A2(_elm_lang$core$List$take, index, l);
			var _p40 = tail;
			if (_p40.ctor === 'Nothing') {
				return _elm_lang$core$Maybe$Nothing;
			} else {
				return _elm_lang$core$Maybe$Just(
					A2(
						_elm_lang$core$List$append,
						head,
						A2(_elm_lang$core$List_ops['::'], value, _p40._0)));
			}
		}
	});
var _elm_community$elm_list_extra$List_Extra$deleteIf = F2(
	function (predicate, items) {
		return A2(
			_elm_lang$core$List$filter,
			function (_p41) {
				return _elm_lang$core$Basics$not(
					predicate(_p41));
			},
			items);
	});
var _elm_community$elm_list_extra$List_Extra$updateIfIndex = F3(
	function (predicate, update, list) {
		return A2(
			_elm_lang$core$List$indexedMap,
			F2(
				function (i, x) {
					return predicate(i) ? update(x) : x;
				}),
			list);
	});
var _elm_community$elm_list_extra$List_Extra$updateAt = F3(
	function (index, update, list) {
		return ((_elm_lang$core$Native_Utils.cmp(index, 0) < 0) || (_elm_lang$core$Native_Utils.cmp(
			index,
			_elm_lang$core$List$length(list)) > -1)) ? _elm_lang$core$Maybe$Nothing : _elm_lang$core$Maybe$Just(
			A3(
				_elm_community$elm_list_extra$List_Extra$updateIfIndex,
				F2(
					function (x, y) {
						return _elm_lang$core$Native_Utils.eq(x, y);
					})(index),
				update,
				list));
	});
var _elm_community$elm_list_extra$List_Extra$updateIf = F3(
	function (predicate, update, list) {
		return A2(
			_elm_lang$core$List$map,
			function (item) {
				return predicate(item) ? update(item) : item;
			},
			list);
	});
var _elm_community$elm_list_extra$List_Extra$replaceIf = F3(
	function (predicate, replacement, list) {
		return A3(
			_elm_community$elm_list_extra$List_Extra$updateIf,
			predicate,
			_elm_lang$core$Basics$always(replacement),
			list);
	});
var _elm_community$elm_list_extra$List_Extra$findIndices = function (p) {
	return function (_p42) {
		return A2(
			_elm_lang$core$List$map,
			_elm_lang$core$Basics$fst,
			A2(
				_elm_lang$core$List$filter,
				function (_p43) {
					var _p44 = _p43;
					return p(_p44._1);
				},
				A2(
					_elm_lang$core$List$indexedMap,
					F2(
						function (v0, v1) {
							return {ctor: '_Tuple2', _0: v0, _1: v1};
						}),
					_p42)));
	};
};
var _elm_community$elm_list_extra$List_Extra$findIndex = function (p) {
	return function (_p45) {
		return _elm_lang$core$List$head(
			A2(_elm_community$elm_list_extra$List_Extra$findIndices, p, _p45));
	};
};
var _elm_community$elm_list_extra$List_Extra$elemIndices = function (x) {
	return _elm_community$elm_list_extra$List_Extra$findIndices(
		F2(
			function (x, y) {
				return _elm_lang$core$Native_Utils.eq(x, y);
			})(x));
};
var _elm_community$elm_list_extra$List_Extra$elemIndex = function (x) {
	return _elm_community$elm_list_extra$List_Extra$findIndex(
		F2(
			function (x, y) {
				return _elm_lang$core$Native_Utils.eq(x, y);
			})(x));
};
var _elm_community$elm_list_extra$List_Extra$find = F2(
	function (predicate, list) {
		find:
		while (true) {
			var _p46 = list;
			if (_p46.ctor === '[]') {
				return _elm_lang$core$Maybe$Nothing;
			} else {
				var _p47 = _p46._0;
				if (predicate(_p47)) {
					return _elm_lang$core$Maybe$Just(_p47);
				} else {
					var _v30 = predicate,
						_v31 = _p46._1;
					predicate = _v30;
					list = _v31;
					continue find;
				}
			}
		}
	});
var _elm_community$elm_list_extra$List_Extra$notMember = function (x) {
	return function (_p48) {
		return _elm_lang$core$Basics$not(
			A2(_elm_lang$core$List$member, x, _p48));
	};
};
var _elm_community$elm_list_extra$List_Extra$andThen = _elm_lang$core$Basics$flip(_elm_lang$core$List$concatMap);
var _elm_community$elm_list_extra$List_Extra$lift2 = F3(
	function (f, la, lb) {
		return A2(
			_elm_community$elm_list_extra$List_Extra$andThen,
			la,
			function (a) {
				return A2(
					_elm_community$elm_list_extra$List_Extra$andThen,
					lb,
					function (b) {
						return _elm_lang$core$Native_List.fromArray(
							[
								A2(f, a, b)
							]);
					});
			});
	});
var _elm_community$elm_list_extra$List_Extra$lift3 = F4(
	function (f, la, lb, lc) {
		return A2(
			_elm_community$elm_list_extra$List_Extra$andThen,
			la,
			function (a) {
				return A2(
					_elm_community$elm_list_extra$List_Extra$andThen,
					lb,
					function (b) {
						return A2(
							_elm_community$elm_list_extra$List_Extra$andThen,
							lc,
							function (c) {
								return _elm_lang$core$Native_List.fromArray(
									[
										A3(f, a, b, c)
									]);
							});
					});
			});
	});
var _elm_community$elm_list_extra$List_Extra$lift4 = F5(
	function (f, la, lb, lc, ld) {
		return A2(
			_elm_community$elm_list_extra$List_Extra$andThen,
			la,
			function (a) {
				return A2(
					_elm_community$elm_list_extra$List_Extra$andThen,
					lb,
					function (b) {
						return A2(
							_elm_community$elm_list_extra$List_Extra$andThen,
							lc,
							function (c) {
								return A2(
									_elm_community$elm_list_extra$List_Extra$andThen,
									ld,
									function (d) {
										return _elm_lang$core$Native_List.fromArray(
											[
												A4(f, a, b, c, d)
											]);
									});
							});
					});
			});
	});
var _elm_community$elm_list_extra$List_Extra$andMap = F2(
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
var _elm_community$elm_list_extra$List_Extra$dropDuplicatesHelp = F2(
	function (existing, remaining) {
		dropDuplicatesHelp:
		while (true) {
			var _p49 = remaining;
			if (_p49.ctor === '[]') {
				return _elm_lang$core$Native_List.fromArray(
					[]);
			} else {
				var _p51 = _p49._1;
				var _p50 = _p49._0;
				if (A2(_elm_lang$core$Set$member, _p50, existing)) {
					var _v33 = existing,
						_v34 = _p51;
					existing = _v33;
					remaining = _v34;
					continue dropDuplicatesHelp;
				} else {
					return A2(
						_elm_lang$core$List_ops['::'],
						_p50,
						A2(
							_elm_community$elm_list_extra$List_Extra$dropDuplicatesHelp,
							A2(_elm_lang$core$Set$insert, _p50, existing),
							_p51));
				}
			}
		}
	});
var _elm_community$elm_list_extra$List_Extra$dropDuplicates = function (list) {
	return A2(_elm_community$elm_list_extra$List_Extra$dropDuplicatesHelp, _elm_lang$core$Set$empty, list);
};
var _elm_community$elm_list_extra$List_Extra$dropWhile = F2(
	function (predicate, list) {
		dropWhile:
		while (true) {
			var _p52 = list;
			if (_p52.ctor === '[]') {
				return _elm_lang$core$Native_List.fromArray(
					[]);
			} else {
				if (predicate(_p52._0)) {
					var _v36 = predicate,
						_v37 = _p52._1;
					predicate = _v36;
					list = _v37;
					continue dropWhile;
				} else {
					return list;
				}
			}
		}
	});
var _elm_community$elm_list_extra$List_Extra$takeWhile = F2(
	function (predicate, list) {
		var _p53 = list;
		if (_p53.ctor === '[]') {
			return _elm_lang$core$Native_List.fromArray(
				[]);
		} else {
			var _p54 = _p53._0;
			return predicate(_p54) ? A2(
				_elm_lang$core$List_ops['::'],
				_p54,
				A2(_elm_community$elm_list_extra$List_Extra$takeWhile, predicate, _p53._1)) : _elm_lang$core$Native_List.fromArray(
				[]);
		}
	});
var _elm_community$elm_list_extra$List_Extra$span = F2(
	function (p, xs) {
		return {
			ctor: '_Tuple2',
			_0: A2(_elm_community$elm_list_extra$List_Extra$takeWhile, p, xs),
			_1: A2(_elm_community$elm_list_extra$List_Extra$dropWhile, p, xs)
		};
	});
var _elm_community$elm_list_extra$List_Extra$break = function (p) {
	return _elm_community$elm_list_extra$List_Extra$span(
		function (_p55) {
			return _elm_lang$core$Basics$not(
				p(_p55));
		});
};
var _elm_community$elm_list_extra$List_Extra$groupBy = F2(
	function (eq, xs$) {
		var _p56 = xs$;
		if (_p56.ctor === '[]') {
			return _elm_lang$core$Native_List.fromArray(
				[]);
		} else {
			var _p58 = _p56._0;
			var _p57 = A2(
				_elm_community$elm_list_extra$List_Extra$span,
				eq(_p58),
				_p56._1);
			var ys = _p57._0;
			var zs = _p57._1;
			return A2(
				_elm_lang$core$List_ops['::'],
				A2(_elm_lang$core$List_ops['::'], _p58, ys),
				A2(_elm_community$elm_list_extra$List_Extra$groupBy, eq, zs));
		}
	});
var _elm_community$elm_list_extra$List_Extra$group = _elm_community$elm_list_extra$List_Extra$groupBy(
	F2(
		function (x, y) {
			return _elm_lang$core$Native_Utils.eq(x, y);
		}));
var _elm_community$elm_list_extra$List_Extra$minimumBy = F2(
	function (f, ls) {
		var minBy = F2(
			function (x, _p59) {
				var _p60 = _p59;
				var _p61 = _p60._1;
				var fx = f(x);
				return (_elm_lang$core$Native_Utils.cmp(fx, _p61) < 0) ? {ctor: '_Tuple2', _0: x, _1: fx} : {ctor: '_Tuple2', _0: _p60._0, _1: _p61};
			});
		var _p62 = ls;
		if (_p62.ctor === '::') {
			if (_p62._1.ctor === '[]') {
				return _elm_lang$core$Maybe$Just(_p62._0);
			} else {
				var _p63 = _p62._0;
				return _elm_lang$core$Maybe$Just(
					_elm_lang$core$Basics$fst(
						A3(
							_elm_lang$core$List$foldl,
							minBy,
							{
								ctor: '_Tuple2',
								_0: _p63,
								_1: f(_p63)
							},
							_p62._1)));
			}
		} else {
			return _elm_lang$core$Maybe$Nothing;
		}
	});
var _elm_community$elm_list_extra$List_Extra$maximumBy = F2(
	function (f, ls) {
		var maxBy = F2(
			function (x, _p64) {
				var _p65 = _p64;
				var _p66 = _p65._1;
				var fx = f(x);
				return (_elm_lang$core$Native_Utils.cmp(fx, _p66) > 0) ? {ctor: '_Tuple2', _0: x, _1: fx} : {ctor: '_Tuple2', _0: _p65._0, _1: _p66};
			});
		var _p67 = ls;
		if (_p67.ctor === '::') {
			if (_p67._1.ctor === '[]') {
				return _elm_lang$core$Maybe$Just(_p67._0);
			} else {
				var _p68 = _p67._0;
				return _elm_lang$core$Maybe$Just(
					_elm_lang$core$Basics$fst(
						A3(
							_elm_lang$core$List$foldl,
							maxBy,
							{
								ctor: '_Tuple2',
								_0: _p68,
								_1: f(_p68)
							},
							_p67._1)));
			}
		} else {
			return _elm_lang$core$Maybe$Nothing;
		}
	});
var _elm_community$elm_list_extra$List_Extra$uncons = function (xs) {
	var _p69 = xs;
	if (_p69.ctor === '[]') {
		return _elm_lang$core$Maybe$Nothing;
	} else {
		return _elm_lang$core$Maybe$Just(
			{ctor: '_Tuple2', _0: _p69._0, _1: _p69._1});
	}
};
var _elm_community$elm_list_extra$List_Extra$iterate = F2(
	function (f, x) {
		var _p70 = f(x);
		if (_p70.ctor === 'Just') {
			return A2(
				_elm_lang$core$List_ops['::'],
				x,
				A2(_elm_community$elm_list_extra$List_Extra$iterate, f, _p70._0));
		} else {
			return _elm_lang$core$Native_List.fromArray(
				[x]);
		}
	});
var _elm_community$elm_list_extra$List_Extra$getAt = F2(
	function (idx, xs) {
		return (_elm_lang$core$Native_Utils.cmp(idx, 0) < 0) ? _elm_lang$core$Maybe$Nothing : _elm_lang$core$List$head(
			A2(_elm_lang$core$List$drop, idx, xs));
	});
var _elm_community$elm_list_extra$List_Extra_ops = _elm_community$elm_list_extra$List_Extra_ops || {};
_elm_community$elm_list_extra$List_Extra_ops['!!'] = _elm_lang$core$Basics$flip(_elm_community$elm_list_extra$List_Extra$getAt);
var _elm_community$elm_list_extra$List_Extra$init = function () {
	var maybe = F2(
		function (d, f) {
			return function (_p71) {
				return A2(
					_elm_lang$core$Maybe$withDefault,
					d,
					A2(_elm_lang$core$Maybe$map, f, _p71));
			};
		});
	return A2(
		_elm_lang$core$List$foldr,
		function (_p72) {
			return A2(
				F2(
					function (x, y) {
						return function (_p73) {
							return x(
								y(_p73));
						};
					}),
				_elm_lang$core$Maybe$Just,
				A2(
					maybe,
					_elm_lang$core$Native_List.fromArray(
						[]),
					F2(
						function (x, y) {
							return A2(_elm_lang$core$List_ops['::'], x, y);
						})(_p72)));
		},
		_elm_lang$core$Maybe$Nothing);
}();
var _elm_community$elm_list_extra$List_Extra$last = _elm_community$elm_list_extra$List_Extra$foldl1(
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
		_elm_lang$core$Native_List.range(
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

function decodeKeyValuePairs(decoder)
{
	return {
		ctor: '<decoder>',
		tag: 'key-value',
		decoder: decoder
	};
}

function decodeObject(f, decoders)
{
	return {
		ctor: '<decoder>',
		tag: 'map-many',
		func: f,
		decoders: decoders
	};
}

function decodeTuple(f, decoders)
{
	return {
		ctor: '<decoder>',
		tag: 'tuple',
		func: f,
		decoders: decoders
	};
}

function andThen(decoder, callback)
{
	return {
		ctor: '<decoder>',
		tag: 'andThen',
		decoder: decoder,
		callback: callback
	};
}

function customAndThen(decoder, callback)
{
	return {
		ctor: '<decoder>',
		tag: 'customAndThen',
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

function decodeObject1(f, d1)
{
	return decodeObject(f, [d1]);
}

function decodeObject2(f, d1, d2)
{
	return decodeObject(f, [d1, d2]);
}

function decodeObject3(f, d1, d2, d3)
{
	return decodeObject(f, [d1, d2, d3]);
}

function decodeObject4(f, d1, d2, d3, d4)
{
	return decodeObject(f, [d1, d2, d3, d4]);
}

function decodeObject5(f, d1, d2, d3, d4, d5)
{
	return decodeObject(f, [d1, d2, d3, d4, d5]);
}

function decodeObject6(f, d1, d2, d3, d4, d5, d6)
{
	return decodeObject(f, [d1, d2, d3, d4, d5, d6]);
}

function decodeObject7(f, d1, d2, d3, d4, d5, d6, d7)
{
	return decodeObject(f, [d1, d2, d3, d4, d5, d6, d7]);
}

function decodeObject8(f, d1, d2, d3, d4, d5, d6, d7, d8)
{
	return decodeObject(f, [d1, d2, d3, d4, d5, d6, d7, d8]);
}


// DECODING TUPLES

function decodeTuple1(f, d1)
{
	return decodeTuple(f, [d1]);
}

function decodeTuple2(f, d1, d2)
{
	return decodeTuple(f, [d1, d2]);
}

function decodeTuple3(f, d1, d2, d3)
{
	return decodeTuple(f, [d1, d2, d3]);
}

function decodeTuple4(f, d1, d2, d3, d4)
{
	return decodeTuple(f, [d1, d2, d3, d4]);
}

function decodeTuple5(f, d1, d2, d3, d4, d5)
{
	return decodeTuple(f, [d1, d2, d3, d4, d5]);
}

function decodeTuple6(f, d1, d2, d3, d4, d5, d6)
{
	return decodeTuple(f, [d1, d2, d3, d4, d5, d6]);
}

function decodeTuple7(f, d1, d2, d3, d4, d5, d6, d7)
{
	return decodeTuple(f, [d1, d2, d3, d4, d5, d6, d7]);
}

function decodeTuple8(f, d1, d2, d3, d4, d5, d6, d7, d8)
{
	return decodeTuple(f, [d1, d2, d3, d4, d5, d6, d7, d8]);
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
			return (result.tag === 'ok')
				? result
				: badField(field, result);

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

		case 'tuple':
			var decoders = decoder.decoders;
			var len = decoders.length;

			if ( !(value instanceof Array) || value.length !== len )
			{
				return badPrimitive('a Tuple with ' + len + ' entries', value);
			}

			var answer = decoder.func;
			for (var i = 0; i < len; i++)
			{
				var result = runHelp(decoders[i], value[i]);
				if (result.tag !== 'ok')
				{
					return badIndex(i, result);
				}
				answer = answer(result.value);
			}
			return ok(answer);

		case 'customAndThen':
			var result = runHelp(decoder.decoder, value);
			if (result.tag !== 'ok')
			{
				return result;
			}
			var realResult = decoder.callback(result.value);
			if (realResult.ctor === 'Err')
			{
				return badPrimitive('something custom', value);
			}
			return ok(realResult._0);

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

		case 'map-many':
		case 'tuple':
			if (a.func !== b.func)
			{
				return false;
			}
			return listEquality(a.decoders, b.decoders);

		case 'andThen':
		case 'customAndThen':
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

	decodeObject1: F2(decodeObject1),
	decodeObject2: F3(decodeObject2),
	decodeObject3: F4(decodeObject3),
	decodeObject4: F5(decodeObject4),
	decodeObject5: F6(decodeObject5),
	decodeObject6: F7(decodeObject6),
	decodeObject7: F8(decodeObject7),
	decodeObject8: F9(decodeObject8),
	decodeKeyValuePairs: decodeKeyValuePairs,

	decodeTuple1: F2(decodeTuple1),
	decodeTuple2: F3(decodeTuple2),
	decodeTuple3: F4(decodeTuple3),
	decodeTuple4: F5(decodeTuple4),
	decodeTuple5: F6(decodeTuple5),
	decodeTuple6: F7(decodeTuple6),
	decodeTuple7: F8(decodeTuple7),
	decodeTuple8: F9(decodeTuple8),

	andThen: F2(andThen),
	customAndThen: F2(customAndThen),
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

var _elm_lang$core$Json_Decode$tuple8 = _elm_lang$core$Native_Json.decodeTuple8;
var _elm_lang$core$Json_Decode$tuple7 = _elm_lang$core$Native_Json.decodeTuple7;
var _elm_lang$core$Json_Decode$tuple6 = _elm_lang$core$Native_Json.decodeTuple6;
var _elm_lang$core$Json_Decode$tuple5 = _elm_lang$core$Native_Json.decodeTuple5;
var _elm_lang$core$Json_Decode$tuple4 = _elm_lang$core$Native_Json.decodeTuple4;
var _elm_lang$core$Json_Decode$tuple3 = _elm_lang$core$Native_Json.decodeTuple3;
var _elm_lang$core$Json_Decode$tuple2 = _elm_lang$core$Native_Json.decodeTuple2;
var _elm_lang$core$Json_Decode$tuple1 = _elm_lang$core$Native_Json.decodeTuple1;
var _elm_lang$core$Json_Decode$succeed = _elm_lang$core$Native_Json.succeed;
var _elm_lang$core$Json_Decode$fail = _elm_lang$core$Native_Json.fail;
var _elm_lang$core$Json_Decode$andThen = _elm_lang$core$Native_Json.andThen;
var _elm_lang$core$Json_Decode$customDecoder = _elm_lang$core$Native_Json.customAndThen;
var _elm_lang$core$Json_Decode$decodeValue = _elm_lang$core$Native_Json.run;
var _elm_lang$core$Json_Decode$value = _elm_lang$core$Native_Json.decodePrimitive('value');
var _elm_lang$core$Json_Decode$maybe = function (decoder) {
	return A2(_elm_lang$core$Native_Json.decodeContainer, 'maybe', decoder);
};
var _elm_lang$core$Json_Decode$null = _elm_lang$core$Native_Json.decodeNull;
var _elm_lang$core$Json_Decode$array = function (decoder) {
	return A2(_elm_lang$core$Native_Json.decodeContainer, 'array', decoder);
};
var _elm_lang$core$Json_Decode$list = function (decoder) {
	return A2(_elm_lang$core$Native_Json.decodeContainer, 'list', decoder);
};
var _elm_lang$core$Json_Decode$bool = _elm_lang$core$Native_Json.decodePrimitive('bool');
var _elm_lang$core$Json_Decode$int = _elm_lang$core$Native_Json.decodePrimitive('int');
var _elm_lang$core$Json_Decode$float = _elm_lang$core$Native_Json.decodePrimitive('float');
var _elm_lang$core$Json_Decode$string = _elm_lang$core$Native_Json.decodePrimitive('string');
var _elm_lang$core$Json_Decode$oneOf = _elm_lang$core$Native_Json.oneOf;
var _elm_lang$core$Json_Decode$keyValuePairs = _elm_lang$core$Native_Json.decodeKeyValuePairs;
var _elm_lang$core$Json_Decode$object8 = _elm_lang$core$Native_Json.decodeObject8;
var _elm_lang$core$Json_Decode$object7 = _elm_lang$core$Native_Json.decodeObject7;
var _elm_lang$core$Json_Decode$object6 = _elm_lang$core$Native_Json.decodeObject6;
var _elm_lang$core$Json_Decode$object5 = _elm_lang$core$Native_Json.decodeObject5;
var _elm_lang$core$Json_Decode$object4 = _elm_lang$core$Native_Json.decodeObject4;
var _elm_lang$core$Json_Decode$object3 = _elm_lang$core$Native_Json.decodeObject3;
var _elm_lang$core$Json_Decode$object2 = _elm_lang$core$Native_Json.decodeObject2;
var _elm_lang$core$Json_Decode$object1 = _elm_lang$core$Native_Json.decodeObject1;
var _elm_lang$core$Json_Decode_ops = _elm_lang$core$Json_Decode_ops || {};
_elm_lang$core$Json_Decode_ops[':='] = _elm_lang$core$Native_Json.decodeField;
var _elm_lang$core$Json_Decode$at = F2(
	function (fields, decoder) {
		return A3(
			_elm_lang$core$List$foldr,
			F2(
				function (x, y) {
					return A2(_elm_lang$core$Json_Decode_ops[':='], x, y);
				}),
			decoder,
			fields);
	});
var _elm_lang$core$Json_Decode$decodeString = _elm_lang$core$Native_Json.runOnString;
var _elm_lang$core$Json_Decode$map = _elm_lang$core$Native_Json.decodeObject1;
var _elm_lang$core$Json_Decode$dict = function (decoder) {
	return A2(
		_elm_lang$core$Json_Decode$map,
		_elm_lang$core$Dict$fromList,
		_elm_lang$core$Json_Decode$keyValuePairs(decoder));
};
var _elm_lang$core$Json_Decode$Decoder = {ctor: 'Decoder'};

//import Native.Json //

var _elm_lang$virtual_dom$Native_VirtualDom = function() {

var STYLE_KEY = 'STYLE';
var EVENT_KEY = 'EVENT';
var ATTR_KEY = 'ATTR';
var ATTR_NS_KEY = 'ATTR_NS';



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
		node: null
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



////////////  RENDERER  ////////////


function renderer(parent, tagger, initialVirtualNode)
{
	var eventNode = { tagger: tagger, parent: null };

	var domNode = render(initialVirtualNode, eventNode);
	parent.appendChild(domNode);

	var state = 'NO_REQUEST';
	var currentVirtualNode = initialVirtualNode;
	var nextVirtualNode = initialVirtualNode;

	function registerVirtualNode(vNode)
	{
		if (state === 'NO_REQUEST')
		{
			rAF(updateIfNeeded);
		}
		state = 'PENDING_REQUEST';
		nextVirtualNode = vNode;
	}

	function updateIfNeeded()
	{
		switch (state)
		{
			case 'NO_REQUEST':
				throw new Error(
					'Unexpected draw callback.\n' +
					'Please report this to <https://github.com/elm-lang/core/issues>.'
				);

			case 'PENDING_REQUEST':
				rAF(updateIfNeeded);
				state = 'EXTRA_REQUEST';

				var patches = diff(currentVirtualNode, nextVirtualNode);
				domNode = applyPatches(domNode, currentVirtualNode, patches, eventNode);
				currentVirtualNode = nextVirtualNode;

				return;

			case 'EXTRA_REQUEST':
				state = 'NO_REQUEST';
				return;
		}
	}

	return { update: registerVirtualNode };
}


var rAF =
	typeof requestAnimationFrame !== 'undefined'
		? requestAnimationFrame
		: function(cb) { setTimeout(cb, 1000 / 60); };



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
            
			var subEventRoot = {
				tagger: tagger,
				parent: eventNode
			};
			
			var domNode = render(subNode, subEventRoot);
			domNode.elm_event_node_ref = subEventRoot;
			return domNode;

		case 'text':
			return document.createTextNode(vNode.text);

		case 'node':
			var domNode = vNode.namespace
				? document.createElementNS(vNode.namespace, vNode.tag)
				: document.createElement(vNode.tag);

			applyFacts(domNode, eventNode, vNode.facts);

			var children = vNode.children;

			for (var i = 0; i < children.length; i++)
			{
				domNode.appendChild(render(children[i], eventNode));
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
		domNode: null,
		eventNode: null
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
		patches.push(makePatch('p-remove', rootIndex, aLen - bLen));
	}
	else if (aLen < bLen)
	{
		patches.push(makePatch('p-insert', rootIndex, bChildren.slice(aLen)));
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
			return redraw(domNode, patch.data, patch.eventNode);

		case 'p-facts':
			applyFacts(domNode, patch.eventNode, patch.data);
			return domNode;

		case 'p-text':
			domNode.replaceData(0, domNode.length, patch.data);
			return domNode;

		case 'p-thunk':
			return applyPatchesHelp(domNode, patch.data);

		case 'p-tagger':
			domNode.elm_event_node_ref.tagger = patch.data;
			return domNode;

		case 'p-remove':
			var i = patch.data;
			while (i--)
			{
				domNode.removeChild(domNode.lastChild);
			}
			return domNode;

		case 'p-insert':
			var newNodes = patch.data;
			for (var i = 0; i < newNodes.length; i++)
			{
				domNode.appendChild(render(newNodes[i], patch.eventNode));
			}
			return domNode;

		case 'p-custom':
			var impl = patch.data;
			return impl.applyPatch(domNode, impl.data);

		default:
			throw new Error('Ran into an unknown patch!');
	}
}


function redraw(domNode, vNode, eventNode)
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



////////////  PROGRAMS  ////////////


function programWithFlags(details)
{
	return {
		init: details.init,
		update: details.update,
		subscriptions: details.subscriptions,
		view: details.view,
		renderer: renderer
	};
}


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

	lazy: F2(lazy),
	lazy2: F3(lazy2),
	lazy3: F4(lazy3),

	programWithFlags: programWithFlags
};

}();
var _elm_lang$virtual_dom$VirtualDom$programWithFlags = _elm_lang$virtual_dom$Native_VirtualDom.programWithFlags;
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
var _elm_lang$html$Html$main$ = _elm_lang$html$Html$node('main');
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
var _elm_lang$html$Html$svg = _elm_lang$html$Html$node('svg');
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

var _elm_lang$html$Html_App$programWithFlags = _elm_lang$virtual_dom$VirtualDom$programWithFlags;
var _elm_lang$html$Html_App$program = function (app) {
	return _elm_lang$html$Html_App$programWithFlags(
		_elm_lang$core$Native_Utils.update(
			app,
			{
				init: function (_p0) {
					return app.init;
				}
			}));
};
var _elm_lang$html$Html_App$beginnerProgram = function (_p1) {
	var _p2 = _p1;
	return _elm_lang$html$Html_App$programWithFlags(
		{
			init: function (_p3) {
				return A2(
					_elm_lang$core$Platform_Cmd_ops['!'],
					_p2.model,
					_elm_lang$core$Native_List.fromArray(
						[]));
			},
			update: F2(
				function (msg, model) {
					return A2(
						_elm_lang$core$Platform_Cmd_ops['!'],
						A2(_p2.update, msg, model),
						_elm_lang$core$Native_List.fromArray(
							[]));
				}),
			view: _p2.view,
			subscriptions: function (_p4) {
				return _elm_lang$core$Platform_Sub$none;
			}
		});
};
var _elm_lang$html$Html_App$map = _elm_lang$virtual_dom$VirtualDom$map;

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
							return A2(_elm_lang$core$List_ops['::'], x, y);
						})(_p2._0),
					acc);
			}
		});
	return A2(
		_elm_lang$core$List$foldr,
		step,
		_elm_lang$core$Maybe$Just(
			_elm_lang$core$Native_List.fromArray(
				[])));
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
		return _elm_lang$core$Native_List.fromArray(
			[]);
	} else {
		return _elm_lang$core$Native_List.fromArray(
			[_p4._0]);
	}
};
var _elm_community$maybe_extra$Maybe_Extra$or = F2(
	function (ma, mb) {
		var _p5 = ma;
		if (_p5.ctor === 'Nothing') {
			return mb;
		} else {
			return ma;
		}
	});
var _elm_community$maybe_extra$Maybe_Extra$prev = _elm_lang$core$Maybe$map2(_elm_lang$core$Basics$always);
var _elm_community$maybe_extra$Maybe_Extra$next = _elm_lang$core$Maybe$map2(
	_elm_lang$core$Basics$flip(_elm_lang$core$Basics$always));
var _elm_community$maybe_extra$Maybe_Extra$andMap = F2(
	function (f, x) {
		return A2(
			_elm_lang$core$Maybe$andThen,
			x,
			function (x$) {
				return A2(
					_elm_lang$core$Maybe$andThen,
					f,
					function (f$) {
						return _elm_lang$core$Maybe$Just(
							f$(x$));
					});
			});
	});
var _elm_community$maybe_extra$Maybe_Extra$mapDefault = F3(
	function (d, f, m) {
		var _p6 = m;
		if (_p6.ctor === 'Nothing') {
			return d;
		} else {
			return f(_p6._0);
		}
	});
var _elm_community$maybe_extra$Maybe_Extra$isJust = function (m) {
	var _p7 = m;
	if (_p7.ctor === 'Nothing') {
		return false;
	} else {
		return true;
	}
};
var _elm_community$maybe_extra$Maybe_Extra$isNothing = function (m) {
	var _p8 = m;
	if (_p8.ctor === 'Nothing') {
		return true;
	} else {
		return false;
	}
};
var _elm_community$maybe_extra$Maybe_Extra$join = function (mx) {
	var _p9 = mx;
	if (_p9.ctor === 'Just') {
		return _p9._0;
	} else {
		return _elm_lang$core$Maybe$Nothing;
	}
};
var _elm_community$maybe_extra$Maybe_Extra_ops = _elm_community$maybe_extra$Maybe_Extra_ops || {};
_elm_community$maybe_extra$Maybe_Extra_ops['?'] = F2(
	function (mx, x) {
		return A2(_elm_lang$core$Maybe$withDefault, x, mx);
	});

var _elm_lang$core$Task$onError = _elm_lang$core$Native_Scheduler.onError;
var _elm_lang$core$Task$andThen = _elm_lang$core$Native_Scheduler.andThen;
var _elm_lang$core$Task$spawnCmd = F2(
	function (router, _p0) {
		var _p1 = _p0;
		return _elm_lang$core$Native_Scheduler.spawn(
			A2(
				_elm_lang$core$Task$andThen,
				_p1._0,
				_elm_lang$core$Platform$sendToApp(router)));
	});
var _elm_lang$core$Task$fail = _elm_lang$core$Native_Scheduler.fail;
var _elm_lang$core$Task$mapError = F2(
	function (f, task) {
		return A2(
			_elm_lang$core$Task$onError,
			task,
			function (err) {
				return _elm_lang$core$Task$fail(
					f(err));
			});
	});
var _elm_lang$core$Task$succeed = _elm_lang$core$Native_Scheduler.succeed;
var _elm_lang$core$Task$map = F2(
	function (func, taskA) {
		return A2(
			_elm_lang$core$Task$andThen,
			taskA,
			function (a) {
				return _elm_lang$core$Task$succeed(
					func(a));
			});
	});
var _elm_lang$core$Task$map2 = F3(
	function (func, taskA, taskB) {
		return A2(
			_elm_lang$core$Task$andThen,
			taskA,
			function (a) {
				return A2(
					_elm_lang$core$Task$andThen,
					taskB,
					function (b) {
						return _elm_lang$core$Task$succeed(
							A2(func, a, b));
					});
			});
	});
var _elm_lang$core$Task$map3 = F4(
	function (func, taskA, taskB, taskC) {
		return A2(
			_elm_lang$core$Task$andThen,
			taskA,
			function (a) {
				return A2(
					_elm_lang$core$Task$andThen,
					taskB,
					function (b) {
						return A2(
							_elm_lang$core$Task$andThen,
							taskC,
							function (c) {
								return _elm_lang$core$Task$succeed(
									A3(func, a, b, c));
							});
					});
			});
	});
var _elm_lang$core$Task$map4 = F5(
	function (func, taskA, taskB, taskC, taskD) {
		return A2(
			_elm_lang$core$Task$andThen,
			taskA,
			function (a) {
				return A2(
					_elm_lang$core$Task$andThen,
					taskB,
					function (b) {
						return A2(
							_elm_lang$core$Task$andThen,
							taskC,
							function (c) {
								return A2(
									_elm_lang$core$Task$andThen,
									taskD,
									function (d) {
										return _elm_lang$core$Task$succeed(
											A4(func, a, b, c, d));
									});
							});
					});
			});
	});
var _elm_lang$core$Task$map5 = F6(
	function (func, taskA, taskB, taskC, taskD, taskE) {
		return A2(
			_elm_lang$core$Task$andThen,
			taskA,
			function (a) {
				return A2(
					_elm_lang$core$Task$andThen,
					taskB,
					function (b) {
						return A2(
							_elm_lang$core$Task$andThen,
							taskC,
							function (c) {
								return A2(
									_elm_lang$core$Task$andThen,
									taskD,
									function (d) {
										return A2(
											_elm_lang$core$Task$andThen,
											taskE,
											function (e) {
												return _elm_lang$core$Task$succeed(
													A5(func, a, b, c, d, e));
											});
									});
							});
					});
			});
	});
var _elm_lang$core$Task$andMap = F2(
	function (taskFunc, taskValue) {
		return A2(
			_elm_lang$core$Task$andThen,
			taskFunc,
			function (func) {
				return A2(
					_elm_lang$core$Task$andThen,
					taskValue,
					function (value) {
						return _elm_lang$core$Task$succeed(
							func(value));
					});
			});
	});
var _elm_lang$core$Task$sequence = function (tasks) {
	var _p2 = tasks;
	if (_p2.ctor === '[]') {
		return _elm_lang$core$Task$succeed(
			_elm_lang$core$Native_List.fromArray(
				[]));
	} else {
		return A3(
			_elm_lang$core$Task$map2,
			F2(
				function (x, y) {
					return A2(_elm_lang$core$List_ops['::'], x, y);
				}),
			_p2._0,
			_elm_lang$core$Task$sequence(_p2._1));
	}
};
var _elm_lang$core$Task$onEffects = F3(
	function (router, commands, state) {
		return A2(
			_elm_lang$core$Task$map,
			function (_p3) {
				return {ctor: '_Tuple0'};
			},
			_elm_lang$core$Task$sequence(
				A2(
					_elm_lang$core$List$map,
					_elm_lang$core$Task$spawnCmd(router),
					commands)));
	});
var _elm_lang$core$Task$toMaybe = function (task) {
	return A2(
		_elm_lang$core$Task$onError,
		A2(_elm_lang$core$Task$map, _elm_lang$core$Maybe$Just, task),
		function (_p4) {
			return _elm_lang$core$Task$succeed(_elm_lang$core$Maybe$Nothing);
		});
};
var _elm_lang$core$Task$fromMaybe = F2(
	function ($default, maybe) {
		var _p5 = maybe;
		if (_p5.ctor === 'Just') {
			return _elm_lang$core$Task$succeed(_p5._0);
		} else {
			return _elm_lang$core$Task$fail($default);
		}
	});
var _elm_lang$core$Task$toResult = function (task) {
	return A2(
		_elm_lang$core$Task$onError,
		A2(_elm_lang$core$Task$map, _elm_lang$core$Result$Ok, task),
		function (msg) {
			return _elm_lang$core$Task$succeed(
				_elm_lang$core$Result$Err(msg));
		});
};
var _elm_lang$core$Task$fromResult = function (result) {
	var _p6 = result;
	if (_p6.ctor === 'Ok') {
		return _elm_lang$core$Task$succeed(_p6._0);
	} else {
		return _elm_lang$core$Task$fail(_p6._0);
	}
};
var _elm_lang$core$Task$init = _elm_lang$core$Task$succeed(
	{ctor: '_Tuple0'});
var _elm_lang$core$Task$onSelfMsg = F3(
	function (_p9, _p8, _p7) {
		return _elm_lang$core$Task$succeed(
			{ctor: '_Tuple0'});
	});
var _elm_lang$core$Task$command = _elm_lang$core$Native_Platform.leaf('Task');
var _elm_lang$core$Task$T = function (a) {
	return {ctor: 'T', _0: a};
};
var _elm_lang$core$Task$perform = F3(
	function (onFail, onSuccess, task) {
		return _elm_lang$core$Task$command(
			_elm_lang$core$Task$T(
				A2(
					_elm_lang$core$Task$onError,
					A2(_elm_lang$core$Task$map, onSuccess, task),
					function (x) {
						return _elm_lang$core$Task$succeed(
							onFail(x));
					})));
	});
var _elm_lang$core$Task$cmdMap = F2(
	function (tagger, _p10) {
		var _p11 = _p10;
		return _elm_lang$core$Task$T(
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
			return A2(
				_elm_lang$core$Task$andThen,
				_elm_lang$core$Native_Scheduler.spawn(
					A2(
						_elm_lang$core$Time$setInterval,
						_p1,
						A2(_elm_lang$core$Platform$sendToSelf, router, _p1))),
				function (id) {
					return A3(
						_elm_lang$core$Time$spawnHelp,
						router,
						_p0._1,
						A3(_elm_lang$core$Dict$insert, _p1, id, processes));
				});
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
				_elm_lang$core$Native_List.fromArray(
					[_p6]),
				state);
		} else {
			return A3(
				_elm_lang$core$Dict$insert,
				_p5,
				A2(_elm_lang$core$List_ops['::'], _p6, _p4._0),
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
			return A2(
				_elm_lang$core$Task$andThen,
				_elm_lang$core$Time$now,
				function (time) {
					return A2(
						_elm_lang$core$Task$andThen,
						_elm_lang$core$Task$sequence(
							A2(
								_elm_lang$core$List$map,
								function (tagger) {
									return A2(
										_elm_lang$core$Platform$sendToApp,
										router,
										tagger(time));
								},
								_p7._0)),
						function (_p8) {
							return _elm_lang$core$Task$succeed(state);
						});
				});
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
						_elm_lang$core$Native_Scheduler.kill(id),
						function (_p14) {
							return _p13._2;
						})
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
					_0: A2(_elm_lang$core$List_ops['::'], interval, _p18._0),
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
				_0: _elm_lang$core$Native_List.fromArray(
					[]),
				_1: _elm_lang$core$Dict$empty,
				_2: _elm_lang$core$Task$succeed(
					{ctor: '_Tuple0'})
			});
		var spawnList = _p19._0;
		var existingDict = _p19._1;
		var killTask = _p19._2;
		return A2(
			_elm_lang$core$Task$andThen,
			killTask,
			function (_p20) {
				return A2(
					_elm_lang$core$Task$andThen,
					A3(_elm_lang$core$Time$spawnHelp, router, spawnList, existingDict),
					function (newProcesses) {
						return _elm_lang$core$Task$succeed(
							A2(_elm_lang$core$Time$State, newTaggers, newProcesses));
					});
			});
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

var _elm_lang$core$Process$kill = _elm_lang$core$Native_Scheduler.kill;
var _elm_lang$core$Process$sleep = _elm_lang$core$Native_Scheduler.sleep;
var _elm_lang$core$Process$spawn = _elm_lang$core$Native_Scheduler.spawn;

var _elm_lang$html$Html_Attributes$attribute = _elm_lang$virtual_dom$VirtualDom$attribute;
var _elm_lang$html$Html_Attributes$contextmenu = function (value) {
	return A2(_elm_lang$html$Html_Attributes$attribute, 'contextmenu', value);
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
var _elm_lang$html$Html_Attributes$draggable = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'draggable', value);
};
var _elm_lang$html$Html_Attributes$dropzone = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'dropzone', value);
};
var _elm_lang$html$Html_Attributes$itemprop = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'itemprop', value);
};
var _elm_lang$html$Html_Attributes$lang = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'lang', value);
};
var _elm_lang$html$Html_Attributes$tabindex = function (n) {
	return A2(
		_elm_lang$html$Html_Attributes$stringProperty,
		'tabIndex',
		_elm_lang$core$Basics$toString(n));
};
var _elm_lang$html$Html_Attributes$charset = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'charset', value);
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
var _elm_lang$html$Html_Attributes$height = function (value) {
	return A2(
		_elm_lang$html$Html_Attributes$stringProperty,
		'height',
		_elm_lang$core$Basics$toString(value));
};
var _elm_lang$html$Html_Attributes$width = function (value) {
	return A2(
		_elm_lang$html$Html_Attributes$stringProperty,
		'width',
		_elm_lang$core$Basics$toString(value));
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
var _elm_lang$html$Html_Attributes$type$ = function (value) {
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
var _elm_lang$html$Html_Attributes$autosave = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'autosave', value);
};
var _elm_lang$html$Html_Attributes$enctype = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'enctype', value);
};
var _elm_lang$html$Html_Attributes$formaction = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'formAction', value);
};
var _elm_lang$html$Html_Attributes$list = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'list', value);
};
var _elm_lang$html$Html_Attributes$minlength = function (n) {
	return A2(
		_elm_lang$html$Html_Attributes$stringProperty,
		'minLength',
		_elm_lang$core$Basics$toString(n));
};
var _elm_lang$html$Html_Attributes$maxlength = function (n) {
	return A2(
		_elm_lang$html$Html_Attributes$stringProperty,
		'maxLength',
		_elm_lang$core$Basics$toString(n));
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
var _elm_lang$html$Html_Attributes$size = function (n) {
	return A2(
		_elm_lang$html$Html_Attributes$stringProperty,
		'size',
		_elm_lang$core$Basics$toString(n));
};
var _elm_lang$html$Html_Attributes$for = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'htmlFor', value);
};
var _elm_lang$html$Html_Attributes$form = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'form', value);
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
var _elm_lang$html$Html_Attributes$cols = function (n) {
	return A2(
		_elm_lang$html$Html_Attributes$stringProperty,
		'cols',
		_elm_lang$core$Basics$toString(n));
};
var _elm_lang$html$Html_Attributes$rows = function (n) {
	return A2(
		_elm_lang$html$Html_Attributes$stringProperty,
		'rows',
		_elm_lang$core$Basics$toString(n));
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
var _elm_lang$html$Html_Attributes$challenge = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'challenge', value);
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
var _elm_lang$html$Html_Attributes$media = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'media', value);
};
var _elm_lang$html$Html_Attributes$ping = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'ping', value);
};
var _elm_lang$html$Html_Attributes$rel = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'rel', value);
};
var _elm_lang$html$Html_Attributes$datetime = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'datetime', value);
};
var _elm_lang$html$Html_Attributes$pubdate = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'pubdate', value);
};
var _elm_lang$html$Html_Attributes$start = function (n) {
	return A2(
		_elm_lang$html$Html_Attributes$stringProperty,
		'start',
		_elm_lang$core$Basics$toString(n));
};
var _elm_lang$html$Html_Attributes$colspan = function (n) {
	return A2(
		_elm_lang$html$Html_Attributes$stringProperty,
		'colSpan',
		_elm_lang$core$Basics$toString(n));
};
var _elm_lang$html$Html_Attributes$headers = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'headers', value);
};
var _elm_lang$html$Html_Attributes$rowspan = function (n) {
	return A2(
		_elm_lang$html$Html_Attributes$stringProperty,
		'rowSpan',
		_elm_lang$core$Basics$toString(n));
};
var _elm_lang$html$Html_Attributes$scope = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'scope', value);
};
var _elm_lang$html$Html_Attributes$manifest = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'manifest', value);
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
				_elm_lang$core$Basics$fst,
				A2(_elm_lang$core$List$filter, _elm_lang$core$Basics$snd, list))));
};
var _elm_lang$html$Html_Attributes$style = _elm_lang$virtual_dom$VirtualDom$style;

var _elm_lang$html$Html_Events$keyCode = A2(_elm_lang$core$Json_Decode_ops[':='], 'keyCode', _elm_lang$core$Json_Decode$int);
var _elm_lang$html$Html_Events$targetChecked = A2(
	_elm_lang$core$Json_Decode$at,
	_elm_lang$core$Native_List.fromArray(
		['target', 'checked']),
	_elm_lang$core$Json_Decode$bool);
var _elm_lang$html$Html_Events$targetValue = A2(
	_elm_lang$core$Json_Decode$at,
	_elm_lang$core$Native_List.fromArray(
		['target', 'value']),
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

//import Dict, List, Maybe, Native.Scheduler //

var _evancz$elm_http$Native_Http = function() {

function send(settings, request)
{
	return _elm_lang$core$Native_Scheduler.nativeBinding(function(callback) {
		var req = new XMLHttpRequest();

		// start
		if (settings.onStart.ctor === 'Just')
		{
			req.addEventListener('loadStart', function() {
				var task = settings.onStart._0;
				_elm_lang$core$Native_Scheduler.rawSpawn(task);
			});
		}

		// progress
		if (settings.onProgress.ctor === 'Just')
		{
			req.addEventListener('progress', function(event) {
				var progress = !event.lengthComputable
					? _elm_lang$core$Maybe$Nothing
					: _elm_lang$core$Maybe$Just({
						loaded: event.loaded,
						total: event.total
					});
				var task = settings.onProgress._0(progress);
				_elm_lang$core$Native_Scheduler.rawSpawn(task);
			});
		}

		// end
		req.addEventListener('error', function() {
			return callback(_elm_lang$core$Native_Scheduler.fail({ ctor: 'RawNetworkError' }));
		});

		req.addEventListener('timeout', function() {
			return callback(_elm_lang$core$Native_Scheduler.fail({ ctor: 'RawTimeout' }));
		});

		req.addEventListener('load', function() {
			return callback(_elm_lang$core$Native_Scheduler.succeed(toResponse(req)));
		});

		req.open(request.verb, request.url, true);

		// set all the headers
		function setHeader(pair) {
			req.setRequestHeader(pair._0, pair._1);
		}
		A2(_elm_lang$core$List$map, setHeader, request.headers);

		// set the timeout
		req.timeout = settings.timeout;

		// enable this withCredentials thing
		req.withCredentials = settings.withCredentials;

		// ask for a specific MIME type for the response
		if (settings.desiredResponseType.ctor === 'Just')
		{
			req.overrideMimeType(settings.desiredResponseType._0);
		}

		// actuall send the request
		if(request.body.ctor === "BodyFormData")
		{
			req.send(request.body.formData)
		}
		else
		{
			req.send(request.body._0);
		}

		return function() {
			req.abort();
		};
	});
}


// deal with responses

function toResponse(req)
{
	var tag = req.responseType === 'blob' ? 'Blob' : 'Text'
	var response = tag === 'Blob' ? req.response : req.responseText;
	return {
		status: req.status,
		statusText: req.statusText,
		headers: parseHeaders(req.getAllResponseHeaders()),
		url: req.responseURL,
		value: { ctor: tag, _0: response }
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


function multipart(dataList)
{
	var formData = new FormData();

	while (dataList.ctor !== '[]')
	{
		var data = dataList._0;
		if (data.ctor === 'StringData')
		{
			formData.append(data._0, data._1);
		}
		else
		{
			var fileName = data._1.ctor === 'Nothing'
				? undefined
				: data._1._0;
			formData.append(data._0, data._2, fileName);
		}
		dataList = dataList._1;
	}

	return { ctor: 'BodyFormData', formData: formData };
}


function uriEncode(string)
{
	return encodeURIComponent(string);
}

function uriDecode(string)
{
	return decodeURIComponent(string);
}

return {
	send: F2(send),
	multipart: multipart,
	uriEncode: uriEncode,
	uriDecode: uriDecode
};

}();

var _evancz$elm_http$Http$send = _evancz$elm_http$Native_Http.send;
var _evancz$elm_http$Http$defaultSettings = {timeout: 0, onStart: _elm_lang$core$Maybe$Nothing, onProgress: _elm_lang$core$Maybe$Nothing, desiredResponseType: _elm_lang$core$Maybe$Nothing, withCredentials: false};
var _evancz$elm_http$Http$multipart = _evancz$elm_http$Native_Http.multipart;
var _evancz$elm_http$Http$uriDecode = _evancz$elm_http$Native_Http.uriDecode;
var _evancz$elm_http$Http$uriEncode = _evancz$elm_http$Native_Http.uriEncode;
var _evancz$elm_http$Http$queryEscape = function (string) {
	return A2(
		_elm_lang$core$String$join,
		'+',
		A2(
			_elm_lang$core$String$split,
			'%20',
			_evancz$elm_http$Http$uriEncode(string)));
};
var _evancz$elm_http$Http$queryPair = function (_p0) {
	var _p1 = _p0;
	return A2(
		_elm_lang$core$Basics_ops['++'],
		_evancz$elm_http$Http$queryEscape(_p1._0),
		A2(
			_elm_lang$core$Basics_ops['++'],
			'=',
			_evancz$elm_http$Http$queryEscape(_p1._1)));
};
var _evancz$elm_http$Http$url = F2(
	function (baseUrl, args) {
		var _p2 = args;
		if (_p2.ctor === '[]') {
			return baseUrl;
		} else {
			return A2(
				_elm_lang$core$Basics_ops['++'],
				baseUrl,
				A2(
					_elm_lang$core$Basics_ops['++'],
					'?',
					A2(
						_elm_lang$core$String$join,
						'&',
						A2(_elm_lang$core$List$map, _evancz$elm_http$Http$queryPair, args))));
		}
	});
var _evancz$elm_http$Http$Request = F4(
	function (a, b, c, d) {
		return {verb: a, headers: b, url: c, body: d};
	});
var _evancz$elm_http$Http$Settings = F5(
	function (a, b, c, d, e) {
		return {timeout: a, onStart: b, onProgress: c, desiredResponseType: d, withCredentials: e};
	});
var _evancz$elm_http$Http$Response = F5(
	function (a, b, c, d, e) {
		return {status: a, statusText: b, headers: c, url: d, value: e};
	});
var _evancz$elm_http$Http$TODO_implement_blob_in_another_library = {ctor: 'TODO_implement_blob_in_another_library'};
var _evancz$elm_http$Http$TODO_implement_file_in_another_library = {ctor: 'TODO_implement_file_in_another_library'};
var _evancz$elm_http$Http$BodyBlob = function (a) {
	return {ctor: 'BodyBlob', _0: a};
};
var _evancz$elm_http$Http$BodyFormData = {ctor: 'BodyFormData'};
var _evancz$elm_http$Http$ArrayBuffer = {ctor: 'ArrayBuffer'};
var _evancz$elm_http$Http$BodyString = function (a) {
	return {ctor: 'BodyString', _0: a};
};
var _evancz$elm_http$Http$string = _evancz$elm_http$Http$BodyString;
var _evancz$elm_http$Http$Empty = {ctor: 'Empty'};
var _evancz$elm_http$Http$empty = _evancz$elm_http$Http$Empty;
var _evancz$elm_http$Http$FileData = F3(
	function (a, b, c) {
		return {ctor: 'FileData', _0: a, _1: b, _2: c};
	});
var _evancz$elm_http$Http$BlobData = F3(
	function (a, b, c) {
		return {ctor: 'BlobData', _0: a, _1: b, _2: c};
	});
var _evancz$elm_http$Http$blobData = _evancz$elm_http$Http$BlobData;
var _evancz$elm_http$Http$StringData = F2(
	function (a, b) {
		return {ctor: 'StringData', _0: a, _1: b};
	});
var _evancz$elm_http$Http$stringData = _evancz$elm_http$Http$StringData;
var _evancz$elm_http$Http$Blob = function (a) {
	return {ctor: 'Blob', _0: a};
};
var _evancz$elm_http$Http$Text = function (a) {
	return {ctor: 'Text', _0: a};
};
var _evancz$elm_http$Http$RawNetworkError = {ctor: 'RawNetworkError'};
var _evancz$elm_http$Http$RawTimeout = {ctor: 'RawTimeout'};
var _evancz$elm_http$Http$BadResponse = F2(
	function (a, b) {
		return {ctor: 'BadResponse', _0: a, _1: b};
	});
var _evancz$elm_http$Http$UnexpectedPayload = function (a) {
	return {ctor: 'UnexpectedPayload', _0: a};
};
var _evancz$elm_http$Http$handleResponse = F2(
	function (handle, response) {
		if ((_elm_lang$core$Native_Utils.cmp(200, response.status) < 1) && (_elm_lang$core$Native_Utils.cmp(response.status, 300) < 0)) {
			var _p3 = response.value;
			if (_p3.ctor === 'Text') {
				return handle(_p3._0);
			} else {
				return _elm_lang$core$Task$fail(
					_evancz$elm_http$Http$UnexpectedPayload('Response body is a blob, expecting a string.'));
			}
		} else {
			return _elm_lang$core$Task$fail(
				A2(_evancz$elm_http$Http$BadResponse, response.status, response.statusText));
		}
	});
var _evancz$elm_http$Http$NetworkError = {ctor: 'NetworkError'};
var _evancz$elm_http$Http$Timeout = {ctor: 'Timeout'};
var _evancz$elm_http$Http$promoteError = function (rawError) {
	var _p4 = rawError;
	if (_p4.ctor === 'RawTimeout') {
		return _evancz$elm_http$Http$Timeout;
	} else {
		return _evancz$elm_http$Http$NetworkError;
	}
};
var _evancz$elm_http$Http$getString = function (url) {
	var request = {
		verb: 'GET',
		headers: _elm_lang$core$Native_List.fromArray(
			[]),
		url: url,
		body: _evancz$elm_http$Http$empty
	};
	return A2(
		_elm_lang$core$Task$andThen,
		A2(
			_elm_lang$core$Task$mapError,
			_evancz$elm_http$Http$promoteError,
			A2(_evancz$elm_http$Http$send, _evancz$elm_http$Http$defaultSettings, request)),
		_evancz$elm_http$Http$handleResponse(_elm_lang$core$Task$succeed));
};
var _evancz$elm_http$Http$fromJson = F2(
	function (decoder, response) {
		var decode = function (str) {
			var _p5 = A2(_elm_lang$core$Json_Decode$decodeString, decoder, str);
			if (_p5.ctor === 'Ok') {
				return _elm_lang$core$Task$succeed(_p5._0);
			} else {
				return _elm_lang$core$Task$fail(
					_evancz$elm_http$Http$UnexpectedPayload(_p5._0));
			}
		};
		return A2(
			_elm_lang$core$Task$andThen,
			A2(_elm_lang$core$Task$mapError, _evancz$elm_http$Http$promoteError, response),
			_evancz$elm_http$Http$handleResponse(decode));
	});
var _evancz$elm_http$Http$get = F2(
	function (decoder, url) {
		var request = {
			verb: 'GET',
			headers: _elm_lang$core$Native_List.fromArray(
				[]),
			url: url,
			body: _evancz$elm_http$Http$empty
		};
		return A2(
			_evancz$elm_http$Http$fromJson,
			decoder,
			A2(_evancz$elm_http$Http$send, _evancz$elm_http$Http$defaultSettings, request));
	});
var _evancz$elm_http$Http$post = F3(
	function (decoder, url, body) {
		var request = {
			verb: 'POST',
			headers: _elm_lang$core$Native_List.fromArray(
				[]),
			url: url,
			body: body
		};
		return A2(
			_evancz$elm_http$Http$fromJson,
			decoder,
			A2(_evancz$elm_http$Http$send, _evancz$elm_http$Http$defaultSettings, request));
	});

var _imeckler$ratio$Ratio$toFloat = function (_p0) {
	var _p1 = _p0;
	return _elm_lang$core$Basics$toFloat(_p1._0) / _elm_lang$core$Basics$toFloat(_p1._1);
};
var _imeckler$ratio$Ratio$split = function (_p2) {
	var _p3 = _p2;
	return {ctor: '_Tuple2', _0: _p3._0, _1: _p3._1};
};
var _imeckler$ratio$Ratio$denominator = function (_p4) {
	var _p5 = _p4;
	return _p5._1;
};
var _imeckler$ratio$Ratio$numerator = function (_p6) {
	var _p7 = _p6;
	return _p7._0;
};
var _imeckler$ratio$Ratio$gcd = F2(
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
var _imeckler$ratio$Ratio$Ratio = F2(
	function (a, b) {
		return {ctor: 'Ratio', _0: a, _1: b};
	});
var _imeckler$ratio$Ratio$normalize = function (_p8) {
	var _p9 = _p8;
	var _p11 = _p9._1;
	var _p10 = _p9._0;
	var k = A2(_imeckler$ratio$Ratio$gcd, _p10, _p11) * ((_elm_lang$core$Native_Utils.cmp(_p11, 0) < 0) ? -1 : 1);
	return A2(_imeckler$ratio$Ratio$Ratio, (_p10 / k) | 0, (_p11 / k) | 0);
};
var _imeckler$ratio$Ratio$add = F2(
	function (_p13, _p12) {
		var _p14 = _p13;
		var _p17 = _p14._1;
		var _p15 = _p12;
		var _p16 = _p15._1;
		return _imeckler$ratio$Ratio$normalize(
			A2(_imeckler$ratio$Ratio$Ratio, (_p14._0 * _p16) + (_p17 * _p15._0), _p17 * _p16));
	});
var _imeckler$ratio$Ratio$multiply = F2(
	function (_p19, _p18) {
		var _p20 = _p19;
		var _p21 = _p18;
		return _imeckler$ratio$Ratio$normalize(
			A2(_imeckler$ratio$Ratio$Ratio, _p20._0 * _p21._0, _p20._1 * _p21._1));
	});
var _imeckler$ratio$Ratio$divide = F2(
	function (r, _p22) {
		var _p23 = _p22;
		return A2(
			_imeckler$ratio$Ratio$multiply,
			r,
			A2(_imeckler$ratio$Ratio$Ratio, _p23._1, _p23._0));
	});
var _imeckler$ratio$Ratio$negate = function (_p24) {
	var _p25 = _p24;
	return A2(_imeckler$ratio$Ratio$Ratio, 0 - _p25._0, _p25._1);
};
var _imeckler$ratio$Ratio$over = F2(
	function (x, y) {
		return _imeckler$ratio$Ratio$normalize(
			A2(_imeckler$ratio$Ratio$Ratio, x, y));
	});
var _imeckler$ratio$Ratio$fromInt = function (x) {
	return A2(_imeckler$ratio$Ratio$over, x, 1);
};

var _newlandsvalley$elm_abc_player$Combine_Extra$leftBiasedOr = F2(
	function (lp, rp) {
		return _Bogdanp$elm_combine$Combine$primitive(
			function (cx) {
				var res = A2(_Bogdanp$elm_combine$Combine$app, lp, cx);
				var _p0 = res;
				if (_p0._0.ctor === 'Ok') {
					return res;
				} else {
					var res$ = A2(_Bogdanp$elm_combine$Combine$app, rp, cx);
					var _p1 = res$;
					if (_p1._0.ctor === 'Ok') {
						return res$;
					} else {
						return {
							ctor: '_Tuple2',
							_0: _elm_lang$core$Result$Err(
								A2(_elm_lang$core$Basics_ops['++'], _p0._0._0, _p1._0._0)),
							_1: _p0._1
						};
					}
				}
			});
	});
var _newlandsvalley$elm_abc_player$Combine_Extra$manyTill$ = F2(
	function (p, end) {
		var accumulate = F2(
			function (acc, cx) {
				accumulate:
				while (true) {
					var _p2 = A2(_Bogdanp$elm_combine$Combine$app, end, cx);
					if (_p2._0.ctor === 'Ok') {
						return {
							ctor: '_Tuple2',
							_0: _elm_lang$core$Result$Ok(
								_elm_lang$core$List$reverse(acc)),
							_1: _p2._1
						};
					} else {
						var _p3 = A2(_Bogdanp$elm_combine$Combine$app, p, cx);
						if (_p3._0.ctor === 'Ok') {
							var _v4 = A2(_elm_lang$core$List_ops['::'], _p3._0._0, acc),
								_v5 = _p3._1;
							acc = _v4;
							cx = _v5;
							continue accumulate;
						} else {
							return {
								ctor: '_Tuple2',
								_0: _elm_lang$core$Result$Err(_p3._0._0),
								_1: _p3._1
							};
						}
					}
				}
			});
		return _Bogdanp$elm_combine$Combine$primitive(
			accumulate(
				_elm_lang$core$Native_List.fromArray(
					[])));
	});

var _newlandsvalley$elm_abc_player$Abc_ParseTree$middlecOctave = 5;
var _newlandsvalley$elm_abc_player$Abc_ParseTree$AbcNote = F5(
	function (a, b, c, d, e) {
		return {pitchClass: a, accidental: b, octave: c, duration: d, tied: e};
	});
var _newlandsvalley$elm_abc_player$Abc_ParseTree$AbcChord = F2(
	function (a, b) {
		return {notes: a, duration: b};
	});
var _newlandsvalley$elm_abc_player$Abc_ParseTree$Bar = F3(
	function (a, b, c) {
		return {thickness: a, repeat: b, iteration: c};
	});
var _newlandsvalley$elm_abc_player$Abc_ParseTree$KeySignature = F3(
	function (a, b, c) {
		return {pitchClass: a, accidental: b, mode: c};
	});
var _newlandsvalley$elm_abc_player$Abc_ParseTree$TempoSignature = F3(
	function (a, b, c) {
		return {noteLengths: a, bpm: b, marking: c};
	});
var _newlandsvalley$elm_abc_player$Abc_ParseTree$BodyInfo = function (a) {
	return {ctor: 'BodyInfo', _0: a};
};
var _newlandsvalley$elm_abc_player$Abc_ParseTree$Score = function (a) {
	return {ctor: 'Score', _0: a};
};
var _newlandsvalley$elm_abc_player$Abc_ParseTree$Discretional = {ctor: 'Discretional'};
var _newlandsvalley$elm_abc_player$Abc_ParseTree$RightOfNextSymbol = {ctor: 'RightOfNextSymbol'};
var _newlandsvalley$elm_abc_player$Abc_ParseTree$LeftOfNextSymbol = {ctor: 'LeftOfNextSymbol'};
var _newlandsvalley$elm_abc_player$Abc_ParseTree$BelowNextSymbol = {ctor: 'BelowNextSymbol'};
var _newlandsvalley$elm_abc_player$Abc_ParseTree$AboveNextSymbol = {ctor: 'AboveNextSymbol'};
var _newlandsvalley$elm_abc_player$Abc_ParseTree$Continuation = {ctor: 'Continuation'};
var _newlandsvalley$elm_abc_player$Abc_ParseTree$Ignore = {ctor: 'Ignore'};
var _newlandsvalley$elm_abc_player$Abc_ParseTree$Spacer = function (a) {
	return {ctor: 'Spacer', _0: a};
};
var _newlandsvalley$elm_abc_player$Abc_ParseTree$NoteSequence = function (a) {
	return {ctor: 'NoteSequence', _0: a};
};
var _newlandsvalley$elm_abc_player$Abc_ParseTree$Inline = function (a) {
	return {ctor: 'Inline', _0: a};
};
var _newlandsvalley$elm_abc_player$Abc_ParseTree$Chord = function (a) {
	return {ctor: 'Chord', _0: a};
};
var _newlandsvalley$elm_abc_player$Abc_ParseTree$ChordSymbol = function (a) {
	return {ctor: 'ChordSymbol', _0: a};
};
var _newlandsvalley$elm_abc_player$Abc_ParseTree$Annotation = F2(
	function (a, b) {
		return {ctor: 'Annotation', _0: a, _1: b};
	});
var _newlandsvalley$elm_abc_player$Abc_ParseTree$GraceNote = F2(
	function (a, b) {
		return {ctor: 'GraceNote', _0: a, _1: b};
	});
var _newlandsvalley$elm_abc_player$Abc_ParseTree$Slur = function (a) {
	return {ctor: 'Slur', _0: a};
};
var _newlandsvalley$elm_abc_player$Abc_ParseTree$Decoration = function (a) {
	return {ctor: 'Decoration', _0: a};
};
var _newlandsvalley$elm_abc_player$Abc_ParseTree$Tuplet = F2(
	function (a, b) {
		return {ctor: 'Tuplet', _0: a, _1: b};
	});
var _newlandsvalley$elm_abc_player$Abc_ParseTree$Rest = function (a) {
	return {ctor: 'Rest', _0: a};
};
var _newlandsvalley$elm_abc_player$Abc_ParseTree$BrokenRhythmPair = F3(
	function (a, b, c) {
		return {ctor: 'BrokenRhythmPair', _0: a, _1: b, _2: c};
	});
var _newlandsvalley$elm_abc_player$Abc_ParseTree$Note = function (a) {
	return {ctor: 'Note', _0: a};
};
var _newlandsvalley$elm_abc_player$Abc_ParseTree$Barline = function (a) {
	return {ctor: 'Barline', _0: a};
};
var _newlandsvalley$elm_abc_player$Abc_ParseTree$ThickThin = {ctor: 'ThickThin'};
var _newlandsvalley$elm_abc_player$Abc_ParseTree$ThinThick = {ctor: 'ThinThick'};
var _newlandsvalley$elm_abc_player$Abc_ParseTree$ThinThin = {ctor: 'ThinThin'};
var _newlandsvalley$elm_abc_player$Abc_ParseTree$Thin = {ctor: 'Thin'};
var _newlandsvalley$elm_abc_player$Abc_ParseTree$BeginAndEnd = {ctor: 'BeginAndEnd'};
var _newlandsvalley$elm_abc_player$Abc_ParseTree$End = {ctor: 'End'};
var _newlandsvalley$elm_abc_player$Abc_ParseTree$Begin = {ctor: 'Begin'};
var _newlandsvalley$elm_abc_player$Abc_ParseTree$Locrian = {ctor: 'Locrian'};
var _newlandsvalley$elm_abc_player$Abc_ParseTree$Aeolian = {ctor: 'Aeolian'};
var _newlandsvalley$elm_abc_player$Abc_ParseTree$Mixolydian = {ctor: 'Mixolydian'};
var _newlandsvalley$elm_abc_player$Abc_ParseTree$Lydian = {ctor: 'Lydian'};
var _newlandsvalley$elm_abc_player$Abc_ParseTree$Phrygian = {ctor: 'Phrygian'};
var _newlandsvalley$elm_abc_player$Abc_ParseTree$Dorian = {ctor: 'Dorian'};
var _newlandsvalley$elm_abc_player$Abc_ParseTree$Ionian = {ctor: 'Ionian'};
var _newlandsvalley$elm_abc_player$Abc_ParseTree$Minor = {ctor: 'Minor'};
var _newlandsvalley$elm_abc_player$Abc_ParseTree$Major = {ctor: 'Major'};
var _newlandsvalley$elm_abc_player$Abc_ParseTree$Natural = {ctor: 'Natural'};
var _newlandsvalley$elm_abc_player$Abc_ParseTree$DoubleFlat = {ctor: 'DoubleFlat'};
var _newlandsvalley$elm_abc_player$Abc_ParseTree$DoubleSharp = {ctor: 'DoubleSharp'};
var _newlandsvalley$elm_abc_player$Abc_ParseTree$Flat = {ctor: 'Flat'};
var _newlandsvalley$elm_abc_player$Abc_ParseTree$Sharp = {ctor: 'Sharp'};
var _newlandsvalley$elm_abc_player$Abc_ParseTree$G = {ctor: 'G'};
var _newlandsvalley$elm_abc_player$Abc_ParseTree$F = {ctor: 'F'};
var _newlandsvalley$elm_abc_player$Abc_ParseTree$E = {ctor: 'E'};
var _newlandsvalley$elm_abc_player$Abc_ParseTree$D = {ctor: 'D'};
var _newlandsvalley$elm_abc_player$Abc_ParseTree$C = {ctor: 'C'};
var _newlandsvalley$elm_abc_player$Abc_ParseTree$B = {ctor: 'B'};
var _newlandsvalley$elm_abc_player$Abc_ParseTree$A = {ctor: 'A'};
var _newlandsvalley$elm_abc_player$Abc_ParseTree$RightArrow = function (a) {
	return {ctor: 'RightArrow', _0: a};
};
var _newlandsvalley$elm_abc_player$Abc_ParseTree$LeftArrow = function (a) {
	return {ctor: 'LeftArrow', _0: a};
};
var _newlandsvalley$elm_abc_player$Abc_ParseTree$UnsupportedHeader = {ctor: 'UnsupportedHeader'};
var _newlandsvalley$elm_abc_player$Abc_ParseTree$Comment = function (a) {
	return {ctor: 'Comment', _0: a};
};
var _newlandsvalley$elm_abc_player$Abc_ParseTree$FieldContinuation = function (a) {
	return {ctor: 'FieldContinuation', _0: a};
};
var _newlandsvalley$elm_abc_player$Abc_ParseTree$Transcription = function (a) {
	return {ctor: 'Transcription', _0: a};
};
var _newlandsvalley$elm_abc_player$Abc_ParseTree$ReferenceNumber = function (a) {
	return {ctor: 'ReferenceNumber', _0: a};
};
var _newlandsvalley$elm_abc_player$Abc_ParseTree$WordsAligned = function (a) {
	return {ctor: 'WordsAligned', _0: a};
};
var _newlandsvalley$elm_abc_player$Abc_ParseTree$WordsAfter = function (a) {
	return {ctor: 'WordsAfter', _0: a};
};
var _newlandsvalley$elm_abc_player$Abc_ParseTree$Voice = function (a) {
	return {ctor: 'Voice', _0: a};
};
var _newlandsvalley$elm_abc_player$Abc_ParseTree$UserDefined = function (a) {
	return {ctor: 'UserDefined', _0: a};
};
var _newlandsvalley$elm_abc_player$Abc_ParseTree$Title = function (a) {
	return {ctor: 'Title', _0: a};
};
var _newlandsvalley$elm_abc_player$Abc_ParseTree$SymbolLine = function (a) {
	return {ctor: 'SymbolLine', _0: a};
};
var _newlandsvalley$elm_abc_player$Abc_ParseTree$Source = function (a) {
	return {ctor: 'Source', _0: a};
};
var _newlandsvalley$elm_abc_player$Abc_ParseTree$Remark = function (a) {
	return {ctor: 'Remark', _0: a};
};
var _newlandsvalley$elm_abc_player$Abc_ParseTree$Rhythm = function (a) {
	return {ctor: 'Rhythm', _0: a};
};
var _newlandsvalley$elm_abc_player$Abc_ParseTree$Tempo = function (a) {
	return {ctor: 'Tempo', _0: a};
};
var _newlandsvalley$elm_abc_player$Abc_ParseTree$Parts = function (a) {
	return {ctor: 'Parts', _0: a};
};
var _newlandsvalley$elm_abc_player$Abc_ParseTree$Origin = function (a) {
	return {ctor: 'Origin', _0: a};
};
var _newlandsvalley$elm_abc_player$Abc_ParseTree$Notes = function (a) {
	return {ctor: 'Notes', _0: a};
};
var _newlandsvalley$elm_abc_player$Abc_ParseTree$Macro = function (a) {
	return {ctor: 'Macro', _0: a};
};
var _newlandsvalley$elm_abc_player$Abc_ParseTree$Meter = function (a) {
	return {ctor: 'Meter', _0: a};
};
var _newlandsvalley$elm_abc_player$Abc_ParseTree$UnitNoteLength = function (a) {
	return {ctor: 'UnitNoteLength', _0: a};
};
var _newlandsvalley$elm_abc_player$Abc_ParseTree$Key = function (a) {
	return {ctor: 'Key', _0: a};
};
var _newlandsvalley$elm_abc_player$Abc_ParseTree$Instruction = function (a) {
	return {ctor: 'Instruction', _0: a};
};
var _newlandsvalley$elm_abc_player$Abc_ParseTree$History = function (a) {
	return {ctor: 'History', _0: a};
};
var _newlandsvalley$elm_abc_player$Abc_ParseTree$Group = function (a) {
	return {ctor: 'Group', _0: a};
};
var _newlandsvalley$elm_abc_player$Abc_ParseTree$FileUrl = function (a) {
	return {ctor: 'FileUrl', _0: a};
};
var _newlandsvalley$elm_abc_player$Abc_ParseTree$Discography = function (a) {
	return {ctor: 'Discography', _0: a};
};
var _newlandsvalley$elm_abc_player$Abc_ParseTree$Composer = function (a) {
	return {ctor: 'Composer', _0: a};
};
var _newlandsvalley$elm_abc_player$Abc_ParseTree$Book = function (a) {
	return {ctor: 'Book', _0: a};
};
var _newlandsvalley$elm_abc_player$Abc_ParseTree$Area = function (a) {
	return {ctor: 'Area', _0: a};
};

var _newlandsvalley$elm_abc_player$Abc$parseError = function (pe) {
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
var _newlandsvalley$elm_abc_player$Abc$toTupletInt = function (s) {
	return A2(
		_elm_lang$core$Maybe$withDefault,
		3,
		_elm_lang$core$Result$toMaybe(
			_elm_lang$core$String$toInt(s)));
};
var _newlandsvalley$elm_abc_player$Abc$buildAnnotation = function (s) {
	var firstChar = _elm_lang$core$List$head(
		_elm_lang$core$String$toList(s));
	var placement = function () {
		var _p0 = firstChar;
		_v0_4:
		do {
			if (_p0.ctor === 'Just') {
				switch (_p0._0.valueOf()) {
					case '^':
						return _newlandsvalley$elm_abc_player$Abc_ParseTree$AboveNextSymbol;
					case '_':
						return _newlandsvalley$elm_abc_player$Abc_ParseTree$BelowNextSymbol;
					case '<':
						return _newlandsvalley$elm_abc_player$Abc_ParseTree$LeftOfNextSymbol;
					case '>':
						return _newlandsvalley$elm_abc_player$Abc_ParseTree$RightOfNextSymbol;
					default:
						break _v0_4;
				}
			} else {
				break _v0_4;
			}
		} while(false);
		return _newlandsvalley$elm_abc_player$Abc_ParseTree$Discretional;
	}();
	return A2(_newlandsvalley$elm_abc_player$Abc_ParseTree$Annotation, placement, s);
};
var _newlandsvalley$elm_abc_player$Abc$buildBrokenOperator = function (s) {
	return A2(_elm_lang$core$String$startsWith, '<', s) ? _newlandsvalley$elm_abc_player$Abc_ParseTree$LeftArrow(
		_elm_lang$core$String$length(s)) : _newlandsvalley$elm_abc_player$Abc_ParseTree$RightArrow(
		_elm_lang$core$String$length(s));
};
var _newlandsvalley$elm_abc_player$Abc$buildTupletSignature = F3(
	function (ps, mq, mr) {
		var p = _newlandsvalley$elm_abc_player$Abc$toTupletInt(ps);
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
			A2(_elm_lang$core$Maybe$map, _newlandsvalley$elm_abc_player$Abc$toTupletInt, mq));
		var r = A2(
			_elm_lang$core$Maybe$withDefault,
			p,
			A2(_elm_lang$core$Maybe$map, _newlandsvalley$elm_abc_player$Abc$toTupletInt, mr));
		return {ctor: '_Tuple3', _0: p, _1: q, _2: r};
	});
var _newlandsvalley$elm_abc_player$Abc$buildChord = F2(
	function (ns, ml) {
		var l = A2(
			_elm_lang$core$Maybe$withDefault,
			_imeckler$ratio$Ratio$fromInt(1),
			ml);
		return {notes: ns, duration: l};
	});
var _newlandsvalley$elm_abc_player$Abc$buildKeyAccidentals = F2(
	function (mac, acs) {
		var _p2 = mac;
		if (_p2.ctor === 'Just') {
			return A2(_elm_lang$core$List_ops['::'], _p2._0, acs);
		} else {
			return acs;
		}
	});
var _newlandsvalley$elm_abc_player$Abc$buildAccidental = function (s) {
	var _p3 = s;
	switch (_p3) {
		case '^^':
			return _newlandsvalley$elm_abc_player$Abc_ParseTree$DoubleSharp;
		case '__':
			return _newlandsvalley$elm_abc_player$Abc_ParseTree$DoubleFlat;
		case '^':
			return _newlandsvalley$elm_abc_player$Abc_ParseTree$Sharp;
		case '_':
			return _newlandsvalley$elm_abc_player$Abc_ParseTree$Flat;
		default:
			return _newlandsvalley$elm_abc_player$Abc_ParseTree$Natural;
	}
};
var _newlandsvalley$elm_abc_player$Abc$scientificPitchNotation = F2(
	function (pc, oct) {
		return A2(
			_elm_lang$core$Regex$contains,
			_elm_lang$core$Regex$regex('[A-G]'),
			pc) ? (_newlandsvalley$elm_abc_player$Abc_ParseTree$middlecOctave + oct) : ((_newlandsvalley$elm_abc_player$Abc_ParseTree$middlecOctave + 1) + oct);
	});
var _newlandsvalley$elm_abc_player$Abc$buildBarline = F2(
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
		var repeat = _elm_lang$core$Native_Utils.eq(repeatCount, 0) ? _elm_lang$core$Maybe$Nothing : (_elm_lang$core$Native_Utils.eq(repeatCount, 1) ? (A2(_elm_lang$core$String$contains, ':|', normalised) ? _elm_lang$core$Maybe$Just(_newlandsvalley$elm_abc_player$Abc_ParseTree$End) : _elm_lang$core$Maybe$Just(_newlandsvalley$elm_abc_player$Abc_ParseTree$Begin)) : _elm_lang$core$Maybe$Just(_newlandsvalley$elm_abc_player$Abc_ParseTree$BeginAndEnd));
		var thickness = A2(_elm_lang$core$String$contains, '|]', s) ? _newlandsvalley$elm_abc_player$Abc_ParseTree$ThinThick : (A2(_elm_lang$core$String$contains, '[|', s) ? _newlandsvalley$elm_abc_player$Abc_ParseTree$ThickThin : (A2(_elm_lang$core$String$contains, '||', s) ? _newlandsvalley$elm_abc_player$Abc_ParseTree$ThinThin : _newlandsvalley$elm_abc_player$Abc_ParseTree$Thin));
		return _newlandsvalley$elm_abc_player$Abc_ParseTree$Barline(
			{thickness: thickness, repeat: repeat, iteration: i});
	});
var _newlandsvalley$elm_abc_player$Abc$buildKey = F3(
	function (c, ks, ka) {
		return _newlandsvalley$elm_abc_player$Abc_ParseTree$Key(
			{ctor: '_Tuple2', _0: ks, _1: ka});
	});
var _newlandsvalley$elm_abc_player$Abc$pitchClassDict = _elm_lang$core$Dict$fromList(
	_elm_lang$core$Native_List.fromArray(
		[
			{ctor: '_Tuple2', _0: 'A', _1: _newlandsvalley$elm_abc_player$Abc_ParseTree$A},
			{ctor: '_Tuple2', _0: 'B', _1: _newlandsvalley$elm_abc_player$Abc_ParseTree$B},
			{ctor: '_Tuple2', _0: 'C', _1: _newlandsvalley$elm_abc_player$Abc_ParseTree$C},
			{ctor: '_Tuple2', _0: 'D', _1: _newlandsvalley$elm_abc_player$Abc_ParseTree$D},
			{ctor: '_Tuple2', _0: 'E', _1: _newlandsvalley$elm_abc_player$Abc_ParseTree$E},
			{ctor: '_Tuple2', _0: 'F', _1: _newlandsvalley$elm_abc_player$Abc_ParseTree$F},
			{ctor: '_Tuple2', _0: 'G', _1: _newlandsvalley$elm_abc_player$Abc_ParseTree$G}
		]));
var _newlandsvalley$elm_abc_player$Abc$lookupPitch = function (p) {
	return A2(
		_elm_lang$core$Maybe$withDefault,
		_newlandsvalley$elm_abc_player$Abc_ParseTree$C,
		A2(
			_elm_lang$core$Dict$get,
			_elm_lang$core$String$toUpper(p),
			_newlandsvalley$elm_abc_player$Abc$pitchClassDict));
};
var _newlandsvalley$elm_abc_player$Abc$buildKeySignature = F3(
	function (pStr, ma, mm) {
		return {
			pitchClass: _newlandsvalley$elm_abc_player$Abc$lookupPitch(pStr),
			accidental: ma,
			mode: A2(_elm_lang$core$Maybe$withDefault, _newlandsvalley$elm_abc_player$Abc_ParseTree$Major, mm)
		};
	});
var _newlandsvalley$elm_abc_player$Abc$buildNote = F5(
	function (macc, pitchStr, octave, ml, mt) {
		var tied = function () {
			var _p5 = mt;
			if (_p5.ctor === 'Just') {
				return true;
			} else {
				return false;
			}
		}();
		var spn = A2(_newlandsvalley$elm_abc_player$Abc$scientificPitchNotation, pitchStr, octave);
		var p = _newlandsvalley$elm_abc_player$Abc$lookupPitch(
			_elm_lang$core$String$toUpper(pitchStr));
		var l = A2(
			_elm_lang$core$Maybe$withDefault,
			_imeckler$ratio$Ratio$fromInt(1),
			ml);
		return {pitchClass: p, accidental: macc, octave: spn, duration: l, tied: tied};
	});
var _newlandsvalley$elm_abc_player$Abc$buildKeyAccidental = F2(
	function (a, pitchStr) {
		var pc = _newlandsvalley$elm_abc_player$Abc$lookupPitch(pitchStr);
		return {ctor: '_Tuple2', _0: pc, _1: a};
	});
var _newlandsvalley$elm_abc_player$Abc$buildTempoSignature = F5(
	function (ms1, fs, c, i, ms2) {
		var noteLengths = _elm_lang$core$List$isEmpty(fs) ? _elm_lang$core$Native_List.fromArray(
			[
				A2(_imeckler$ratio$Ratio$over, 1, 4)
			]) : fs;
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
var _newlandsvalley$elm_abc_player$Abc$buildRationalFromExponential = function (i) {
	return A2(
		_imeckler$ratio$Ratio$over,
		1,
		Math.pow(2, i));
};
var _newlandsvalley$elm_abc_player$Abc$invert = function (r) {
	var unit = _imeckler$ratio$Ratio$fromInt(1);
	return A2(_imeckler$ratio$Ratio$divide, unit, r);
};
var _newlandsvalley$elm_abc_player$Abc$tup = A2(
	_Bogdanp$elm_combine$Combine_Infix_ops['<$>'],
	_elm_community$maybe_extra$Maybe_Extra$join,
	_Bogdanp$elm_combine$Combine$maybe(
		A2(
			_Bogdanp$elm_combine$Combine_Infix_ops['*>'],
			_Bogdanp$elm_combine$Combine_Char$char(
				_elm_lang$core$Native_Utils.chr(':')),
			_Bogdanp$elm_combine$Combine$maybe(
				_Bogdanp$elm_combine$Combine$regex('[2-9]')))));
var _newlandsvalley$elm_abc_player$Abc$integralAsRational = A2(_Bogdanp$elm_combine$Combine_Infix_ops['<$>'], _imeckler$ratio$Ratio$fromInt, _Bogdanp$elm_combine$Combine_Num$int);
var _newlandsvalley$elm_abc_player$Abc$maybeTie = A2(
	_Bogdanp$elm_combine$Combine_Infix_ops['<?>'],
	_Bogdanp$elm_combine$Combine$maybe(
		_Bogdanp$elm_combine$Combine_Char$char(
			_elm_lang$core$Native_Utils.chr('-'))),
	'tie');
var _newlandsvalley$elm_abc_player$Abc$octaveShift = function (s) {
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
	return _elm_lang$core$Basics$fst(octs) - _elm_lang$core$Basics$snd(octs);
};
var _newlandsvalley$elm_abc_player$Abc$moveOctave = A2(
	_Bogdanp$elm_combine$Combine_Infix_ops['<$>'],
	_newlandsvalley$elm_abc_player$Abc$octaveShift,
	_Bogdanp$elm_combine$Combine$regex('[\',]*'));
var _newlandsvalley$elm_abc_player$Abc$accidental = A2(
	_Bogdanp$elm_combine$Combine_Infix_ops['<$>'],
	_newlandsvalley$elm_abc_player$Abc$buildAccidental,
	_Bogdanp$elm_combine$Combine$choice(
		_elm_lang$core$Native_List.fromArray(
			[
				_Bogdanp$elm_combine$Combine$string('^^'),
				_Bogdanp$elm_combine$Combine$string('__'),
				_Bogdanp$elm_combine$Combine$string('^'),
				_Bogdanp$elm_combine$Combine$string('_'),
				_Bogdanp$elm_combine$Combine$string('=')
			])));
var _newlandsvalley$elm_abc_player$Abc$maybeAccidental = _Bogdanp$elm_combine$Combine$maybe(_newlandsvalley$elm_abc_player$Abc$accidental);
var _newlandsvalley$elm_abc_player$Abc$pitch = _Bogdanp$elm_combine$Combine$regex('[A-Ga-g]');
var _newlandsvalley$elm_abc_player$Abc$inlineInfo = function (isInline) {
	var pattern = isInline ? '[^\r\n\\[\\]]*' : '[^\r\n]*';
	return _Bogdanp$elm_combine$Combine$regex(pattern);
};
var _newlandsvalley$elm_abc_player$Abc$strToEol = _Bogdanp$elm_combine$Combine$regex('[^\r\n]*');
var _newlandsvalley$elm_abc_player$Abc$annotationString = A2(
	_Bogdanp$elm_combine$Combine_Infix_ops['<?>'],
	A2(
		_Bogdanp$elm_combine$Combine_Infix_ops['<*'],
		A2(
			_Bogdanp$elm_combine$Combine_Infix_ops['*>'],
			_Bogdanp$elm_combine$Combine$string('\"'),
			_Bogdanp$elm_combine$Combine$regex('[\\^\\>\\<-@](\\\\\"|[^\"\n])*')),
		_Bogdanp$elm_combine$Combine$string('\"')),
	'annotation');
var _newlandsvalley$elm_abc_player$Abc$quotedString = A2(
	_Bogdanp$elm_combine$Combine_Infix_ops['<?>'],
	A2(
		_Bogdanp$elm_combine$Combine_Infix_ops['<*'],
		A2(
			_Bogdanp$elm_combine$Combine_Infix_ops['*>'],
			_Bogdanp$elm_combine$Combine$string('\"'),
			_Bogdanp$elm_combine$Combine$regex('(\\\\\"|[^\"\n])*')),
		_Bogdanp$elm_combine$Combine$string('\"')),
	'quoted string');
var _newlandsvalley$elm_abc_player$Abc$continuation = A2(
	_Bogdanp$elm_combine$Combine_Infix_ops['<?>'],
	A2(
		_Bogdanp$elm_combine$Combine_Infix_ops['<*'],
		A2(
			_Bogdanp$elm_combine$Combine_Infix_ops['<*'],
			_Bogdanp$elm_combine$Combine$succeed(_newlandsvalley$elm_abc_player$Abc_ParseTree$Continuation),
			_Bogdanp$elm_combine$Combine_Char$char(
				_elm_lang$core$Native_Utils.chr('\\'))),
		_Bogdanp$elm_combine$Combine$regex('[^\r\n]*')),
	'continuation');
var _newlandsvalley$elm_abc_player$Abc$ignore = A2(
	_Bogdanp$elm_combine$Combine_Infix_ops['<?>'],
	A2(
		_Bogdanp$elm_combine$Combine_Infix_ops['<*'],
		_Bogdanp$elm_combine$Combine$succeed(_newlandsvalley$elm_abc_player$Abc_ParseTree$Ignore),
		_Bogdanp$elm_combine$Combine$regex('[#@;`\\*\\?]+')),
	'ignored character');
var _newlandsvalley$elm_abc_player$Abc$scoreSpace = _Bogdanp$elm_combine$Combine$choice(
	_elm_lang$core$Native_List.fromArray(
		[
			_Bogdanp$elm_combine$Combine_Char$space,
			_Bogdanp$elm_combine$Combine_Char$char(
			_elm_lang$core$Native_Utils.chr('y')),
			_Bogdanp$elm_combine$Combine_Char$tab
		]));
var _newlandsvalley$elm_abc_player$Abc$spacer = A2(
	_Bogdanp$elm_combine$Combine_Infix_ops['<?>'],
	A2(
		_Bogdanp$elm_combine$Combine_Infix_ops['<$>'],
		_newlandsvalley$elm_abc_player$Abc_ParseTree$Spacer,
		A2(
			_Bogdanp$elm_combine$Combine_Infix_ops['<$>'],
			_elm_lang$core$List$length,
			_Bogdanp$elm_combine$Combine$many1(_newlandsvalley$elm_abc_player$Abc$scoreSpace))),
	'space');
var _newlandsvalley$elm_abc_player$Abc$whiteSpace = A2(
	_Bogdanp$elm_combine$Combine_Infix_ops['<$>'],
	_elm_lang$core$String$fromList,
	_Bogdanp$elm_combine$Combine$many(
		_Bogdanp$elm_combine$Combine$choice(
			_elm_lang$core$Native_List.fromArray(
				[_Bogdanp$elm_combine$Combine_Char$space, _Bogdanp$elm_combine$Combine_Char$tab]))));
var _newlandsvalley$elm_abc_player$Abc$headerCode = function (c) {
	return A2(
		_Bogdanp$elm_combine$Combine_Infix_ops['<*'],
		A2(
			_Bogdanp$elm_combine$Combine_Infix_ops['<*'],
			_Bogdanp$elm_combine$Combine_Char$char(c),
			_Bogdanp$elm_combine$Combine_Char$char(
				_elm_lang$core$Native_Utils.chr(':'))),
		_newlandsvalley$elm_abc_player$Abc$whiteSpace);
};
var _newlandsvalley$elm_abc_player$Abc$unsupportedHeaderCode = A2(
	_Bogdanp$elm_combine$Combine_Infix_ops['<*'],
	A2(
		_Bogdanp$elm_combine$Combine_Infix_ops['<*'],
		_Bogdanp$elm_combine$Combine$regex('[a-qt-vx-zEJ]'),
		_Bogdanp$elm_combine$Combine_Char$char(
			_elm_lang$core$Native_Utils.chr(':'))),
	_newlandsvalley$elm_abc_player$Abc$whiteSpace);
var _newlandsvalley$elm_abc_player$Abc$spacedQuotedString = A2(
	_Bogdanp$elm_combine$Combine_Infix_ops['<*'],
	A2(_Bogdanp$elm_combine$Combine_Infix_ops['*>'], _newlandsvalley$elm_abc_player$Abc$whiteSpace, _newlandsvalley$elm_abc_player$Abc$quotedString),
	_newlandsvalley$elm_abc_player$Abc$whiteSpace);
var _newlandsvalley$elm_abc_player$Abc$tupletSignature = A2(
	_Bogdanp$elm_combine$Combine_Infix_ops['<*'],
	A2(
		_Bogdanp$elm_combine$Combine_Infix_ops['<*>'],
		A2(
			_Bogdanp$elm_combine$Combine_Infix_ops['<*>'],
			A2(
				_Bogdanp$elm_combine$Combine_Infix_ops['<$>'],
				_newlandsvalley$elm_abc_player$Abc$buildTupletSignature,
				_Bogdanp$elm_combine$Combine$regex('[2-9]')),
			_newlandsvalley$elm_abc_player$Abc$tup),
		_newlandsvalley$elm_abc_player$Abc$tup),
	_newlandsvalley$elm_abc_player$Abc$whiteSpace);
var _newlandsvalley$elm_abc_player$Abc$comment = A2(
	_Bogdanp$elm_combine$Combine_Infix_ops['<?>'],
	A2(
		_Bogdanp$elm_combine$Combine_Infix_ops['<$>'],
		_newlandsvalley$elm_abc_player$Abc_ParseTree$Comment,
		A2(
			_Bogdanp$elm_combine$Combine_Infix_ops['*>'],
			_Bogdanp$elm_combine$Combine$regex('%'),
			_newlandsvalley$elm_abc_player$Abc$strToEol)),
	'comment');
var _newlandsvalley$elm_abc_player$Abc$unsupportedHeader = A2(
	_Bogdanp$elm_combine$Combine_Infix_ops['<?>'],
	A2(
		_Bogdanp$elm_combine$Combine_Infix_ops['<*'],
		A2(_Bogdanp$elm_combine$Combine_Infix_ops['<$'], _newlandsvalley$elm_abc_player$Abc_ParseTree$UnsupportedHeader, _newlandsvalley$elm_abc_player$Abc$unsupportedHeaderCode),
		_newlandsvalley$elm_abc_player$Abc$strToEol),
	'unsupported header');
var _newlandsvalley$elm_abc_player$Abc$fieldContinuation = A2(
	_Bogdanp$elm_combine$Combine_Infix_ops['<?>'],
	A2(
		_Bogdanp$elm_combine$Combine_Infix_ops['<$>'],
		_newlandsvalley$elm_abc_player$Abc_ParseTree$FieldContinuation,
		A2(
			_Bogdanp$elm_combine$Combine_Infix_ops['*>'],
			_newlandsvalley$elm_abc_player$Abc$headerCode(
				_elm_lang$core$Native_Utils.chr('+')),
			_newlandsvalley$elm_abc_player$Abc$strToEol)),
	'field continuation');
var _newlandsvalley$elm_abc_player$Abc$transcription = A2(
	_Bogdanp$elm_combine$Combine_Infix_ops['<?>'],
	A2(
		_Bogdanp$elm_combine$Combine_Infix_ops['<$>'],
		_newlandsvalley$elm_abc_player$Abc_ParseTree$Transcription,
		A2(
			_Bogdanp$elm_combine$Combine_Infix_ops['*>'],
			_newlandsvalley$elm_abc_player$Abc$headerCode(
				_elm_lang$core$Native_Utils.chr('Z')),
			_newlandsvalley$elm_abc_player$Abc$strToEol)),
	'Z header');
var _newlandsvalley$elm_abc_player$Abc$referenceNumber = A2(
	_Bogdanp$elm_combine$Combine_Infix_ops['<?>'],
	A2(
		_Bogdanp$elm_combine$Combine_Infix_ops['<$>'],
		_newlandsvalley$elm_abc_player$Abc_ParseTree$ReferenceNumber,
		A2(
			_Bogdanp$elm_combine$Combine_Infix_ops['*>'],
			_newlandsvalley$elm_abc_player$Abc$headerCode(
				_elm_lang$core$Native_Utils.chr('X')),
			_Bogdanp$elm_combine$Combine_Num$int)),
	'x header');
var _newlandsvalley$elm_abc_player$Abc$wordsAligned = function (isInline) {
	return A2(
		_Bogdanp$elm_combine$Combine_Infix_ops['<?>'],
		A2(
			_Bogdanp$elm_combine$Combine_Infix_ops['<$>'],
			_newlandsvalley$elm_abc_player$Abc_ParseTree$WordsAligned,
			A2(
				_Bogdanp$elm_combine$Combine_Infix_ops['*>'],
				_newlandsvalley$elm_abc_player$Abc$headerCode(
					_elm_lang$core$Native_Utils.chr('w')),
				_newlandsvalley$elm_abc_player$Abc$inlineInfo(isInline))),
		'w header');
};
var _newlandsvalley$elm_abc_player$Abc$wordsAfter = function (isInline) {
	return A2(
		_Bogdanp$elm_combine$Combine_Infix_ops['<?>'],
		A2(
			_Bogdanp$elm_combine$Combine_Infix_ops['<$>'],
			_newlandsvalley$elm_abc_player$Abc_ParseTree$WordsAfter,
			A2(
				_Bogdanp$elm_combine$Combine_Infix_ops['*>'],
				_newlandsvalley$elm_abc_player$Abc$headerCode(
					_elm_lang$core$Native_Utils.chr('W')),
				_newlandsvalley$elm_abc_player$Abc$inlineInfo(isInline))),
		'W header');
};
var _newlandsvalley$elm_abc_player$Abc$voice = function (isInline) {
	return A2(
		_Bogdanp$elm_combine$Combine_Infix_ops['<?>'],
		A2(
			_Bogdanp$elm_combine$Combine_Infix_ops['<$>'],
			_newlandsvalley$elm_abc_player$Abc_ParseTree$Voice,
			A2(
				_Bogdanp$elm_combine$Combine_Infix_ops['*>'],
				_newlandsvalley$elm_abc_player$Abc$headerCode(
					_elm_lang$core$Native_Utils.chr('V')),
				_newlandsvalley$elm_abc_player$Abc$inlineInfo(isInline))),
		'V header');
};
var _newlandsvalley$elm_abc_player$Abc$userDefined = function (isInline) {
	return A2(
		_Bogdanp$elm_combine$Combine_Infix_ops['<?>'],
		A2(
			_Bogdanp$elm_combine$Combine_Infix_ops['<$>'],
			_newlandsvalley$elm_abc_player$Abc_ParseTree$UserDefined,
			A2(
				_Bogdanp$elm_combine$Combine_Infix_ops['*>'],
				_newlandsvalley$elm_abc_player$Abc$headerCode(
					_elm_lang$core$Native_Utils.chr('U')),
				_newlandsvalley$elm_abc_player$Abc$inlineInfo(isInline))),
		'U header');
};
var _newlandsvalley$elm_abc_player$Abc$title = function (isInline) {
	return A2(
		_Bogdanp$elm_combine$Combine_Infix_ops['<?>'],
		A2(
			_Bogdanp$elm_combine$Combine_Infix_ops['<$>'],
			_newlandsvalley$elm_abc_player$Abc_ParseTree$Title,
			A2(
				_Bogdanp$elm_combine$Combine_Infix_ops['*>'],
				_newlandsvalley$elm_abc_player$Abc$headerCode(
					_elm_lang$core$Native_Utils.chr('T')),
				_newlandsvalley$elm_abc_player$Abc$inlineInfo(isInline))),
		'T header');
};
var _newlandsvalley$elm_abc_player$Abc$symbolLine = function (isInline) {
	return A2(
		_Bogdanp$elm_combine$Combine_Infix_ops['<?>'],
		A2(
			_Bogdanp$elm_combine$Combine_Infix_ops['<$>'],
			_newlandsvalley$elm_abc_player$Abc_ParseTree$SymbolLine,
			A2(
				_Bogdanp$elm_combine$Combine_Infix_ops['*>'],
				_newlandsvalley$elm_abc_player$Abc$headerCode(
					_elm_lang$core$Native_Utils.chr('s')),
				_newlandsvalley$elm_abc_player$Abc$inlineInfo(isInline))),
		's header');
};
var _newlandsvalley$elm_abc_player$Abc$tuneBodyOnlyInfo = function (isInline) {
	return A2(
		_Bogdanp$elm_combine$Combine_Infix_ops['<?>'],
		_Bogdanp$elm_combine$Combine$choice(
			_elm_lang$core$Native_List.fromArray(
				[
					_newlandsvalley$elm_abc_player$Abc$symbolLine(isInline),
					_newlandsvalley$elm_abc_player$Abc$wordsAligned(isInline)
				])),
		'tune body only info');
};
var _newlandsvalley$elm_abc_player$Abc$source = A2(
	_Bogdanp$elm_combine$Combine_Infix_ops['<?>'],
	A2(
		_Bogdanp$elm_combine$Combine_Infix_ops['<$>'],
		_newlandsvalley$elm_abc_player$Abc_ParseTree$Source,
		A2(
			_Bogdanp$elm_combine$Combine_Infix_ops['*>'],
			_newlandsvalley$elm_abc_player$Abc$headerCode(
				_elm_lang$core$Native_Utils.chr('S')),
			_newlandsvalley$elm_abc_player$Abc$strToEol)),
	'S header');
var _newlandsvalley$elm_abc_player$Abc$remark = function (isInline) {
	return A2(
		_Bogdanp$elm_combine$Combine_Infix_ops['<?>'],
		A2(
			_Bogdanp$elm_combine$Combine_Infix_ops['<$>'],
			_newlandsvalley$elm_abc_player$Abc_ParseTree$Remark,
			A2(
				_Bogdanp$elm_combine$Combine_Infix_ops['*>'],
				_newlandsvalley$elm_abc_player$Abc$headerCode(
					_elm_lang$core$Native_Utils.chr('r')),
				_newlandsvalley$elm_abc_player$Abc$inlineInfo(isInline))),
		'r header');
};
var _newlandsvalley$elm_abc_player$Abc$rhythm = function (isInline) {
	return A2(
		_Bogdanp$elm_combine$Combine_Infix_ops['<?>'],
		A2(
			_Bogdanp$elm_combine$Combine_Infix_ops['<$>'],
			_newlandsvalley$elm_abc_player$Abc_ParseTree$Rhythm,
			A2(
				_Bogdanp$elm_combine$Combine_Infix_ops['*>'],
				_newlandsvalley$elm_abc_player$Abc$headerCode(
					_elm_lang$core$Native_Utils.chr('R')),
				_newlandsvalley$elm_abc_player$Abc$inlineInfo(isInline))),
		'R header');
};
var _newlandsvalley$elm_abc_player$Abc$parts = function (isInline) {
	return A2(
		_Bogdanp$elm_combine$Combine_Infix_ops['<?>'],
		A2(
			_Bogdanp$elm_combine$Combine_Infix_ops['<$>'],
			_newlandsvalley$elm_abc_player$Abc_ParseTree$Parts,
			A2(
				_Bogdanp$elm_combine$Combine_Infix_ops['*>'],
				_newlandsvalley$elm_abc_player$Abc$headerCode(
					_elm_lang$core$Native_Utils.chr('P')),
				_newlandsvalley$elm_abc_player$Abc$inlineInfo(isInline))),
		'P header');
};
var _newlandsvalley$elm_abc_player$Abc$origin = A2(
	_Bogdanp$elm_combine$Combine_Infix_ops['<?>'],
	A2(
		_Bogdanp$elm_combine$Combine_Infix_ops['<$>'],
		_newlandsvalley$elm_abc_player$Abc_ParseTree$Origin,
		A2(
			_Bogdanp$elm_combine$Combine_Infix_ops['*>'],
			_newlandsvalley$elm_abc_player$Abc$headerCode(
				_elm_lang$core$Native_Utils.chr('O')),
			_newlandsvalley$elm_abc_player$Abc$strToEol)),
	'O header');
var _newlandsvalley$elm_abc_player$Abc$notes = function (isInline) {
	return A2(
		_Bogdanp$elm_combine$Combine_Infix_ops['<?>'],
		A2(
			_Bogdanp$elm_combine$Combine_Infix_ops['<$>'],
			_newlandsvalley$elm_abc_player$Abc_ParseTree$Notes,
			A2(
				_Bogdanp$elm_combine$Combine_Infix_ops['*>'],
				_newlandsvalley$elm_abc_player$Abc$headerCode(
					_elm_lang$core$Native_Utils.chr('N')),
				_newlandsvalley$elm_abc_player$Abc$inlineInfo(isInline))),
		'N header');
};
var _newlandsvalley$elm_abc_player$Abc$macro = function (isInline) {
	return A2(
		_Bogdanp$elm_combine$Combine_Infix_ops['<?>'],
		A2(
			_Bogdanp$elm_combine$Combine_Infix_ops['<$>'],
			_newlandsvalley$elm_abc_player$Abc_ParseTree$Macro,
			A2(
				_Bogdanp$elm_combine$Combine_Infix_ops['*>'],
				_newlandsvalley$elm_abc_player$Abc$headerCode(
					_elm_lang$core$Native_Utils.chr('m')),
				_newlandsvalley$elm_abc_player$Abc$inlineInfo(isInline))),
		'm header');
};
var _newlandsvalley$elm_abc_player$Abc$instruction = function (isInline) {
	return A2(
		_Bogdanp$elm_combine$Combine_Infix_ops['<?>'],
		A2(
			_Bogdanp$elm_combine$Combine_Infix_ops['<$>'],
			_newlandsvalley$elm_abc_player$Abc_ParseTree$Instruction,
			A2(
				_Bogdanp$elm_combine$Combine_Infix_ops['*>'],
				_newlandsvalley$elm_abc_player$Abc$headerCode(
					_elm_lang$core$Native_Utils.chr('I')),
				_newlandsvalley$elm_abc_player$Abc$inlineInfo(isInline))),
		'I header');
};
var _newlandsvalley$elm_abc_player$Abc$history = A2(
	_Bogdanp$elm_combine$Combine_Infix_ops['<?>'],
	A2(
		_Bogdanp$elm_combine$Combine_Infix_ops['<$>'],
		_newlandsvalley$elm_abc_player$Abc_ParseTree$History,
		A2(
			_Bogdanp$elm_combine$Combine_Infix_ops['*>'],
			_newlandsvalley$elm_abc_player$Abc$headerCode(
				_elm_lang$core$Native_Utils.chr('H')),
			_newlandsvalley$elm_abc_player$Abc$strToEol)),
	'H header');
var _newlandsvalley$elm_abc_player$Abc$group = A2(
	_Bogdanp$elm_combine$Combine_Infix_ops['<?>'],
	A2(
		_Bogdanp$elm_combine$Combine_Infix_ops['<$>'],
		_newlandsvalley$elm_abc_player$Abc_ParseTree$Group,
		A2(
			_Bogdanp$elm_combine$Combine_Infix_ops['*>'],
			_newlandsvalley$elm_abc_player$Abc$headerCode(
				_elm_lang$core$Native_Utils.chr('G')),
			_newlandsvalley$elm_abc_player$Abc$strToEol)),
	'G header');
var _newlandsvalley$elm_abc_player$Abc$fileUrl = A2(
	_Bogdanp$elm_combine$Combine_Infix_ops['<?>'],
	A2(
		_Bogdanp$elm_combine$Combine_Infix_ops['<$>'],
		_newlandsvalley$elm_abc_player$Abc_ParseTree$FileUrl,
		A2(
			_Bogdanp$elm_combine$Combine_Infix_ops['*>'],
			_newlandsvalley$elm_abc_player$Abc$headerCode(
				_elm_lang$core$Native_Utils.chr('F')),
			_newlandsvalley$elm_abc_player$Abc$strToEol)),
	'F header');
var _newlandsvalley$elm_abc_player$Abc$discography = A2(
	_Bogdanp$elm_combine$Combine_Infix_ops['<?>'],
	A2(
		_Bogdanp$elm_combine$Combine_Infix_ops['<$>'],
		_newlandsvalley$elm_abc_player$Abc_ParseTree$Discography,
		A2(
			_Bogdanp$elm_combine$Combine_Infix_ops['*>'],
			_newlandsvalley$elm_abc_player$Abc$headerCode(
				_elm_lang$core$Native_Utils.chr('D')),
			_newlandsvalley$elm_abc_player$Abc$strToEol)),
	'D header');
var _newlandsvalley$elm_abc_player$Abc$composer = A2(
	_Bogdanp$elm_combine$Combine_Infix_ops['<?>'],
	A2(
		_Bogdanp$elm_combine$Combine_Infix_ops['<$>'],
		_newlandsvalley$elm_abc_player$Abc_ParseTree$Composer,
		A2(
			_Bogdanp$elm_combine$Combine_Infix_ops['*>'],
			_newlandsvalley$elm_abc_player$Abc$headerCode(
				_elm_lang$core$Native_Utils.chr('C')),
			_newlandsvalley$elm_abc_player$Abc$strToEol)),
	'C header');
var _newlandsvalley$elm_abc_player$Abc$book = A2(
	_Bogdanp$elm_combine$Combine_Infix_ops['<?>'],
	A2(
		_Bogdanp$elm_combine$Combine_Infix_ops['<$>'],
		_newlandsvalley$elm_abc_player$Abc_ParseTree$Book,
		A2(
			_Bogdanp$elm_combine$Combine_Infix_ops['*>'],
			_newlandsvalley$elm_abc_player$Abc$headerCode(
				_elm_lang$core$Native_Utils.chr('B')),
			_newlandsvalley$elm_abc_player$Abc$strToEol)),
	'B Header');
var _newlandsvalley$elm_abc_player$Abc$area = A2(
	_Bogdanp$elm_combine$Combine_Infix_ops['<?>'],
	A2(
		_Bogdanp$elm_combine$Combine_Infix_ops['<$>'],
		_newlandsvalley$elm_abc_player$Abc_ParseTree$Area,
		A2(
			_Bogdanp$elm_combine$Combine_Infix_ops['*>'],
			_newlandsvalley$elm_abc_player$Abc$headerCode(
				_elm_lang$core$Native_Utils.chr('A')),
			_newlandsvalley$elm_abc_player$Abc$strToEol)),
	'A header');
var _newlandsvalley$elm_abc_player$Abc$tuneInfo = A2(
	_Bogdanp$elm_combine$Combine_Infix_ops['<?>'],
	_Bogdanp$elm_combine$Combine$choice(
		_elm_lang$core$Native_List.fromArray(
			[_newlandsvalley$elm_abc_player$Abc$area, _newlandsvalley$elm_abc_player$Abc$book, _newlandsvalley$elm_abc_player$Abc$composer, _newlandsvalley$elm_abc_player$Abc$discography, _newlandsvalley$elm_abc_player$Abc$fileUrl, _newlandsvalley$elm_abc_player$Abc$group, _newlandsvalley$elm_abc_player$Abc$history, _newlandsvalley$elm_abc_player$Abc$origin, _newlandsvalley$elm_abc_player$Abc$source, _newlandsvalley$elm_abc_player$Abc$referenceNumber, _newlandsvalley$elm_abc_player$Abc$transcription, _newlandsvalley$elm_abc_player$Abc$unsupportedHeader])),
	'tune info');
var _newlandsvalley$elm_abc_player$Abc$locrian = A2(
	_Bogdanp$elm_combine$Combine_Infix_ops['<*'],
	A2(_Bogdanp$elm_combine$Combine_Infix_ops['<$'], _newlandsvalley$elm_abc_player$Abc_ParseTree$Locrian, _newlandsvalley$elm_abc_player$Abc$whiteSpace),
	_Bogdanp$elm_combine$Combine$regex('(L|l)(O|o)(C|c)([A-Za-z])*'));
var _newlandsvalley$elm_abc_player$Abc$aeolian = A2(
	_Bogdanp$elm_combine$Combine_Infix_ops['<*'],
	A2(_Bogdanp$elm_combine$Combine_Infix_ops['<$'], _newlandsvalley$elm_abc_player$Abc_ParseTree$Aeolian, _newlandsvalley$elm_abc_player$Abc$whiteSpace),
	_Bogdanp$elm_combine$Combine$regex('(A|a)(E|e)(O|o)([A-Za-z])*'));
var _newlandsvalley$elm_abc_player$Abc$mixolydian = A2(
	_Bogdanp$elm_combine$Combine_Infix_ops['<*'],
	A2(_Bogdanp$elm_combine$Combine_Infix_ops['<$'], _newlandsvalley$elm_abc_player$Abc_ParseTree$Mixolydian, _newlandsvalley$elm_abc_player$Abc$whiteSpace),
	_Bogdanp$elm_combine$Combine$regex('(M|m)(I|i)(X|x)([A-Za-z])*'));
var _newlandsvalley$elm_abc_player$Abc$lydian = A2(
	_Bogdanp$elm_combine$Combine_Infix_ops['<*'],
	A2(_Bogdanp$elm_combine$Combine_Infix_ops['<$'], _newlandsvalley$elm_abc_player$Abc_ParseTree$Lydian, _newlandsvalley$elm_abc_player$Abc$whiteSpace),
	_Bogdanp$elm_combine$Combine$regex('(L|l)(Y|y)(D|d)([A-Za-z])*'));
var _newlandsvalley$elm_abc_player$Abc$phrygian = A2(
	_Bogdanp$elm_combine$Combine_Infix_ops['<*'],
	A2(_Bogdanp$elm_combine$Combine_Infix_ops['<$'], _newlandsvalley$elm_abc_player$Abc_ParseTree$Phrygian, _newlandsvalley$elm_abc_player$Abc$whiteSpace),
	_Bogdanp$elm_combine$Combine$regex('(P|p)(H|h)(R|r)([A-Za-z])*'));
var _newlandsvalley$elm_abc_player$Abc$dorian = A2(
	_Bogdanp$elm_combine$Combine_Infix_ops['<*'],
	A2(_Bogdanp$elm_combine$Combine_Infix_ops['<$'], _newlandsvalley$elm_abc_player$Abc_ParseTree$Dorian, _newlandsvalley$elm_abc_player$Abc$whiteSpace),
	_Bogdanp$elm_combine$Combine$regex('(D|d)(O|o)(R|r)([A-Za-z])*'));
var _newlandsvalley$elm_abc_player$Abc$ionian = A2(
	_Bogdanp$elm_combine$Combine_Infix_ops['<*'],
	A2(_Bogdanp$elm_combine$Combine_Infix_ops['<$'], _newlandsvalley$elm_abc_player$Abc_ParseTree$Ionian, _newlandsvalley$elm_abc_player$Abc$whiteSpace),
	_Bogdanp$elm_combine$Combine$regex('(I|i)(O|o)(N|n)([A-Za-z])*'));
var _newlandsvalley$elm_abc_player$Abc$major = A2(
	_Bogdanp$elm_combine$Combine_Infix_ops['<*'],
	A2(_Bogdanp$elm_combine$Combine_Infix_ops['<$'], _newlandsvalley$elm_abc_player$Abc_ParseTree$Major, _newlandsvalley$elm_abc_player$Abc$whiteSpace),
	_Bogdanp$elm_combine$Combine$regex('(M|m)(A|a)(J|j)([A-Za-z])*'));
var _newlandsvalley$elm_abc_player$Abc$minor = A2(
	_Bogdanp$elm_combine$Combine_Infix_ops['<*'],
	A2(_Bogdanp$elm_combine$Combine_Infix_ops['<$'], _newlandsvalley$elm_abc_player$Abc_ParseTree$Minor, _newlandsvalley$elm_abc_player$Abc$whiteSpace),
	_Bogdanp$elm_combine$Combine$regex('(M|m)([A-Za-z])*'));
var _newlandsvalley$elm_abc_player$Abc$mode = _Bogdanp$elm_combine$Combine$choice(
	_elm_lang$core$Native_List.fromArray(
		[_newlandsvalley$elm_abc_player$Abc$major, _newlandsvalley$elm_abc_player$Abc$ionian, _newlandsvalley$elm_abc_player$Abc$dorian, _newlandsvalley$elm_abc_player$Abc$phrygian, _newlandsvalley$elm_abc_player$Abc$lydian, _newlandsvalley$elm_abc_player$Abc$mixolydian, _newlandsvalley$elm_abc_player$Abc$aeolian, _newlandsvalley$elm_abc_player$Abc$locrian, _newlandsvalley$elm_abc_player$Abc$minor]));
var _newlandsvalley$elm_abc_player$Abc$keyAccidental = A2(
	_Bogdanp$elm_combine$Combine_Infix_ops['<*>'],
	A2(_Bogdanp$elm_combine$Combine_Infix_ops['<$>'], _newlandsvalley$elm_abc_player$Abc$buildKeyAccidental, _newlandsvalley$elm_abc_player$Abc$accidental),
	_newlandsvalley$elm_abc_player$Abc$pitch);
var _newlandsvalley$elm_abc_player$Abc$keyAccidentalsList = _Bogdanp$elm_combine$Combine$many(
	A2(_Bogdanp$elm_combine$Combine_Infix_ops['*>'], _Bogdanp$elm_combine$Combine_Char$space, _newlandsvalley$elm_abc_player$Abc$keyAccidental));
var _newlandsvalley$elm_abc_player$Abc$spacelessAccidental = _Bogdanp$elm_combine$Combine$maybe(_newlandsvalley$elm_abc_player$Abc$keyAccidental);
var _newlandsvalley$elm_abc_player$Abc$keyAccidentals = A2(
	_Bogdanp$elm_combine$Combine_Infix_ops['<*>'],
	A2(_Bogdanp$elm_combine$Combine_Infix_ops['<$>'], _newlandsvalley$elm_abc_player$Abc$buildKeyAccidentals, _newlandsvalley$elm_abc_player$Abc$spacelessAccidental),
	_newlandsvalley$elm_abc_player$Abc$keyAccidentalsList);
var _newlandsvalley$elm_abc_player$Abc$keyName = _Bogdanp$elm_combine$Combine$regex('[A-G]');
var _newlandsvalley$elm_abc_player$Abc$sharpOrFlat = A2(
	_Bogdanp$elm_combine$Combine$map,
	function (x) {
		return _elm_lang$core$Native_Utils.eq(
			x,
			_elm_lang$core$Native_Utils.chr('#')) ? _newlandsvalley$elm_abc_player$Abc_ParseTree$Sharp : _newlandsvalley$elm_abc_player$Abc_ParseTree$Flat;
	},
	_Bogdanp$elm_combine$Combine$choice(
		_elm_lang$core$Native_List.fromArray(
			[
				_Bogdanp$elm_combine$Combine_Char$char(
				_elm_lang$core$Native_Utils.chr('#')),
				_Bogdanp$elm_combine$Combine_Char$char(
				_elm_lang$core$Native_Utils.chr('b'))
			])));
var _newlandsvalley$elm_abc_player$Abc$keySignature = A2(
	_Bogdanp$elm_combine$Combine_Infix_ops['<*>'],
	A2(
		_Bogdanp$elm_combine$Combine_Infix_ops['<*>'],
		A2(_Bogdanp$elm_combine$Combine_Infix_ops['<$>'], _newlandsvalley$elm_abc_player$Abc$buildKeySignature, _newlandsvalley$elm_abc_player$Abc$keyName),
		_Bogdanp$elm_combine$Combine$maybe(_newlandsvalley$elm_abc_player$Abc$sharpOrFlat)),
	_Bogdanp$elm_combine$Combine$maybe(_newlandsvalley$elm_abc_player$Abc$mode));
var _newlandsvalley$elm_abc_player$Abc$key = A2(
	_Bogdanp$elm_combine$Combine_Infix_ops['<?>'],
	A2(
		_Bogdanp$elm_combine$Combine_Infix_ops['<*'],
		A2(
			_Bogdanp$elm_combine$Combine_Infix_ops['<*>'],
			A2(
				_Bogdanp$elm_combine$Combine_Infix_ops['<*>'],
				A2(
					_Bogdanp$elm_combine$Combine_Infix_ops['<$>'],
					_newlandsvalley$elm_abc_player$Abc$buildKey,
					_newlandsvalley$elm_abc_player$Abc$headerCode(
						_elm_lang$core$Native_Utils.chr('K'))),
				_newlandsvalley$elm_abc_player$Abc$keySignature),
			_newlandsvalley$elm_abc_player$Abc$keyAccidentals),
		_newlandsvalley$elm_abc_player$Abc$whiteSpace),
	'K header');
var _newlandsvalley$elm_abc_player$Abc$parseKeySignature = function (s) {
	var _p10 = A2(_Bogdanp$elm_combine$Combine$parse, _newlandsvalley$elm_abc_player$Abc$keySignature, s);
	if (_p10._0.ctor === 'Ok') {
		return _elm_lang$core$Result$Ok(
			{
				ctor: '_Tuple2',
				_0: _p10._0._0,
				_1: _elm_lang$core$Native_List.fromArray(
					[])
			});
	} else {
		var _p11 = _p10._1;
		return _elm_lang$core$Result$Err(
			{msgs: _p10._0._0, input: _p11.input, position: _p11.position});
	}
};
var _newlandsvalley$elm_abc_player$Abc$nometer = A2(
	_Bogdanp$elm_combine$Combine_Infix_ops['<$'],
	_elm_lang$core$Maybe$Nothing,
	_Bogdanp$elm_combine$Combine$string('none'));
var _newlandsvalley$elm_abc_player$Abc$meterSignature = A2(
	_Bogdanp$elm_combine$Combine_Infix_ops['<$>'],
	_elm_lang$core$Maybe$Just,
	A2(
		_Bogdanp$elm_combine$Combine_Infix_ops['<*'],
		A2(
			_Bogdanp$elm_combine$Combine_Infix_ops['<*>'],
			A2(
				_Bogdanp$elm_combine$Combine_Infix_ops['<*'],
				A2(
					_Bogdanp$elm_combine$Combine_Infix_ops['<$>'],
					F2(
						function (v0, v1) {
							return {ctor: '_Tuple2', _0: v0, _1: v1};
						}),
					_Bogdanp$elm_combine$Combine_Num$int),
				_Bogdanp$elm_combine$Combine_Char$char(
					_elm_lang$core$Native_Utils.chr('/'))),
			_Bogdanp$elm_combine$Combine_Num$int),
		_newlandsvalley$elm_abc_player$Abc$whiteSpace));
var _newlandsvalley$elm_abc_player$Abc$cutTime = A2(
	_Bogdanp$elm_combine$Combine_Infix_ops['<$'],
	_elm_lang$core$Maybe$Just(
		{ctor: '_Tuple2', _0: 2, _1: 2}),
	_Bogdanp$elm_combine$Combine$string('C|'));
var _newlandsvalley$elm_abc_player$Abc$commonTime = A2(
	_Bogdanp$elm_combine$Combine_Infix_ops['<$'],
	_elm_lang$core$Maybe$Just(
		{ctor: '_Tuple2', _0: 4, _1: 4}),
	_Bogdanp$elm_combine$Combine_Char$char(
		_elm_lang$core$Native_Utils.chr('C')));
var _newlandsvalley$elm_abc_player$Abc$meterDefinition = _Bogdanp$elm_combine$Combine$choice(
	_elm_lang$core$Native_List.fromArray(
		[_newlandsvalley$elm_abc_player$Abc$cutTime, _newlandsvalley$elm_abc_player$Abc$commonTime, _newlandsvalley$elm_abc_player$Abc$meterSignature, _newlandsvalley$elm_abc_player$Abc$nometer]));
var _newlandsvalley$elm_abc_player$Abc$meter = A2(
	_Bogdanp$elm_combine$Combine_Infix_ops['<?>'],
	A2(
		_Bogdanp$elm_combine$Combine_Infix_ops['<$>'],
		_newlandsvalley$elm_abc_player$Abc_ParseTree$Meter,
		A2(
			_Bogdanp$elm_combine$Combine_Infix_ops['*>'],
			_newlandsvalley$elm_abc_player$Abc$headerCode(
				_elm_lang$core$Native_Utils.chr('M')),
			_newlandsvalley$elm_abc_player$Abc$meterDefinition)),
	'M header');
var _newlandsvalley$elm_abc_player$Abc$slashesRational = A2(
	_Bogdanp$elm_combine$Combine_Infix_ops['<$>'],
	_newlandsvalley$elm_abc_player$Abc$buildRationalFromExponential,
	A2(
		_Bogdanp$elm_combine$Combine_Infix_ops['<$>'],
		_elm_lang$core$List$length,
		_Bogdanp$elm_combine$Combine$many1(
			_Bogdanp$elm_combine$Combine_Char$char(
				_elm_lang$core$Native_Utils.chr('/')))));
var _newlandsvalley$elm_abc_player$Abc$curtailedRightRational = A2(
	_Bogdanp$elm_combine$Combine_Infix_ops['<$>'],
	_newlandsvalley$elm_abc_player$Abc$invert,
	A2(
		_Bogdanp$elm_combine$Combine_Infix_ops['<$>'],
		_imeckler$ratio$Ratio$over(2),
		A2(
			_Bogdanp$elm_combine$Combine_Infix_ops['<*'],
			_Bogdanp$elm_combine$Combine_Num$int,
			_Bogdanp$elm_combine$Combine_Char$char(
				_elm_lang$core$Native_Utils.chr('/')))));
var _newlandsvalley$elm_abc_player$Abc$curtailedLeftRational = A2(
	_Bogdanp$elm_combine$Combine_Infix_ops['<$>'],
	_imeckler$ratio$Ratio$over(1),
	A2(
		_Bogdanp$elm_combine$Combine_Infix_ops['*>'],
		_Bogdanp$elm_combine$Combine_Char$char(
			_elm_lang$core$Native_Utils.chr('/')),
		_Bogdanp$elm_combine$Combine_Num$int));
var _newlandsvalley$elm_abc_player$Abc$rational = A2(
	_Bogdanp$elm_combine$Combine_Infix_ops['<*>'],
	A2(
		_Bogdanp$elm_combine$Combine_Infix_ops['<*'],
		A2(_Bogdanp$elm_combine$Combine_Infix_ops['<$>'], _imeckler$ratio$Ratio$over, _Bogdanp$elm_combine$Combine_Num$int),
		_Bogdanp$elm_combine$Combine_Char$char(
			_elm_lang$core$Native_Utils.chr('/'))),
	_Bogdanp$elm_combine$Combine_Num$int);
var _newlandsvalley$elm_abc_player$Abc$headerRational = A2(_Bogdanp$elm_combine$Combine_Infix_ops['<*'], _newlandsvalley$elm_abc_player$Abc$rational, _newlandsvalley$elm_abc_player$Abc$whiteSpace);
var _newlandsvalley$elm_abc_player$Abc$tempoSignature = A2(
	_Bogdanp$elm_combine$Combine_Infix_ops['<*'],
	A2(
		_Bogdanp$elm_combine$Combine_Infix_ops['<*>'],
		A2(
			_Bogdanp$elm_combine$Combine_Infix_ops['<*>'],
			A2(
				_Bogdanp$elm_combine$Combine_Infix_ops['<*>'],
				A2(
					_Bogdanp$elm_combine$Combine_Infix_ops['<*>'],
					A2(
						_Bogdanp$elm_combine$Combine_Infix_ops['<$>'],
						_newlandsvalley$elm_abc_player$Abc$buildTempoSignature,
						_Bogdanp$elm_combine$Combine$maybe(_newlandsvalley$elm_abc_player$Abc$spacedQuotedString)),
					_Bogdanp$elm_combine$Combine$many(_newlandsvalley$elm_abc_player$Abc$headerRational)),
				_Bogdanp$elm_combine$Combine$maybe(
					_Bogdanp$elm_combine$Combine_Char$char(
						_elm_lang$core$Native_Utils.chr('=')))),
			_Bogdanp$elm_combine$Combine_Num$int),
		_Bogdanp$elm_combine$Combine$maybe(_newlandsvalley$elm_abc_player$Abc$spacedQuotedString)),
	_newlandsvalley$elm_abc_player$Abc$whiteSpace);
var _newlandsvalley$elm_abc_player$Abc$tempo = A2(
	_Bogdanp$elm_combine$Combine_Infix_ops['<?>'],
	A2(
		_Bogdanp$elm_combine$Combine_Infix_ops['<$>'],
		_newlandsvalley$elm_abc_player$Abc_ParseTree$Tempo,
		A2(
			_Bogdanp$elm_combine$Combine_Infix_ops['*>'],
			_newlandsvalley$elm_abc_player$Abc$headerCode(
				_elm_lang$core$Native_Utils.chr('Q')),
			_newlandsvalley$elm_abc_player$Abc$tempoSignature)),
	'Q header');
var _newlandsvalley$elm_abc_player$Abc$noteDuration = A2(_Bogdanp$elm_combine$Combine_Infix_ops['<*'], _newlandsvalley$elm_abc_player$Abc$rational, _newlandsvalley$elm_abc_player$Abc$whiteSpace);
var _newlandsvalley$elm_abc_player$Abc$unitNoteLength = A2(
	_Bogdanp$elm_combine$Combine_Infix_ops['<?>'],
	A2(
		_Bogdanp$elm_combine$Combine_Infix_ops['<$>'],
		_newlandsvalley$elm_abc_player$Abc_ParseTree$UnitNoteLength,
		A2(
			_Bogdanp$elm_combine$Combine_Infix_ops['*>'],
			_newlandsvalley$elm_abc_player$Abc$headerCode(
				_elm_lang$core$Native_Utils.chr('L')),
			_newlandsvalley$elm_abc_player$Abc$noteDuration)),
	'L header');
var _newlandsvalley$elm_abc_player$Abc$anywhereInfo = function (isInline) {
	return A2(
		_Bogdanp$elm_combine$Combine_Infix_ops['<?>'],
		_Bogdanp$elm_combine$Combine$choice(
			_elm_lang$core$Native_List.fromArray(
				[
					_newlandsvalley$elm_abc_player$Abc$instruction(isInline),
					_newlandsvalley$elm_abc_player$Abc$key,
					_newlandsvalley$elm_abc_player$Abc$unitNoteLength,
					_newlandsvalley$elm_abc_player$Abc$meter,
					_newlandsvalley$elm_abc_player$Abc$macro(isInline),
					_newlandsvalley$elm_abc_player$Abc$notes(isInline),
					_newlandsvalley$elm_abc_player$Abc$parts(isInline),
					_newlandsvalley$elm_abc_player$Abc$tempo,
					_newlandsvalley$elm_abc_player$Abc$rhythm(isInline),
					_newlandsvalley$elm_abc_player$Abc$remark(isInline),
					_newlandsvalley$elm_abc_player$Abc$title(isInline),
					_newlandsvalley$elm_abc_player$Abc$userDefined(isInline),
					_newlandsvalley$elm_abc_player$Abc$voice(isInline),
					_newlandsvalley$elm_abc_player$Abc$wordsAfter(isInline),
					_newlandsvalley$elm_abc_player$Abc$fieldContinuation,
					_newlandsvalley$elm_abc_player$Abc$comment
				])),
		'anywhere info');
};
var _newlandsvalley$elm_abc_player$Abc$informationField = function (isInline) {
	return A2(
		_Bogdanp$elm_combine$Combine_Infix_ops['<?>'],
		_Bogdanp$elm_combine$Combine$choice(
			_elm_lang$core$Native_List.fromArray(
				[
					_newlandsvalley$elm_abc_player$Abc$anywhereInfo(isInline),
					_newlandsvalley$elm_abc_player$Abc$tuneInfo
				])),
		'header');
};
var _newlandsvalley$elm_abc_player$Abc$header = A2(
	_Bogdanp$elm_combine$Combine_Infix_ops['<*'],
	_newlandsvalley$elm_abc_player$Abc$informationField(false),
	_Bogdanp$elm_combine$Combine_Char$eol);
var _newlandsvalley$elm_abc_player$Abc$headers = A2(
	_Bogdanp$elm_combine$Combine_Infix_ops['<?>'],
	_Bogdanp$elm_combine$Combine$many(_newlandsvalley$elm_abc_player$Abc$header),
	'headers');
var _newlandsvalley$elm_abc_player$Abc$tuneBodyInfo = function (isInline) {
	return A2(
		_Bogdanp$elm_combine$Combine_Infix_ops['<?>'],
		_Bogdanp$elm_combine$Combine$choice(
			_elm_lang$core$Native_List.fromArray(
				[
					_newlandsvalley$elm_abc_player$Abc$tuneBodyOnlyInfo(isInline),
					_newlandsvalley$elm_abc_player$Abc$anywhereInfo(isInline)
				])),
		'tune body info');
};
var _newlandsvalley$elm_abc_player$Abc$tuneBodyHeader = A2(
	_Bogdanp$elm_combine$Combine_Infix_ops['<?>'],
	A2(
		_Bogdanp$elm_combine$Combine_Infix_ops['<*'],
		A2(
			_Bogdanp$elm_combine$Combine_Infix_ops['<$>'],
			_newlandsvalley$elm_abc_player$Abc_ParseTree$BodyInfo,
			_newlandsvalley$elm_abc_player$Abc$tuneBodyInfo(true)),
		_Bogdanp$elm_combine$Combine_Char$eol),
	'tune body header');
var _newlandsvalley$elm_abc_player$Abc$noteDur = _Bogdanp$elm_combine$Combine$choice(
	_elm_lang$core$Native_List.fromArray(
		[_newlandsvalley$elm_abc_player$Abc$rational, _newlandsvalley$elm_abc_player$Abc$curtailedRightRational, _newlandsvalley$elm_abc_player$Abc$integralAsRational, _newlandsvalley$elm_abc_player$Abc$curtailedLeftRational, _newlandsvalley$elm_abc_player$Abc$slashesRational]));
var _newlandsvalley$elm_abc_player$Abc$abcNote = A2(
	_Bogdanp$elm_combine$Combine_Infix_ops['<?>'],
	A2(
		_Bogdanp$elm_combine$Combine_Infix_ops['<*>'],
		A2(
			_Bogdanp$elm_combine$Combine_Infix_ops['<*>'],
			A2(
				_Bogdanp$elm_combine$Combine_Infix_ops['<*>'],
				A2(
					_Bogdanp$elm_combine$Combine_Infix_ops['<*>'],
					A2(_Bogdanp$elm_combine$Combine_Infix_ops['<$>'], _newlandsvalley$elm_abc_player$Abc$buildNote, _newlandsvalley$elm_abc_player$Abc$maybeAccidental),
					_newlandsvalley$elm_abc_player$Abc$pitch),
				_newlandsvalley$elm_abc_player$Abc$moveOctave),
			_Bogdanp$elm_combine$Combine$maybe(_newlandsvalley$elm_abc_player$Abc$noteDur)),
		_newlandsvalley$elm_abc_player$Abc$maybeTie),
	'ABC note');
var _newlandsvalley$elm_abc_player$Abc$note = A2(_Bogdanp$elm_combine$Combine_Infix_ops['<$>'], _newlandsvalley$elm_abc_player$Abc_ParseTree$Note, _newlandsvalley$elm_abc_player$Abc$abcNote);
var _newlandsvalley$elm_abc_player$Abc$tuplet = A2(
	_Bogdanp$elm_combine$Combine_Infix_ops['<?>'],
	A2(
		_Bogdanp$elm_combine$Combine_Infix_ops['<*>'],
		A2(
			_Bogdanp$elm_combine$Combine_Infix_ops['<$>'],
			_newlandsvalley$elm_abc_player$Abc_ParseTree$Tuplet,
			A2(
				_Bogdanp$elm_combine$Combine_Infix_ops['*>'],
				_Bogdanp$elm_combine$Combine_Char$char(
					_elm_lang$core$Native_Utils.chr('(')),
				_newlandsvalley$elm_abc_player$Abc$tupletSignature)),
		_Bogdanp$elm_combine$Combine$many1(_newlandsvalley$elm_abc_player$Abc$abcNote)),
	'tuplet');
var _newlandsvalley$elm_abc_player$Abc$abcChord = A2(
	_Bogdanp$elm_combine$Combine_Infix_ops['<?>'],
	A2(
		_Bogdanp$elm_combine$Combine_Infix_ops['<*>'],
		A2(
			_Bogdanp$elm_combine$Combine_Infix_ops['<$>'],
			_newlandsvalley$elm_abc_player$Abc$buildChord,
			A3(
				_Bogdanp$elm_combine$Combine$between,
				_Bogdanp$elm_combine$Combine_Char$char(
					_elm_lang$core$Native_Utils.chr('[')),
				_Bogdanp$elm_combine$Combine_Char$char(
					_elm_lang$core$Native_Utils.chr(']')),
				_Bogdanp$elm_combine$Combine$many1(_newlandsvalley$elm_abc_player$Abc$abcNote))),
		_Bogdanp$elm_combine$Combine$maybe(_newlandsvalley$elm_abc_player$Abc$noteDur)),
	'ABC chord');
var _newlandsvalley$elm_abc_player$Abc$noteSequence = A2(
	_Bogdanp$elm_combine$Combine_Infix_ops['<$>'],
	_newlandsvalley$elm_abc_player$Abc_ParseTree$NoteSequence,
	_Bogdanp$elm_combine$Combine$many1(_newlandsvalley$elm_abc_player$Abc$note));
var _newlandsvalley$elm_abc_player$Abc$longDecoration = A2(
	_Bogdanp$elm_combine$Combine_Infix_ops['<?>'],
	A3(
		_Bogdanp$elm_combine$Combine$between,
		_Bogdanp$elm_combine$Combine_Char$char(
			_elm_lang$core$Native_Utils.chr('!')),
		_Bogdanp$elm_combine$Combine_Char$char(
			_elm_lang$core$Native_Utils.chr('!')),
		_Bogdanp$elm_combine$Combine$regex('[^\r\n!]*')),
	'long decoration');
var _newlandsvalley$elm_abc_player$Abc$shortDecoration = A2(
	_Bogdanp$elm_combine$Combine_Infix_ops['<?>'],
	_Bogdanp$elm_combine$Combine$regex('[\\.~HLMOPSTuv]'),
	'short decoration');
var _newlandsvalley$elm_abc_player$Abc$decoration = A2(
	_Bogdanp$elm_combine$Combine_Infix_ops['<?>'],
	A2(
		_Bogdanp$elm_combine$Combine_Infix_ops['<$>'],
		_newlandsvalley$elm_abc_player$Abc_ParseTree$Decoration,
		_Bogdanp$elm_combine$Combine$choice(
			_elm_lang$core$Native_List.fromArray(
				[_newlandsvalley$elm_abc_player$Abc$shortDecoration, _newlandsvalley$elm_abc_player$Abc$longDecoration]))),
	'decoration');
var _newlandsvalley$elm_abc_player$Abc$acciaccatura = A2(
	_Bogdanp$elm_combine$Combine_Infix_ops['<$>'],
	function (_p12) {
		return true;
	},
	_Bogdanp$elm_combine$Combine$maybe(
		_Bogdanp$elm_combine$Combine_Char$char(
			_elm_lang$core$Native_Utils.chr('/'))));
var _newlandsvalley$elm_abc_player$Abc$inline = A2(
	_Bogdanp$elm_combine$Combine_Infix_ops['<?>'],
	A2(
		_Bogdanp$elm_combine$Combine_Infix_ops['<$>'],
		_newlandsvalley$elm_abc_player$Abc_ParseTree$Inline,
		A3(
			_Bogdanp$elm_combine$Combine$between,
			_Bogdanp$elm_combine$Combine_Char$char(
				_elm_lang$core$Native_Utils.chr('[')),
			_Bogdanp$elm_combine$Combine_Char$char(
				_elm_lang$core$Native_Utils.chr(']')),
			_newlandsvalley$elm_abc_player$Abc$tuneBodyInfo(true))),
	'inline header');
var _newlandsvalley$elm_abc_player$Abc$chord = A2(
	_Bogdanp$elm_combine$Combine_Infix_ops['<?>'],
	A2(_Bogdanp$elm_combine$Combine_Infix_ops['<$>'], _newlandsvalley$elm_abc_player$Abc_ParseTree$Chord, _newlandsvalley$elm_abc_player$Abc$abcChord),
	'chord');
var _newlandsvalley$elm_abc_player$Abc$grace = A2(
	_Bogdanp$elm_combine$Combine_Infix_ops['<*>'],
	A2(_Bogdanp$elm_combine$Combine_Infix_ops['<$>'], _newlandsvalley$elm_abc_player$Abc_ParseTree$GraceNote, _newlandsvalley$elm_abc_player$Abc$acciaccatura),
	_Bogdanp$elm_combine$Combine$choice(
		_elm_lang$core$Native_List.fromArray(
			[_newlandsvalley$elm_abc_player$Abc$noteSequence, _newlandsvalley$elm_abc_player$Abc$chord])));
var _newlandsvalley$elm_abc_player$Abc$graceNote = A2(
	_Bogdanp$elm_combine$Combine_Infix_ops['<?>'],
	A3(
		_Bogdanp$elm_combine$Combine$between,
		_Bogdanp$elm_combine$Combine_Char$char(
			_elm_lang$core$Native_Utils.chr('{')),
		_Bogdanp$elm_combine$Combine_Char$char(
			_elm_lang$core$Native_Utils.chr('}')),
		_newlandsvalley$elm_abc_player$Abc$grace),
	'grace note');
var _newlandsvalley$elm_abc_player$Abc$annotation = A2(
	_Bogdanp$elm_combine$Combine_Infix_ops['<?>'],
	A2(_Bogdanp$elm_combine$Combine_Infix_ops['<$>'], _newlandsvalley$elm_abc_player$Abc$buildAnnotation, _newlandsvalley$elm_abc_player$Abc$annotationString),
	'annotation');
var _newlandsvalley$elm_abc_player$Abc$chordSymbol = A2(
	_Bogdanp$elm_combine$Combine_Infix_ops['<?>'],
	A2(_Bogdanp$elm_combine$Combine_Infix_ops['<$>'], _newlandsvalley$elm_abc_player$Abc_ParseTree$ChordSymbol, _newlandsvalley$elm_abc_player$Abc$quotedString),
	'chord symbol');
var _newlandsvalley$elm_abc_player$Abc$rest = A2(
	_Bogdanp$elm_combine$Combine_Infix_ops['<?>'],
	A2(
		_Bogdanp$elm_combine$Combine_Infix_ops['<$>'],
		_newlandsvalley$elm_abc_player$Abc_ParseTree$Rest,
		A2(
			_Bogdanp$elm_combine$Combine_Infix_ops['<$>'],
			_elm_lang$core$Maybe$withDefault(
				_imeckler$ratio$Ratio$fromInt(1)),
			A2(
				_Bogdanp$elm_combine$Combine_Infix_ops['*>'],
				_Bogdanp$elm_combine$Combine$regex('[XxZz]'),
				_Bogdanp$elm_combine$Combine$maybe(_newlandsvalley$elm_abc_player$Abc$noteDur)))),
	'rest');
var _newlandsvalley$elm_abc_player$Abc$brokenRhythmTie = A2(
	_Bogdanp$elm_combine$Combine_Infix_ops['<*'],
	A2(
		_Bogdanp$elm_combine$Combine_Infix_ops['<$>'],
		_newlandsvalley$elm_abc_player$Abc$buildBrokenOperator,
		_Bogdanp$elm_combine$Combine$regex('(<+|>+)')),
	_newlandsvalley$elm_abc_player$Abc$whiteSpace);
var _newlandsvalley$elm_abc_player$Abc$brokenRhythmPair = A2(
	_Bogdanp$elm_combine$Combine_Infix_ops['<?>'],
	A2(
		_Bogdanp$elm_combine$Combine_Infix_ops['<*>'],
		A2(
			_Bogdanp$elm_combine$Combine_Infix_ops['<*>'],
			A2(_Bogdanp$elm_combine$Combine_Infix_ops['<$>'], _newlandsvalley$elm_abc_player$Abc_ParseTree$BrokenRhythmPair, _newlandsvalley$elm_abc_player$Abc$abcNote),
			_newlandsvalley$elm_abc_player$Abc$brokenRhythmTie),
		_newlandsvalley$elm_abc_player$Abc$abcNote),
	'broken rhythm pair');
var _newlandsvalley$elm_abc_player$Abc$slur = A2(
	_Bogdanp$elm_combine$Combine_Infix_ops['<?>'],
	A2(
		_Bogdanp$elm_combine$Combine_Infix_ops['<$>'],
		_newlandsvalley$elm_abc_player$Abc_ParseTree$Slur,
		_Bogdanp$elm_combine$Combine$choice(
			_elm_lang$core$Native_List.fromArray(
				[
					_Bogdanp$elm_combine$Combine_Char$char(
					_elm_lang$core$Native_Utils.chr('(')),
					_Bogdanp$elm_combine$Combine_Char$char(
					_elm_lang$core$Native_Utils.chr(')'))
				]))),
	'slur');
var _newlandsvalley$elm_abc_player$Abc$repeatSection = _Bogdanp$elm_combine$Combine$choice(
	_elm_lang$core$Native_List.fromArray(
		[
			_Bogdanp$elm_combine$Combine_Num$digit,
			A2(
			_Bogdanp$elm_combine$Combine_Infix_ops['*>'],
			A2(
				_Bogdanp$elm_combine$Combine_Infix_ops['*>'],
				_newlandsvalley$elm_abc_player$Abc$whiteSpace,
				_Bogdanp$elm_combine$Combine_Char$char(
					_elm_lang$core$Native_Utils.chr('['))),
			_Bogdanp$elm_combine$Combine_Num$digit)
		]));
var _newlandsvalley$elm_abc_player$Abc$barSeparator = A2(
	_Bogdanp$elm_combine$Combine_Infix_ops['<$>'],
	_elm_lang$core$String$concat,
	_Bogdanp$elm_combine$Combine$many1(
		_Bogdanp$elm_combine$Combine$choice(
			_elm_lang$core$Native_List.fromArray(
				[
					_Bogdanp$elm_combine$Combine$string('[|'),
					_Bogdanp$elm_combine$Combine$string('|]'),
					_Bogdanp$elm_combine$Combine$string('|'),
					_Bogdanp$elm_combine$Combine$string(':')
				]))));
var _newlandsvalley$elm_abc_player$Abc$barline = A2(
	_Bogdanp$elm_combine$Combine_Infix_ops['<?>'],
	A2(
		_Bogdanp$elm_combine$Combine_Infix_ops['<*>'],
		A2(_Bogdanp$elm_combine$Combine_Infix_ops['<$>'], _newlandsvalley$elm_abc_player$Abc$buildBarline, _newlandsvalley$elm_abc_player$Abc$barSeparator),
		_Bogdanp$elm_combine$Combine$maybe(_newlandsvalley$elm_abc_player$Abc$repeatSection)),
	'barline');
var _newlandsvalley$elm_abc_player$Abc$scoreItem = _Bogdanp$elm_combine$Combine$rec(
	function (_p13) {
		var _p14 = _p13;
		return A2(
			_Bogdanp$elm_combine$Combine_Infix_ops['<?>'],
			_Bogdanp$elm_combine$Combine$choice(
				_elm_lang$core$Native_List.fromArray(
					[_newlandsvalley$elm_abc_player$Abc$chord, _newlandsvalley$elm_abc_player$Abc$inline, _newlandsvalley$elm_abc_player$Abc$barline, _newlandsvalley$elm_abc_player$Abc$brokenRhythmPair, _newlandsvalley$elm_abc_player$Abc$note, _newlandsvalley$elm_abc_player$Abc$rest, _newlandsvalley$elm_abc_player$Abc$tuplet, _newlandsvalley$elm_abc_player$Abc$slur, _newlandsvalley$elm_abc_player$Abc$graceNote, _newlandsvalley$elm_abc_player$Abc$annotation, _newlandsvalley$elm_abc_player$Abc$chordSymbol, _newlandsvalley$elm_abc_player$Abc$decoration, _newlandsvalley$elm_abc_player$Abc$spacer, _newlandsvalley$elm_abc_player$Abc$ignore, _newlandsvalley$elm_abc_player$Abc$continuation])),
			'score item');
	});
var _newlandsvalley$elm_abc_player$Abc$score = A2(
	_Bogdanp$elm_combine$Combine_Infix_ops['<$>'],
	_newlandsvalley$elm_abc_player$Abc_ParseTree$Score,
	A2(_newlandsvalley$elm_abc_player$Combine_Extra$manyTill$, _newlandsvalley$elm_abc_player$Abc$scoreItem, _Bogdanp$elm_combine$Combine_Char$eol));
var _newlandsvalley$elm_abc_player$Abc$body = A2(
	_Bogdanp$elm_combine$Combine_Infix_ops['<*>'],
	A2(
		_Bogdanp$elm_combine$Combine_Infix_ops['<$>'],
		F2(
			function (x, y) {
				return A2(_elm_lang$core$List_ops['::'], x, y);
			}),
		_newlandsvalley$elm_abc_player$Abc$score),
	A2(
		_newlandsvalley$elm_abc_player$Combine_Extra$manyTill$,
		A2(_newlandsvalley$elm_abc_player$Combine_Extra$leftBiasedOr, _newlandsvalley$elm_abc_player$Abc$score, _newlandsvalley$elm_abc_player$Abc$tuneBodyHeader),
		_Bogdanp$elm_combine$Combine$end));
var _newlandsvalley$elm_abc_player$Abc$abc = A2(
	_Bogdanp$elm_combine$Combine_Infix_ops['<*>'],
	A2(
		_Bogdanp$elm_combine$Combine_Infix_ops['<$>'],
		F2(
			function (v0, v1) {
				return {ctor: '_Tuple2', _0: v0, _1: v1};
			}),
		_newlandsvalley$elm_abc_player$Abc$headers),
	_newlandsvalley$elm_abc_player$Abc$body);
var _newlandsvalley$elm_abc_player$Abc$parse = function (s) {
	var _p15 = A2(_Bogdanp$elm_combine$Combine$parse, _newlandsvalley$elm_abc_player$Abc$abc, s);
	if (_p15._0.ctor === 'Ok') {
		return _elm_lang$core$Result$Ok(_p15._0._0);
	} else {
		var _p16 = _p15._1;
		return _elm_lang$core$Result$Err(
			{msgs: _p15._0._0, input: _p16.input, position: _p16.position});
	}
};
var _newlandsvalley$elm_abc_player$Abc$ParseError = F3(
	function (a, b, c) {
		return {msgs: a, input: b, position: c};
	});

var _newlandsvalley$elm_abc_player$Abc_Canonical$continuation = function (c) {
	return c ? '\\' : '';
};
var _newlandsvalley$elm_abc_player$Abc_Canonical$broken = function (b) {
	var _p0 = b;
	if (_p0.ctor === 'LeftArrow') {
		return A2(_elm_lang$core$String$repeat, _p0._0, '<');
	} else {
		return A2(_elm_lang$core$String$repeat, _p0._0, '>');
	}
};
var _newlandsvalley$elm_abc_player$Abc_Canonical$decorate = function (s) {
	return _elm_lang$core$Native_Utils.eq(
		_elm_lang$core$String$length(s),
		1) ? s : A2(
		_elm_lang$core$Basics_ops['++'],
		'!',
		A2(_elm_lang$core$Basics_ops['++'], s, '!'));
};
var _newlandsvalley$elm_abc_player$Abc_Canonical$pitch = F2(
	function (octave, p) {
		return (_elm_lang$core$Native_Utils.cmp(octave, _newlandsvalley$elm_abc_player$Abc_ParseTree$middlecOctave) < 1) ? _elm_lang$core$Basics$toString(p) : _elm_lang$core$String$toLower(
			_elm_lang$core$Basics$toString(p));
	});
var _newlandsvalley$elm_abc_player$Abc_Canonical$octave = function (i) {
	var octaveAboveMiddleC = _newlandsvalley$elm_abc_player$Abc_ParseTree$middlecOctave + 1;
	return (_elm_lang$core$Native_Utils.eq(i, _newlandsvalley$elm_abc_player$Abc_ParseTree$middlecOctave) || _elm_lang$core$Native_Utils.eq(i, octaveAboveMiddleC)) ? '' : ((_elm_lang$core$Native_Utils.cmp(i, octaveAboveMiddleC) > 0) ? A2(_elm_lang$core$String$repeat, i - octaveAboveMiddleC, '\'') : A2(_elm_lang$core$String$repeat, _newlandsvalley$elm_abc_player$Abc_ParseTree$middlecOctave - i, ','));
};
var _newlandsvalley$elm_abc_player$Abc_Canonical$meter = function (ms) {
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
var _newlandsvalley$elm_abc_player$Abc_Canonical$rational = function (r) {
	return A2(
		_elm_lang$core$Basics_ops['++'],
		_elm_lang$core$Basics$toString(
			_imeckler$ratio$Ratio$numerator(r)),
		A2(
			_elm_lang$core$Basics_ops['++'],
			'/',
			_elm_lang$core$Basics$toString(
				_imeckler$ratio$Ratio$denominator(r))));
};
var _newlandsvalley$elm_abc_player$Abc_Canonical$ratlist = function (rs) {
	var f = F2(
		function (r, acc) {
			return A2(
				_elm_lang$core$Basics_ops['++'],
				_newlandsvalley$elm_abc_player$Abc_Canonical$rational(r),
				A2(_elm_lang$core$Basics_ops['++'], ' ', acc));
		});
	return _elm_lang$core$String$trimRight(
		A3(_elm_lang$core$List$foldr, f, '', rs));
};
var _newlandsvalley$elm_abc_player$Abc_Canonical$duration = function (nd) {
	return (_elm_lang$core$Native_Utils.eq(
		_imeckler$ratio$Ratio$denominator(nd),
		1) && _elm_lang$core$Native_Utils.eq(
		_imeckler$ratio$Ratio$numerator(nd),
		1)) ? '' : ((_elm_lang$core$Native_Utils.eq(
		_imeckler$ratio$Ratio$denominator(nd),
		2) && _elm_lang$core$Native_Utils.eq(
		_imeckler$ratio$Ratio$numerator(nd),
		1)) ? '/' : (_elm_lang$core$Native_Utils.eq(
		_imeckler$ratio$Ratio$denominator(nd),
		1) ? _elm_lang$core$Basics$toString(
		_imeckler$ratio$Ratio$numerator(nd)) : _newlandsvalley$elm_abc_player$Abc_Canonical$rational(nd)));
};
var _newlandsvalley$elm_abc_player$Abc_Canonical$rest = function (n) {
	return A2(
		_elm_lang$core$Basics_ops['++'],
		'z',
		_newlandsvalley$elm_abc_player$Abc_Canonical$duration(n));
};
var _newlandsvalley$elm_abc_player$Abc_Canonical$tuplet = function (t) {
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
var _newlandsvalley$elm_abc_player$Abc_Canonical$headerAccidental = function (a) {
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
var _newlandsvalley$elm_abc_player$Abc_Canonical$key = function (k) {
	var acc = A2(
		_elm_lang$core$Maybe$withDefault,
		'',
		A2(_elm_lang$core$Maybe$map, _newlandsvalley$elm_abc_player$Abc_Canonical$headerAccidental, k.accidental));
	return A2(
		_elm_lang$core$Basics_ops['++'],
		_elm_lang$core$Basics$toString(k.pitchClass),
		A2(
			_elm_lang$core$Basics_ops['++'],
			acc,
			_elm_lang$core$Basics$toString(k.mode)));
};
var _newlandsvalley$elm_abc_player$Abc_Canonical$accidental = function (a) {
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
var _newlandsvalley$elm_abc_player$Abc_Canonical$keyAccidental = function (ka) {
	var _p7 = ka;
	var pc = _p7._0;
	var acc = _p7._1;
	return A2(
		_elm_lang$core$Basics_ops['++'],
		_newlandsvalley$elm_abc_player$Abc_Canonical$accidental(acc),
		_elm_lang$core$String$toLower(
			_elm_lang$core$Basics$toString(pc)));
};
var _newlandsvalley$elm_abc_player$Abc_Canonical$keyAccidentals = function (_p8) {
	return _elm_lang$core$String$concat(
		A2(
			_elm_lang$core$List$map,
			function (a) {
				return A2(
					_elm_lang$core$Basics_ops['++'],
					' ',
					_newlandsvalley$elm_abc_player$Abc_Canonical$keyAccidental(a));
			},
			_p8));
};
var _newlandsvalley$elm_abc_player$Abc_Canonical$abcNote = function (a) {
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
		A2(_elm_lang$core$Maybe$map, _newlandsvalley$elm_abc_player$Abc_Canonical$accidental, a.accidental));
	return A2(
		_elm_lang$core$Basics_ops['++'],
		acc,
		A2(
			_elm_lang$core$Basics_ops['++'],
			A2(_newlandsvalley$elm_abc_player$Abc_Canonical$pitch, a.octave, a.pitchClass),
			A2(
				_elm_lang$core$Basics_ops['++'],
				_newlandsvalley$elm_abc_player$Abc_Canonical$octave(a.octave),
				A2(
					_elm_lang$core$Basics_ops['++'],
					_newlandsvalley$elm_abc_player$Abc_Canonical$duration(a.duration),
					tie))));
};
var _newlandsvalley$elm_abc_player$Abc_Canonical$notes = function (ns) {
	var f = F2(
		function (a, acc) {
			return A2(
				_elm_lang$core$Basics_ops['++'],
				_newlandsvalley$elm_abc_player$Abc_Canonical$abcNote(a),
				acc);
		});
	return A3(_elm_lang$core$List$foldr, f, '', ns);
};
var _newlandsvalley$elm_abc_player$Abc_Canonical$abcChord = function (a) {
	return A2(
		_elm_lang$core$Basics_ops['++'],
		'[',
		A2(
			_elm_lang$core$Basics_ops['++'],
			_newlandsvalley$elm_abc_player$Abc_Canonical$notes(a.notes),
			A2(
				_elm_lang$core$Basics_ops['++'],
				']',
				_newlandsvalley$elm_abc_player$Abc_Canonical$duration(a.duration))));
};
var _newlandsvalley$elm_abc_player$Abc_Canonical$bar = function (b) {
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
var _newlandsvalley$elm_abc_player$Abc_Canonical$mode = function (m) {
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
var _newlandsvalley$elm_abc_player$Abc_Canonical$enquote = function (s) {
	return A2(
		_elm_lang$core$Basics_ops['++'],
		'\"',
		A2(_elm_lang$core$Basics_ops['++'], s, '\"'));
};
var _newlandsvalley$elm_abc_player$Abc_Canonical$tempo = function (t) {
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
					_newlandsvalley$elm_abc_player$Abc_Canonical$enquote(s));
			},
			t.marking));
	return A2(
		_elm_lang$core$Basics_ops['++'],
		_newlandsvalley$elm_abc_player$Abc_Canonical$ratlist(t.noteLengths),
		A2(
			_elm_lang$core$Basics_ops['++'],
			eq,
			A2(
				_elm_lang$core$Basics_ops['++'],
				_elm_lang$core$Basics$toString(t.bpm),
				text)));
};
var _newlandsvalley$elm_abc_player$Abc_Canonical$header = function (h) {
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
							_newlandsvalley$elm_abc_player$Abc_Canonical$key(_p13._0._0),
							_newlandsvalley$elm_abc_player$Abc_Canonical$keyAccidentals(_p13._0._1)));
				} else {
					break _v9_28;
				}
			case 'UnitNoteLength':
				return A2(
					_elm_lang$core$Basics_ops['++'],
					'L: ',
					_newlandsvalley$elm_abc_player$Abc_Canonical$duration(_p13._0));
			case 'Meter':
				return A2(
					_elm_lang$core$Basics_ops['++'],
					'M: ',
					_newlandsvalley$elm_abc_player$Abc_Canonical$meter(_p13._0));
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
					_newlandsvalley$elm_abc_player$Abc_Canonical$tempo(_p13._0));
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
var _newlandsvalley$elm_abc_player$Abc_Canonical$tuneHeaders = function (hs) {
	var f = F2(
		function (h, acc) {
			return A2(
				_elm_lang$core$Basics_ops['++'],
				_newlandsvalley$elm_abc_player$Abc_Canonical$header(h),
				A2(_elm_lang$core$Basics_ops['++'], '\r\n', acc));
		});
	return A3(_elm_lang$core$List$foldr, f, '', hs);
};
var _newlandsvalley$elm_abc_player$Abc_Canonical$music = function (m) {
	var _p14 = m;
	switch (_p14.ctor) {
		case 'Barline':
			return _newlandsvalley$elm_abc_player$Abc_Canonical$bar(_p14._0);
		case 'Note':
			return _newlandsvalley$elm_abc_player$Abc_Canonical$abcNote(_p14._0);
		case 'BrokenRhythmPair':
			return A2(
				_elm_lang$core$Basics_ops['++'],
				_newlandsvalley$elm_abc_player$Abc_Canonical$abcNote(_p14._0),
				A2(
					_elm_lang$core$Basics_ops['++'],
					_newlandsvalley$elm_abc_player$Abc_Canonical$broken(_p14._1),
					_newlandsvalley$elm_abc_player$Abc_Canonical$abcNote(_p14._2)));
		case 'Rest':
			return _newlandsvalley$elm_abc_player$Abc_Canonical$rest(_p14._0);
		case 'Tuplet':
			return A2(
				_elm_lang$core$Basics_ops['++'],
				_newlandsvalley$elm_abc_player$Abc_Canonical$tuplet(_p14._0),
				_newlandsvalley$elm_abc_player$Abc_Canonical$notes(_p14._1));
		case 'Decoration':
			return _newlandsvalley$elm_abc_player$Abc_Canonical$decorate(_p14._0);
		case 'GraceNote':
			return A2(
				_elm_lang$core$Basics_ops['++'],
				'{',
				A2(
					_elm_lang$core$Basics_ops['++'],
					_newlandsvalley$elm_abc_player$Abc_Canonical$music(_p14._1),
					'}'));
		case 'Slur':
			return _elm_lang$core$String$fromChar(_p14._0);
		case 'Annotation':
			return A2(
				_elm_lang$core$Basics_ops['++'],
				_elm_lang$core$Basics$toString(_p14._0),
				A2(_elm_lang$core$Basics_ops['++'], ':', _p14._1));
		case 'ChordSymbol':
			return _newlandsvalley$elm_abc_player$Abc_Canonical$enquote(_p14._0);
		case 'Chord':
			return _newlandsvalley$elm_abc_player$Abc_Canonical$abcChord(_p14._0);
		case 'Inline':
			return A2(
				_elm_lang$core$Basics_ops['++'],
				'[',
				A2(
					_elm_lang$core$Basics_ops['++'],
					_newlandsvalley$elm_abc_player$Abc_Canonical$header(_p14._0),
					']'));
		case 'NoteSequence':
			return _newlandsvalley$elm_abc_player$Abc_Canonical$musics(_p14._0);
		case 'Spacer':
			return ' ';
		case 'Ignore':
			return '';
		default:
			return '\\';
	}
};
var _newlandsvalley$elm_abc_player$Abc_Canonical$musics = function (ms) {
	var f = F2(
		function (m, acc) {
			return A2(
				_elm_lang$core$Basics_ops['++'],
				_newlandsvalley$elm_abc_player$Abc_Canonical$music(m),
				acc);
		});
	return A3(_elm_lang$core$List$foldr, f, '', ms);
};
var _newlandsvalley$elm_abc_player$Abc_Canonical$bodyPart = function (bp) {
	var _p15 = bp;
	if (_p15.ctor === 'Score') {
		return _newlandsvalley$elm_abc_player$Abc_Canonical$musics(_p15._0);
	} else {
		return _newlandsvalley$elm_abc_player$Abc_Canonical$header(_p15._0);
	}
};
var _newlandsvalley$elm_abc_player$Abc_Canonical$tuneBody = function (b) {
	var f = F2(
		function (bp, acc) {
			return A2(
				_elm_lang$core$Basics_ops['++'],
				_newlandsvalley$elm_abc_player$Abc_Canonical$bodyPart(bp),
				A2(_elm_lang$core$Basics_ops['++'], '\r\n', acc));
		});
	return A3(_elm_lang$core$List$foldr, f, '', b);
};
var _newlandsvalley$elm_abc_player$Abc_Canonical$fromTune = function (t) {
	return A2(
		_elm_lang$core$Basics_ops['++'],
		_newlandsvalley$elm_abc_player$Abc_Canonical$tuneHeaders(
			_elm_lang$core$Basics$fst(t)),
		_newlandsvalley$elm_abc_player$Abc_Canonical$tuneBody(
			_elm_lang$core$Basics$snd(t)));
};
var _newlandsvalley$elm_abc_player$Abc_Canonical$fromResult = function (r) {
	return A2(_elm_lang$core$Result$map, _newlandsvalley$elm_abc_player$Abc_Canonical$fromTune, r);
};

var _newlandsvalley$elm_abc_player$Music_Accidentals$member = F2(
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
var _newlandsvalley$elm_abc_player$Music_Accidentals$lookup = F2(
	function (pc, accs) {
		return A2(
			_elm_lang$core$Dict$get,
			_elm_lang$core$Basics$toString(pc),
			accs);
	});
var _newlandsvalley$elm_abc_player$Music_Accidentals$fromKeySet = function (ks) {
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
var _newlandsvalley$elm_abc_player$Music_Accidentals$add = F3(
	function (pc, acc, accs) {
		return A3(
			_elm_lang$core$Dict$insert,
			_elm_lang$core$Basics$toString(pc),
			acc,
			accs);
	});
var _newlandsvalley$elm_abc_player$Music_Accidentals$empty = _elm_lang$core$Dict$empty;

var _newlandsvalley$elm_abc_player$Music_Notation$accidentalPattern = function (ma) {
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
var _newlandsvalley$elm_abc_player$Music_Notation$isFlatMajorKey = function (target) {
	var _p1 = target;
	var pc = _p1._0;
	var accidental = _p1._1;
	var _p2 = accidental;
	if (_p2.ctor === 'Natural') {
		return _elm_lang$core$Native_Utils.eq(pc, _newlandsvalley$elm_abc_player$Abc_ParseTree$F);
	} else {
		return _elm_lang$core$Native_Utils.eq(_p2, _newlandsvalley$elm_abc_player$Abc_ParseTree$Flat);
	}
};
var _newlandsvalley$elm_abc_player$Music_Notation$accidentalKey = function (k) {
	var _p3 = k;
	var pc = _p3._0;
	var acc = _p3._1;
	return !_elm_lang$core$Native_Utils.eq(acc, _newlandsvalley$elm_abc_player$Abc_ParseTree$Natural);
};
var _newlandsvalley$elm_abc_player$Music_Notation$partialSum = function (l) {
	return A2(
		_elm_lang$core$List$take,
		_elm_lang$core$List$length(l),
		_elm_lang$core$List$reverse(
			A2(
				_elm_lang$core$List$map,
				_elm_lang$core$List$sum,
				_elm_community$elm_list_extra$List_Extra$tails(
					_elm_lang$core$List$reverse(l)))));
};
var _newlandsvalley$elm_abc_player$Music_Notation$rotateLeftBy = F2(
	function (index, ls) {
		var listPair = A2(_elm_community$elm_list_extra$List_Extra$splitAt, index, ls);
		return A2(
			_elm_lang$core$List$append,
			_elm_lang$core$Basics$snd(listPair),
			_elm_lang$core$Basics$fst(listPair));
	});
var _newlandsvalley$elm_abc_player$Music_Notation$rotateFrom = F2(
	function (target, scale) {
		var index = A2(
			_elm_lang$core$Maybe$withDefault,
			0,
			A2(_elm_community$elm_list_extra$List_Extra$elemIndex, target, scale));
		var listPair = A2(_elm_community$elm_list_extra$List_Extra$splitAt, index, scale);
		return A2(
			_elm_lang$core$List$append,
			_elm_lang$core$Basics$snd(listPair),
			_elm_lang$core$Basics$fst(listPair));
	});
var _newlandsvalley$elm_abc_player$Music_Notation$chromaticScaleDict = _elm_lang$core$Dict$fromList(
	_elm_lang$core$Native_List.fromArray(
		[
			{ctor: '_Tuple2', _0: 'C', _1: 0},
			{ctor: '_Tuple2', _0: 'C#', _1: 1},
			{ctor: '_Tuple2', _0: 'Db', _1: 1},
			{ctor: '_Tuple2', _0: 'D', _1: 2},
			{ctor: '_Tuple2', _0: 'D#', _1: 3},
			{ctor: '_Tuple2', _0: 'Eb', _1: 3},
			{ctor: '_Tuple2', _0: 'E', _1: 4},
			{ctor: '_Tuple2', _0: 'F', _1: 5},
			{ctor: '_Tuple2', _0: 'F#', _1: 6},
			{ctor: '_Tuple2', _0: 'Gb', _1: 6},
			{ctor: '_Tuple2', _0: 'G', _1: 7},
			{ctor: '_Tuple2', _0: 'G#', _1: 8},
			{ctor: '_Tuple2', _0: 'Ab', _1: 8},
			{ctor: '_Tuple2', _0: 'A', _1: 9},
			{ctor: '_Tuple2', _0: 'A#', _1: 10},
			{ctor: '_Tuple2', _0: 'Bb', _1: 10},
			{ctor: '_Tuple2', _0: 'B', _1: 11}
		]));
var _newlandsvalley$elm_abc_player$Music_Notation$majorIntervals = _elm_lang$core$Native_List.fromArray(
	[2, 2, 1, 2, 2, 2, 1]);
var _newlandsvalley$elm_abc_player$Music_Notation$equivalentEnharmonicKeySig = F3(
	function (pc, a, m) {
		var _p4 = {ctor: '_Tuple3', _0: pc, _1: a, _2: m};
		_v2_6:
		do {
			if (_p4.ctor === '_Tuple3') {
				switch (_p4._1.ctor) {
					case 'Sharp':
						if (_p4._2.ctor === 'Major') {
							switch (_p4._0.ctor) {
								case 'A':
									return {
										pitchClass: _newlandsvalley$elm_abc_player$Abc_ParseTree$B,
										accidental: _elm_lang$core$Maybe$Just(_newlandsvalley$elm_abc_player$Abc_ParseTree$Flat),
										mode: _newlandsvalley$elm_abc_player$Abc_ParseTree$Major
									};
								case 'D':
									return {
										pitchClass: _newlandsvalley$elm_abc_player$Abc_ParseTree$E,
										accidental: _elm_lang$core$Maybe$Just(_newlandsvalley$elm_abc_player$Abc_ParseTree$Flat),
										mode: _newlandsvalley$elm_abc_player$Abc_ParseTree$Major
									};
								case 'G':
									return {
										pitchClass: _newlandsvalley$elm_abc_player$Abc_ParseTree$A,
										accidental: _elm_lang$core$Maybe$Just(_newlandsvalley$elm_abc_player$Abc_ParseTree$Flat),
										mode: _newlandsvalley$elm_abc_player$Abc_ParseTree$Major
									};
								default:
									break _v2_6;
							}
						} else {
							break _v2_6;
						}
					case 'Flat':
						if (_p4._2.ctor === 'Minor') {
							switch (_p4._0.ctor) {
								case 'G':
									return {
										pitchClass: _newlandsvalley$elm_abc_player$Abc_ParseTree$F,
										accidental: _elm_lang$core$Maybe$Just(_newlandsvalley$elm_abc_player$Abc_ParseTree$Sharp),
										mode: _newlandsvalley$elm_abc_player$Abc_ParseTree$Minor
									};
								case 'D':
									return {
										pitchClass: _newlandsvalley$elm_abc_player$Abc_ParseTree$C,
										accidental: _elm_lang$core$Maybe$Just(_newlandsvalley$elm_abc_player$Abc_ParseTree$Sharp),
										mode: _newlandsvalley$elm_abc_player$Abc_ParseTree$Minor
									};
								case 'A':
									return {
										pitchClass: _newlandsvalley$elm_abc_player$Abc_ParseTree$G,
										accidental: _elm_lang$core$Maybe$Just(_newlandsvalley$elm_abc_player$Abc_ParseTree$Sharp),
										mode: _newlandsvalley$elm_abc_player$Abc_ParseTree$Minor
									};
								default:
									break _v2_6;
							}
						} else {
							break _v2_6;
						}
					default:
						break _v2_6;
				}
			} else {
				break _v2_6;
			}
		} while(false);
		return {
			pitchClass: pc,
			accidental: _elm_lang$core$Maybe$Just(a),
			mode: m
		};
	});
var _newlandsvalley$elm_abc_player$Music_Notation$equivalentEnharmonic = function (k) {
	var _p5 = k;
	_v3_4:
	do {
		if ((_p5.ctor === '_Tuple2') && (_p5._1.ctor === 'Sharp')) {
			switch (_p5._0.ctor) {
				case 'A':
					return {ctor: '_Tuple2', _0: _newlandsvalley$elm_abc_player$Abc_ParseTree$B, _1: _newlandsvalley$elm_abc_player$Abc_ParseTree$Flat};
				case 'C':
					return {ctor: '_Tuple2', _0: _newlandsvalley$elm_abc_player$Abc_ParseTree$D, _1: _newlandsvalley$elm_abc_player$Abc_ParseTree$Flat};
				case 'D':
					return {ctor: '_Tuple2', _0: _newlandsvalley$elm_abc_player$Abc_ParseTree$E, _1: _newlandsvalley$elm_abc_player$Abc_ParseTree$Flat};
				case 'G':
					return {ctor: '_Tuple2', _0: _newlandsvalley$elm_abc_player$Abc_ParseTree$A, _1: _newlandsvalley$elm_abc_player$Abc_ParseTree$Flat};
				default:
					break _v3_4;
			}
		} else {
			break _v3_4;
		}
	} while(false);
	return k;
};
var _newlandsvalley$elm_abc_player$Music_Notation$flatScale = _elm_lang$core$Native_List.fromArray(
	[
		{ctor: '_Tuple2', _0: _newlandsvalley$elm_abc_player$Abc_ParseTree$C, _1: _newlandsvalley$elm_abc_player$Abc_ParseTree$Natural},
		{ctor: '_Tuple2', _0: _newlandsvalley$elm_abc_player$Abc_ParseTree$D, _1: _newlandsvalley$elm_abc_player$Abc_ParseTree$Flat},
		{ctor: '_Tuple2', _0: _newlandsvalley$elm_abc_player$Abc_ParseTree$D, _1: _newlandsvalley$elm_abc_player$Abc_ParseTree$Natural},
		{ctor: '_Tuple2', _0: _newlandsvalley$elm_abc_player$Abc_ParseTree$E, _1: _newlandsvalley$elm_abc_player$Abc_ParseTree$Flat},
		{ctor: '_Tuple2', _0: _newlandsvalley$elm_abc_player$Abc_ParseTree$E, _1: _newlandsvalley$elm_abc_player$Abc_ParseTree$Natural},
		{ctor: '_Tuple2', _0: _newlandsvalley$elm_abc_player$Abc_ParseTree$F, _1: _newlandsvalley$elm_abc_player$Abc_ParseTree$Natural},
		{ctor: '_Tuple2', _0: _newlandsvalley$elm_abc_player$Abc_ParseTree$G, _1: _newlandsvalley$elm_abc_player$Abc_ParseTree$Flat},
		{ctor: '_Tuple2', _0: _newlandsvalley$elm_abc_player$Abc_ParseTree$G, _1: _newlandsvalley$elm_abc_player$Abc_ParseTree$Natural},
		{ctor: '_Tuple2', _0: _newlandsvalley$elm_abc_player$Abc_ParseTree$A, _1: _newlandsvalley$elm_abc_player$Abc_ParseTree$Flat},
		{ctor: '_Tuple2', _0: _newlandsvalley$elm_abc_player$Abc_ParseTree$A, _1: _newlandsvalley$elm_abc_player$Abc_ParseTree$Natural},
		{ctor: '_Tuple2', _0: _newlandsvalley$elm_abc_player$Abc_ParseTree$B, _1: _newlandsvalley$elm_abc_player$Abc_ParseTree$Flat},
		{ctor: '_Tuple2', _0: _newlandsvalley$elm_abc_player$Abc_ParseTree$B, _1: _newlandsvalley$elm_abc_player$Abc_ParseTree$Natural}
	]);
var _newlandsvalley$elm_abc_player$Music_Notation$extremeFlatScale = function () {
	var f = function (pc) {
		var _p6 = pc;
		_v4_2:
		do {
			if ((_p6.ctor === '_Tuple2') && (_p6._1.ctor === 'Natural')) {
				switch (_p6._0.ctor) {
					case 'E':
						return {ctor: '_Tuple2', _0: _newlandsvalley$elm_abc_player$Abc_ParseTree$F, _1: _newlandsvalley$elm_abc_player$Abc_ParseTree$Flat};
					case 'B':
						return {ctor: '_Tuple2', _0: _newlandsvalley$elm_abc_player$Abc_ParseTree$C, _1: _newlandsvalley$elm_abc_player$Abc_ParseTree$Flat};
					default:
						break _v4_2;
				}
			} else {
				break _v4_2;
			}
		} while(false);
		return pc;
	};
	return A2(_elm_lang$core$List$map, f, _newlandsvalley$elm_abc_player$Music_Notation$flatScale);
}();
var _newlandsvalley$elm_abc_player$Music_Notation$sharpScale = _elm_lang$core$Native_List.fromArray(
	[
		{ctor: '_Tuple2', _0: _newlandsvalley$elm_abc_player$Abc_ParseTree$C, _1: _newlandsvalley$elm_abc_player$Abc_ParseTree$Natural},
		{ctor: '_Tuple2', _0: _newlandsvalley$elm_abc_player$Abc_ParseTree$C, _1: _newlandsvalley$elm_abc_player$Abc_ParseTree$Sharp},
		{ctor: '_Tuple2', _0: _newlandsvalley$elm_abc_player$Abc_ParseTree$D, _1: _newlandsvalley$elm_abc_player$Abc_ParseTree$Natural},
		{ctor: '_Tuple2', _0: _newlandsvalley$elm_abc_player$Abc_ParseTree$D, _1: _newlandsvalley$elm_abc_player$Abc_ParseTree$Sharp},
		{ctor: '_Tuple2', _0: _newlandsvalley$elm_abc_player$Abc_ParseTree$E, _1: _newlandsvalley$elm_abc_player$Abc_ParseTree$Natural},
		{ctor: '_Tuple2', _0: _newlandsvalley$elm_abc_player$Abc_ParseTree$F, _1: _newlandsvalley$elm_abc_player$Abc_ParseTree$Natural},
		{ctor: '_Tuple2', _0: _newlandsvalley$elm_abc_player$Abc_ParseTree$F, _1: _newlandsvalley$elm_abc_player$Abc_ParseTree$Sharp},
		{ctor: '_Tuple2', _0: _newlandsvalley$elm_abc_player$Abc_ParseTree$G, _1: _newlandsvalley$elm_abc_player$Abc_ParseTree$Natural},
		{ctor: '_Tuple2', _0: _newlandsvalley$elm_abc_player$Abc_ParseTree$G, _1: _newlandsvalley$elm_abc_player$Abc_ParseTree$Sharp},
		{ctor: '_Tuple2', _0: _newlandsvalley$elm_abc_player$Abc_ParseTree$A, _1: _newlandsvalley$elm_abc_player$Abc_ParseTree$Natural},
		{ctor: '_Tuple2', _0: _newlandsvalley$elm_abc_player$Abc_ParseTree$A, _1: _newlandsvalley$elm_abc_player$Abc_ParseTree$Sharp},
		{ctor: '_Tuple2', _0: _newlandsvalley$elm_abc_player$Abc_ParseTree$B, _1: _newlandsvalley$elm_abc_player$Abc_ParseTree$Natural}
	]);
var _newlandsvalley$elm_abc_player$Music_Notation$extremeSharpScale = function () {
	var f = function (pc) {
		var _p7 = pc;
		_v5_2:
		do {
			if ((_p7.ctor === '_Tuple2') && (_p7._1.ctor === 'Natural')) {
				switch (_p7._0.ctor) {
					case 'F':
						return {ctor: '_Tuple2', _0: _newlandsvalley$elm_abc_player$Abc_ParseTree$E, _1: _newlandsvalley$elm_abc_player$Abc_ParseTree$Sharp};
					case 'C':
						return {ctor: '_Tuple2', _0: _newlandsvalley$elm_abc_player$Abc_ParseTree$B, _1: _newlandsvalley$elm_abc_player$Abc_ParseTree$Sharp};
					default:
						break _v5_2;
				}
			} else {
				break _v5_2;
			}
		} while(false);
		return pc;
	};
	return A2(_elm_lang$core$List$map, f, _newlandsvalley$elm_abc_player$Music_Notation$sharpScale);
}();
var _newlandsvalley$elm_abc_player$Music_Notation$transposeKeyAccidentalBy = F2(
	function (i, ka) {
		var _p8 = ka;
		var sourcepc = _p8._0;
		var sourceacc = _p8._1;
		var pattern = _elm_lang$core$Basics$toString(sourcepc);
		var index = A2(
			_elm_lang$core$Maybe$withDefault,
			0,
			A2(_elm_lang$core$Dict$get, pattern, _newlandsvalley$elm_abc_player$Music_Notation$chromaticScaleDict));
		var _p9 = function () {
			var _p10 = sourceacc;
			switch (_p10.ctor) {
				case 'Sharp':
					return {ctor: '_Tuple2', _0: 1, _1: _newlandsvalley$elm_abc_player$Music_Notation$sharpScale};
				case 'Flat':
					return {ctor: '_Tuple2', _0: -1, _1: _newlandsvalley$elm_abc_player$Music_Notation$flatScale};
				case 'DoubleSharp':
					return {ctor: '_Tuple2', _0: 2, _1: _newlandsvalley$elm_abc_player$Music_Notation$sharpScale};
				case 'DoubleFlat':
					return {ctor: '_Tuple2', _0: -2, _1: _newlandsvalley$elm_abc_player$Music_Notation$flatScale};
				default:
					return {ctor: '_Tuple2', _0: 0, _1: _newlandsvalley$elm_abc_player$Music_Notation$sharpScale};
			}
		}();
		var modifier = _p9._0;
		var scale = _p9._1;
		return A2(
			_elm_lang$core$Maybe$withDefault,
			{ctor: '_Tuple2', _0: _newlandsvalley$elm_abc_player$Abc_ParseTree$C, _1: _newlandsvalley$elm_abc_player$Abc_ParseTree$Natural},
			A2(_elm_community$elm_list_extra$List_Extra$getAt, (index + modifier) + i, scale));
	});
var _newlandsvalley$elm_abc_player$Music_Notation$midiTempo = function (t) {
	var relativeNoteLength = A2(_imeckler$ratio$Ratio$divide, t.unitNoteLength, t.tempoNoteLength);
	return _elm_lang$core$Basics$round(
		((60.0 * 1000000) * _elm_lang$core$Basics$toFloat(
			_imeckler$ratio$Ratio$numerator(relativeNoteLength))) / (_elm_lang$core$Basics$toFloat(t.bpm) * _elm_lang$core$Basics$toFloat(
			_imeckler$ratio$Ratio$denominator(relativeNoteLength))));
};
var _newlandsvalley$elm_abc_player$Music_Notation$chordalNoteDuration = F3(
	function (t, note, chord) {
		return (((60.0 * _imeckler$ratio$Ratio$toFloat(t.unitNoteLength)) * _imeckler$ratio$Ratio$toFloat(note)) * _imeckler$ratio$Ratio$toFloat(chord)) / (_imeckler$ratio$Ratio$toFloat(t.tempoNoteLength) * _elm_lang$core$Basics$toFloat(t.bpm));
	});
var _newlandsvalley$elm_abc_player$Music_Notation$noteDuration = F2(
	function (t, n) {
		return ((60.0 * _imeckler$ratio$Ratio$toFloat(t.unitNoteLength)) * _imeckler$ratio$Ratio$toFloat(n)) / (_imeckler$ratio$Ratio$toFloat(t.tempoNoteLength) * _elm_lang$core$Basics$toFloat(t.bpm));
	});
var _newlandsvalley$elm_abc_player$Music_Notation$dotFactor = function (i) {
	var _p11 = i;
	switch (_p11) {
		case 1:
			return A2(_imeckler$ratio$Ratio$over, 1, 2);
		case 2:
			return A2(_imeckler$ratio$Ratio$over, 3, 4);
		case 3:
			return A2(_imeckler$ratio$Ratio$over, 7, 8);
		default:
			return A2(_imeckler$ratio$Ratio$over, 0, 1);
	}
};
var _newlandsvalley$elm_abc_player$Music_Notation$modifyKeySet = F2(
	function (target, ks) {
		var _p12 = target;
		var pc = _p12._0;
		var accidental = _p12._1;
		var f = function (key) {
			return !_elm_lang$core$Native_Utils.eq(
				_elm_lang$core$Basics$fst(key),
				pc);
		};
		var newks = A2(_elm_lang$core$List$filter, f, ks);
		return _elm_lang$core$Native_Utils.eq(accidental, _newlandsvalley$elm_abc_player$Abc_ParseTree$Natural) ? ks : A2(_elm_lang$core$List_ops['::'], target, ks);
	});
var _newlandsvalley$elm_abc_player$Music_Notation$inScale = F2(
	function (ka, s) {
		return A2(_elm_lang$core$List$member, ka, s);
	});
var _newlandsvalley$elm_abc_player$Music_Notation$getTitle = function (t) {
	var f = function (h) {
		var _p13 = h;
		if (_p13.ctor === 'Title') {
			return _elm_lang$core$Maybe$Just(_p13._0);
		} else {
			return _elm_lang$core$Maybe$Nothing;
		}
	};
	var headers = _elm_lang$core$Basics$fst(t);
	var titles = A2(
		_elm_lang$core$List$filter,
		_elm_community$maybe_extra$Maybe_Extra$isJust,
		A2(_elm_lang$core$List$map, f, headers));
	return _elm_community$maybe_extra$Maybe_Extra$join(
		_elm_lang$core$List$head(titles));
};
var _newlandsvalley$elm_abc_player$Music_Notation$getKeySig = function (t) {
	var f = function (h) {
		var _p14 = h;
		if (_p14.ctor === 'Key') {
			return _elm_lang$core$Maybe$Just(_p14._0);
		} else {
			return _elm_lang$core$Maybe$Nothing;
		}
	};
	var headers = _elm_lang$core$Basics$fst(t);
	var ksigs = A2(
		_elm_lang$core$List$filter,
		_elm_community$maybe_extra$Maybe_Extra$isJust,
		A2(_elm_lang$core$List$map, f, headers));
	return _elm_community$maybe_extra$Maybe_Extra$join(
		_elm_lang$core$List$head(ksigs));
};
var _newlandsvalley$elm_abc_player$Music_Notation$inKeySet = F2(
	function (ka, ks) {
		return A2(_elm_lang$core$List$member, ka, ks);
	});
var _newlandsvalley$elm_abc_player$Music_Notation$notesInChromaticScale = 12;
var _newlandsvalley$elm_abc_player$Music_Notation$lookUp = F2(
	function (s, i) {
		var modi = A2(_elm_lang$core$Basics_ops['%'], i, _newlandsvalley$elm_abc_player$Music_Notation$notesInChromaticScale);
		var index = (_elm_lang$core$Native_Utils.cmp(modi, 0) < 0) ? (_newlandsvalley$elm_abc_player$Music_Notation$notesInChromaticScale - modi) : modi;
		return A2(
			_elm_lang$core$Maybe$withDefault,
			{ctor: '_Tuple2', _0: _newlandsvalley$elm_abc_player$Abc_ParseTree$C, _1: _newlandsvalley$elm_abc_player$Abc_ParseTree$Natural},
			A2(_elm_community$elm_list_extra$List_Extra$getAt, index, s));
	});
var _newlandsvalley$elm_abc_player$Music_Notation$majorScale = function (target) {
	var chromaticScale = (_elm_lang$core$Native_Utils.eq(
		target,
		{ctor: '_Tuple2', _0: _newlandsvalley$elm_abc_player$Abc_ParseTree$G, _1: _newlandsvalley$elm_abc_player$Abc_ParseTree$Flat}) || _elm_lang$core$Native_Utils.eq(
		target,
		{ctor: '_Tuple2', _0: _newlandsvalley$elm_abc_player$Abc_ParseTree$C, _1: _newlandsvalley$elm_abc_player$Abc_ParseTree$Flat})) ? _newlandsvalley$elm_abc_player$Music_Notation$extremeFlatScale : (_newlandsvalley$elm_abc_player$Music_Notation$isFlatMajorKey(target) ? _newlandsvalley$elm_abc_player$Music_Notation$flatScale : ((_elm_lang$core$Native_Utils.eq(
		target,
		{ctor: '_Tuple2', _0: _newlandsvalley$elm_abc_player$Abc_ParseTree$F, _1: _newlandsvalley$elm_abc_player$Abc_ParseTree$Sharp}) || _elm_lang$core$Native_Utils.eq(
		target,
		{ctor: '_Tuple2', _0: _newlandsvalley$elm_abc_player$Abc_ParseTree$C, _1: _newlandsvalley$elm_abc_player$Abc_ParseTree$Sharp})) ? _newlandsvalley$elm_abc_player$Music_Notation$extremeSharpScale : _newlandsvalley$elm_abc_player$Music_Notation$sharpScale));
	var f = _newlandsvalley$elm_abc_player$Music_Notation$lookUp(
		A2(_newlandsvalley$elm_abc_player$Music_Notation$rotateFrom, target, chromaticScale));
	return A2(
		_elm_lang$core$List$map,
		f,
		_newlandsvalley$elm_abc_player$Music_Notation$partialSum(_newlandsvalley$elm_abc_player$Music_Notation$majorIntervals));
};
var _newlandsvalley$elm_abc_player$Music_Notation$modalScale = F2(
	function (target, mode) {
		var index = A2(
			_elm_lang$core$Maybe$withDefault,
			0,
			A2(_elm_community$elm_list_extra$List_Extra$elemIndex, target, _newlandsvalley$elm_abc_player$Music_Notation$sharpScale));
		var distance = function () {
			var _p15 = mode;
			switch (_p15.ctor) {
				case 'Minor':
					return 3;
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
				case 'Locrian':
					return 1;
				default:
					return 0;
			}
		}();
		var majorKeyIndex = A2(_elm_lang$core$Basics_ops['%'], index + distance, _newlandsvalley$elm_abc_player$Music_Notation$notesInChromaticScale);
		var majorKey = A2(_newlandsvalley$elm_abc_player$Music_Notation$lookUp, _newlandsvalley$elm_abc_player$Music_Notation$sharpScale, majorKeyIndex);
		return _newlandsvalley$elm_abc_player$Music_Notation$majorScale(
			_newlandsvalley$elm_abc_player$Music_Notation$equivalentEnharmonic(majorKey));
	});
var _newlandsvalley$elm_abc_player$Music_Notation$diatonicScale = function (ks) {
	var accidental = function () {
		var _p16 = ks.accidental;
		if (_p16.ctor === 'Just') {
			return _p16._0;
		} else {
			return _newlandsvalley$elm_abc_player$Abc_ParseTree$Natural;
		}
	}();
	var target = {ctor: '_Tuple2', _0: ks.pitchClass, _1: accidental};
	var _p17 = ks.mode;
	switch (_p17.ctor) {
		case 'Major':
			return _newlandsvalley$elm_abc_player$Music_Notation$majorScale(target);
		case 'Ionian':
			return _newlandsvalley$elm_abc_player$Music_Notation$majorScale(target);
		default:
			return A2(_newlandsvalley$elm_abc_player$Music_Notation$modalScale, target, ks.mode);
	}
};
var _newlandsvalley$elm_abc_player$Music_Notation$keySet = function (ks) {
	return A2(
		_elm_lang$core$List$filter,
		_newlandsvalley$elm_abc_player$Music_Notation$accidentalKey,
		_newlandsvalley$elm_abc_player$Music_Notation$diatonicScale(ks));
};
var _newlandsvalley$elm_abc_player$Music_Notation$modifiedKeySet = function (ksm) {
	var _p18 = ksm;
	var ksig = _p18._0;
	var mods = _p18._1;
	var ks = _newlandsvalley$elm_abc_player$Music_Notation$keySet(ksig);
	return _elm_lang$core$List$isEmpty(mods) ? ks : A3(_elm_lang$core$List$foldr, _newlandsvalley$elm_abc_player$Music_Notation$modifyKeySet, ks, mods);
};
var _newlandsvalley$elm_abc_player$Music_Notation$getKeySet = function (t) {
	var mksig = _newlandsvalley$elm_abc_player$Music_Notation$getKeySig(t);
	var _p19 = mksig;
	if (_p19.ctor === 'Just') {
		return _newlandsvalley$elm_abc_player$Music_Notation$modifiedKeySet(_p19._0);
	} else {
		return _elm_lang$core$Native_List.fromArray(
			[]);
	}
};
var _newlandsvalley$elm_abc_player$Music_Notation$accidentalImplicitInKey = F2(
	function (pc, mks) {
		var keyset = _newlandsvalley$elm_abc_player$Music_Notation$modifiedKeySet(mks);
		var accidentals = _newlandsvalley$elm_abc_player$Music_Accidentals$fromKeySet(keyset);
		return A2(_newlandsvalley$elm_abc_player$Music_Accidentals$lookup, pc, accidentals);
	});
var _newlandsvalley$elm_abc_player$Music_Notation$midiPitchOffset = F3(
	function (n, mks, barAccidentals) {
		var inKeyAccidental = A2(_newlandsvalley$elm_abc_player$Music_Notation$accidentalImplicitInKey, n.pitchClass, mks);
		var inBarAccidental = A2(_newlandsvalley$elm_abc_player$Music_Accidentals$lookup, n.pitchClass, barAccidentals);
		var maybeAccidental = _elm_lang$core$Maybe$oneOf(
			_elm_lang$core$Native_List.fromArray(
				[n.accidental, inBarAccidental, inKeyAccidental]));
		var accidental = _newlandsvalley$elm_abc_player$Music_Notation$accidentalPattern(maybeAccidental);
		var pattern = A2(
			_elm_lang$core$Basics_ops['++'],
			_elm_lang$core$Basics$toString(n.pitchClass),
			accidental);
		return A2(
			_elm_lang$core$Maybe$withDefault,
			0,
			A2(_elm_lang$core$Dict$get, pattern, _newlandsvalley$elm_abc_player$Music_Notation$chromaticScaleDict));
	});
var _newlandsvalley$elm_abc_player$Music_Notation$toMidiPitch = F3(
	function (n, mks, barAccidentals) {
		return (n.octave * _newlandsvalley$elm_abc_player$Music_Notation$notesInChromaticScale) + A3(_newlandsvalley$elm_abc_player$Music_Notation$midiPitchOffset, n, mks, barAccidentals);
	});
var _newlandsvalley$elm_abc_player$Music_Notation$isCOrSharpKey = function (ksig) {
	var kset = _newlandsvalley$elm_abc_player$Music_Notation$keySet(ksig);
	var _p20 = A2(
		_elm_lang$core$Maybe$withDefault,
		{ctor: '_Tuple2', _0: _newlandsvalley$elm_abc_player$Abc_ParseTree$C, _1: _newlandsvalley$elm_abc_player$Abc_ParseTree$Sharp},
		_elm_lang$core$List$head(kset));
	var samplePC = _p20._0;
	var sampleAcc = _p20._1;
	return _elm_lang$core$Native_Utils.eq(sampleAcc, _newlandsvalley$elm_abc_player$Abc_ParseTree$Sharp);
};
var _newlandsvalley$elm_abc_player$Music_Notation$transposeKeySignatureBy = F2(
	function (i, mks) {
		var _p21 = mks;
		var ks = _p21._0;
		var keyaccs = _p21._1;
		var pattern = A2(
			_elm_lang$core$Basics_ops['++'],
			_elm_lang$core$Basics$toString(ks.pitchClass),
			_newlandsvalley$elm_abc_player$Music_Notation$accidentalPattern(ks.accidental));
		var index = A2(
			_elm_lang$core$Maybe$withDefault,
			0,
			A2(_elm_lang$core$Dict$get, pattern, _newlandsvalley$elm_abc_player$Music_Notation$chromaticScaleDict));
		var newIndex = A2(_elm_lang$core$Basics_ops['%'], (_newlandsvalley$elm_abc_player$Music_Notation$notesInChromaticScale + index) + i, _newlandsvalley$elm_abc_player$Music_Notation$notesInChromaticScale);
		var scale = _newlandsvalley$elm_abc_player$Music_Notation$isCOrSharpKey(ks) ? _newlandsvalley$elm_abc_player$Music_Notation$sharpScale : _newlandsvalley$elm_abc_player$Music_Notation$flatScale;
		var _p22 = A2(
			_elm_lang$core$Maybe$withDefault,
			{ctor: '_Tuple2', _0: _newlandsvalley$elm_abc_player$Abc_ParseTree$C, _1: _newlandsvalley$elm_abc_player$Abc_ParseTree$Natural},
			A2(_elm_community$elm_list_extra$List_Extra$getAt, newIndex, scale));
		var pc = _p22._0;
		var ma = _p22._1;
		var accs = A2(
			_elm_lang$core$List$map,
			_newlandsvalley$elm_abc_player$Music_Notation$transposeKeyAccidentalBy(i),
			keyaccs);
		var newks = A3(_newlandsvalley$elm_abc_player$Music_Notation$equivalentEnharmonicKeySig, pc, ma, ks.mode);
		return {ctor: '_Tuple2', _0: newks, _1: accs};
	});
var _newlandsvalley$elm_abc_player$Music_Notation$standardMidiTick = 480;
var _newlandsvalley$elm_abc_player$Music_Notation$noteTicks = function (n) {
	return ((_newlandsvalley$elm_abc_player$Music_Notation$standardMidiTick * _imeckler$ratio$Ratio$numerator(n)) / _imeckler$ratio$Ratio$denominator(n)) | 0;
};
var _newlandsvalley$elm_abc_player$Music_Notation$chordalNoteTicks = F2(
	function (note, chord) {
		var nTicks = _newlandsvalley$elm_abc_player$Music_Notation$noteTicks(note);
		return ((nTicks * _imeckler$ratio$Ratio$numerator(chord)) / _imeckler$ratio$Ratio$denominator(chord)) | 0;
	});
var _newlandsvalley$elm_abc_player$Music_Notation$AbcTempo = F3(
	function (a, b, c) {
		return {tempoNoteLength: a, bpm: b, unitNoteLength: c};
	});

var _newlandsvalley$elm_abc_player$Music_Transposition$replaceKeyHeader = F2(
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
			_elm_lang$core$Native_List.fromArray(
				[
					_newlandsvalley$elm_abc_player$Abc_ParseTree$Key(newmks)
				]));
	});
var _newlandsvalley$elm_abc_player$Music_Transposition$noteIndex = F2(
	function (from, increment) {
		var to = from + increment;
		return (_elm_lang$core$Native_Utils.cmp(to, 0) < 0) ? {ctor: '_Tuple2', _0: _newlandsvalley$elm_abc_player$Music_Notation$notesInChromaticScale + to, _1: -1} : ((_elm_lang$core$Native_Utils.cmp(to, _newlandsvalley$elm_abc_player$Music_Notation$notesInChromaticScale) > -1) ? {ctor: '_Tuple2', _0: to - _newlandsvalley$elm_abc_player$Music_Notation$notesInChromaticScale, _1: 1} : {ctor: '_Tuple2', _0: to, _1: 0});
	});
var _newlandsvalley$elm_abc_player$Music_Transposition$lookupChromatic = F2(
	function (dict, target) {
		return A2(
			_elm_lang$core$Maybe$withDefault,
			0,
			A2(_elm_lang$core$Dict$get, target, dict));
	});
var _newlandsvalley$elm_abc_player$Music_Transposition$comparableNote = function (n) {
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
var _newlandsvalley$elm_abc_player$Music_Transposition$noteNumbers = _elm_lang$core$Native_List.fromArray(
	[
		{
		ctor: '_Tuple2',
		_0: {ctor: '_Tuple2', _0: _newlandsvalley$elm_abc_player$Abc_ParseTree$C, _1: _newlandsvalley$elm_abc_player$Abc_ParseTree$Flat},
		_1: 11
	},
		{
		ctor: '_Tuple2',
		_0: {ctor: '_Tuple2', _0: _newlandsvalley$elm_abc_player$Abc_ParseTree$C, _1: _newlandsvalley$elm_abc_player$Abc_ParseTree$Natural},
		_1: 0
	},
		{
		ctor: '_Tuple2',
		_0: {ctor: '_Tuple2', _0: _newlandsvalley$elm_abc_player$Abc_ParseTree$C, _1: _newlandsvalley$elm_abc_player$Abc_ParseTree$Sharp},
		_1: 1
	},
		{
		ctor: '_Tuple2',
		_0: {ctor: '_Tuple2', _0: _newlandsvalley$elm_abc_player$Abc_ParseTree$C, _1: _newlandsvalley$elm_abc_player$Abc_ParseTree$DoubleSharp},
		_1: 2
	},
		{
		ctor: '_Tuple2',
		_0: {ctor: '_Tuple2', _0: _newlandsvalley$elm_abc_player$Abc_ParseTree$D, _1: _newlandsvalley$elm_abc_player$Abc_ParseTree$DoubleFlat},
		_1: 0
	},
		{
		ctor: '_Tuple2',
		_0: {ctor: '_Tuple2', _0: _newlandsvalley$elm_abc_player$Abc_ParseTree$D, _1: _newlandsvalley$elm_abc_player$Abc_ParseTree$Flat},
		_1: 1
	},
		{
		ctor: '_Tuple2',
		_0: {ctor: '_Tuple2', _0: _newlandsvalley$elm_abc_player$Abc_ParseTree$D, _1: _newlandsvalley$elm_abc_player$Abc_ParseTree$Natural},
		_1: 2
	},
		{
		ctor: '_Tuple2',
		_0: {ctor: '_Tuple2', _0: _newlandsvalley$elm_abc_player$Abc_ParseTree$D, _1: _newlandsvalley$elm_abc_player$Abc_ParseTree$Sharp},
		_1: 3
	},
		{
		ctor: '_Tuple2',
		_0: {ctor: '_Tuple2', _0: _newlandsvalley$elm_abc_player$Abc_ParseTree$D, _1: _newlandsvalley$elm_abc_player$Abc_ParseTree$DoubleSharp},
		_1: 4
	},
		{
		ctor: '_Tuple2',
		_0: {ctor: '_Tuple2', _0: _newlandsvalley$elm_abc_player$Abc_ParseTree$E, _1: _newlandsvalley$elm_abc_player$Abc_ParseTree$DoubleFlat},
		_1: 2
	},
		{
		ctor: '_Tuple2',
		_0: {ctor: '_Tuple2', _0: _newlandsvalley$elm_abc_player$Abc_ParseTree$E, _1: _newlandsvalley$elm_abc_player$Abc_ParseTree$Flat},
		_1: 3
	},
		{
		ctor: '_Tuple2',
		_0: {ctor: '_Tuple2', _0: _newlandsvalley$elm_abc_player$Abc_ParseTree$E, _1: _newlandsvalley$elm_abc_player$Abc_ParseTree$Natural},
		_1: 4
	},
		{
		ctor: '_Tuple2',
		_0: {ctor: '_Tuple2', _0: _newlandsvalley$elm_abc_player$Abc_ParseTree$E, _1: _newlandsvalley$elm_abc_player$Abc_ParseTree$Sharp},
		_1: 5
	},
		{
		ctor: '_Tuple2',
		_0: {ctor: '_Tuple2', _0: _newlandsvalley$elm_abc_player$Abc_ParseTree$E, _1: _newlandsvalley$elm_abc_player$Abc_ParseTree$DoubleSharp},
		_1: 6
	},
		{
		ctor: '_Tuple2',
		_0: {ctor: '_Tuple2', _0: _newlandsvalley$elm_abc_player$Abc_ParseTree$F, _1: _newlandsvalley$elm_abc_player$Abc_ParseTree$Flat},
		_1: 4
	},
		{
		ctor: '_Tuple2',
		_0: {ctor: '_Tuple2', _0: _newlandsvalley$elm_abc_player$Abc_ParseTree$F, _1: _newlandsvalley$elm_abc_player$Abc_ParseTree$Natural},
		_1: 5
	},
		{
		ctor: '_Tuple2',
		_0: {ctor: '_Tuple2', _0: _newlandsvalley$elm_abc_player$Abc_ParseTree$F, _1: _newlandsvalley$elm_abc_player$Abc_ParseTree$Sharp},
		_1: 6
	},
		{
		ctor: '_Tuple2',
		_0: {ctor: '_Tuple2', _0: _newlandsvalley$elm_abc_player$Abc_ParseTree$F, _1: _newlandsvalley$elm_abc_player$Abc_ParseTree$DoubleSharp},
		_1: 7
	},
		{
		ctor: '_Tuple2',
		_0: {ctor: '_Tuple2', _0: _newlandsvalley$elm_abc_player$Abc_ParseTree$G, _1: _newlandsvalley$elm_abc_player$Abc_ParseTree$DoubleFlat},
		_1: 5
	},
		{
		ctor: '_Tuple2',
		_0: {ctor: '_Tuple2', _0: _newlandsvalley$elm_abc_player$Abc_ParseTree$G, _1: _newlandsvalley$elm_abc_player$Abc_ParseTree$Flat},
		_1: 6
	},
		{
		ctor: '_Tuple2',
		_0: {ctor: '_Tuple2', _0: _newlandsvalley$elm_abc_player$Abc_ParseTree$G, _1: _newlandsvalley$elm_abc_player$Abc_ParseTree$Natural},
		_1: 7
	},
		{
		ctor: '_Tuple2',
		_0: {ctor: '_Tuple2', _0: _newlandsvalley$elm_abc_player$Abc_ParseTree$G, _1: _newlandsvalley$elm_abc_player$Abc_ParseTree$Sharp},
		_1: 8
	},
		{
		ctor: '_Tuple2',
		_0: {ctor: '_Tuple2', _0: _newlandsvalley$elm_abc_player$Abc_ParseTree$G, _1: _newlandsvalley$elm_abc_player$Abc_ParseTree$DoubleSharp},
		_1: 9
	},
		{
		ctor: '_Tuple2',
		_0: {ctor: '_Tuple2', _0: _newlandsvalley$elm_abc_player$Abc_ParseTree$A, _1: _newlandsvalley$elm_abc_player$Abc_ParseTree$DoubleFlat},
		_1: 7
	},
		{
		ctor: '_Tuple2',
		_0: {ctor: '_Tuple2', _0: _newlandsvalley$elm_abc_player$Abc_ParseTree$A, _1: _newlandsvalley$elm_abc_player$Abc_ParseTree$Flat},
		_1: 8
	},
		{
		ctor: '_Tuple2',
		_0: {ctor: '_Tuple2', _0: _newlandsvalley$elm_abc_player$Abc_ParseTree$A, _1: _newlandsvalley$elm_abc_player$Abc_ParseTree$Natural},
		_1: 9
	},
		{
		ctor: '_Tuple2',
		_0: {ctor: '_Tuple2', _0: _newlandsvalley$elm_abc_player$Abc_ParseTree$A, _1: _newlandsvalley$elm_abc_player$Abc_ParseTree$Sharp},
		_1: 10
	},
		{
		ctor: '_Tuple2',
		_0: {ctor: '_Tuple2', _0: _newlandsvalley$elm_abc_player$Abc_ParseTree$A, _1: _newlandsvalley$elm_abc_player$Abc_ParseTree$DoubleSharp},
		_1: 11
	},
		{
		ctor: '_Tuple2',
		_0: {ctor: '_Tuple2', _0: _newlandsvalley$elm_abc_player$Abc_ParseTree$B, _1: _newlandsvalley$elm_abc_player$Abc_ParseTree$DoubleFlat},
		_1: 9
	},
		{
		ctor: '_Tuple2',
		_0: {ctor: '_Tuple2', _0: _newlandsvalley$elm_abc_player$Abc_ParseTree$B, _1: _newlandsvalley$elm_abc_player$Abc_ParseTree$Flat},
		_1: 10
	},
		{
		ctor: '_Tuple2',
		_0: {ctor: '_Tuple2', _0: _newlandsvalley$elm_abc_player$Abc_ParseTree$B, _1: _newlandsvalley$elm_abc_player$Abc_ParseTree$Natural},
		_1: 11
	},
		{
		ctor: '_Tuple2',
		_0: {ctor: '_Tuple2', _0: _newlandsvalley$elm_abc_player$Abc_ParseTree$B, _1: _newlandsvalley$elm_abc_player$Abc_ParseTree$Sharp},
		_1: 0
	},
		{
		ctor: '_Tuple2',
		_0: {ctor: '_Tuple2', _0: _newlandsvalley$elm_abc_player$Abc_ParseTree$B, _1: _newlandsvalley$elm_abc_player$Abc_ParseTree$DoubleSharp},
		_1: 1
	}
	]);
var _newlandsvalley$elm_abc_player$Music_Transposition$sharpNoteNumbers = function () {
	var f = function (nn) {
		var _p3 = nn;
		var pc = _p3._0._0;
		var a = _p3._0._1;
		var i = _p3._1;
		return (_elm_lang$core$Native_Utils.eq(a, _newlandsvalley$elm_abc_player$Abc_ParseTree$Sharp) && ((!_elm_lang$core$Native_Utils.eq(pc, _newlandsvalley$elm_abc_player$Abc_ParseTree$E)) && (!_elm_lang$core$Native_Utils.eq(pc, _newlandsvalley$elm_abc_player$Abc_ParseTree$B)))) || _elm_lang$core$Native_Utils.eq(a, _newlandsvalley$elm_abc_player$Abc_ParseTree$Natural);
	};
	return A2(_elm_lang$core$List$filter, f, _newlandsvalley$elm_abc_player$Music_Transposition$noteNumbers);
}();
var _newlandsvalley$elm_abc_player$Music_Transposition$sharpNotedNumbers = function () {
	var invert = function (_p4) {
		var _p5 = _p4;
		return {ctor: '_Tuple2', _0: _p5._1, _1: _p5._0};
	};
	return _elm_lang$core$Dict$fromList(
		A2(_elm_lang$core$List$map, invert, _newlandsvalley$elm_abc_player$Music_Transposition$sharpNoteNumbers));
}();
var _newlandsvalley$elm_abc_player$Music_Transposition$flatNoteNumbers = function () {
	var f = function (nn) {
		var _p6 = nn;
		var pc = _p6._0._0;
		var a = _p6._0._1;
		var i = _p6._1;
		return (_elm_lang$core$Native_Utils.eq(a, _newlandsvalley$elm_abc_player$Abc_ParseTree$Flat) && ((!_elm_lang$core$Native_Utils.eq(pc, _newlandsvalley$elm_abc_player$Abc_ParseTree$F)) && (!_elm_lang$core$Native_Utils.eq(pc, _newlandsvalley$elm_abc_player$Abc_ParseTree$C)))) || _elm_lang$core$Native_Utils.eq(a, _newlandsvalley$elm_abc_player$Abc_ParseTree$Natural);
	};
	return A2(_elm_lang$core$List$filter, f, _newlandsvalley$elm_abc_player$Music_Transposition$noteNumbers);
}();
var _newlandsvalley$elm_abc_player$Music_Transposition$flatNotedNumbers = function () {
	var invert = function (_p7) {
		var _p8 = _p7;
		return {ctor: '_Tuple2', _0: _p8._1, _1: _p8._0};
	};
	return _elm_lang$core$Dict$fromList(
		A2(_elm_lang$core$List$map, invert, _newlandsvalley$elm_abc_player$Music_Transposition$flatNoteNumbers));
}();
var _newlandsvalley$elm_abc_player$Music_Transposition$pitchFromInt = F2(
	function (ks, i) {
		var dict = _newlandsvalley$elm_abc_player$Music_Notation$isCOrSharpKey(ks) ? _newlandsvalley$elm_abc_player$Music_Transposition$sharpNotedNumbers : _newlandsvalley$elm_abc_player$Music_Transposition$flatNotedNumbers;
		return A2(
			_elm_lang$core$Maybe$withDefault,
			{ctor: '_Tuple2', _0: _newlandsvalley$elm_abc_player$Abc_ParseTree$C, _1: _newlandsvalley$elm_abc_player$Abc_ParseTree$Natural},
			A2(_elm_lang$core$Dict$get, i, dict));
	});
var _newlandsvalley$elm_abc_player$Music_Transposition$comparableNoteNumbers = function () {
	var f = function (notePair) {
		return {
			ctor: '_Tuple2',
			_0: _newlandsvalley$elm_abc_player$Music_Transposition$comparableNote(
				_elm_lang$core$Basics$fst(notePair)),
			_1: _elm_lang$core$Basics$snd(notePair)
		};
	};
	return A2(_elm_lang$core$List$map, f, _newlandsvalley$elm_abc_player$Music_Transposition$noteNumbers);
}();
var _newlandsvalley$elm_abc_player$Music_Transposition$chromaticScaleDict = _elm_lang$core$Dict$fromList(_newlandsvalley$elm_abc_player$Music_Transposition$comparableNoteNumbers);
var _newlandsvalley$elm_abc_player$Music_Transposition$pitchNumber = function (pa) {
	return A2(
		_newlandsvalley$elm_abc_player$Music_Transposition$lookupChromatic,
		_newlandsvalley$elm_abc_player$Music_Transposition$chromaticScaleDict,
		_newlandsvalley$elm_abc_player$Music_Transposition$comparableNote(pa));
};
var _newlandsvalley$elm_abc_player$Music_Transposition$noteNumber = function (n) {
	var acc = A2(_elm_lang$core$Maybe$withDefault, _newlandsvalley$elm_abc_player$Abc_ParseTree$Natural, n.accidental);
	return _newlandsvalley$elm_abc_player$Music_Transposition$pitchNumber(
		{ctor: '_Tuple2', _0: n.pitchClass, _1: acc});
};
var _newlandsvalley$elm_abc_player$Music_Transposition$transpositionDistance = F2(
	function (target, src) {
		var _p9 = target;
		var tpc = _p9._0;
		var tmacc = _p9._1;
		var tacc = A2(_elm_lang$core$Maybe$withDefault, _newlandsvalley$elm_abc_player$Abc_ParseTree$Natural, tmacc);
		var _p10 = src;
		var spc = _p10._0;
		var smacc = _p10._1;
		var sacc = A2(_elm_lang$core$Maybe$withDefault, _newlandsvalley$elm_abc_player$Abc_ParseTree$Natural, smacc);
		var distance = _newlandsvalley$elm_abc_player$Music_Transposition$pitchNumber(
			{ctor: '_Tuple2', _0: tpc, _1: tacc}) - _newlandsvalley$elm_abc_player$Music_Transposition$pitchNumber(
			{ctor: '_Tuple2', _0: spc, _1: sacc});
		return (_elm_lang$core$Native_Utils.cmp(distance, -7) < 1) ? A2(_elm_lang$core$Basics_ops['%'], _newlandsvalley$elm_abc_player$Music_Notation$notesInChromaticScale + distance, _newlandsvalley$elm_abc_player$Music_Notation$notesInChromaticScale) : distance;
	});
var _newlandsvalley$elm_abc_player$Music_Transposition$addBarAccidental = F3(
	function (pc, ma, accs) {
		var _p11 = ma;
		if (_p11.ctor === 'Just') {
			return A3(_newlandsvalley$elm_abc_player$Music_Accidentals$add, pc, _p11._0, accs);
		} else {
			return accs;
		}
	});
var _newlandsvalley$elm_abc_player$Music_Transposition$sharpenFlatEnharmonic = function (ka) {
	var _p12 = ka;
	_v5_2:
	do {
		if ((_p12.ctor === '_Tuple2') && (_p12._1.ctor === 'Flat')) {
			switch (_p12._0.ctor) {
				case 'G':
					return {ctor: '_Tuple2', _0: _newlandsvalley$elm_abc_player$Abc_ParseTree$F, _1: _newlandsvalley$elm_abc_player$Abc_ParseTree$Sharp};
				case 'D':
					return {ctor: '_Tuple2', _0: _newlandsvalley$elm_abc_player$Abc_ParseTree$C, _1: _newlandsvalley$elm_abc_player$Abc_ParseTree$Sharp};
				default:
					break _v5_2;
			}
		} else {
			break _v5_2;
		}
	} while(false);
	return ka;
};
var _newlandsvalley$elm_abc_player$Music_Transposition$transposeNoteBy = F2(
	function (state, note) {
		var newSourceAccs = A3(_newlandsvalley$elm_abc_player$Music_Transposition$addBarAccidental, note.pitchClass, note.accidental, state.sourceBarAccidentals);
		var inSourceBarAccidental = A2(_newlandsvalley$elm_abc_player$Music_Accidentals$lookup, note.pitchClass, state.sourceBarAccidentals);
		var inSourceKeyAccidental = A2(_newlandsvalley$elm_abc_player$Music_Notation$accidentalImplicitInKey, note.pitchClass, state.sourcemks);
		var implicitSourceAccidental = _elm_lang$core$Maybe$oneOf(
			_elm_lang$core$Native_List.fromArray(
				[inSourceBarAccidental, inSourceKeyAccidental]));
		var explicitSourceNote = _elm_community$maybe_extra$Maybe_Extra$isJust(note.accidental) ? note : _elm_lang$core$Native_Utils.update(
			note,
			{accidental: implicitSourceAccidental});
		var srcNum = _newlandsvalley$elm_abc_player$Music_Transposition$noteNumber(explicitSourceNote);
		var _p13 = A2(_newlandsvalley$elm_abc_player$Music_Transposition$noteIndex, srcNum, state.keyDistance);
		var targetNum = _p13._0;
		var octaveIncrement = _p13._1;
		var ka = A2(
			_newlandsvalley$elm_abc_player$Music_Transposition$pitchFromInt,
			_elm_lang$core$Basics$fst(state.targetmks),
			targetNum);
		var _p14 = _newlandsvalley$elm_abc_player$Music_Transposition$sharpenFlatEnharmonic(ka);
		var pc = _p14._0;
		var acc = _p14._1;
		var targetAcc = A2(
			_newlandsvalley$elm_abc_player$Music_Accidentals$member,
			{ctor: '_Tuple2', _0: pc, _1: acc},
			state.targetBarAccidentals) ? _elm_lang$core$Maybe$Nothing : (_elm_community$maybe_extra$Maybe_Extra$isJust(
			A2(_newlandsvalley$elm_abc_player$Music_Accidentals$lookup, pc, state.targetBarAccidentals)) ? _elm_lang$core$Maybe$Just(acc) : (A2(
			_newlandsvalley$elm_abc_player$Music_Notation$inScale,
			{ctor: '_Tuple2', _0: pc, _1: acc},
			state.targetScale) ? _elm_lang$core$Maybe$Nothing : _elm_lang$core$Maybe$Just(acc)));
		var newTargetAccs = _elm_community$maybe_extra$Maybe_Extra$isJust(targetAcc) ? A3(
			_newlandsvalley$elm_abc_player$Music_Transposition$addBarAccidental,
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
var _newlandsvalley$elm_abc_player$Music_Transposition$transposeNoteList = F2(
	function (state, ns) {
		var f = F2(
			function (n, acc) {
				var _p15 = acc;
				var ns = _p15._0;
				var s0 = _p15._1;
				var _p16 = A2(_newlandsvalley$elm_abc_player$Music_Transposition$transposeNoteBy, s0, n);
				var n1 = _p16._0;
				var s1 = _p16._1;
				return {
					ctor: '_Tuple2',
					_0: A2(_elm_lang$core$List_ops['::'], n1, ns),
					_1: s1
				};
			});
		var _p17 = A3(
			_elm_lang$core$List$foldl,
			f,
			{
				ctor: '_Tuple2',
				_0: _elm_lang$core$Native_List.fromArray(
					[]),
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
var _newlandsvalley$elm_abc_player$Music_Transposition$transposeChord = F2(
	function (state, c) {
		var _p18 = A2(_newlandsvalley$elm_abc_player$Music_Transposition$transposeNoteList, state, c.notes);
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
var _newlandsvalley$elm_abc_player$Music_Transposition$processHeader = F2(
	function (state, h) {
		var _p19 = h;
		if (_p19.ctor === 'Key') {
			var _p20 = _p19._0;
			var newmks = A2(_newlandsvalley$elm_abc_player$Music_Notation$transposeKeySignatureBy, state.keyDistance, _p20);
			return {
				ctor: '_Tuple2',
				_0: _newlandsvalley$elm_abc_player$Abc_ParseTree$Key(newmks),
				_1: _elm_lang$core$Native_Utils.update(
					state,
					{
						sourcemks: _p20,
						sourceBarAccidentals: _newlandsvalley$elm_abc_player$Music_Accidentals$empty,
						targetmks: newmks,
						targetKeySet: _newlandsvalley$elm_abc_player$Music_Notation$modifiedKeySet(newmks),
						targetScale: _newlandsvalley$elm_abc_player$Music_Notation$diatonicScale(
							_elm_lang$core$Basics$fst(newmks)),
						targetBarAccidentals: _newlandsvalley$elm_abc_player$Music_Accidentals$empty
					})
			};
		} else {
			return {ctor: '_Tuple2', _0: h, _1: state};
		}
	});
var _newlandsvalley$elm_abc_player$Music_Transposition$transposeMusic = F2(
	function (state, m) {
		var _p21 = m;
		switch (_p21.ctor) {
			case 'Note':
				var _p22 = A2(_newlandsvalley$elm_abc_player$Music_Transposition$transposeNoteBy, state, _p21._0);
				var tn1 = _p22._0;
				var s1 = _p22._1;
				return {
					ctor: '_Tuple2',
					_0: _newlandsvalley$elm_abc_player$Abc_ParseTree$Note(tn1),
					_1: s1
				};
			case 'BrokenRhythmPair':
				var _p23 = A2(_newlandsvalley$elm_abc_player$Music_Transposition$transposeNoteBy, state, _p21._0);
				var tn1 = _p23._0;
				var s1 = _p23._1;
				var _p24 = A2(_newlandsvalley$elm_abc_player$Music_Transposition$transposeNoteBy, s1, _p21._2);
				var tn2 = _p24._0;
				var s2 = _p24._1;
				return {
					ctor: '_Tuple2',
					_0: A3(_newlandsvalley$elm_abc_player$Abc_ParseTree$BrokenRhythmPair, tn1, _p21._1, tn2),
					_1: s2
				};
			case 'Tuplet':
				var _p25 = A2(_newlandsvalley$elm_abc_player$Music_Transposition$transposeNoteList, state, _p21._1);
				var ns1 = _p25._0;
				var s1 = _p25._1;
				return {
					ctor: '_Tuple2',
					_0: A2(_newlandsvalley$elm_abc_player$Abc_ParseTree$Tuplet, _p21._0, ns1),
					_1: s1
				};
			case 'GraceNote':
				var _p26 = A2(_newlandsvalley$elm_abc_player$Music_Transposition$transposeMusic, state, _p21._1);
				var m1 = _p26._0;
				var s1 = _p26._1;
				return {
					ctor: '_Tuple2',
					_0: A2(_newlandsvalley$elm_abc_player$Abc_ParseTree$GraceNote, _p21._0, m1),
					_1: s1
				};
			case 'Chord':
				var _p27 = A2(_newlandsvalley$elm_abc_player$Music_Transposition$transposeChord, state, _p21._0);
				var tc = _p27._0;
				var s1 = _p27._1;
				return {
					ctor: '_Tuple2',
					_0: _newlandsvalley$elm_abc_player$Abc_ParseTree$Chord(tc),
					_1: s1
				};
			case 'NoteSequence':
				var _p28 = A2(_newlandsvalley$elm_abc_player$Music_Transposition$transposeMusicList, state, _p21._0);
				var ms1 = _p28._0;
				var s1 = _p28._1;
				return {
					ctor: '_Tuple2',
					_0: _newlandsvalley$elm_abc_player$Abc_ParseTree$NoteSequence(ms1),
					_1: s1
				};
			case 'ChordSymbol':
				return {ctor: '_Tuple2', _0: _newlandsvalley$elm_abc_player$Abc_ParseTree$Ignore, _1: state};
			case 'Barline':
				return {
					ctor: '_Tuple2',
					_0: _newlandsvalley$elm_abc_player$Abc_ParseTree$Barline(_p21._0),
					_1: _elm_lang$core$Native_Utils.update(
						state,
						{sourceBarAccidentals: _newlandsvalley$elm_abc_player$Music_Accidentals$empty, targetBarAccidentals: _newlandsvalley$elm_abc_player$Music_Accidentals$empty})
				};
			case 'Inline':
				var _p29 = A2(_newlandsvalley$elm_abc_player$Music_Transposition$processHeader, state, _p21._0);
				var h1 = _p29._0;
				var state = _p29._1;
				return {
					ctor: '_Tuple2',
					_0: _newlandsvalley$elm_abc_player$Abc_ParseTree$Inline(h1),
					_1: state
				};
			default:
				return {ctor: '_Tuple2', _0: m, _1: state};
		}
	});
var _newlandsvalley$elm_abc_player$Music_Transposition$transposeMusicList = F2(
	function (state, ms) {
		var f = F2(
			function (n, acc) {
				var _p30 = acc;
				var ns = _p30._0;
				var s0 = _p30._1;
				var _p31 = A2(_newlandsvalley$elm_abc_player$Music_Transposition$transposeMusic, s0, n);
				var n1 = _p31._0;
				var s1 = _p31._1;
				return {
					ctor: '_Tuple2',
					_0: A2(_elm_lang$core$List_ops['::'], n1, ns),
					_1: s1
				};
			});
		var _p32 = A3(
			_elm_lang$core$List$foldl,
			f,
			{
				ctor: '_Tuple2',
				_0: _elm_lang$core$Native_List.fromArray(
					[]),
				_1: state
			},
			ms);
		var tns = _p32._0;
		var news = _p32._1;
		return {
			ctor: '_Tuple2',
			_0: _elm_lang$core$List$reverse(tns),
			_1: news
		};
	});
var _newlandsvalley$elm_abc_player$Music_Transposition$transposeBodyPart = F2(
	function (state, bp) {
		var _p33 = bp;
		if (_p33.ctor === 'Score') {
			var _p34 = A2(_newlandsvalley$elm_abc_player$Music_Transposition$transposeMusicList, state, _p33._0);
			var ms1 = _p34._0;
			var s1 = _p34._1;
			return {
				ctor: '_Tuple2',
				_0: _newlandsvalley$elm_abc_player$Abc_ParseTree$Score(ms1),
				_1: s1
			};
		} else {
			var _p35 = A2(_newlandsvalley$elm_abc_player$Music_Transposition$processHeader, state, _p33._0);
			var h1 = _p35._0;
			var state = _p35._1;
			return {
				ctor: '_Tuple2',
				_0: _newlandsvalley$elm_abc_player$Abc_ParseTree$BodyInfo(h1),
				_1: state
			};
		}
	});
var _newlandsvalley$elm_abc_player$Music_Transposition$transposeTuneBody = F2(
	function (state, body) {
		var f = F2(
			function (n, acc) {
				var _p36 = acc;
				var bs = _p36._0;
				var s0 = _p36._1;
				var _p37 = A2(_newlandsvalley$elm_abc_player$Music_Transposition$transposeBodyPart, s0, n);
				var b1 = _p37._0;
				var s1 = _p37._1;
				return {
					ctor: '_Tuple2',
					_0: A2(_elm_lang$core$List_ops['::'], b1, bs),
					_1: s1
				};
			});
		var _p38 = A3(
			_elm_lang$core$List$foldl,
			f,
			{
				ctor: '_Tuple2',
				_0: _elm_lang$core$Native_List.fromArray(
					[]),
				_1: state
			},
			body);
		var tb = _p38._0;
		var news = _p38._1;
		return _elm_lang$core$List$reverse(tb);
	});
var _newlandsvalley$elm_abc_player$Music_Transposition$transposeTune = F2(
	function (state, t) {
		var _p39 = t;
		var headers = _p39._0;
		var body = _p39._1;
		var newHeaders = A2(_newlandsvalley$elm_abc_player$Music_Transposition$replaceKeyHeader, state.targetmks, headers);
		return {
			ctor: '_Tuple2',
			_0: newHeaders,
			_1: A2(_newlandsvalley$elm_abc_player$Music_Transposition$transposeTuneBody, state, body)
		};
	});
var _newlandsvalley$elm_abc_player$Music_Transposition$keyDistance = F2(
	function (targetmks, srcmks) {
		var src = _elm_lang$core$Basics$fst(srcmks);
		var target = _elm_lang$core$Basics$fst(targetmks);
		return (!_elm_lang$core$Native_Utils.eq(target.mode, src.mode)) ? _elm_lang$core$Result$Err('incompatible modes') : _elm_lang$core$Result$Ok(
			A2(
				_newlandsvalley$elm_abc_player$Music_Transposition$transpositionDistance,
				{ctor: '_Tuple2', _0: target.pitchClass, _1: target.accidental},
				{ctor: '_Tuple2', _0: src.pitchClass, _1: src.accidental}));
	});
var _newlandsvalley$elm_abc_player$Music_Transposition$transposeNote = F3(
	function (targetmks, srcKey, note) {
		var rdist = A2(_newlandsvalley$elm_abc_player$Music_Transposition$keyDistance, targetmks, srcKey);
		var _p40 = rdist;
		if (_p40.ctor === 'Err') {
			return _elm_lang$core$Result$Err(_p40._0);
		} else {
			var transpositionState = {
				keyDistance: _p40._0,
				sourcemks: srcKey,
				sourceBarAccidentals: _newlandsvalley$elm_abc_player$Music_Accidentals$empty,
				targetmks: targetmks,
				targetKeySet: _newlandsvalley$elm_abc_player$Music_Notation$modifiedKeySet(targetmks),
				targetScale: _newlandsvalley$elm_abc_player$Music_Notation$diatonicScale(
					_elm_lang$core$Basics$fst(targetmks)),
				targetBarAccidentals: _newlandsvalley$elm_abc_player$Music_Accidentals$empty
			};
			var _p41 = A2(_newlandsvalley$elm_abc_player$Music_Transposition$transposeNoteBy, transpositionState, note);
			var transposedNote = _p41._0;
			return _elm_lang$core$Result$Ok(transposedNote);
		}
	});
var _newlandsvalley$elm_abc_player$Music_Transposition$transposeTo = F2(
	function (targetmks, t) {
		var mks = A2(
			_elm_lang$core$Maybe$withDefault,
			{
				ctor: '_Tuple2',
				_0: {pitchClass: _newlandsvalley$elm_abc_player$Abc_ParseTree$C, accidental: _elm_lang$core$Maybe$Nothing, mode: _newlandsvalley$elm_abc_player$Abc_ParseTree$Major},
				_1: _elm_lang$core$Native_List.fromArray(
					[])
			},
			_newlandsvalley$elm_abc_player$Music_Notation$getKeySig(t));
		var rdistance = A2(_newlandsvalley$elm_abc_player$Music_Transposition$keyDistance, targetmks, mks);
		var _p42 = rdistance;
		if (_p42.ctor === 'Err') {
			return _elm_lang$core$Result$Err(_p42._0);
		} else {
			var _p43 = _p42._0;
			if (_elm_lang$core$Native_Utils.eq(_p43, 0)) {
				return _elm_lang$core$Result$Ok(t);
			} else {
				var transpositionState = {
					keyDistance: _p43,
					sourcemks: mks,
					sourceBarAccidentals: _newlandsvalley$elm_abc_player$Music_Accidentals$empty,
					targetmks: targetmks,
					targetKeySet: _newlandsvalley$elm_abc_player$Music_Notation$modifiedKeySet(targetmks),
					targetScale: _newlandsvalley$elm_abc_player$Music_Notation$diatonicScale(
						_elm_lang$core$Basics$fst(targetmks)),
					targetBarAccidentals: _newlandsvalley$elm_abc_player$Music_Accidentals$empty
				};
				return _elm_lang$core$Result$Ok(
					A2(_newlandsvalley$elm_abc_player$Music_Transposition$transposeTune, transpositionState, t));
			}
		}
	});
var _newlandsvalley$elm_abc_player$Music_Transposition$TranspositionState = F7(
	function (a, b, c, d, e, f, g) {
		return {keyDistance: a, sourcemks: b, sourceBarAccidentals: c, targetmks: d, targetKeySet: e, targetScale: f, targetBarAccidentals: g};
	});

var _newlandsvalley$elm_abc_player$Music_Octave$moveNoteBy = F2(
	function (i, note) {
		return _elm_lang$core$Native_Utils.update(
			note,
			{octave: note.octave + i});
	});
var _newlandsvalley$elm_abc_player$Music_Octave$moveNoteList = function (i) {
	return _elm_lang$core$List$map(
		_newlandsvalley$elm_abc_player$Music_Octave$moveNoteBy(i));
};
var _newlandsvalley$elm_abc_player$Music_Octave$moveChord = F2(
	function (i, c) {
		return _elm_lang$core$Native_Utils.update(
			c,
			{
				notes: A2(_newlandsvalley$elm_abc_player$Music_Octave$moveNoteList, i, c.notes)
			});
	});
var _newlandsvalley$elm_abc_player$Music_Octave$moveOctave = F2(
	function (i, m) {
		var _p0 = m;
		switch (_p0.ctor) {
			case 'Note':
				return _newlandsvalley$elm_abc_player$Abc_ParseTree$Note(
					A2(_newlandsvalley$elm_abc_player$Music_Octave$moveNoteBy, i, _p0._0));
			case 'BrokenRhythmPair':
				return A3(
					_newlandsvalley$elm_abc_player$Abc_ParseTree$BrokenRhythmPair,
					A2(_newlandsvalley$elm_abc_player$Music_Octave$moveNoteBy, i, _p0._0),
					_p0._1,
					A2(_newlandsvalley$elm_abc_player$Music_Octave$moveNoteBy, i, _p0._2));
			case 'Tuplet':
				return A2(
					_newlandsvalley$elm_abc_player$Abc_ParseTree$Tuplet,
					_p0._0,
					A2(_newlandsvalley$elm_abc_player$Music_Octave$moveNoteList, i, _p0._1));
			case 'GraceNote':
				return A2(
					_newlandsvalley$elm_abc_player$Abc_ParseTree$GraceNote,
					_p0._0,
					A2(_newlandsvalley$elm_abc_player$Music_Octave$moveOctave, i, _p0._1));
			case 'Chord':
				return _newlandsvalley$elm_abc_player$Abc_ParseTree$Chord(
					A2(_newlandsvalley$elm_abc_player$Music_Octave$moveChord, i, _p0._0));
			case 'NoteSequence':
				return _newlandsvalley$elm_abc_player$Abc_ParseTree$NoteSequence(
					A2(_newlandsvalley$elm_abc_player$Music_Octave$moveMusicList, i, _p0._0));
			default:
				return m;
		}
	});
var _newlandsvalley$elm_abc_player$Music_Octave$moveMusicList = function (i) {
	return _elm_lang$core$List$map(
		_newlandsvalley$elm_abc_player$Music_Octave$moveOctave(i));
};
var _newlandsvalley$elm_abc_player$Music_Octave$moveBodyPart = F2(
	function (i, bp) {
		var _p1 = bp;
		if (_p1.ctor === 'Score') {
			return _newlandsvalley$elm_abc_player$Abc_ParseTree$Score(
				A2(_newlandsvalley$elm_abc_player$Music_Octave$moveMusicList, i, _p1._0));
		} else {
			return bp;
		}
	});
var _newlandsvalley$elm_abc_player$Music_Octave$moveTuneBody = function (i) {
	return _elm_lang$core$List$map(
		_newlandsvalley$elm_abc_player$Music_Octave$moveBodyPart(i));
};
var _newlandsvalley$elm_abc_player$Music_Octave$moveTune = F2(
	function (i, t) {
		var _p2 = t;
		var headers = _p2._0;
		var body = _p2._1;
		return {
			ctor: '_Tuple2',
			_0: headers,
			_1: A2(_newlandsvalley$elm_abc_player$Music_Octave$moveTuneBody, i, body)
		};
	});
var _newlandsvalley$elm_abc_player$Music_Octave$down = function (t) {
	return A2(_newlandsvalley$elm_abc_player$Music_Octave$moveTune, -1, t);
};
var _newlandsvalley$elm_abc_player$Music_Octave$up = function (t) {
	return A2(_newlandsvalley$elm_abc_player$Music_Octave$moveTune, 1, t);
};

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
				_elm_community$elm_list_extra$List_Extra$takeWhile,
				function (bar) {
					return _elm_lang$core$Native_Utils.cmp(bar.number, end) < 0;
				},
				A2(
					_elm_community$elm_list_extra$List_Extra$dropWhile,
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
				return _elm_lang$core$Native_List.fromArray(
					[]);
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
		_elm_lang$core$Maybe$Just(_newlandsvalley$elm_abc_player$Abc_ParseTree$End));
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
	return _elm_lang$core$Basics$not(
		_newlandsvalley$elm_abc_player$Repeats$isNullSection(r.current)) ? _elm_lang$core$Native_Utils.update(
		r,
		{
			repeats: A2(_elm_lang$core$List_ops['::'], r.current, r.repeats),
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
		_elm_lang$core$Native_List.fromArray(
			[]),
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
	repeats: _elm_lang$core$Native_List.fromArray(
		[])
};

var _newlandsvalley$elm_abc_player$MidiPerformance$midiNote = F2(
	function (isTied, n) {
		return (_elm_lang$core$Native_Utils.cmp(n.pitch, 0) > 0) ? _elm_lang$core$Native_List.fromArray(
			[
				{
				ctor: '_Tuple2',
				_0: 0,
				_1: A3(_newlandsvalley$elm_abc_player$MidiTypes$NoteOn, 0, n.pitch, 63)
			},
				{
				ctor: '_Tuple2',
				_0: n.ticks,
				_1: A3(_newlandsvalley$elm_abc_player$MidiTypes$NoteOff, 0, n.pitch, 63)
			}
			]) : _elm_lang$core$Native_List.fromArray(
			[
				{
				ctor: '_Tuple2',
				_0: n.ticks,
				_1: _newlandsvalley$elm_abc_player$MidiTypes$Text('rest')
			}
			]);
	});
var _newlandsvalley$elm_abc_player$MidiPerformance$midiNoteOff = function (n) {
	return {
		ctor: '_Tuple2',
		_0: n.ticks,
		_1: A3(_newlandsvalley$elm_abc_player$MidiTypes$NoteOff, 0, n.pitch, 63)
	};
};
var _newlandsvalley$elm_abc_player$MidiPerformance$midiNoteOn = function (n) {
	return {
		ctor: '_Tuple2',
		_0: 0,
		_1: A3(_newlandsvalley$elm_abc_player$MidiTypes$NoteOn, 0, n.pitch, 63)
	};
};
var _newlandsvalley$elm_abc_player$MidiPerformance$midiChord = function (ns) {
	var firstNote = _elm_lang$core$List$head(ns);
	var finalNoteOff = function () {
		var _p0 = firstNote;
		if (_p0.ctor === 'Just') {
			return _elm_lang$core$Native_List.fromArray(
				[
					_newlandsvalley$elm_abc_player$MidiPerformance$midiNoteOff(_p0._0)
				]);
		} else {
			return _elm_lang$core$Native_List.fromArray(
				[]);
		}
	}();
	return A2(
		_elm_lang$core$Basics_ops['++'],
		A2(_elm_lang$core$List$map, _newlandsvalley$elm_abc_player$MidiPerformance$midiNoteOn, ns),
		finalNoteOff);
};
var _newlandsvalley$elm_abc_player$MidiPerformance$toMidiMessages = function (mi) {
	var _p1 = mi;
	switch (_p1.ctor) {
		case 'MNote':
			return A2(_newlandsvalley$elm_abc_player$MidiPerformance$midiNote, _p1._1, _p1._0);
		case 'MChord':
			return _newlandsvalley$elm_abc_player$MidiPerformance$midiChord(_p1._0);
		default:
			return _elm_lang$core$Native_List.fromArray(
				[
					{
					ctor: '_Tuple2',
					_0: 0,
					_1: _newlandsvalley$elm_abc_player$MidiTypes$Tempo(_p1._0)
				}
				]);
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
var _newlandsvalley$elm_abc_player$MidiPerformance$hasTempoHeader = function (hs) {
	var f = function (h) {
		var _p2 = h;
		switch (_p2.ctor) {
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
	return function (_p3) {
		return _elm_lang$core$List$reverse(
			A2(_elm_lang$core$List$map, reverseBar, _p3));
	};
}();
var _newlandsvalley$elm_abc_player$MidiPerformance$translateNotePair = F4(
	function (n1, s1, n2, s2) {
		var barAccidentals = s1.thisBar.accidentals;
		var ticks2 = ((_newlandsvalley$elm_abc_player$Music_Notation$noteTicks(n2.duration) * _imeckler$ratio$Ratio$numerator(s2.tempoModifier)) / _imeckler$ratio$Ratio$denominator(s2.tempoModifier)) | 0;
		var note2 = A2(
			_newlandsvalley$elm_abc_player$MidiMelody$MNote,
			{
				ticks: ticks2,
				pitch: A3(_newlandsvalley$elm_abc_player$Music_Notation$toMidiPitch, n2, s2.modifiedKeySignature, barAccidentals),
				pc: _elm_lang$core$Maybe$Just(n2.pitchClass),
				accidental: n2.accidental
			},
			false);
		var ticks1 = ((_newlandsvalley$elm_abc_player$Music_Notation$noteTicks(n1.duration) * _imeckler$ratio$Ratio$numerator(s1.tempoModifier)) / _imeckler$ratio$Ratio$denominator(s1.tempoModifier)) | 0;
		var note1 = A2(
			_newlandsvalley$elm_abc_player$MidiMelody$MNote,
			{
				ticks: ticks1,
				pitch: A3(_newlandsvalley$elm_abc_player$Music_Notation$toMidiPitch, n1, s1.modifiedKeySignature, barAccidentals),
				pc: _elm_lang$core$Maybe$Just(n1.pitchClass),
				accidental: n1.accidental
			},
			false);
		return _elm_lang$core$Native_List.fromArray(
			[note2, note1]);
	});
var _newlandsvalley$elm_abc_player$MidiPerformance$translateNoteSequence = F4(
	function (isSeq, state, notes, maybeChordDur) {
		var chordDuration = function () {
			var _p4 = maybeChordDur;
			if (_p4.ctor === 'Nothing') {
				return _imeckler$ratio$Ratio$fromInt(1);
			} else {
				return _p4._0;
			}
		}();
		var f = function (abc) {
			var barAccidentals = state.thisBar.accidentals;
			var ticks = isSeq ? (((_newlandsvalley$elm_abc_player$Music_Notation$noteTicks(abc.duration) * _imeckler$ratio$Ratio$numerator(state.tempoModifier)) / _imeckler$ratio$Ratio$denominator(state.tempoModifier)) | 0) : A2(_newlandsvalley$elm_abc_player$Music_Notation$chordalNoteTicks, abc.duration, chordDuration);
			return {
				ticks: ticks,
				pitch: A3(_newlandsvalley$elm_abc_player$Music_Notation$toMidiPitch, abc, state.modifiedKeySignature, barAccidentals),
				pc: _elm_lang$core$Maybe$Just(abc.pitchClass),
				accidental: abc.accidental
			};
		};
		return isSeq ? _elm_lang$core$List$reverse(
			A2(
				_elm_lang$core$List$map,
				function (a) {
					return A2(_newlandsvalley$elm_abc_player$MidiMelody$MNote, a, false);
				},
				A2(_elm_lang$core$List$map, f, notes))) : _elm_lang$core$Native_List.fromArray(
			[
				_newlandsvalley$elm_abc_player$MidiMelody$MChord(
				A2(_elm_lang$core$List$map, f, notes))
			]);
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
						notes: A2(_elm_lang$core$List_ops['::'], t, line)
					})
			});
	});
var _newlandsvalley$elm_abc_player$MidiPerformance$addNoteToBarAccidentals = F2(
	function (n, accs) {
		var _p5 = {ctor: '_Tuple2', _0: n.pc, _1: n.accidental};
		if (((_p5.ctor === '_Tuple2') && (_p5._0.ctor === 'Just')) && (_p5._1.ctor === 'Just')) {
			return A3(_newlandsvalley$elm_abc_player$Music_Accidentals$add, _p5._0._0, _p5._1._0, accs);
		} else {
			return accs;
		}
	});
var _newlandsvalley$elm_abc_player$MidiPerformance$addMidiNoteToBarAccidentals = F2(
	function (ne, accs) {
		var _p6 = ne;
		switch (_p6.ctor) {
			case 'MNote':
				return A2(_newlandsvalley$elm_abc_player$MidiPerformance$addNoteToBarAccidentals, _p6._0, accs);
			case 'MChord':
				return A3(_elm_lang$core$List$foldl, _newlandsvalley$elm_abc_player$MidiPerformance$addNoteToBarAccidentals, accs, _p6._0);
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
			var _p7 = n;
			if (_p7.ctor === 'MNote') {
				return _p7._1;
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
						notes: A2(_elm_lang$core$List_ops['::'], n, line),
						accidentals: accidentals
					}),
				lastNoteTied: lastNoteTied
			});
	});
var _newlandsvalley$elm_abc_player$MidiPerformance$midiTempo = function (state) {
	return _newlandsvalley$elm_abc_player$Music_Notation$midiTempo(state.tempo);
};
var _newlandsvalley$elm_abc_player$MidiPerformance$updateState = F2(
	function (h, acc) {
		var _p8 = acc;
		var melody = _p8._0;
		var state = _p8._1;
		var tempo = state.tempo;
		var _p9 = h;
		switch (_p9.ctor) {
			case 'UnitNoteLength':
				var newState = _elm_lang$core$Native_Utils.update(
					state,
					{
						tempo: _elm_lang$core$Native_Utils.update(
							tempo,
							{unitNoteLength: _p9._0})
					});
				var mtempo = _newlandsvalley$elm_abc_player$MidiMelody$MTempo(
					_newlandsvalley$elm_abc_player$MidiPerformance$midiTempo(newState));
				var newState1 = A2(_newlandsvalley$elm_abc_player$MidiPerformance$addTempoToStateBar, mtempo, newState);
				return {ctor: '_Tuple2', _0: melody, _1: newState1};
			case 'Tempo':
				var _p10 = _p9._0;
				var tnl = A3(
					_elm_lang$core$List$foldl,
					_imeckler$ratio$Ratio$add,
					_imeckler$ratio$Ratio$fromInt(0),
					_p10.noteLengths);
				var newState = _elm_lang$core$Native_Utils.update(
					state,
					{
						tempo: _elm_lang$core$Native_Utils.update(
							tempo,
							{tempoNoteLength: tnl, bpm: _p10.bpm})
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
						{modifiedKeySignature: _p9._0})
				};
			default:
				return acc;
		}
	});
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
		accidentals: _newlandsvalley$elm_abc_player$Music_Accidentals$empty,
		notes: _elm_lang$core$Native_List.fromArray(
			[])
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
							repeat: _elm_lang$core$Maybe$Just(_newlandsvalley$elm_abc_player$Abc_ParseTree$BeginAndEnd),
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
				var _p14 = _p13._0;
				var barAccidentals = state.thisBar.accidentals;
				var pitch = state.lastNoteTied ? 0 : A3(_newlandsvalley$elm_abc_player$Music_Notation$toMidiPitch, _p14, state.modifiedKeySignature, barAccidentals);
				var ticks = _newlandsvalley$elm_abc_player$Music_Notation$noteTicks(_p14.duration);
				var note = A2(
					_newlandsvalley$elm_abc_player$MidiMelody$MNote,
					{
						ticks: ticks,
						pitch: pitch,
						pc: _elm_lang$core$Maybe$Just(_p14.pitchClass),
						accidental: _p14.accidental
					},
					_p14.tied);
				var newState = A2(_newlandsvalley$elm_abc_player$MidiPerformance$addNoteToState, note, state);
				return {ctor: '_Tuple2', _0: midiMelody, _1: newState};
			case 'Rest':
				var ticks = _newlandsvalley$elm_abc_player$Music_Notation$noteTicks(_p13._0);
				var note = A2(
					_newlandsvalley$elm_abc_player$MidiMelody$MNote,
					{ticks: ticks, pitch: 0, pc: _elm_lang$core$Maybe$Nothing, accidental: _elm_lang$core$Maybe$Nothing},
					false);
				var newState = A2(_newlandsvalley$elm_abc_player$MidiPerformance$addNoteToState, note, state);
				return {ctor: '_Tuple2', _0: midiMelody, _1: newState};
			case 'Tuplet':
				var _p15 = _p13._0;
				var p = _p15._0;
				var q = _p15._1;
				var r = _p15._2;
				var tupletState = _elm_lang$core$Native_Utils.update(
					state,
					{
						tempoModifier: A2(_imeckler$ratio$Ratio$over, q, p)
					});
				var tupletNotes = A4(_newlandsvalley$elm_abc_player$MidiPerformance$translateNoteSequence, true, tupletState, _p13._1, _elm_lang$core$Maybe$Nothing);
				var newState = A2(_newlandsvalley$elm_abc_player$MidiPerformance$addNotesToState, tupletNotes, state);
				return {ctor: '_Tuple2', _0: midiMelody, _1: newState};
			case 'BrokenRhythmPair':
				var _p20 = _p13._2;
				var _p19 = _p13._0;
				var _p16 = _p13._1;
				if (_p16.ctor === 'LeftArrow') {
					var _p17 = _p16._0;
					var up = A2(
						_imeckler$ratio$Ratio$add,
						A2(_imeckler$ratio$Ratio$over, 1, 1),
						_newlandsvalley$elm_abc_player$Music_Notation$dotFactor(_p17));
					var rightState = _elm_lang$core$Native_Utils.update(
						state,
						{tempoModifier: up});
					var down = A2(
						_imeckler$ratio$Ratio$add,
						A2(_imeckler$ratio$Ratio$over, 1, 1),
						_imeckler$ratio$Ratio$negate(
							_newlandsvalley$elm_abc_player$Music_Notation$dotFactor(_p17)));
					var leftState = _elm_lang$core$Native_Utils.update(
						state,
						{tempoModifier: down});
					var notePair = A4(_newlandsvalley$elm_abc_player$MidiPerformance$translateNotePair, _p19, leftState, _p20, rightState);
					var newState = A2(_newlandsvalley$elm_abc_player$MidiPerformance$addNotesToState, notePair, state);
					return {ctor: '_Tuple2', _0: midiMelody, _1: newState};
				} else {
					var _p18 = _p16._0;
					var up = A2(
						_imeckler$ratio$Ratio$add,
						A2(_imeckler$ratio$Ratio$over, 1, 1),
						_newlandsvalley$elm_abc_player$Music_Notation$dotFactor(_p18));
					var leftState = _elm_lang$core$Native_Utils.update(
						state,
						{tempoModifier: up});
					var down = A2(
						_imeckler$ratio$Ratio$add,
						A2(_imeckler$ratio$Ratio$over, 1, 1),
						_imeckler$ratio$Ratio$negate(
							_newlandsvalley$elm_abc_player$Music_Notation$dotFactor(_p18)));
					var rightState = _elm_lang$core$Native_Utils.update(
						state,
						{tempoModifier: down});
					var notePair = A4(_newlandsvalley$elm_abc_player$MidiPerformance$translateNotePair, _p19, leftState, _p20, rightState);
					var newState = A2(_newlandsvalley$elm_abc_player$MidiPerformance$addNotesToState, notePair, state);
					return {ctor: '_Tuple2', _0: midiMelody, _1: newState};
				}
			case 'Chord':
				var _p21 = _p13._0;
				var chord = A4(
					_newlandsvalley$elm_abc_player$MidiPerformance$translateNoteSequence,
					false,
					state,
					_p21.notes,
					_elm_lang$core$Maybe$Just(_p21.duration));
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
						return A2(_elm_lang$core$List_ops['::'], state.thisBar, midiMelody);
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
		var _p22 = A3(_elm_lang$core$List$foldl, _newlandsvalley$elm_abc_player$MidiPerformance$translateMusic, state, ml);
		var melody = _p22._0;
		var s = _p22._1;
		return {ctor: '_Tuple2', _0: melody, _1: s};
	});
var _newlandsvalley$elm_abc_player$MidiPerformance$defaultKey = {
	ctor: '_Tuple2',
	_0: {pitchClass: _newlandsvalley$elm_abc_player$Abc_ParseTree$C, accidental: _elm_lang$core$Maybe$Nothing, mode: _newlandsvalley$elm_abc_player$Abc_ParseTree$Major},
	_1: _elm_lang$core$Native_List.fromArray(
		[])
};
var _newlandsvalley$elm_abc_player$MidiPerformance$defaultTempo = {
	tempoNoteLength: A2(_imeckler$ratio$Ratio$over, 1, 4),
	bpm: 120,
	unitNoteLength: A2(_imeckler$ratio$Ratio$over, 1, 8)
};
var _newlandsvalley$elm_abc_player$MidiPerformance$fromAbc = function (tune) {
	var f = F2(
		function (bp, acc) {
			var _p23 = bp;
			if (_p23.ctor === 'Score') {
				var _p24 = A2(_newlandsvalley$elm_abc_player$MidiPerformance$toMidiMelody, _p23._0, acc);
				var newLine = _p24._0;
				var newState = _p24._1;
				var _p25 = acc;
				var existingLine = _p25._0;
				var state = _p25._1;
				return {ctor: '_Tuple2', _0: newLine, _1: newState};
			} else {
				return A2(_newlandsvalley$elm_abc_player$MidiPerformance$updateState, _p23._0, acc);
			}
		});
	var abcHeaders = _elm_lang$core$Basics$fst(tune);
	var initialHeaders = _newlandsvalley$elm_abc_player$MidiPerformance$hasTempoHeader(abcHeaders) ? abcHeaders : A2(
		_elm_lang$core$List_ops['::'],
		_newlandsvalley$elm_abc_player$Abc_ParseTree$UnitNoteLength(_newlandsvalley$elm_abc_player$MidiPerformance$defaultTempo.unitNoteLength),
		abcHeaders);
	var defaultState = {
		ctor: '_Tuple2',
		_0: _elm_lang$core$Native_List.fromArray(
			[]),
		_1: {
			modifiedKeySignature: _newlandsvalley$elm_abc_player$MidiPerformance$defaultKey,
			tempo: _newlandsvalley$elm_abc_player$MidiPerformance$defaultTempo,
			tempoModifier: A2(_imeckler$ratio$Ratio$over, 1, 1),
			nextBarNumber: 0,
			thisBar: _newlandsvalley$elm_abc_player$MidiPerformance$defaultBar(0),
			lastNoteTied: false,
			repeatState: _newlandsvalley$elm_abc_player$Repeats$defaultRepeatState
		}
	};
	var headerState = A3(_elm_lang$core$List$foldl, _newlandsvalley$elm_abc_player$MidiPerformance$updateState, defaultState, initialHeaders);
	var _p26 = A3(
		_elm_lang$core$List$foldl,
		f,
		headerState,
		_elm_lang$core$Basics$snd(tune));
	var music = _p26._0;
	var state = _p26._1;
	var fullMusic = _newlandsvalley$elm_abc_player$MidiPerformance$reverseMelody(
		A2(_elm_lang$core$List_ops['::'], state.thisBar, music));
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
			_1: _elm_lang$core$Native_List.fromArray(
				[])
		} : mr;
	});
var _newlandsvalley$elm_abc_player$MidiPerformance$midiRecordingFromAbc = F2(
	function (expandRepeats, tune) {
		var header = {formatType: 0, trackCount: 1, ticksPerBeat: _newlandsvalley$elm_abc_player$Music_Notation$standardMidiTick};
		var _p27 = A2(_newlandsvalley$elm_abc_player$MidiPerformance$melodyFromAbc, expandRepeats, tune);
		var melody = _p27._0;
		var _p28 = A2(_elm_lang$core$Debug$log, 'melody', melody);
		var track = _newlandsvalley$elm_abc_player$MidiPerformance$toMidiTrack(melody);
		var _p29 = A2(_elm_lang$core$Debug$log, 'track', track);
		var _p30 = A2(_elm_lang$core$Debug$log, 'abc tune', tune);
		return {
			ctor: '_Tuple2',
			_0: header,
			_1: _elm_lang$core$Native_List.fromArray(
				[track])
		};
	});
var _newlandsvalley$elm_abc_player$MidiPerformance$fromAbcResult = function (r) {
	return A2(_elm_lang$core$Result$map, _newlandsvalley$elm_abc_player$MidiPerformance$fromAbc, r);
};
var _newlandsvalley$elm_abc_player$MidiPerformance$melodyFromAbcResult = function (r) {
	return A2(
		_elm_lang$core$Result$map,
		function (_p31) {
			return _newlandsvalley$elm_abc_player$Repeats$buildRepeatedMelody(
				_newlandsvalley$elm_abc_player$MidiPerformance$fromAbc(_p31));
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
		A2(_elm_lang$core$Json_Decode_ops[':='], 'currentTime', _elm_lang$core$Json_Decode$float),
		function (currentTime) {
			return A2(
				_elm_lang$core$Json_Decode$andThen,
				A2(
					_elm_lang$core$Json_Decode_ops[':='],
					'destination',
					_elm_lang$core$Json_Decode$succeed(
						{})),
				function (destination) {
					return A2(
						_elm_lang$core$Json_Decode$andThen,
						A2(_elm_lang$core$Json_Decode_ops[':='], 'sampleRate', _elm_lang$core$Json_Decode$int),
						function (sampleRate) {
							return _elm_lang$core$Json_Decode$succeed(
								{currentTime: currentTime, destination: destination, sampleRate: sampleRate});
						});
				});
		}));
var _newlandsvalley$elm_abc_player$SoundFont_Ports$oggEnabled = _elm_lang$core$Native_Platform.incomingPort('oggEnabled', _elm_lang$core$Json_Decode$bool);
var _newlandsvalley$elm_abc_player$SoundFont_Ports$fontsLoaded = _elm_lang$core$Native_Platform.incomingPort('fontsLoaded', _elm_lang$core$Json_Decode$bool);
var _newlandsvalley$elm_abc_player$SoundFont_Ports$playedNote = _elm_lang$core$Native_Platform.incomingPort('playedNote', _elm_lang$core$Json_Decode$bool);
var _newlandsvalley$elm_abc_player$SoundFont_Ports$playSequenceStarted = _elm_lang$core$Native_Platform.incomingPort('playSequenceStarted', _elm_lang$core$Json_Decode$bool);

var _newlandsvalley$elm_abc_player$Midi_Track$fromRecording = function (mr) {
	var tracks = _elm_lang$core$Basics$snd(mr);
	var track0 = _elm_lang$core$Array$fromList(
		A2(
			_elm_lang$core$Maybe$withDefault,
			_elm_lang$core$Native_List.fromArray(
				[]),
			_elm_lang$core$List$head(tracks)));
	var header = _elm_lang$core$Basics$fst(mr);
	return {ticksPerBeat: header.ticksPerBeat, messages: track0};
};
var _newlandsvalley$elm_abc_player$Midi_Track$MidiTrack = F2(
	function (a, b) {
		return {ticksPerBeat: a, messages: b};
	});

var _newlandsvalley$elm_abc_player$Midi_Player$capsuleStyle = _elm_lang$core$Native_List.fromArray(
	[
		{ctor: '_Tuple2', _0: 'border', _1: '1px solid #000'},
		{ctor: '_Tuple2', _0: 'box-shadow', _1: '0 0 10px #555'},
		{ctor: '_Tuple2', _0: '-moz-box-shadow', _1: '0 0 10px #555'},
		{ctor: '_Tuple2', _0: '-webkit-box-shadow', _1: '0 0 10px #555'},
		{ctor: '_Tuple2', _0: 'background', _1: '#000'},
		{ctor: '_Tuple2', _0: 'background-image', _1: '-webkit-gradient(linear, left top, left bottom, color-stop(1, rgba(0,0,0,0.5)), color-stop(0, #333))'},
		{ctor: '_Tuple2', _0: 'background-image', _1: '-webkit-linear-gradient(top, rgba(0, 0, 0, 0.5) 1, #333 0)'},
		{ctor: '_Tuple2', _0: 'background-image', _1: '-moz-linear-gradient(top, rgba(0, 0, 0, 0.5) 1, #333 0)'},
		{ctor: '_Tuple2', _0: 'background-image', _1: '-ms-gradient(top, rgba(0, 0, 0, 0.5) 1, #333 0)'},
		{ctor: '_Tuple2', _0: 'background-image', _1: '-o-gradient(top, rgba(0, 0, 0, 0.5) 1, #333 0)'},
		{ctor: '_Tuple2', _0: 'background-image', _1: 'linear-gradient(top, rgba(0, 0, 0, 0.5) 1, #333 0)'},
		{ctor: '_Tuple2', _0: 'overflow', _1: 'hidden'},
		{ctor: '_Tuple2', _0: 'border-radius', _1: '5px'},
		{ctor: '_Tuple2', _0: '-moz-border-radius', _1: '5px'},
		{ctor: '_Tuple2', _0: '-webkit-border-radius', _1: '5px'},
		{ctor: '_Tuple2', _0: 'width', _1: '220px'},
		{ctor: '_Tuple2', _0: 'display', _1: 'inline-block'},
		{ctor: '_Tuple2', _0: 'height', _1: '30px'}
	]);
var _newlandsvalley$elm_abc_player$Midi_Player$buttonStyle = _elm_lang$core$Native_List.fromArray(
	[
		{ctor: '_Tuple2', _0: 'margin', _1: '0 auto'},
		{ctor: '_Tuple2', _0: 'width', _1: '80px'},
		{ctor: '_Tuple2', _0: 'float', _1: 'right'},
		{ctor: '_Tuple2', _0: 'opacity', _1: '0.7'}
	]);
var _newlandsvalley$elm_abc_player$Midi_Player$playerBase = _elm_lang$core$Native_List.fromArray(
	[
		{ctor: '_Tuple2', _0: 'background', _1: 'rgba(0,0,0,0.7)'},
		{ctor: '_Tuple2', _0: 'background-image', _1: '-webkit-gradient(linear,left top,left bottom,from(rgba(66,66,66,1)),to(rgba(22,22,22,1)))'},
		{ctor: '_Tuple2', _0: 'background-image', _1: '-webkit-linear-gradient(top, rgba(66, 66, 66, 1) 0%, rgba(22, 22, 22, 1) 100%)'},
		{ctor: '_Tuple2', _0: 'background-image', _1: '-moz-linear-gradient(top, rgba(66, 66, 66, 1) 0%, rgba(22, 22, 22, 1) 100%)'},
		{ctor: '_Tuple2', _0: 'background-image', _1: '-ms-gradient(top, rgba(66, 66, 66, 1) 0%, rgba(22, 22, 22, 1) 100%)'},
		{ctor: '_Tuple2', _0: 'background-image', _1: '-o-gradient(top, rgba(66, 66, 66, 1) 0%, rgba(22, 22, 22, 1) 100%)'},
		{ctor: '_Tuple2', _0: 'background-image', _1: 'linear-gradient(top, rgba(66, 66, 66, 1) 0%, rgba(22, 22, 22, 1) 100%)'},
		{ctor: '_Tuple2', _0: 'padding', _1: '15px 20px'},
		{ctor: '_Tuple2', _0: 'border', _1: '1px solid #000'},
		{ctor: '_Tuple2', _0: 'box-shadow', _1: '0 0 10px #fff'},
		{ctor: '_Tuple2', _0: '-moz-box-shadow', _1: '0 0 10px #fff'},
		{ctor: '_Tuple2', _0: '-webkit-box-shadow', _1: '0 0 10px #fff'},
		{ctor: '_Tuple2', _0: 'border-radius', _1: '10px'},
		{ctor: '_Tuple2', _0: '-moz-border-radius', _1: '10px'},
		{ctor: '_Tuple2', _0: '-webkit-border-radius', _1: '10px'},
		{ctor: '_Tuple2', _0: 'color', _1: '#FFFFFF'},
		{ctor: '_Tuple2', _0: 'color', _1: 'rgba(255, 255, 255, 0.8)'},
		{ctor: '_Tuple2', _0: 'text-shadow', _1: '1px 1px 2px #000'},
		{ctor: '_Tuple2', _0: '-moz-text-shadow', _1: '1px 1px 2px #000'}
	]);
var _newlandsvalley$elm_abc_player$Midi_Player$playerStyle = _elm_lang$core$Native_List.fromArray(
	[
		{ctor: '_Tuple2', _0: 'height', _1: '30px'},
		{ctor: '_Tuple2', _0: 'box-shadow', _1: '-1px #000'},
		{ctor: '_Tuple2', _0: 'border-bottom-right-radius', _1: '10'},
		{ctor: '_Tuple2', _0: 'border-bottom-left-radius', _1: '10'}
	]);
var _newlandsvalley$elm_abc_player$Midi_Player$playerBlock = _elm_lang$core$Native_List.fromArray(
	[
		{ctor: '_Tuple2', _0: 'border', _1: '1px solid #000'},
		{ctor: '_Tuple2', _0: 'border-radius', _1: '10px'},
		{ctor: '_Tuple2', _0: 'width', _1: '360px'},
		{ctor: '_Tuple2', _0: 'position', _1: 'relative; z-index: 2'}
	]);
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
							_1: _elm_lang$core$Native_List.fromArray(
								[])
						} : {
							ctor: '_Tuple2',
							_0: _elm_lang$core$Native_Utils.update(
								state,
								{index: state.index + 1, noteOnSequence: false}),
							_1: _elm_lang$core$Native_List.fromArray(
								[])
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
							_1: _elm_lang$core$Native_List.fromArray(
								[])
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
								_1: _elm_lang$core$Native_List.fromArray(
									[])
							};
						}
					case 'NoteOn':
						var maxVelocity = 127;
						var gain = _elm_lang$core$Basics$toFloat(_p2._2) / maxVelocity;
						var midiNote = A3(_newlandsvalley$elm_abc_player$SoundFont_Types$MidiNote, _p2._1, soundEvent.deltaTime, gain);
						var midiNotes = A2(_elm_lang$core$List_ops['::'], midiNote, state.notes);
						var newstate = _elm_lang$core$Native_Utils.update(
							state,
							{index: state.index + 1, noteOnSequence: true, noteOnChannel: _p2._0, notes: midiNotes});
						return {
							ctor: '_Tuple2',
							_0: newstate,
							_1: _elm_lang$core$Native_List.fromArray(
								[])
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
									notes: _elm_lang$core$Native_List.fromArray(
										[]),
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
							_1: _elm_lang$core$Native_List.fromArray(
								[])
						};
				}
			} else {
				return {
					ctor: '_Tuple2',
					_0: state,
					_1: _elm_lang$core$Native_List.fromArray(
						[])
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
				notes: _elm_lang$core$Native_List.fromArray(
					[]),
				delay: 0.0
			}
		},
		_elm_lang$core$Native_List.fromArray(
			[
				_newlandsvalley$elm_abc_player$SoundFont_Ports$requestLoadFonts('assets/soundfonts')
			]));
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
			var nextEvent = _elm_lang$core$Basics$snd(nextMessage);
			var deltaTime = (_elm_lang$core$Basics$fst(nextMessage) * state.microsecondsPerBeat) / (_elm_lang$core$Basics$toFloat(_p4.ticksPerBeat) * 1000);
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
			_elm_lang$core$Native_List.fromArray(
				[
					_elm_lang$html$Html_Attributes$style(_newlandsvalley$elm_abc_player$Midi_Player$playerBlock)
				]),
			_elm_lang$core$Native_List.fromArray(
				[
					A2(
					_elm_lang$html$Html$div,
					_elm_lang$core$Native_List.fromArray(
						[
							_elm_lang$html$Html_Attributes$style(
							A2(_elm_lang$core$Basics_ops['++'], _newlandsvalley$elm_abc_player$Midi_Player$playerBase, _newlandsvalley$elm_abc_player$Midi_Player$playerStyle))
						]),
					_elm_lang$core$Native_List.fromArray(
						[
							A2(
							_elm_lang$html$Html$progress,
							_elm_lang$core$Native_List.fromArray(
								[
									_elm_lang$html$Html_Attributes$max(maxRange),
									_elm_lang$html$Html_Attributes$value(sliderPos),
									_elm_lang$html$Html_Attributes$style(_newlandsvalley$elm_abc_player$Midi_Player$capsuleStyle)
								]),
							_elm_lang$core$Native_List.fromArray(
								[])),
							A2(
							_elm_lang$html$Html$div,
							_elm_lang$core$Native_List.fromArray(
								[
									_elm_lang$html$Html_Attributes$style(_newlandsvalley$elm_abc_player$Midi_Player$buttonStyle)
								]),
							_elm_lang$core$Native_List.fromArray(
								[
									A2(
									_elm_lang$html$Html$input,
									_elm_lang$core$Native_List.fromArray(
										[
											_elm_lang$html$Html_Attributes$type$('image'),
											_elm_lang$html$Html_Attributes$src(playButton),
											_elm_lang$html$Html_Events$onClick(playAction)
										]),
									_elm_lang$core$Native_List.fromArray(
										[])),
									A2(
									_elm_lang$html$Html$input,
									_elm_lang$core$Native_List.fromArray(
										[
											_elm_lang$html$Html_Attributes$type$('image'),
											_elm_lang$html$Html_Attributes$src(stop),
											_elm_lang$html$Html_Events$onClick(
											_newlandsvalley$elm_abc_player$Midi_Player$MoveTo(0))
										]),
									_elm_lang$core$Native_List.fromArray(
										[]))
								]))
						]))
				]));
	} else {
		return A2(
			_elm_lang$html$Html$div,
			_elm_lang$core$Native_List.fromArray(
				[]),
			_elm_lang$core$Native_List.fromArray(
				[]));
	}
};
var _newlandsvalley$elm_abc_player$Midi_Player$view = function (model) {
	return A2(
		_elm_lang$html$Html$div,
		_elm_lang$core$Native_List.fromArray(
			[]),
		_elm_lang$core$Native_List.fromArray(
			[
				_newlandsvalley$elm_abc_player$Midi_Player$player(model)
			]));
};
var _newlandsvalley$elm_abc_player$Midi_Player$buttons = function (model) {
	var _p10 = model.playbackState.playing;
	if (_p10 === true) {
		return A2(
			_elm_lang$html$Html$div,
			_elm_lang$core$Native_List.fromArray(
				[]),
			_elm_lang$core$Native_List.fromArray(
				[
					A2(
					_elm_lang$html$Html$button,
					_elm_lang$core$Native_List.fromArray(
						[
							_elm_lang$html$Html_Events$onClick(_newlandsvalley$elm_abc_player$Midi_Player$Pause)
						]),
					_elm_lang$core$Native_List.fromArray(
						[
							_elm_lang$html$Html$text('pause')
						])),
					A2(
					_elm_lang$html$Html$button,
					_elm_lang$core$Native_List.fromArray(
						[
							_elm_lang$html$Html_Events$onClick(
							_newlandsvalley$elm_abc_player$Midi_Player$MoveTo(0))
						]),
					_elm_lang$core$Native_List.fromArray(
						[
							_elm_lang$html$Html$text('stop')
						]))
				]));
	} else {
		return A2(
			_elm_lang$html$Html$div,
			_elm_lang$core$Native_List.fromArray(
				[]),
			_elm_lang$core$Native_List.fromArray(
				[
					A2(
					_elm_lang$html$Html$button,
					_elm_lang$core$Native_List.fromArray(
						[
							_elm_lang$html$Html_Events$onClick(_newlandsvalley$elm_abc_player$Midi_Player$Start)
						]),
					_elm_lang$core$Native_List.fromArray(
						[
							_elm_lang$html$Html$text('play')
						])),
					A2(
					_elm_lang$html$Html$button,
					_elm_lang$core$Native_List.fromArray(
						[
							_elm_lang$html$Html_Events$onClick(
							_newlandsvalley$elm_abc_player$Midi_Player$MoveTo(0))
						]),
					_elm_lang$core$Native_List.fromArray(
						[
							_elm_lang$html$Html$text('stop')
						]))
				]));
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
var _newlandsvalley$elm_abc_player$Midi_Player$SetRecording = function (a) {
	return {ctor: 'SetRecording', _0: a};
};
var _newlandsvalley$elm_abc_player$Midi_Player$FontsLoaded = function (a) {
	return {ctor: 'FontsLoaded', _0: a};
};
var _newlandsvalley$elm_abc_player$Midi_Player$fontsLoadedSub = _newlandsvalley$elm_abc_player$SoundFont_Ports$fontsLoaded(_newlandsvalley$elm_abc_player$Midi_Player$FontsLoaded);
var _newlandsvalley$elm_abc_player$Midi_Player$subscriptions = function (m) {
	return _elm_lang$core$Platform_Sub$batch(
		_elm_lang$core$Native_List.fromArray(
			[_newlandsvalley$elm_abc_player$Midi_Player$fontsLoadedSub, _newlandsvalley$elm_abc_player$Midi_Player$playedNoteSub, _newlandsvalley$elm_abc_player$Midi_Player$playSequenceStartedSub]));
};
var _newlandsvalley$elm_abc_player$Midi_Player$NoOp = {ctor: 'NoOp'};
var _newlandsvalley$elm_abc_player$Midi_Player$step = function (delay) {
	var task = A2(
		_elm_lang$core$Task$andThen,
		_elm_lang$core$Process$sleep(delay * _newlandsvalley$elm_abc_player$Midi_Player$elmPlayerOverhead),
		function (_p11) {
			return _elm_lang$core$Task$succeed(
				function (_p12) {
					return _newlandsvalley$elm_abc_player$Midi_Player$Step;
				});
		});
	return A3(
		_elm_lang$core$Task$perform,
		function (_p13) {
			return _newlandsvalley$elm_abc_player$Midi_Player$NoOp;
		},
		function (_p14) {
			return _newlandsvalley$elm_abc_player$Midi_Player$Step;
		},
		task);
};
var _newlandsvalley$elm_abc_player$Midi_Player$interpretSoundEvent = F3(
	function (soundEvent, notes, state) {
		if (state.playing) {
			var _p15 = _elm_lang$core$List$length(notes);
			switch (_p15) {
				case 0:
					return _newlandsvalley$elm_abc_player$Midi_Player$step(soundEvent.deltaTime * _newlandsvalley$elm_abc_player$Midi_Player$elmPlayerOverhead);
				case 1:
					var _p16 = _elm_lang$core$List$head(notes);
					if (_p16.ctor === 'Just') {
						return _newlandsvalley$elm_abc_player$Midi_Player$play(_p16._0);
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
var _newlandsvalley$elm_abc_player$Midi_Player$stop = A3(
	_elm_lang$core$Task$perform,
	function (_p17) {
		return _newlandsvalley$elm_abc_player$Midi_Player$NoOp;
	},
	function (_p18) {
		return _newlandsvalley$elm_abc_player$Midi_Player$MoveTo(0);
	},
	_elm_lang$core$Task$succeed(_newlandsvalley$elm_abc_player$Midi_Player$NoOp));
var _newlandsvalley$elm_abc_player$Midi_Player$update = F2(
	function (msg, model) {
		var _p19 = msg;
		switch (_p19.ctor) {
			case 'NoOp':
				return {ctor: '_Tuple2', _0: model, _1: _elm_lang$core$Platform_Cmd$none};
			case 'FontsLoaded':
				return {
					ctor: '_Tuple2',
					_0: _elm_lang$core$Native_Utils.update(
						model,
						{fontsLoaded: _p19._0}),
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
						track: _newlandsvalley$elm_abc_player$Midi_Player$toTrack0(_p19._0)
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
					{playing: false, index: _p19._0});
				var newModel = _elm_lang$core$Native_Utils.update(
					model,
					{playbackState: newState});
				return {ctor: '_Tuple2', _0: newModel, _1: _elm_lang$core$Platform_Cmd$none};
			case 'Step':
				var soundEvent = A2(_newlandsvalley$elm_abc_player$Midi_Player$nextEvent, model.playbackState, model.track);
				var _p20 = A2(_newlandsvalley$elm_abc_player$Midi_Player$stepState, soundEvent, model.playbackState);
				var newState = _p20._0;
				var midiNotes = _p20._1;
				var newModel = _elm_lang$core$Native_Utils.update(
					model,
					{playbackState: newState});
				var nextAction = A3(_newlandsvalley$elm_abc_player$Midi_Player$interpretSoundEvent, soundEvent, midiNotes, newState);
				var _p21 = A2(_elm_lang$core$Debug$log, 'step state', model.playbackState);
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
var _newlandsvalley$elm_abc_player$Midi_Player$main = {
	main: _elm_lang$html$Html_App$program(
		{
			init: _newlandsvalley$elm_abc_player$Midi_Player$init(
				_elm_lang$core$Result$Err('not started')),
			update: _newlandsvalley$elm_abc_player$Midi_Player$update,
			view: _newlandsvalley$elm_abc_player$Midi_Player$view,
			subscriptions: _newlandsvalley$elm_abc_player$Midi_Player$subscriptions
		})
};

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
		_elm_lang$core$Native_List.fromArray(
			[
				_elm_lang$core$Json_Decode$null(_elm_lang$core$Maybe$Nothing),
				A2(
				_elm_lang$core$Json_Decode$map,
				_elm_lang$core$Maybe$Just,
				A2(
					_elm_lang$core$Json_Decode$andThen,
					A2(_elm_lang$core$Json_Decode_ops[':='], 'contents', _elm_lang$core$Json_Decode$string),
					function (contents) {
						return A2(
							_elm_lang$core$Json_Decode$andThen,
							A2(_elm_lang$core$Json_Decode_ops[':='], 'name', _elm_lang$core$Json_Decode$string),
							function (name) {
								return _elm_lang$core$Json_Decode$succeed(
									{contents: contents, name: name});
							});
					}))
			])));
var _newlandsvalley$elm_abc_player$FileIO_Ports$fileSaved = _elm_lang$core$Native_Platform.incomingPort('fileSaved', _elm_lang$core$Json_Decode$bool);
var _newlandsvalley$elm_abc_player$FileIO_Ports$Filespec = F2(
	function (a, b) {
		return {contents: a, name: b};
	});

var _newlandsvalley$elm_abc_player$AbcEditorController$cMajor = {
	ctor: '_Tuple2',
	_0: {pitchClass: _newlandsvalley$elm_abc_player$Abc_ParseTree$C, accidental: _elm_lang$core$Maybe$Nothing, mode: _newlandsvalley$elm_abc_player$Abc_ParseTree$Major},
	_1: _elm_lang$core$Native_List.fromArray(
		[])
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
			accidental: _elm_lang$core$Maybe$Just(_newlandsvalley$elm_abc_player$Abc_ParseTree$Flat),
			mode: m
		};
	});
var _newlandsvalley$elm_abc_player$AbcEditorController$sharpKey = F2(
	function (pc, m) {
		return {
			pitchClass: pc,
			accidental: _elm_lang$core$Maybe$Just(_newlandsvalley$elm_abc_player$Abc_ParseTree$Sharp),
			mode: m
		};
	});
var _newlandsvalley$elm_abc_player$AbcEditorController$key = F2(
	function (pc, m) {
		return {pitchClass: pc, accidental: _elm_lang$core$Maybe$Nothing, mode: m};
	});
var _newlandsvalley$elm_abc_player$AbcEditorController$errorHighlightStyle = _elm_lang$html$Html_Attributes$style(
	_elm_lang$core$Native_List.fromArray(
		[
			{ctor: '_Tuple2', _0: 'color', _1: 'red'}
		]));
var _newlandsvalley$elm_abc_player$AbcEditorController$fieldsetStyle = _elm_lang$html$Html_Attributes$style(
	_elm_lang$core$Native_List.fromArray(
		[
			{ctor: '_Tuple2', _0: 'background-color', _1: '#f1f1f1'},
			{ctor: '_Tuple2', _0: 'border', _1: 'none'},
			{ctor: '_Tuple2', _0: 'border-radius', _1: '2px'},
			{ctor: '_Tuple2', _0: 'margin-bottom', _1: '12px'},
			{ctor: '_Tuple2', _0: 'padding', _1: '10px 10px 20px 10px'},
			{ctor: '_Tuple2', _0: 'display', _1: 'inline-block'}
		]));
var _newlandsvalley$elm_abc_player$AbcEditorController$bStyle = function (enabled) {
	var textSize = _elm_lang$core$Native_List.fromArray(
		[
			{ctor: '_Tuple2', _0: 'font-size', _1: '1em'}
		]);
	var colour = enabled ? _elm_lang$core$Native_List.fromArray(
		[]) : _elm_lang$core$Native_List.fromArray(
		[
			{ctor: '_Tuple2', _0: 'background-color', _1: 'lightgray'},
			{ctor: '_Tuple2', _0: 'color', _1: 'darkgrey'}
		]);
	return _elm_lang$html$Html_Attributes$style(
		A2(_elm_lang$core$Basics_ops['++'], colour, textSize));
};
var _newlandsvalley$elm_abc_player$AbcEditorController$buttonAttributes = F2(
	function (isEnabled, msg) {
		return _elm_lang$core$Native_List.fromArray(
			[
				_elm_lang$html$Html_Attributes$class('hoverable'),
				_newlandsvalley$elm_abc_player$AbcEditorController$bStyle(isEnabled),
				_elm_lang$html$Html_Events$onClick(msg),
				_elm_lang$html$Html_Attributes$disabled(
				_elm_lang$core$Basics$not(isEnabled))
			]);
	});
var _newlandsvalley$elm_abc_player$AbcEditorController$rightPaneStyle = _elm_lang$html$Html_Attributes$style(
	_elm_lang$core$Native_List.fromArray(
		[
			{ctor: '_Tuple2', _0: 'float', _1: 'left'}
		]));
var _newlandsvalley$elm_abc_player$AbcEditorController$leftPaneStyle = _elm_lang$html$Html_Attributes$style(
	_elm_lang$core$Native_List.fromArray(
		[
			{ctor: '_Tuple2', _0: 'float', _1: 'left'},
			{ctor: '_Tuple2', _0: 'width', _1: '350px'}
		]));
var _newlandsvalley$elm_abc_player$AbcEditorController$centreStyle = _elm_lang$html$Html_Attributes$style(
	_elm_lang$core$Native_List.fromArray(
		[
			{ctor: '_Tuple2', _0: 'text-align', _1: 'center'},
			{ctor: '_Tuple2', _0: 'margin', _1: 'auto'}
		]));
var _newlandsvalley$elm_abc_player$AbcEditorController$inputStyle = _elm_lang$html$Html_Attributes$style(
	_elm_lang$core$Native_List.fromArray(
		[
			{ctor: '_Tuple2', _0: 'padding', _1: '10px 0'},
			{ctor: '_Tuple2', _0: 'font-size', _1: '1em'},
			{ctor: '_Tuple2', _0: 'margin-left', _1: '40px'}
		]));
var _newlandsvalley$elm_abc_player$AbcEditorController$leftPanelLabelStyle = _elm_lang$html$Html_Attributes$style(
	_elm_lang$core$Native_List.fromArray(
		[
			{ctor: '_Tuple2', _0: 'margin-left', _1: '40px'},
			{ctor: '_Tuple2', _0: 'margin-top', _1: '40px'},
			{ctor: '_Tuple2', _0: 'font-size', _1: '1.2em'}
		]));
var _newlandsvalley$elm_abc_player$AbcEditorController$taStyle = _elm_lang$html$Html_Attributes$style(
	_elm_lang$core$Native_List.fromArray(
		[
			{ctor: '_Tuple2', _0: 'padding', _1: '10px 0'},
			{ctor: '_Tuple2', _0: 'font-size', _1: '1.5em'},
			{ctor: '_Tuple2', _0: 'text-align', _1: 'left'},
			{ctor: '_Tuple2', _0: 'align', _1: 'center'},
			{ctor: '_Tuple2', _0: 'display', _1: 'block'},
			{ctor: '_Tuple2', _0: 'margin-left', _1: 'auto'},
			{ctor: '_Tuple2', _0: 'margin-right', _1: 'auto'},
			{ctor: '_Tuple2', _0: 'background-color', _1: '#f3f6c6'}
		]));
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
var _newlandsvalley$elm_abc_player$AbcEditorController$transpositionOptions = function (mks) {
	var ks = _elm_lang$core$Basics$fst(mks);
	var mode = ks.mode;
	var allModes = _elm_lang$core$Native_List.fromArray(
		[
			A2(
			_elm_lang$html$Html$option,
			_elm_lang$core$Native_List.fromArray(
				[
					A2(
					_newlandsvalley$elm_abc_player$AbcEditorController$selectedKey,
					ks,
					A2(_newlandsvalley$elm_abc_player$AbcEditorController$key, _newlandsvalley$elm_abc_player$Abc_ParseTree$C, mode))
				]),
			_elm_lang$core$Native_List.fromArray(
				[
					_newlandsvalley$elm_abc_player$AbcEditorController$displayKeySig(
					A2(_newlandsvalley$elm_abc_player$AbcEditorController$key, _newlandsvalley$elm_abc_player$Abc_ParseTree$C, mode))
				])),
			A2(
			_elm_lang$html$Html$option,
			_elm_lang$core$Native_List.fromArray(
				[
					A2(
					_newlandsvalley$elm_abc_player$AbcEditorController$selectedKey,
					ks,
					A2(_newlandsvalley$elm_abc_player$AbcEditorController$key, _newlandsvalley$elm_abc_player$Abc_ParseTree$D, mode))
				]),
			_elm_lang$core$Native_List.fromArray(
				[
					_newlandsvalley$elm_abc_player$AbcEditorController$displayKeySig(
					A2(_newlandsvalley$elm_abc_player$AbcEditorController$key, _newlandsvalley$elm_abc_player$Abc_ParseTree$D, mode))
				])),
			A2(
			_elm_lang$html$Html$option,
			_elm_lang$core$Native_List.fromArray(
				[
					A2(
					_newlandsvalley$elm_abc_player$AbcEditorController$selectedKey,
					ks,
					A2(_newlandsvalley$elm_abc_player$AbcEditorController$key, _newlandsvalley$elm_abc_player$Abc_ParseTree$E, mode))
				]),
			_elm_lang$core$Native_List.fromArray(
				[
					_newlandsvalley$elm_abc_player$AbcEditorController$displayKeySig(
					A2(_newlandsvalley$elm_abc_player$AbcEditorController$key, _newlandsvalley$elm_abc_player$Abc_ParseTree$E, mode))
				])),
			A2(
			_elm_lang$html$Html$option,
			_elm_lang$core$Native_List.fromArray(
				[
					A2(
					_newlandsvalley$elm_abc_player$AbcEditorController$selectedKey,
					ks,
					A2(_newlandsvalley$elm_abc_player$AbcEditorController$key, _newlandsvalley$elm_abc_player$Abc_ParseTree$F, mode))
				]),
			_elm_lang$core$Native_List.fromArray(
				[
					_newlandsvalley$elm_abc_player$AbcEditorController$displayKeySig(
					A2(_newlandsvalley$elm_abc_player$AbcEditorController$key, _newlandsvalley$elm_abc_player$Abc_ParseTree$F, mode))
				])),
			A2(
			_elm_lang$html$Html$option,
			_elm_lang$core$Native_List.fromArray(
				[
					A2(
					_newlandsvalley$elm_abc_player$AbcEditorController$selectedKey,
					ks,
					A2(_newlandsvalley$elm_abc_player$AbcEditorController$key, _newlandsvalley$elm_abc_player$Abc_ParseTree$G, mode))
				]),
			_elm_lang$core$Native_List.fromArray(
				[
					_newlandsvalley$elm_abc_player$AbcEditorController$displayKeySig(
					A2(_newlandsvalley$elm_abc_player$AbcEditorController$key, _newlandsvalley$elm_abc_player$Abc_ParseTree$G, mode))
				])),
			A2(
			_elm_lang$html$Html$option,
			_elm_lang$core$Native_List.fromArray(
				[
					A2(
					_newlandsvalley$elm_abc_player$AbcEditorController$selectedKey,
					ks,
					A2(_newlandsvalley$elm_abc_player$AbcEditorController$key, _newlandsvalley$elm_abc_player$Abc_ParseTree$A, mode))
				]),
			_elm_lang$core$Native_List.fromArray(
				[
					_newlandsvalley$elm_abc_player$AbcEditorController$displayKeySig(
					A2(_newlandsvalley$elm_abc_player$AbcEditorController$key, _newlandsvalley$elm_abc_player$Abc_ParseTree$A, mode))
				])),
			A2(
			_elm_lang$html$Html$option,
			_elm_lang$core$Native_List.fromArray(
				[
					A2(
					_newlandsvalley$elm_abc_player$AbcEditorController$selectedKey,
					ks,
					A2(_newlandsvalley$elm_abc_player$AbcEditorController$key, _newlandsvalley$elm_abc_player$Abc_ParseTree$B, mode))
				]),
			_elm_lang$core$Native_List.fromArray(
				[
					_newlandsvalley$elm_abc_player$AbcEditorController$displayKeySig(
					A2(_newlandsvalley$elm_abc_player$AbcEditorController$key, _newlandsvalley$elm_abc_player$Abc_ParseTree$B, mode))
				]))
		]);
	var majorMode = _elm_lang$core$Native_List.fromArray(
		[
			A2(
			_elm_lang$html$Html$option,
			_elm_lang$core$Native_List.fromArray(
				[
					A2(
					_newlandsvalley$elm_abc_player$AbcEditorController$selectedKey,
					ks,
					A2(_newlandsvalley$elm_abc_player$AbcEditorController$flatKey, _newlandsvalley$elm_abc_player$Abc_ParseTree$B, _newlandsvalley$elm_abc_player$Abc_ParseTree$Major))
				]),
			_elm_lang$core$Native_List.fromArray(
				[
					_newlandsvalley$elm_abc_player$AbcEditorController$displayKeySig(
					A2(_newlandsvalley$elm_abc_player$AbcEditorController$flatKey, _newlandsvalley$elm_abc_player$Abc_ParseTree$B, _newlandsvalley$elm_abc_player$Abc_ParseTree$Major))
				])),
			A2(
			_elm_lang$html$Html$option,
			_elm_lang$core$Native_List.fromArray(
				[
					A2(
					_newlandsvalley$elm_abc_player$AbcEditorController$selectedKey,
					ks,
					A2(_newlandsvalley$elm_abc_player$AbcEditorController$flatKey, _newlandsvalley$elm_abc_player$Abc_ParseTree$A, _newlandsvalley$elm_abc_player$Abc_ParseTree$Major))
				]),
			_elm_lang$core$Native_List.fromArray(
				[
					_newlandsvalley$elm_abc_player$AbcEditorController$displayKeySig(
					A2(_newlandsvalley$elm_abc_player$AbcEditorController$flatKey, _newlandsvalley$elm_abc_player$Abc_ParseTree$A, _newlandsvalley$elm_abc_player$Abc_ParseTree$Major))
				])),
			A2(
			_elm_lang$html$Html$option,
			_elm_lang$core$Native_List.fromArray(
				[
					A2(
					_newlandsvalley$elm_abc_player$AbcEditorController$selectedKey,
					ks,
					A2(_newlandsvalley$elm_abc_player$AbcEditorController$flatKey, _newlandsvalley$elm_abc_player$Abc_ParseTree$E, _newlandsvalley$elm_abc_player$Abc_ParseTree$Major))
				]),
			_elm_lang$core$Native_List.fromArray(
				[
					_newlandsvalley$elm_abc_player$AbcEditorController$displayKeySig(
					A2(_newlandsvalley$elm_abc_player$AbcEditorController$flatKey, _newlandsvalley$elm_abc_player$Abc_ParseTree$E, _newlandsvalley$elm_abc_player$Abc_ParseTree$Major))
				]))
		]);
	var minorMode = _elm_lang$core$Native_List.fromArray(
		[
			A2(
			_elm_lang$html$Html$option,
			_elm_lang$core$Native_List.fromArray(
				[
					A2(
					_newlandsvalley$elm_abc_player$AbcEditorController$selectedKey,
					ks,
					A2(_newlandsvalley$elm_abc_player$AbcEditorController$sharpKey, _newlandsvalley$elm_abc_player$Abc_ParseTree$F, _newlandsvalley$elm_abc_player$Abc_ParseTree$Minor))
				]),
			_elm_lang$core$Native_List.fromArray(
				[
					_newlandsvalley$elm_abc_player$AbcEditorController$displayKeySig(
					A2(_newlandsvalley$elm_abc_player$AbcEditorController$sharpKey, _newlandsvalley$elm_abc_player$Abc_ParseTree$F, _newlandsvalley$elm_abc_player$Abc_ParseTree$Minor))
				])),
			A2(
			_elm_lang$html$Html$option,
			_elm_lang$core$Native_List.fromArray(
				[
					A2(
					_newlandsvalley$elm_abc_player$AbcEditorController$selectedKey,
					ks,
					A2(_newlandsvalley$elm_abc_player$AbcEditorController$sharpKey, _newlandsvalley$elm_abc_player$Abc_ParseTree$C, _newlandsvalley$elm_abc_player$Abc_ParseTree$Minor))
				]),
			_elm_lang$core$Native_List.fromArray(
				[
					_newlandsvalley$elm_abc_player$AbcEditorController$displayKeySig(
					A2(_newlandsvalley$elm_abc_player$AbcEditorController$sharpKey, _newlandsvalley$elm_abc_player$Abc_ParseTree$C, _newlandsvalley$elm_abc_player$Abc_ParseTree$Minor))
				])),
			A2(
			_elm_lang$html$Html$option,
			_elm_lang$core$Native_List.fromArray(
				[
					A2(
					_newlandsvalley$elm_abc_player$AbcEditorController$selectedKey,
					ks,
					A2(_newlandsvalley$elm_abc_player$AbcEditorController$sharpKey, _newlandsvalley$elm_abc_player$Abc_ParseTree$G, _newlandsvalley$elm_abc_player$Abc_ParseTree$Minor))
				]),
			_elm_lang$core$Native_List.fromArray(
				[
					_newlandsvalley$elm_abc_player$AbcEditorController$displayKeySig(
					A2(_newlandsvalley$elm_abc_player$AbcEditorController$sharpKey, _newlandsvalley$elm_abc_player$Abc_ParseTree$G, _newlandsvalley$elm_abc_player$Abc_ParseTree$Minor))
				]))
		]);
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
var _newlandsvalley$elm_abc_player$AbcEditorController$viewError = function (m) {
	var textRange = 10;
	var tuneResult = m.tuneResult;
	var _p3 = tuneResult;
	if (_p3.ctor === 'Err') {
		var _p4 = _p3._0;
		if (_elm_lang$core$List$isEmpty(_p4.msgs)) {
			return _elm_lang$html$Html$text('');
		} else {
			var errorChar = A3(_elm_lang$core$String$slice, _p4.position, _p4.position + 1, m.abc);
			var endSuffix = A2(
				_elm_lang$core$Basics$min,
				(_p4.position + textRange) + 1,
				_elm_lang$core$String$length(m.abc));
			var startSuffix = A2(
				_elm_lang$core$Basics$min,
				_p4.position + 1,
				_elm_lang$core$String$length(m.abc));
			var errorSuffix = A3(_elm_lang$core$String$slice, startSuffix, endSuffix, m.abc);
			var startPhrase = A2(_elm_lang$core$Basics$max, _p4.position - textRange, 0);
			var errorPrefix = A2(
				_elm_lang$core$Basics_ops['++'],
				'error: ',
				A3(_elm_lang$core$String$slice, startPhrase, _p4.position, m.abc));
			return A2(
				_elm_lang$html$Html$p,
				_elm_lang$core$Native_List.fromArray(
					[]),
				_elm_lang$core$Native_List.fromArray(
					[
						_elm_lang$html$Html$text(errorPrefix),
						A2(
						_elm_lang$html$Html$span,
						_elm_lang$core$Native_List.fromArray(
							[_newlandsvalley$elm_abc_player$AbcEditorController$errorHighlightStyle]),
						_elm_lang$core$Native_List.fromArray(
							[
								_elm_lang$html$Html$text(errorChar)
							])),
						_elm_lang$html$Html$text(errorSuffix)
					]));
		}
	} else {
		return _elm_lang$html$Html$text('');
	}
};
var _newlandsvalley$elm_abc_player$AbcEditorController$moveOctave = F2(
	function (movefn, model) {
		var _p5 = model.tuneResult;
		if (_p5.ctor === 'Ok') {
			var newTune = movefn(_p5._0);
			var newAbc = _newlandsvalley$elm_abc_player$Abc_Canonical$fromTune(newTune);
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
			_elm_lang$core$Result$formatError,
			function (_p6) {
				return 'some error or other';
			},
			r));
};
var _newlandsvalley$elm_abc_player$AbcEditorController$terminateLine = function (s) {
	return A2(_elm_lang$core$Basics_ops['++'], s, '\r\n');
};
var _newlandsvalley$elm_abc_player$AbcEditorController$getFileName = function (m) {
	var _p7 = m.fileName;
	if (_p7.ctor === 'Just') {
		return _p7._0;
	} else {
		var _p8 = m.tuneResult;
		if (_p8.ctor === 'Ok') {
			return A2(
				F2(
					function (x, y) {
						return A2(_elm_lang$core$Basics_ops['++'], x, y);
					}),
				'.abc',
				A2(
					_elm_lang$core$Maybe$withDefault,
					'untitled',
					_newlandsvalley$elm_abc_player$Music_Notation$getTitle(_p8._0)));
		} else {
			return 'untitled.abc';
		}
	}
};
var _newlandsvalley$elm_abc_player$AbcEditorController$emptyTune = {
	ctor: '_Tuple2',
	_0: _elm_lang$core$Native_List.fromArray(
		[]),
	_1: _elm_lang$core$Native_List.fromArray(
		[])
};
var _newlandsvalley$elm_abc_player$AbcEditorController$dummyError = {
	msgs: _elm_lang$core$Native_List.fromArray(
		[]),
	input: '',
	position: 0
};
var _newlandsvalley$elm_abc_player$AbcEditorController$transpose = F2(
	function (kstr, model) {
		var mksr = _newlandsvalley$elm_abc_player$Abc$parseKeySignature(kstr);
		var _p9 = {ctor: '_Tuple2', _0: mksr, _1: model.tuneResult};
		if (((_p9.ctor === '_Tuple2') && (_p9._0.ctor === 'Ok')) && (_p9._1.ctor === 'Ok')) {
			var newTuneResult = A2(_newlandsvalley$elm_abc_player$Music_Transposition$transposeTo, _p9._0._0, _p9._1._0);
			var newTRCorrectedErr = A2(
				_elm_lang$core$Result$formatError,
				function (_p10) {
					return _newlandsvalley$elm_abc_player$AbcEditorController$dummyError;
				},
				newTuneResult);
			var newAbcResult = _newlandsvalley$elm_abc_player$Abc_Canonical$fromResult(newTuneResult);
			var _p11 = newAbcResult;
			if (_p11.ctor === 'Ok') {
				return _elm_lang$core$Native_Utils.update(
					model,
					{abc: _p11._0, tuneResult: newTRCorrectedErr});
			} else {
				return model;
			}
		} else {
			return model;
		}
	});
var _newlandsvalley$elm_abc_player$AbcEditorController$Model = F4(
	function (a, b, c, d) {
		return {abc: a, fileName: b, tuneResult: c, player: d};
	});
var _newlandsvalley$elm_abc_player$AbcEditorController$PlayerMsg = function (a) {
	return {ctor: 'PlayerMsg', _0: a};
};
var _newlandsvalley$elm_abc_player$AbcEditorController$init = function () {
	var recording = _elm_lang$core$Result$Err('not started');
	var _p12 = _newlandsvalley$elm_abc_player$Midi_Player$init(recording);
	var player = _p12._0;
	var playerCmd = _p12._1;
	return A2(
		_elm_lang$core$Platform_Cmd_ops['!'],
		{
			abc: '',
			fileName: _elm_lang$core$Maybe$Nothing,
			tuneResult: _elm_lang$core$Result$Ok(_newlandsvalley$elm_abc_player$AbcEditorController$emptyTune),
			player: player
		},
		_elm_lang$core$Native_List.fromArray(
			[
				A2(_elm_lang$core$Platform_Cmd$map, _newlandsvalley$elm_abc_player$AbcEditorController$PlayerMsg, playerCmd)
			]));
}();
var _newlandsvalley$elm_abc_player$AbcEditorController$FileLoaded = function (a) {
	return {ctor: 'FileLoaded', _0: a};
};
var _newlandsvalley$elm_abc_player$AbcEditorController$fileLoadedSub = _newlandsvalley$elm_abc_player$FileIO_Ports$fileLoaded(_newlandsvalley$elm_abc_player$AbcEditorController$FileLoaded);
var _newlandsvalley$elm_abc_player$AbcEditorController$subscriptions = function (model) {
	return _elm_lang$core$Platform_Sub$batch(
		_elm_lang$core$Native_List.fromArray(
			[
				A2(
				_elm_lang$core$Platform_Sub$map,
				_newlandsvalley$elm_abc_player$AbcEditorController$PlayerMsg,
				_newlandsvalley$elm_abc_player$Midi_Player$subscriptions(model.player)),
				_newlandsvalley$elm_abc_player$AbcEditorController$fileLoadedSub
			]));
};
var _newlandsvalley$elm_abc_player$AbcEditorController$RequestFileDownload = {ctor: 'RequestFileDownload'};
var _newlandsvalley$elm_abc_player$AbcEditorController$RequestFileUpload = {ctor: 'RequestFileUpload'};
var _newlandsvalley$elm_abc_player$AbcEditorController$TuneResult = function (a) {
	return {ctor: 'TuneResult', _0: a};
};
var _newlandsvalley$elm_abc_player$AbcEditorController$MoveOctave = function (a) {
	return {ctor: 'MoveOctave', _0: a};
};
var _newlandsvalley$elm_abc_player$AbcEditorController$Transpose = function (a) {
	return {ctor: 'Transpose', _0: a};
};
var _newlandsvalley$elm_abc_player$AbcEditorController$transpositionMenu = function (m) {
	var mKeySig = function () {
		var _p13 = m.tuneResult;
		if (_p13.ctor === 'Ok') {
			return _newlandsvalley$elm_abc_player$AbcEditorController$defaultToC(
				_newlandsvalley$elm_abc_player$Music_Notation$getKeySig(_p13._0));
		} else {
			return _elm_lang$core$Maybe$Nothing;
		}
	}();
	var _p14 = mKeySig;
	if (_p14.ctor === 'Just') {
		return A2(
			_elm_lang$html$Html$select,
			_elm_lang$core$Native_List.fromArray(
				[
					_newlandsvalley$elm_abc_player$AbcEditorController$leftPanelLabelStyle,
					A2(
					_elm_lang$html$Html_Events$on,
					'change',
					A2(_elm_lang$core$Json_Decode$map, _newlandsvalley$elm_abc_player$AbcEditorController$Transpose, _elm_lang$html$Html_Events$targetValue))
				]),
			_newlandsvalley$elm_abc_player$AbcEditorController$transpositionOptions(_p14._0));
	} else {
		return A2(
			_elm_lang$html$Html$select,
			_elm_lang$core$Native_List.fromArray(
				[_newlandsvalley$elm_abc_player$AbcEditorController$leftPanelLabelStyle]),
			_elm_lang$core$Native_List.fromArray(
				[
					A2(
					_elm_lang$html$Html$option,
					_elm_lang$core$Native_List.fromArray(
						[]),
					_elm_lang$core$Native_List.fromArray(
						[
							_elm_lang$html$Html$text('unavailable')
						]))
				]));
	}
};
var _newlandsvalley$elm_abc_player$AbcEditorController$Abc = function (a) {
	return {ctor: 'Abc', _0: a};
};
var _newlandsvalley$elm_abc_player$AbcEditorController$view = function (model) {
	return A2(
		_elm_lang$html$Html$div,
		_elm_lang$core$Native_List.fromArray(
			[]),
		_elm_lang$core$Native_List.fromArray(
			[
				A2(
				_elm_lang$html$Html$h1,
				_elm_lang$core$Native_List.fromArray(
					[_newlandsvalley$elm_abc_player$AbcEditorController$centreStyle]),
				_elm_lang$core$Native_List.fromArray(
					[
						_elm_lang$html$Html$text('ABC Editor')
					])),
				A2(
				_elm_lang$html$Html$div,
				_elm_lang$core$Native_List.fromArray(
					[_newlandsvalley$elm_abc_player$AbcEditorController$leftPaneStyle]),
				_elm_lang$core$Native_List.fromArray(
					[
						A2(
						_elm_lang$html$Html$span,
						_elm_lang$core$Native_List.fromArray(
							[_newlandsvalley$elm_abc_player$AbcEditorController$leftPanelLabelStyle]),
						_elm_lang$core$Native_List.fromArray(
							[
								_elm_lang$html$Html$text('Load an ABC file:')
							])),
						A2(
						_elm_lang$html$Html$input,
						_elm_lang$core$Native_List.fromArray(
							[
								_elm_lang$html$Html_Attributes$type$('file'),
								_elm_lang$html$Html_Attributes$id('fileinput'),
								_elm_lang$html$Html_Attributes$accept('.abc'),
								A2(
								_elm_lang$html$Html_Events$on,
								'change',
								_elm_lang$core$Json_Decode$succeed(_newlandsvalley$elm_abc_player$AbcEditorController$RequestFileUpload)),
								_newlandsvalley$elm_abc_player$AbcEditorController$inputStyle
							]),
						_elm_lang$core$Native_List.fromArray(
							[])),
						A2(
						_elm_lang$html$Html$span,
						_elm_lang$core$Native_List.fromArray(
							[_newlandsvalley$elm_abc_player$AbcEditorController$leftPanelLabelStyle]),
						_elm_lang$core$Native_List.fromArray(
							[
								_elm_lang$html$Html$text('Save ABC to file:'),
								A2(
								_elm_lang$html$Html$button,
								A2(_newlandsvalley$elm_abc_player$AbcEditorController$buttonAttributes, true, _newlandsvalley$elm_abc_player$AbcEditorController$RequestFileDownload),
								_elm_lang$core$Native_List.fromArray(
									[
										_elm_lang$html$Html$text('save')
									]))
							])),
						A2(
						_elm_lang$html$Html$span,
						_elm_lang$core$Native_List.fromArray(
							[_newlandsvalley$elm_abc_player$AbcEditorController$leftPanelLabelStyle]),
						_elm_lang$core$Native_List.fromArray(
							[
								_elm_lang$html$Html$text('Transpose to:')
							])),
						_newlandsvalley$elm_abc_player$AbcEditorController$transpositionMenu(model),
						A2(
						_elm_lang$html$Html$span,
						_elm_lang$core$Native_List.fromArray(
							[_newlandsvalley$elm_abc_player$AbcEditorController$leftPanelLabelStyle]),
						_elm_lang$core$Native_List.fromArray(
							[
								_elm_lang$html$Html$text('Move octave:')
							])),
						A2(
						_elm_lang$html$Html$button,
						A2(
							_newlandsvalley$elm_abc_player$AbcEditorController$buttonAttributes,
							true,
							_newlandsvalley$elm_abc_player$AbcEditorController$MoveOctave(true)),
						_elm_lang$core$Native_List.fromArray(
							[
								_elm_lang$html$Html$text('up')
							])),
						A2(
						_elm_lang$html$Html$button,
						A2(
							_newlandsvalley$elm_abc_player$AbcEditorController$buttonAttributes,
							true,
							_newlandsvalley$elm_abc_player$AbcEditorController$MoveOctave(false)),
						_elm_lang$core$Native_List.fromArray(
							[
								_elm_lang$html$Html$text('down')
							]))
					])),
				A2(
				_elm_lang$html$Html$div,
				_elm_lang$core$Native_List.fromArray(
					[_newlandsvalley$elm_abc_player$AbcEditorController$rightPaneStyle]),
				_elm_lang$core$Native_List.fromArray(
					[
						A2(
						_elm_lang$html$Html$fieldset,
						_elm_lang$core$Native_List.fromArray(
							[_newlandsvalley$elm_abc_player$AbcEditorController$fieldsetStyle]),
						_elm_lang$core$Native_List.fromArray(
							[
								A2(
								_elm_lang$html$Html$textarea,
								_elm_lang$core$Native_List.fromArray(
									[
										_elm_lang$html$Html_Attributes$placeholder('abc'),
										_elm_lang$html$Html_Attributes$value(model.abc),
										_elm_lang$html$Html_Events$onInput(_newlandsvalley$elm_abc_player$AbcEditorController$Abc),
										_newlandsvalley$elm_abc_player$AbcEditorController$taStyle,
										_elm_lang$html$Html_Attributes$cols(70),
										_elm_lang$html$Html_Attributes$rows(16),
										_elm_lang$html$Html_Attributes$autocomplete(false),
										_elm_lang$html$Html_Attributes$spellcheck(false),
										_elm_lang$html$Html_Attributes$autofocus(true)
									]),
								_elm_lang$core$Native_List.fromArray(
									[]))
							])),
						A2(
						_elm_lang$html$Html$div,
						_elm_lang$core$Native_List.fromArray(
							[]),
						_elm_lang$core$Native_List.fromArray(
							[
								A2(
								_elm_lang$html$Html_App$map,
								_newlandsvalley$elm_abc_player$AbcEditorController$PlayerMsg,
								_newlandsvalley$elm_abc_player$Midi_Player$view(model.player))
							])),
						A2(
						_elm_lang$html$Html$div,
						_elm_lang$core$Native_List.fromArray(
							[]),
						_elm_lang$core$Native_List.fromArray(
							[
								A2(
								_elm_lang$html$Html$p,
								_elm_lang$core$Native_List.fromArray(
									[]),
								_elm_lang$core$Native_List.fromArray(
									[
										_newlandsvalley$elm_abc_player$AbcEditorController$viewError(model)
									]))
							]))
					]))
			]));
};
var _newlandsvalley$elm_abc_player$AbcEditorController$NoOp = {ctor: 'NoOp'};
var _newlandsvalley$elm_abc_player$AbcEditorController$returnTuneResult = function (r) {
	return A3(
		_elm_lang$core$Task$perform,
		function (_p15) {
			return _newlandsvalley$elm_abc_player$AbcEditorController$NoOp;
		},
		_newlandsvalley$elm_abc_player$AbcEditorController$TuneResult,
		_elm_lang$core$Task$succeed(r));
};
var _newlandsvalley$elm_abc_player$AbcEditorController$checkAbc = function (abc) {
	var terminatedAbc = _newlandsvalley$elm_abc_player$AbcEditorController$terminateLine(abc);
	var pr = _newlandsvalley$elm_abc_player$Abc$parse(terminatedAbc);
	return _newlandsvalley$elm_abc_player$AbcEditorController$returnTuneResult(pr);
};
var _newlandsvalley$elm_abc_player$AbcEditorController$establishRecording = function (r) {
	var nullTask = _elm_lang$core$Task$succeed(
		function (_p16) {
			return {ctor: '_Tuple0'};
		});
	var midiRecording = _newlandsvalley$elm_abc_player$AbcEditorController$toMidiRecording(r);
	return A3(
		_elm_lang$core$Task$perform,
		function (_p17) {
			return _newlandsvalley$elm_abc_player$AbcEditorController$NoOp;
		},
		function (_p18) {
			return _newlandsvalley$elm_abc_player$AbcEditorController$PlayerMsg(
				_newlandsvalley$elm_abc_player$Midi_Player$SetRecording(midiRecording));
		},
		nullTask);
};
var _newlandsvalley$elm_abc_player$AbcEditorController$update = F2(
	function (msg, model) {
		var _p19 = msg;
		switch (_p19.ctor) {
			case 'NoOp':
				return {ctor: '_Tuple2', _0: model, _1: _elm_lang$core$Platform_Cmd$none};
			case 'Abc':
				var _p20 = _p19._0;
				return {
					ctor: '_Tuple2',
					_0: _elm_lang$core$Native_Utils.update(
						model,
						{abc: _p20}),
					_1: _newlandsvalley$elm_abc_player$AbcEditorController$checkAbc(_p20)
				};
			case 'Transpose':
				var newmodel = A2(_newlandsvalley$elm_abc_player$AbcEditorController$transpose, _p19._0, model);
				return {
					ctor: '_Tuple2',
					_0: newmodel,
					_1: _newlandsvalley$elm_abc_player$AbcEditorController$establishRecording(newmodel.tuneResult)
				};
			case 'MoveOctave':
				var newmodel = _p19._0 ? A2(_newlandsvalley$elm_abc_player$AbcEditorController$moveOctave, _newlandsvalley$elm_abc_player$Music_Octave$up, model) : A2(_newlandsvalley$elm_abc_player$AbcEditorController$moveOctave, _newlandsvalley$elm_abc_player$Music_Octave$down, model);
				return {
					ctor: '_Tuple2',
					_0: newmodel,
					_1: _newlandsvalley$elm_abc_player$AbcEditorController$establishRecording(newmodel.tuneResult)
				};
			case 'TuneResult':
				var _p21 = _p19._0;
				return {
					ctor: '_Tuple2',
					_0: _elm_lang$core$Native_Utils.update(
						model,
						{tuneResult: _p21}),
					_1: _newlandsvalley$elm_abc_player$AbcEditorController$establishRecording(_p21)
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
				var _p25 = _p19._0;
				var _p22 = A2(_elm_lang$core$Debug$log, 'input filespec', _p25);
				var _p23 = _p25;
				if (_p23.ctor === 'Just') {
					var _p24 = _p23._0;
					return {
						ctor: '_Tuple2',
						_0: _elm_lang$core$Native_Utils.update(
							model,
							{
								abc: _p24.contents,
								fileName: _elm_lang$core$Maybe$Just(_p24.name)
							}),
						_1: _newlandsvalley$elm_abc_player$AbcEditorController$checkAbc(_p24.contents)
					};
				} else {
					return {ctor: '_Tuple2', _0: model, _1: _elm_lang$core$Platform_Cmd$none};
				}
			default:
				var _p26 = A2(_newlandsvalley$elm_abc_player$Midi_Player$update, _p19._0, model.player);
				var newPlayer = _p26._0;
				var cmd = _p26._1;
				return A2(
					_elm_lang$core$Platform_Cmd_ops['!'],
					_elm_lang$core$Native_Utils.update(
						model,
						{player: newPlayer}),
					_elm_lang$core$Native_List.fromArray(
						[
							A2(_elm_lang$core$Platform_Cmd$map, _newlandsvalley$elm_abc_player$AbcEditorController$PlayerMsg, cmd)
						]));
		}
	});
var _newlandsvalley$elm_abc_player$AbcEditorController$main = {
	main: _elm_lang$html$Html_App$program(
		{init: _newlandsvalley$elm_abc_player$AbcEditorController$init, update: _newlandsvalley$elm_abc_player$AbcEditorController$update, view: _newlandsvalley$elm_abc_player$AbcEditorController$view, subscriptions: _newlandsvalley$elm_abc_player$AbcEditorController$subscriptions})
};

var Elm = {};
Elm['AbcEditorController'] = Elm['AbcEditorController'] || {};
_elm_lang$core$Native_Platform.addPublicModule(Elm['AbcEditorController'], 'AbcEditorController', typeof _newlandsvalley$elm_abc_player$AbcEditorController$main === 'undefined' ? null : _newlandsvalley$elm_abc_player$AbcEditorController$main);

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

