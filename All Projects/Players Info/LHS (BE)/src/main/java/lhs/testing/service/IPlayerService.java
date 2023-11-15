package lhs.testing.service;

import lhs.testing.entity.Player;
import lhs.testing.form.player.CreatePlayerForm;
import lhs.testing.form.player.PlayerFilterForm;
import lhs.testing.form.player.UpdatePlayerForm;

import java.util.List;

public interface IPlayerService {
    List<Player> getAllPlayers(PlayerFilterForm form);

    List<Player> getByTeams(List<Integer> ids);
    List<Player> getByIds(List<Integer> ids);

    void createPlayer(CreatePlayerForm form);

    void updatePlayer(UpdatePlayerForm form);

    void deletePlayer(int id);

    void deletePlayers(List<Integer> ids);
}
