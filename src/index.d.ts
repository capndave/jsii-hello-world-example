/**
 * @stability stable
 */
export interface GreeterProps {
    /**
     * @stability stable
     */
    readonly greetee: string;
}
/**
 * @stability stable
 */
export declare class Greeter {
    private readonly greetee;
    /**
     * @stability stable
     */
    constructor(props: GreeterProps);
    /**
     * @stability stable
     */
    greet(): string;
}
