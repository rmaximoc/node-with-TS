export default interface IHasProvider {
  generateHash(payload: string): Promise<string>;
  compareHash(payload: string, hashed: string): Promise<boolean>;
}
