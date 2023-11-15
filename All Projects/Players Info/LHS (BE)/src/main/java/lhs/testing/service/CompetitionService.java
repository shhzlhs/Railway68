package lhs.testing.service;

import lhs.testing.entity.Competition;
import lhs.testing.entity.Player;
import lhs.testing.entity.Team;
import lhs.testing.form.competition.CreateCompetitionForm;
import lhs.testing.form.competition.UpdateCompetitionForm;
import lhs.testing.form.player.CreatePlayerForm;
import lhs.testing.form.team.CreateTeamForm;
import lhs.testing.repository.ICompetitionRepository;
import lhs.testing.repository.ITeamRepository;
import org.modelmapper.ModelMapper;
import org.modelmapper.PropertyMap;
import org.modelmapper.TypeMap;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CompetitionService implements ICompetitionService {
    @Autowired
    ICompetitionRepository competitionRepository;
    @Autowired
    ModelMapper modelMapper;
    @Autowired
    ITeamRepository teamRepository;

    @Override
    public List<Competition> getAllCompetitions() {
        return competitionRepository.findAll();
    }

    @Override
    public void createCompetition(CreateCompetitionForm form) {
        TypeMap<CreateCompetitionForm, Competition> typeMap = modelMapper.getTypeMap(CreateCompetitionForm.class, Competition.class);
        if (typeMap == null) {
            modelMapper.addMappings(new PropertyMap<CreatePlayerForm, Player>() {
                @Override
                protected void configure() {
                    skip(destination.getId());
                }
            });
        }
        Competition competition = modelMapper.map(form, Competition.class);
        competitionRepository.save(competition);
        competition.setLogo(competition.getName() + ".png");
        competitionRepository.save(competition);
        List<Team> teams = competition.getTeams();
        teams.forEach(team -> {
            team.setCompetition(competition);
        });
        teamRepository.saveAll(teams);
    }

    @Override
    public void updateCompetition(UpdateCompetitionForm form) {
        Competition competition = modelMapper.map(form, Competition.class);
        competition.setLogo(competition.getName() + ".png");
        competitionRepository.save(competition);
    }

    @Override
    public void deleteCompetitions(List<Integer> ids) {
        competitionRepository.deleteAllById(ids);

    }

}
