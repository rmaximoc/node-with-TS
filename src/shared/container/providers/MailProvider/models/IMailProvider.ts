import ISendMailDTO from '../dtos/ISendeMailDTO';

export default interface IMailProvider {
  sendMail(data: ISendMailDTO): Promise<void>;
}
