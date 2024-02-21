package hoangson.testing.service.player;

import hoangson.testing.entity.Player;
import hoangson.testing.form.player.CreatePlayerForm;

import java.util.List;

public interface IPlayerService {

    Player createPlayer(CreatePlayerForm form);

    void changeAvatar(int playerId, String avatar);

    List<Player> getAllPlayers();
}
