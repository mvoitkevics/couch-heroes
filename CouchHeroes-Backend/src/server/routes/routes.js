import express from 'express';
import path from 'path';
var Routes = /** @class */ (function () {
    function Routes(roomManager) {
        this.roomManager = roomManager;
        this.time = new Date();
        this.router = express.Router();
        // Client Side Render
        this.router.get('/', function (_req, res) {
            res.sendFile(path.join(__dirname, '../../src/client/index.html'));
        });
        // Server Side
        this.router.get('/:roomID', function (_req, res) {
            // res.sendFile(path.join(__dirname, '../../dist/client/views/room.html'))
            res.render(path.join(__dirname, '../../src/server/routes/views/room'));
        });
    }
    return Routes;
}());
export default Routes;
//# sourceMappingURL=routes.js.map