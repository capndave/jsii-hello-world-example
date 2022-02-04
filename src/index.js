"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Greeter = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
/**
 * @stability stable
 */
class Greeter {
    /**
     * @stability stable
     */
    constructor(props) {
        this.greetee = props.greetee;
    }
    /**
     * @stability stable
     */
    greet() {
        return `Hello, ${this.greetee}!`;
    }
}
exports.Greeter = Greeter;
_a = JSII_RTTI_SYMBOL_1;
Greeter[_a] = { fqn: "jsii-example.Greeter", version: "1.0.0" };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUlBLE1BQWEsT0FBTzs7OztJQUdsQixZQUFtQixLQUFtQjtRQUNwQyxJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUM7SUFDL0IsQ0FBQzs7OztJQUVNLEtBQUs7UUFDVixPQUFPLFVBQVUsSUFBSSxDQUFDLE9BQU8sR0FBRyxDQUFBO0lBQ2xDLENBQUM7O0FBVEgsMEJBVUMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgaW50ZXJmYWNlIEdyZWV0ZXJQcm9wcyB7XG4gIHJlYWRvbmx5IGdyZWV0ZWU6IHN0cmluZztcbn1cblxuZXhwb3J0IGNsYXNzIEdyZWV0ZXIge1xuICBwcml2YXRlIHJlYWRvbmx5IGdyZWV0ZWU6IHN0cmluZztcblxuICBwdWJsaWMgY29uc3RydWN0b3IocHJvcHM6IEdyZWV0ZXJQcm9wcykge1xuICAgIHRoaXMuZ3JlZXRlZSA9IHByb3BzLmdyZWV0ZWU7XG4gIH1cblxuICBwdWJsaWMgZ3JlZXQoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gYEhlbGxvLCAke3RoaXMuZ3JlZXRlZX0hYFxuICB9XG59Il19