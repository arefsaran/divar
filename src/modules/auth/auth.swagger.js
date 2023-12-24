/**
 * @swagger
 *
 * tags:
 *  name: Auth
 *  description: Auth Modules and Routes
 */

/**
 * @swagger
 *  components:
 *      schemas:
 *          SendOTP:
 *              type: object
 *              required:
 *                  -   mobile
 *              properties:
 *                  mobile:
 *                      type: string
 */

/**
 * @swagger
 *
 * /auth/send-otp:
 *  post:
 *      summary: Login with OTP in this end-point
 *      tags:
 *          -   Auth
 *      requestBody:
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: "/#/components/schemas/SendOTP"
 *              application/x-www-form-urlencoded:
 *                  schema:
 *                      $ref: "/#/components/schemas/SendOTP"
 *      responses:
 *          200:
 *              description: success
 *
 */
