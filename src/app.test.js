import { expect, should } from 'chai'
import Alert from './alert';
import Toast from './toast';

describe("Alerter", () => {

  describe("Alert Class", () => {
    let myAlert;
    beforeEach(() => {
      myAlert = new Alert();
    });

    afterEach(() => {
      myAlert = null;
    });

    it("Can create new Alert instances", () => {
      expect(myAlert).to.exist;
    });

    it("Alert should have a type and message property", () => {
      myAlert = new Alert('info', 'TDD is great');
      expect(myAlert.type).to.exist;
      expect(myAlert.message).to.exist;
    });

    it("Can get alert type", () => {
      expect(myAlert.getType).to.exist;
      expect(typeof myAlert.getType).to.equal('function');
    });

    it("Can set alert type", () => {
      expect(myAlert.setType).to.exist;
      expect(typeof myAlert.setType).to.equal('function');

      myAlert.setType('info');
      expect(myAlert.getType()).to.equal('info');
    });

    it("Can get alert message", () => {
      expect(myAlert.getMessage).to.exist;
      expect(typeof myAlert.getMessage).to.equal('function');
    });

    it("Can set alert message", () => {
      expect(myAlert.setMessage).to.exist;
      expect(typeof myAlert.setMessage).to.equal('function');

      myAlert = new Alert('info', 'message');
      myAlert.setMessage('new message');
      expect(myAlert.getMessage()).to.equal('new message');
    });
  });

  describe("Toaster", () => {
    let toast;

    beforeEach(() => {
      toast = new Toast();
    });

    afterEach(() => {
      toast = null;
    })

    it("can create new toast", () => {
      const options = {
        type: 'info',
        message: 'Info message',
        duration: 3000
      };
      expect(toast.createToast).to.exist;
      expect(toast.createToast(options) instanceof HTMLElement).to.be.true;
    });

    it("can configure toast through an options object", () => {
      const options = {
        type: 'info',
        message: 'Info message',
        duration: 3000
      };
      let expected = toast.configureToast(options);
      expect(expected.type).to.equal('info')
      expect(expected.message).to.equal('Info message')
      expect(expected.duration).to.equal(3000)
    });

    it("can show toast with showToast() method", () => {
      expect(toast.showToast).to.exist;
      expect(typeof toast.showToast).to.equal('function');
    })

    it("can remove toast with removeToast() method", () => {
      expect(toast.removeToast).to.exist;
      expect(typeof toast.removeToast).to.equal('function');
    });
  });

});
