import { expect, should } from 'chai'
import Alerter from './alerter';
import Alert from './alert';

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

  describe("Alerter", () => {
    let alerter;

    beforeEach(() => {
      alerter = new Alerter();
    });

    it("has a createAlert() method", () => {
      expect(alerter.createAlert).to.exist;
    });

    it("can create new alerts", () => {
      expect(alerter.createAlert() instanceof HTMLElement).to.be.true;
    });

  });

});
