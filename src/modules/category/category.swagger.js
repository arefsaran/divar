/**
 * @swagger
 *
 * tags:
 *  name: Category
 *  description: Category Modules and Routes
 */

/**
 * @swagger
 *  components:
 *      schemas:
 *          CreateCategory:
 *              type: object
 *              required:
 *                  -   name
 *                  -   icon
 *              properties:
 *                  name:
 *                      type: string
 *                  slug:
 *                      type: string
 *                  parent:
 *                      type: string
 *                  icon:
 *                      type: string
 */

/**
 * @swagger
 *
 * /category:
 *  post:
 *      summary: creates a new category
 *      tags:
 *          -   Category
 *      requestBody:
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: "/#/components/schemas/CreateCategory"
 *              application/x-www-form-urlencoded:
 *                  schema:
 *                      $ref: "/#/components/schemas/CreateCategory"
 *      responses:
 *          200:
 *              description: successfully
 *
 */

/**
 * @swagger
 *
 * /category:
 *  get:
 *      summary: gets all categories
 *      tags:
 *          -   Category
 *      responses:
 *          200:
 *              description: successfully
 *
 */
