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
 *          CheckOTP:
 *              type: object
 *              required:
 *                  -   mobile
 *                  -   code
 *              properties:
 *                  mobile:
 *                      type: string
 *                  code:
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
 *              description: successfully
 *
 */

/**
 * @swagger
 *
 * /auth/check-otp:
 *  post:
 *      summary: Check OTP for login user
 *      tags:
 *          -   Auth
 *      requestBody:
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: "/#/components/schemas/CheckOTP"
 *              application/x-www-form-urlencoded:
 *                  schema:
 *                      $ref: "/#/components/schemas/CheckOTP"
 *      responses:
 *          200:
 *              description: successfully
 *
 */

/**
 * @swagger
 *
 * /auth/logout:
 *  get:
 *      summary: Logout user from this end-point
 *      tags:
 *          -   Auth
 *      responses:
 *          200:
 *              description: successfully
 *
 */
